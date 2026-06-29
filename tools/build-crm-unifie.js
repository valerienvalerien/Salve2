const fs = require('fs');
const path = require('path');

const ROOT = '/home/user/Salve2';
const fr = fs.readFileSync(path.join(ROOT, 'CRM_Salverys.html'), 'utf8');
const ca = fs.readFileSync(path.join(ROOT, 'CRM_Salverys_Canada.html'), 'utf8');

const SENT = '@@SLVRS_CLOSE_SCRIPT@@';
// On héberge chaque CRM dans un <script type="text/html"> (non exécuté,
// "raw text"). Seul souci : un </script imbriqué fermerait le conteneur.
// On le remplace par une sentinelle (sans < ni &), réversible côté client.
const esc = s => s.replace(/<\/script/gi, SENT);

const tpl = (id, content) =>
  `<script type="text/html" id="${id}">\n${esc(content)}\n</script>`;

const out = `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Salverys — CRM unifié</title>
<style>
*{margin:0;padding:0;box-sizing:border-box;}
html,body{height:100%;}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#0F172A;display:flex;flex-direction:column;height:100vh;overflow:hidden;}
.topbar{flex-shrink:0;display:flex;align-items:center;gap:16px;padding:10px 18px;background:#0F172A;border-bottom:1px solid rgba(255,255,255,.08);flex-wrap:wrap;}
.brand{font-size:15px;font-weight:800;color:#fff;letter-spacing:-.3px;display:flex;align-items:center;gap:8px;}
.brand small{font-size:10.5px;font-weight:600;color:#94A3B8;letter-spacing:.3px;text-transform:uppercase;}
.switch{display:flex;gap:6px;background:rgba(255,255,255,.06);padding:4px;border-radius:10px;}
.switch button{display:flex;align-items:center;gap:7px;border:none;background:transparent;color:#94A3B8;font-size:13.5px;font-weight:600;padding:7px 14px;border-radius:8px;cursor:pointer;transition:all .12s;font-family:inherit;}
.switch button:hover{color:#fff;background:rgba(255,255,255,.05);}
.switch button.active{background:#2563EB;color:#fff;}
.switch button .fl{font-size:16px;line-height:1;}
.hint{margin-left:auto;font-size:11px;color:rgba(255,255,255,.4);}
.frame-wrap{flex:1;min-height:0;background:#F8FAFC;}
iframe#crm{width:100%;height:100%;border:none;display:block;background:#F8FAFC;}
@media (max-width:640px){
  .hint{display:none;}
  .topbar{gap:10px;padding:8px 12px;}
  .switch button{padding:7px 11px;font-size:13px;}
}
</style>
</head>
<body>
  <div class="topbar">
    <span class="brand">Salverys <small>CRM unifié</small></span>
    <div class="switch" id="switch">
      <button data-m="fr" class="active"><span class="fl">🇫🇷</span> France</button>
      <button data-m="ca"><span class="fl">🇨🇦</span> Canada</button>
    </div>
    <span class="hint">Chaque marché conserve ses onglets et ses données (stockage local distinct).</span>
  </div>
  <div class="frame-wrap">
    <iframe id="crm" title="CRM Salverys"></iframe>
  </div>

  ${tpl('src-fr', fr)}
  ${tpl('src-ca', ca)}

  <script>
  (function(){
    var MK='salverys_unifie_market';
    var SENT=${JSON.stringify(SENT)};
    var closer='<'+'/script';            // évite de fermer ce script-ci
    function unesc(s){return s.split(SENT).join(closer);}
    var SRC={
      fr:unesc(document.getElementById('src-fr').textContent),
      ca:unesc(document.getElementById('src-ca').textContent)
    };
    var iframe=document.getElementById('crm');
    var btns=document.querySelectorAll('#switch button');
    function show(m){
      if(!SRC[m])m='fr';
      iframe.srcdoc=SRC[m];
      btns.forEach(function(b){b.classList.toggle('active',b.dataset.m===m);});
      try{localStorage.setItem(MK,m);}catch(e){}
    }
    btns.forEach(function(b){b.onclick=function(){show(b.dataset.m);};});
    var start='fr';
    try{start=localStorage.getItem(MK)||'fr';}catch(e){}
    show(start);
  })();
  </script>
</body>
</html>
`;

fs.writeFileSync(path.join(ROOT, 'CRM_Salverys_Unifie.html'), out, 'utf8');

// --- Vérification round-trip (fidélité) ---
function extract(id, src){
  const m = src.match(new RegExp('<script type="text/html" id="'+id+'">\\n([\\s\\S]*?)\\n</script>'));
  return m ? m[1].split(SENT).join('</script') : null;
}
const rtFr = extract('src-fr', out);
const rtCa = extract('src-ca', out);
console.log('Écrit CRM_Salverys_Unifie.html —', (out.length/1024).toFixed(0), 'KB');
console.log('Round-trip FR identique :', rtFr === fr);
console.log('Round-trip CA identique :', rtCa === ca);
console.log('Sentinelles FR:', (esc(fr).match(/@@SLVRS_CLOSE_SCRIPT@@/g)||[]).length,
            '| CA:', (esc(ca).match(/@@SLVRS_CLOSE_SCRIPT@@/g)||[]).length);
