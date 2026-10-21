/* Fungsi dan data bersama (dipakai index.html dan ular-tangga.html) */
const $=s=>document.querySelector(s),app=$('#app');
/* Status sesi (jumlah kelompok, skor) disimpan di sessionStorage agar terbawa antarhalaman */
const S=(()=>{let d=null;try{d=JSON.parse(sessionStorage.getItem('ekskresiS'))}catch(e){}return Object.assign({skor:{dd:0,pas:0},main:{dd:0,pas:0},kel:0},d||{})})();
function saveS(){try{sessionStorage.setItem('ekskresiS',JSON.stringify(S))}catch(e){}}
addEventListener('pagehide',saveS);document.addEventListener('visibilitychange',()=>{if(document.hidden)saveS()});
const sh=a=>[...a].sort(()=>Math.random()-.5);
function banner(t,p,th,c){document.documentElement.style.setProperty('--bb',th[0]);document.documentElement.style.setProperty('--bi',th[1]);document.documentElement.style.setProperty('--bd',th[2]);return `<button class="back" onclick="go('')">← Menu Utama</button><div class="banner ${c||''}"><h1>${t}</h1><p>${p}</p></div>`}
const TEAL=['#247580','#fff','#ffe44d'],YEL=['#ffe44d','#3a3000','#fff'],ORA=['#f9a11b','#3b2300','#fff'],COR=['#ff8f70','#3d1608','#fff'],PUR=['#6f63c9','#fff','#ffe44d'];
/* Mode satu layar (panggung 1280 x ~720 yang diskalakan ke layar lanskap) */
function applyStage(on){document.body.classList.toggle('fitb',on);app.classList.toggle('fit',on);
if(on){const W=1280,H=Math.max(600,Math.min(900,innerHeight/innerWidth*W)),sc=Math.min(innerWidth/W,innerHeight/H);
app.style.cssText='width:'+W+'px;height:'+H+'px;transform:scale('+sc+');transform-origin:0 0;position:fixed;left:'+(innerWidth-W*sc)/2+'px;top:'+(innerHeight-H*sc)/2+'px;--stH:'+H+'px'}else app.style.cssText=''}
