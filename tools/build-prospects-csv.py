#!/usr/bin/env python3
"""Consolide tous les prospects Salverys (France + Canada) en un seul CSV."""
import csv, re, unicodedata, collections

BASE = '/home/user/Salve2/'
OUT = BASE + 'exports/PROSPECTS-TOUS-2026-07-27.csv'

# ---------- normalisation des niches ----------
NICHE_MAP = {
    'helpdesk it': 'Helpdesk IT N1',
    'helpdesk it n1': 'Helpdesk IT N1',
    'helpdesk it — esn/msp': 'Helpdesk IT N1',
    'helpdesk-n1': 'Helpdesk IT N1',
    'helpdesk-it-esn': 'Helpdesk IT N1',
    'support applicatif': 'Support applicatif N1',
    'support applicatif n1': 'Support applicatif N1',
    'support n1 saas': 'Support applicatif N1',
    'support-n1': 'Support applicatif N1',
    'télésecrétariat médical': 'Télésecrétariat médical',
    'telemed': 'Télésecrétariat médical',
    'télésecrétariat — marque blanche': 'Télésecrétariat médical',
    'telesec-mb': 'Télésecrétariat médical',
}
# Libellés CRM d'origine, conservés tels quels pour la traçabilité
LIB_CRM = {
    'telemed': 'Télésecrétariat médical', 'telesec-mb': 'Télésecrétariat — marque blanche',
    'helpdesk-n1': 'Helpdesk IT N1', 'helpdesk-it-esn': 'Helpdesk IT — ESN/MSP',
    'support-n1': 'Support N1 SaaS',
}
# Marque blanche explicite : marqueur « MB | » en tête de notes, ou niche donneur d'ordre
NICHE_MB = {'helpdesk-it-esn', 'helpdesk it — esn/msp', 'telesec-mb', 'télésecrétariat — marque blanche'}

# ─── Type d'organisation → détermine marque blanche vs client direct ───
# Donneur d'ordre = a ses PROPRES clients, on travaille sous sa marque.
# Client direct  = n'a que ses usagers (locataires, patients, allocataires, donateurs).
# Règle d'or : on classe sur ce que l'organisation EST (champ Secteur, libellé de
# niche, marqueur MB), jamais sur ce que les notes disent de son BESOIN — « télésec
# probable » décrit un besoin, pas un métier.

# Libellés de niche propres à un type d'organisation (Canada = MSP et éditeurs)
NICHE_ORG = {
    'telesec-mb': ("Télésecrétariat / centre d'appels", 'Marque blanche'),
    'télésecrétariat — marque blanche': ("Télésecrétariat / centre d'appels", 'Marque blanche'),
    'telemed': ('Cabinet / centre médical', 'Client direct'),
    'télésecrétariat médical': ('Cabinet / centre médical', 'Client direct'),
    'helpdesk-it-esn': ('ESN / MSP / infogérance', 'Marque blanche'),
    'helpdesk it — esn/msp': ('ESN / MSP / infogérance', 'Marque blanche'),
    'helpdesk it': ('ESN / MSP / infogérance', 'Marque blanche'),
    'support n1 saas': ('Éditeur SaaS / agence logicielle', 'Marque blanche'),
    'support applicatif': ('Éditeur SaaS / agence logicielle', 'Marque blanche'),
}
# Métiers reconnus dans le champ Secteur (ce que la boîte fait)
SECTEUR_RULES = [
    ('ESN / MSP / infogérance', 'Marque blanche', (
        'msp', 'infogérance', 'intégrateur', 'esn', 'services ti', 'services gérés',
        'service desk', 'mssp', 'externalisation de support', 'conseil ti',
        'prestataire it', 'infogerance')),
    ("Télésecrétariat / centre d'appels", 'Marque blanche', (
        'télésecrétariat', 'telesecretariat', "centre d'appels", 'permanence téléphonique')),
    ('Éditeur SaaS / agence logicielle', 'Marque blanche', (
        'éditeur', 'saas', 'logiciel', 'agence', 'développement')),
]
# Marqueurs explicites de sous-traitance posés dans les fiches
MB_MARKERS = ('mb |', 'mb partenariat', 'mb francophone', 'marque blanche',
              "donneur d'ordre", "donneur d'ordres", 'sous leur marque', 'sous-traitance')
