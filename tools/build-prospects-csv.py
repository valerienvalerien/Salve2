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

# Qui viser en 2e contact, après le dirigeant. Le DSI n'est le bon interlocuteur
# que chez les clients finaux : chez une ESN, le DSI gère l'informatique interne,
# pas le service desk vendu aux clients — c'est le dir. des opérations qui décide.
ROLE_CONTACT2 = {
    'ESN / MSP / infogérance': "Directeur des opérations / Resp. service desk",
    'Éditeur SaaS / agence logicielle': "Head of Support / Directeur relation client",
    "Télésecrétariat / centre d'appels": "Directeur d'exploitation / Resp. plateau",
    'Bailleur social / immobilier': "DSI / CIO + Directeur relation locataires",
    'Association / ONG': "DSI / CIO + Resp. relation donateurs",
    'Organisme public / paritaire': "DSI / CIO",
    'Cabinet / centre médical': "Médecin associé / Resp. du secrétariat",
}
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

# ---------- source 5 : enrichissement téléphones (recherche web 2026-07-27) ----------
ENRICH_TEL = {}
try:
    with open(BASE + 'exports/enrichissement-telephones.csv', encoding='utf-8-sig') as f:
        for r in csv.DictReader(f, delimiter=';'):
            ENRICH_TEL[r['ID'].strip()] = r
except FileNotFoundError:
    pass
for rid, e in ENRICH_TEL.items():
    tgt = rows.get(rid)
    if not tgt:
        continue
    tgt['Sources'].add('enrichissement-web')
    tgt['Standard'] = e['Standard'].strip()
    tgt['Ligne directe'] = e['Ligne directe'].strip()
    tgt['Mobile pro'] = e['Mobile pro'].strip()
    tgt['Source tél.'] = e['Source'].strip()
    tgt['Date vérif.'] = e['Date verif'].strip()
    if e['Email societe'].strip() and not tgt['Email société']:
        tgt['Email société'] = e['Email societe'].strip()
    if e['Contact nom'].strip() and not tgt['Décideur']:
        tgt['Décideur'] = e['Contact nom'].strip()
        tgt['Titre décideur'] = tgt['Titre décideur'] or e['Contact titre'].strip()

# ---------- doublons de nom ----------
dupes = collections.defaultdict(list)
for v in rows.values():
    dupes[key(v['Entreprise'])].append(v['ID'])
dupes = {k: ids for k, ids in dupes.items() if len(ids) > 1}

# ---------- écriture ----------
COLS = ['Marché', 'ID', 'Entreprise', 'Niche', 'Type de client', "Type d'organisation",
        'Niche (libellé CRM)', 'Statut', 'Score',
        # téléphonie — du plus utile au moins utile
        'Meilleur tél.', 'Standard', 'Ligne directe', 'Mobile pro',
        'Source tél.', 'Date vérif.', 'À enrichir',
        # contact 1 — le dirigeant / décideur déjà identifié
        'C1 — Nom', 'C1 — Titre', 'C1 — Email', 'C1 — Ligne directe', 'C1 — Mobile',
        'C1 — LinkedIn',
        # contact 2 — DSI/CIO ou responsable opérationnel selon le type d'organisation
        'C2 — Rôle à viser', 'C2 — Nom', 'C2 — Titre', 'C2 — Email',
        'C2 — Ligne directe', 'C2 — Mobile', 'C2 — LinkedIn',
        'Email société', 'Localisation', 'Secteur', 'Effectif', 'Site web', 'Canal',
        "Signaux d'achat", 'Notes', 'Action']