# Entités clientes finales, reconnues dans les notes quand le Secteur est vide
ENTITE_RULES = [
    ('Bailleur social / immobilier', (
        'bailleur', 'locataire', 'esh ', 'oph ', 'habitat', 'logement', 'résidences',
        'foyers travailleurs', 'parc locatif')),
    ('Association / ONG', (
        'association', 'fondation', 'ong', 'humanitaire', 'donateur', 'bénévole',
        'solidarité', 'secours', 'caritas', 'emmaüs', 'croix-rouge', 'exclusion',
        'hébergement urgence', 'fédération', 'compagnons', 'bénéficiaires')),
    ('Organisme public / paritaire', (
        'urssaf', 'caf ', 'allocations familiales', 'france travail', 'pôle emploi',
        'service public', 'caisse nationale', 'caisse des dépôts', 'sncf',
        'action logement', 'collectivité', 'agences')),
]

def classer(v, niche_raw):
    """Renvoie (type d'organisation, type de client)."""
    raw = (niche_raw or '').strip().lower()
    if raw in NICHE_ORG:                                   # 1. le libellé de niche tranche
        return NICHE_ORG[raw]
    secteur = (v.get('Secteur') or '').lower()
    if secteur.strip():                                    # 2. le métier déclaré
        for org, modele, mots in SECTEUR_RULES:
            if any(m in secteur for m in mots):
                return org, modele
    notes = (v.get('Notes') or '')
    contexte = (notes + ' ' + (v.get('Signaux') or '')).lower()
    if any(m in contexte for m in MB_MARKERS):             # 3. marqueur MB explicite
        for org, modele, mots in SECTEUR_RULES:
            if any(m in contexte for m in mots):
                return org, modele
        # sous-traitant sans métier explicite : la niche dit lequel des deux
        niche = niche_of(niche_raw)
        if niche == 'Support applicatif N1':
            return 'Éditeur SaaS / agence logicielle', 'Marque blanche'
        if niche == 'Helpdesk IT N1':
            return 'ESN / MSP / infogérance', 'Marque blanche'
        return "Donneur d'ordre (à typer)", 'Marque blanche'
    contexte += ' ' + (v.get('Entreprise') or '').lower()
    for org, mots in ENTITE_RULES:                         # 4. entité cliente finale
        if any(m in contexte for m in mots):
            return org, 'Client direct'
    return 'Non typé', 'Client direct'

ORDRE_NICHE = {'Support applicatif N1': 1, 'Helpdesk IT N1': 2, 'Télésecrétariat médical': 3}

def key(name):
    s = unicodedata.normalize('NFD', (name or '').lower())
    s = ''.join(c for c in s if unicodedata.category(c) != 'Mn')
    return re.sub(r'[^a-z0-9]', '', s)

def niche_of(raw):
    return NICHE_MAP.get((raw or '').strip().lower(), (raw or '').strip() or 'Non précisé')

def lib_crm(raw):
    r = (raw or '').strip()
    return LIB_CRM.get(r.lower(), r)

def ville_from_notes(notes):
    """La localisation est en tête des notes, ex. « Lyon (Rhône (69)) | … » ou « MB | Lyon 9e | … »."""
    if not notes:
        return ''
    parts = [p.strip() for p in notes.split('|')]
    for p in parts[:2]:
        if p in ('MB', '') or p.startswith('Angle') or p.startswith('Source'):
            continue
        if len(p) < 80:
            return p
    return ''

rows = {}   # id -> dict

# ---------- source 1 : export CRM tous marchés (258) ----------
with open(BASE + 'exports/CRM-clients-tous-marches.csv', encoding='utf-8-sig') as f:
    for r in csv.DictReader(f, delimiter=';'):
        rid = r['ID'].strip()
        notes = r['Notes / Justification'].strip()
        rows[rid] = {
            'Marché': r['Marché'].strip(),
            'ID': rid,
            'Entreprise': r['Entreprise'].strip(),
            'NicheRaw': r['Niche'].strip(),
            'Statut': r['Statut'].strip(),
            'Score': r['Score/Pertinence'].strip(),
            'Localisation': r['Localisation'].strip() or ville_from_notes(notes),
            'Secteur': r['Secteur'].strip(),
            'Effectif': r['Effectif'].strip(),
            'Site web': r['Site web'].strip(),
            'Canal': r['Canal'].strip(),
            'Email société': r['Email société'].strip(),
            'Téléphone société': r['Téléphone société'].strip(),
            'Décideur': r['Décideur - Nom'].strip(),
            'Titre décideur': r['Décideur - Titre'].strip(),
            'Email décideur': r['Décideur - Email'].strip(),
            'Téléphone décideur': r['Décideur - Téléphone'].strip(),
            'LinkedIn décideur': r['Décideur - LinkedIn'].strip(),
            'Signaux': r["Signaux d'achat"].strip(),
            'Notes': notes,
            'Action': r['Action'].strip(),
            'Sources': {'CRM-tous-marches'},
        }

# ---------- source 2 : nouveaux prospects MB IT (60, dont 35 inédits) ----------
with open(BASE + 'exports/NOTION-nouveaux-clients-MB-IT.csv', encoding='utf-8-sig') as f:
    for r in csv.DictReader(f):
        rid = r['ID CRM'].strip()
        notes = r['Notes'].strip()
        new = {
            'Marché': r['Marché'].strip(),
            'ID': rid,
            'Entreprise': r['Name'].strip(),
            'NicheRaw': r['Niche'].strip(),
            'Statut': r['Statut'].strip().lower(),
            'Score': r['Score'].strip(),
            'Localisation': r['Ville / Localisation'].strip() or ville_from_notes(notes),
            'Secteur': '', 'Effectif': '',
            'Site web': r['Site web'].strip(),
            'Canal': '',
            'Email société': r['Email société'].strip(),
            'Téléphone société': r['Téléphone'].strip(),
            'Décideur': r['Décideur'].strip(),
            'Titre décideur': r['Titre décideur'].strip(),
            'Email décideur': r['Email décideur'].strip(),
            'Téléphone décideur': '',
            'LinkedIn décideur': r['LinkedIn décideur'].strip(),
            'Signaux': r['Signaux / Signal'].strip(),
            'Notes': notes,
            'Action': '',
            'Sources': {'NOTION-nouveaux-MB-IT'},
        }
        if rid in rows:                      # complète sans écraser
            cur = rows[rid]
            for k, v in new.items():
                if k == 'Sources':
                    cur['Sources'] |= v
                elif v and not cur.get(k):
                    cur[k] = v
        else:
            rows[rid] = new

# ---------- source 3 : enrichissements (téléphones / contacts) ----------
by_name = {key(v['Entreprise']): v for v in rows.values()}
with open(BASE + 'exports/NOTION-prospects-enrichis-complet.csv', encoding='utf-8-sig') as f:
    for r in csv.DictReader(f, delimiter=';'):
        tgt = by_name.get(key(r['Société']))
        if not tgt:
            continue
        tgt['Sources'].add('NOTION-enrichis')
        if r['Téléphone'].strip() and not tgt['Téléphone société']:
            tgt['Téléphone société'] = r['Téléphone'].strip()
        if r['Email'].strip() and not tgt['Email société']:
            tgt['Email société'] = r['Email'].strip()
        if r['LinkedIn contact'].strip() and not tgt['LinkedIn décideur']:
            tgt['LinkedIn décideur'] = r['LinkedIn contact'].strip()
        contact = r['Contact'].strip()
        if contact and not tgt['Décideur']:
            if '—' in contact:
                nom, titre = [x.strip() for x in contact.split('—', 1)]
                tgt['Décideur'], tgt['Titre décideur'] = nom, tgt['Titre décideur'] or titre
            else:
                tgt['Décideur'] = contact

# ---------- source 4 : piste écartée mais rappelable (ESN-TARGETS §vague 4) ----------
rows['x001'] = {
    'Marché': 'France', 'ID': 'x001', 'Entreprise': 'A3COM',
    'NicheRaw': 'télésecrétariat — marque blanche',
    'Statut': 'écarté — à réétudier', 'Score': '',
    'Localisation': 'Paris', 'Secteur': "Centre d'appels / télésecrétariat 24/7", 'Effectif': '',
    'Site web': 'https://www.a3com.fr', 'Canal': 'Téléphone',
    'Email société': '', 'Téléphone société': '01 45 14 75 00',
    'Décideur': '', 'Titre décideur': '', 'Email décideur': '', 'Téléphone décideur': '',
    'LinkedIn décideur': '',
    'Signaux': "Télésecrétariat médical/paramédical/juridique + hotline, 35+ ans",
    'Notes': "Écarté de la vague 4 ESN (pas une ESN) mais profil donneur d'ordre télésec "
             "comparable à IPContact/Callmed → piste marque blanche à réétudier. "
             "Source : ESN-TARGETS.md « Écartés vague 4 ».",
    'Action': "Rappeler au standard — angle télésecrétariat marque blanche",
    'Sources': {'ESN-TARGETS.md'},
}