out = []
for v in rows.values():
    niche = niche_of(v['NicheRaw'])
    standard = (v.get('Standard') or v['Téléphone société']).strip()
    directe = (v.get('Ligne directe') or '').strip()
    mobile = (v.get('Mobile pro') or '').strip()
    c1_directe = v['Téléphone décideur'].strip()
    # meilleur canal : mobile > ligne directe > standard
    if mobile:
        meilleur = 'Mobile pro'
    elif directe or c1_directe:
        meilleur = 'Ligne directe'
    elif standard:
        meilleur = 'Standard'
    else:
        meilleur = 'Aucun'
    tel = standard or directe or mobile or c1_directe
    org, modele = classer(v, v['NicheRaw'])
    statut = v['Statut']
    if v['Notes'].lstrip().startswith('⚠️ DÉQUALIFIÉ'):
        statut = 'déqualifié'
    out.append({
        'Marché': v['Marché'], 'ID': v['ID'], 'Entreprise': v['Entreprise'],
        'Niche': niche, 'Type de client': modele, "Type d'organisation": org,
        'Niche (libellé CRM)': lib_crm(v['NicheRaw']),
        'Statut': statut, 'Score': v['Score'],
        'Meilleur tél.': meilleur, 'Standard': standard,
        'Ligne directe': directe, 'Mobile pro': mobile,
        'Source tél.': v.get('Source tél.', ''), 'Date vérif.': v.get('Date vérif.', ''),
        'À enrichir': {'Aucun': 'Oui — priorité 1 (aucun numéro)',
                       'Standard': 'Oui — priorité 2 (standard seul)'}.get(meilleur, 'Non'),
        'C1 — Nom': v['Décideur'], 'C1 — Titre': v['Titre décideur'],
        'C1 — Email': v['Email décideur'], 'C1 — Ligne directe': c1_directe,
        'C1 — Mobile': '', 'C1 — LinkedIn': v['LinkedIn décideur'],
        'C2 — Rôle à viser': ROLE_CONTACT2.get(org, 'DSI / CIO'),
        'C2 — Nom': '', 'C2 — Titre': '', 'C2 — Email': '',
        'C2 — Ligne directe': '', 'C2 — Mobile': '', 'C2 — LinkedIn': '',
        'Email société': v['Email société'],
        'Localisation': v['Localisation'], 'Secteur': v['Secteur'], 'Effectif': v['Effectif'],
        'Site web': v['Site web'], 'Canal': v['Canal'],
        "Signaux d'achat": v['Signaux'], 'Notes': v['Notes'], 'Action': v['Action'],
    })

def score_num(s):
    try: return float(str(s).replace(',', '.'))
    except (ValueError, TypeError): return -1

out.sort(key=lambda r: (r['Type de client'] != 'Marque blanche',
                        ORDRE_NICHE.get(r['Niche'], 9), r['Marché'] != 'France',
                        {'Mobile pro': 0, 'Ligne directe': 1, 'Standard': 2, 'Aucun': 3}[r['Meilleur tél.']],
                        -score_num(r['Score']), r['Entreprise'].lower()))

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
print('joignables      :', sum(1 for r in out if r['Meilleur tél.'] != 'Aucun'), '/', len(out))
print('  dont mobile   :', sum(1 for r in out if r['Meilleur tél.'] == 'Mobile pro'))
print('  ligne directe :', sum(1 for r in out if r['Meilleur tél.'] == 'Ligne directe'))
print('  standard seul :', sum(1 for r in out if r['Meilleur tél.'] == 'Standard'))
print('  aucun numéro  :', sum(1 for r in out if r['Meilleur tél.'] == 'Aucun'))
print('avec email      :', sum(1 for r in out if r['Email société'] or r['C1 — Email']))
print('avec décideur   :', sum(1 for r in out if r['C1 — Nom']))
print('doublons de nom :', dupes if dupes else 'aucun')
print('à enrichir P1   :', sum(1 for r in out if r['À enrichir'].startswith('Oui — priorité 1')))
print('à enrichir P2   :', sum(1 for r in out if r['À enrichir'].startswith('Oui — priorité 2')))
print('joignables MB   :', sum(1 for r in out if r['Type de client'] == 'Marque blanche'
                                and r['Meilleur tél.'] != 'Aucun'), '/',
      sum(1 for r in out if r['Type de client'] == 'Marque blanche'))