# ---------- doublons de nom ----------
dupes = collections.defaultdict(list)
for v in rows.values():
    dupes[key(v['Entreprise'])].append(v['ID'])
dupes = {k: ids for k, ids in dupes.items() if len(ids) > 1}

# ---------- écriture ----------
COLS = ['Marché', 'ID', 'Entreprise', 'Niche', 'Type de client', "Type d'organisation",
        'Niche (libellé CRM)', 'Statut', 'Score',
        'Tél. dispo', 'Téléphone société', 'Téléphone décideur',
        'Décideur', 'Titre décideur', 'Email société', 'Email décideur', 'LinkedIn décideur',
        'Localisation', 'Secteur', 'Effectif', 'Site web', 'Canal',
        "Signaux d'achat", 'Notes', 'Action']

out = []
for v in rows.values():
    niche = niche_of(v['NicheRaw'])
    tel = (v['Téléphone société'] or v['Téléphone décideur']).strip()
    org, modele = classer(v, v['NicheRaw'])
    statut = v['Statut']
    if v['Notes'].lstrip().startswith('⚠️ DÉQUALIFIÉ'):
        statut = 'déqualifié'
    out.append({
        'Marché': v['Marché'], 'ID': v['ID'], 'Entreprise': v['Entreprise'],
        'Niche': niche, 'Type de client': modele, "Type d'organisation": org,
        'Niche (libellé CRM)': lib_crm(v['NicheRaw']),
        'Statut': statut, 'Score': v['Score'],
        'Tél. dispo': 'Oui' if tel else 'Non',
        'Téléphone société': v['Téléphone société'], 'Téléphone décideur': v['Téléphone décideur'],
        'Décideur': v['Décideur'], 'Titre décideur': v['Titre décideur'],
        'Email société': v['Email société'], 'Email décideur': v['Email décideur'],
        'LinkedIn décideur': v['LinkedIn décideur'],
        'Localisation': v['Localisation'], 'Secteur': v['Secteur'], 'Effectif': v['Effectif'],
        'Site web': v['Site web'], 'Canal': v['Canal'],
        "Signaux d'achat": v['Signaux'], 'Notes': v['Notes'], 'Action': v['Action'],
    })

def score_num(s):
    try: return float(str(s).replace(',', '.'))
    except (ValueError, TypeError): return -1

out.sort(key=lambda r: (r['Type de client'] != 'Marque blanche',
                        ORDRE_NICHE.get(r['Niche'], 9), r['Marché'] != 'France',
                        r['Tél. dispo'] != 'Oui', -score_num(r['Score']), r['Entreprise'].lower()))

with open(OUT, 'w', encoding='utf-8-sig', newline='') as f:
    w = csv.DictWriter(f, fieldnames=COLS, delimiter=';', quoting=csv.QUOTE_ALL)
    w.writeheader()
    w.writerows(out)

# ---------- rapport ----------
print('→', OUT)
print('total prospects :', len(out))
print('par marché      :', dict(collections.Counter(r['Marché'] for r in out)))
print('par niche       :', dict(collections.Counter(r['Niche'] for r in out)))
print('type de client  :', dict(collections.Counter(r['Type de client'] for r in out)))
print("type d'organisation :")
for k, n in collections.Counter(r["Type d'organisation"] for r in out).most_common():
    print(f'    {k:36} {n:4}')
print('avec téléphone  :', sum(1 for r in out if r['Tél. dispo'] == 'Oui'))
print('avec email      :', sum(1 for r in out if r['Email société'] or r['Email décideur']))
print('avec décideur   :', sum(1 for r in out if r['Décideur']))
print('doublons de nom :', dupes if dupes else 'aucun')
print('tel par niche   :', {n: sum(1 for r in out if r['Niche'] == n and r['Tél. dispo'] == 'Oui')
                            for n in ORDRE_NICHE})
