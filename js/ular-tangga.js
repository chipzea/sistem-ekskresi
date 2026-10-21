/* Game Snakes and Ladders: papan 10 x 10, dadu 3D, soal pilihan ganda, gelembung soal */
function go(v){location.href='index.html'+(v?'#'+v:'')}
const SL={L:{1:38,4:14,9:31,21:42,28:84,36:44,51:67,71:91,80:100},S:{16:6,47:26,49:11,56:53,62:19,64:60,87:24,93:73,95:75,98:78}};
const PIPS={1:[4],2:[0,8],3:[0,4,8],4:[0,2,6,8],5:[0,2,4,6,8],6:[0,2,3,5,6,8]};
function ular(){
const W=['#22a45d','#e08e00','#8b5cf6','#ec4899','#14b8a6','#3b82f6'],SC=['#e53935','#8e24aa','#1e88e5','#fb8c00','#43a047','#d81b60','#00897b','#f4511e','#5e35b1','#6d4c41'];
let n=(S.nk>=2?Math.min(S.nk,12):S.kel>=2?Math.min(S.kel,12):4),dpos,turn,busy,won,logs;
const g$=id=>document.getElementById(id),sl=ms=>new Promise(r=>setTimeout(r,ms));
const head=()=>banner('Snakes and Ladders','Ular tangga 10 × 10 antarkelompok',['#7ed6a5','#0f3d26','#fff'],'bn-u');
const xy=nn=>{const i=nn-1,row=Math.floor(i/10),col=row%2===0?i%10:9-i%10;return[(col+.5)*10,(9-row+.5)*10]};
function setup(){app.innerHTML=head()+`<div class="fl fl-1"><div class="card"><h2>Siapkan kelompok</h2><p style="color:var(--muted);line-height:1.6">Setiap kelompok punya satu bidak. Lempar dadu bergiliran dan jalankan bidak sesuai angka dadu. Jika mendapat <b>dadu 6</b>, kelompok itu boleh melempar lagi; jika dadu 1–5, giliran berpindah ke kelompok berikutnya. Berhenti di <b>kaki tangga 🪜</b> berarti naik, berhenti di <b>kepala ular 🐍</b> berarti turun. Kelompok pertama yang tepat sampai kotak <b>100</b> menang (jika angka dadu berlebih, bidak mundur sisa langkahnya).</p><p style="color:var(--muted);line-height:1.6">Setiap bidak berhenti di sebuah kotak, kelompok menjawab <b>soal pilihan ganda</b> tentang sistem ekskresi. Jawaban benar: bidak tetap di kotak (di kaki tangga, bidak naik; di kepala ular, bidak selamat). Jawaban salah: bidak kembali ke posisi sebelum melangkah (di kepala ular, bidak turun lewat ular). Kotak biasa memuat soal C1–C3 (LOTS/MOTS), tangga dan ular pendek memuat soal MOTS, sedangkan tangga dan ular panjang memuat soal HOTS (C4–C5).</p><div class="field"><div><label>Jumlah kelompok</label><input id="nk" type="number" min="2" max="12" value="${n}" oninput="S.nk=Math.min(12,Math.max(2,+this.value||2))"></div><button class="btn" onclick="SLgo()">Mulai</button></div></div></div>`}
window.SLgo=()=>{n=Math.min(12,Math.max(2,+$('#nk').value||4));S.kel=n;S.nk=n;SLagain()};
window.SLagain=()=>{dpos=Array(n).fill(0);turn=0;busy=false;won=null;logs=[];start()};
function snake(h,t,col){const[x1,y1]=xy(h),[x2,y2]=xy(t),dx=x2-x1,dy=y2-y1,L=Math.hypot(dx,dy),px=-dy/L,py=dx/L,k=Math.max(2,Math.round(L/14)),pts=[];
for(let i=0;i<=40;i++){const u=i/40,a=3*(1-.5*u)*Math.sin(u*Math.PI*k);pts.push((x1+dx*u+px*a).toFixed(2)+','+(y1+dy*u+py*a).toFixed(2))}
const d='M'+pts.join(' L');
return `<path d="${d}" fill="none" stroke="${col}" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" opacity=".93"/><path d="${d}" fill="none" stroke="#fff" stroke-opacity=".55" stroke-width="1" stroke-dasharray="1 1.8" stroke-linecap="round"/><circle cx="${x1}" cy="${y1}" r="2.6" fill="${col}"/><circle cx="${x1-1}" cy="${y1-.7}" r=".8" fill="#fff"/><circle cx="${x1+1}" cy="${y1-.7}" r=".8" fill="#fff"/><circle cx="${x1-1}" cy="${y1-.7}" r=".35" fill="#111"/><circle cx="${x1+1}" cy="${y1-.7}" r=".35" fill="#111"/>`}
function ladder(b,t){const[x1,y1]=xy(b),[x2,y2]=xy(t),dx=x2-x1,dy=y2-y1,L=Math.hypot(dx,dy),px=-dy/L*1.5,py=dx/L*1.5,m=Math.max(3,Math.floor(L/4.2));let r='';
for(let i=0;i<m;i++){const u=(i+.5)/m,cx=x1+dx*u,cy=y1+dy*u;r+=`<line x1="${cx+px}" y1="${cy+py}" x2="${cx-px}" y2="${cy-py}" stroke-width=".8"/>`}
return `<g stroke="#8a5a2b" stroke-linecap="round"><line x1="${x1+px}" y1="${y1+py}" x2="${x2+px}" y2="${y2+py}" stroke-width="1"/><line x1="${x1-px}" y1="${y1-py}" x2="${x2-px}" y2="${y2-py}" stroke-width="1"/>${r}</g>`}
function start(){
let cells='';for(let y=0;y<10;y++)for(let x=0;x<10;x++){const row=9-y,nn=row*10+(row%2===0?x:9-x)+1;cells+=`<div class="sc ${(x+y)%2?'b':'a'} ${nn===100?'fin':''}"><span>${nn===100?'🏆 100':nn}</span></div>`}
const sv=Object.entries(SL.L).map(([b,t])=>ladder(+b,t)).join('')+Object.entries(SL.S).map(([h,t],i)=>snake(+h,t,SC[i%SC.length])).join('');
app.innerHTML=head()+`<div class="skorstrip" id="skor" style="display:none"></div><div class="fl fl-ul"><div class="fl-a"><div class="tpet mini" id="tpet"></div><div class="tgrid" id="timrow"></div></div>
<div class="fl-b"><div class="sl2"><div class="sb" id="sbd"><div class="sgrid">${cells}</div><svg viewBox="0 0 100 110" preserveAspectRatio="none">${sv}<text x="50" y="109.4" text-anchor="middle" font-size="2.6" fill="#5c6d61" font-weight="700">START ▸ bidak menunggu di sini</text></svg>${dpos.map((_,i)=>`<div class="pw" id="pw${i}" style="--c:${W[i%6]}">${i+1}</div>`).join('')}<div id="dl"></div></div>
<div class="sside"><div style="text-align:center"><button class="btn" id="rbtn" onclick="SLroll()" style="font-size:15px;padding:8px 22px"></button></div></div></div></div><div class="fl-c qcol"><div class="gmsg" id="slog" style="margin-top:10px;line-height:1.5"></div><div style="font-size:13px;color:var(--muted);margin-top:6px">🪜 tangga: naik &nbsp; 🐍 ular: turun<br>🎲 dadu 6: lempar lagi</div></div></div><div id="ovl"></div>`;
place();top();fit()}
function fit(){const sb=g$('sbd');if(!sb)return;if(app.classList.contains('fit')){sb.style.maxWidth='';return}sb.style.maxWidth='';const cw=parseFloat(getComputedStyle(sb).width),r=sb.getBoundingClientRect(),z=(r.width/cw)||1,top=r.top+scrollY,avail=Math.max(innerHeight-top-110*Math.max(z,1),340*Math.max(z,1));if(r.height>avail)sb.style.maxWidth=(cw*avail/r.height)+'px'}
window.onresize=()=>{if(g$('sbd')){fit();if(g$('bub'))bubPlace()}};
function face(d){g$('die').innerHTML=[...Array(9)].map((_,i)=>`<i class="${PIPS[d].includes(i)?'on':''}"></i>`).join('')}
function place(){const grp={};dpos.forEach((p,i)=>{(grp[p]=grp[p]||[]).push(i)});
Object.values(grp).forEach(a=>a.forEach((i,j)=>{const p=dpos[i];let x,y;if(p===0){x=6+i*Math.min(8,88/n);y=105}else{[x,y]=xy(p);if(a.length>1){x+=((j%3)-1)*2.8;y+=(Math.floor(j/3)-(a.length>3?.5:0))*2.8}}
const e=g$('pw'+i);e.style.left=x+'%';e.style.top=(y/110*100)+'%';e.classList.toggle('cur',i===turn&&won===null)}))}
function top(){const s=g$('skor');s.style.setProperty('--n',n);
s.innerHTML='';
g$('tpet').textContent=won===null?`Giliran Kelompok ${turn+1}: lempar dadu!`:'Permainan selesai';
g$('timrow').innerHTML=dpos.map((p,i)=>`<div class="tcell ${turn===i&&won===null?'aktif':''}" style="--c:${W[i%6]}"><span class="dt"></span><b class="tn">Kelompok ${i+1}</b><span class="ts" title="Posisi kotak">${p||'–'}</span></div>`).join('');
const b=g$('rbtn');b.textContent=won===null?`🎲 Lempar dadu: Kelompok ${turn+1}`:'Selesai';b.disabled=busy||won!==null;
g$('slog').innerHTML=logs.slice(-6).reverse().map((l,i)=>`<div style="opacity:${1-i*.14}">${l}</div>`).join('');place()}
const log=t=>{logs.push(t);g$('slog').innerHTML=logs.slice(-6).reverse().map((l,i)=>`<div style="opacity:${1-i*.14}">${l}</div>`).join('')};
async function jump(to){const e=g$('pw'+turn);e.classList.add('slide');dpos[turn]=to;place();await sl(950);e.classList.remove('slide')}
function bubPlace(){const bu=g$('bub'),sb=g$('sbd'),pe=g$('pw'+turn);if(!bu||!sb||!pe)return;
const br=sb.getBoundingClientRect(),pr=pe.getBoundingClientRect(),cw=parseFloat(getComputedStyle(sb).width),z=(br.width/cw)||1,TL=22;
const bw=Math.min(cw*.94,360);bu.style.width=bw+'px';
const px=(pr.left+pr.width/2-br.left)/z,pt=(pr.top-br.top)/z,pb=(pr.bottom-br.top)/z,H=br.height/z,left=Math.max(0,Math.min(cw-bw,px-bw/2));bu.style.left=left+'px';
const h=bu.getBoundingClientRect().height/z,sa=(pr.top-8)/z,sbw=(innerHeight-pr.bottom-8)/z,up=sa>=h+TL||(sbw<h+TL&&sa>=sbw);
bu.classList.toggle('up',up);bu.classList.toggle('dn',!up);
if(up){bu.style.top='auto';bu.style.bottom=(H-pt+TL)+'px'}else{bu.style.bottom='auto';bu.style.top=(pb+TL)+'px'}
const tx=Math.max(26,Math.min(bw-6,px-left));bu.querySelector('.tl').style.left=(tx-22)+'px';
const r=bu.getBoundingClientRect();if(r.top<6)scrollBy({top:r.top-10,behavior:'smooth'});else if(r.bottom>innerHeight-6)scrollBy({top:r.bottom-innerHeight+10,behavior:'smooth'})}
function ask(q,from){return new Promise(res=>{const d=QS[q],opts=sh([d.a,...d.w]),lad=SL.L[q],sn=SL.S[q],kind=lad?'🪜 Kaki tangga':sn?'🐍 Kepala ular':'Kotak biasa',len=lad?lad-q:sn?q-sn:0;
const cat=(lad||sn)?(len>=20?'HOTS':'MOTS'):(d.l==='C3'?'MOTS':'LOTS'),old=g$('bub');if(old)old.remove();
const bu=document.createElement('div');bu.id='bub';bu.className='bub up';
bu.innerHTML=`<div class="bbox"><div class="bchips"><span class="chip">Kotak ${q}</span><span class="chip">${kind}</span><span class="lg ${cat.toLowerCase()}">${d.l} · ${cat}</span><span class="lg ${d.en?'en':'id'}">${d.en?'EN':'ID'}</span></div><div class="bq"><b>Kelompok ${turn+1}:</b> ${d.q}</div>${opts.map((o,i)=>`<button class="bo" data-i="${i}">${'ABCD'[i]}. ${o}</button>`).join('')}<div id="qfb"></div></div><div class="tl"></div>`;
g$('sbd').appendChild(bu);bubPlace();
bu.querySelectorAll('.bo').forEach(b=>b.onclick=()=>{const ok=opts[+b.dataset.i]===d.a;
bu.querySelectorAll('.bo').forEach(x=>{x.disabled=true;if(opts[+x.dataset.i]===d.a)x.classList.add('done');else if(x===b)x.classList.add('bad')});
const eff=ok?(lad?`Bidak naik tangga ke kotak ${lad}.`:sn?`Bidak selamat dari ular dan tetap di kotak ${q}.`:`Bidak tetap di kotak ${q}.`):(sn?`Bidak digigit ular dan turun ke kotak ${sn}.`:`Bidak kembali ke ${from?'kotak '+from:'START'}.`);
g$('qfb').innerHTML=`<div class="bfb"><b>${ok?'✅ Benar!':'❌ Salah.'}</b> ${ok?'':'Jawaban benar: <b>'+d.a+'</b>. '}${eff}</div>${ok?`<div class="bfb ex"><b>💡 ${d.en?'Explanation':'Penjelasan'}:</b> ${d.e}</div>`:''}<div style="text-align:center;margin-top:6px"><button class="btn" id="qnext" style="padding:6px 18px;font-size:13px;min-height:0">Lanjut</button></div>`;
AU.sfx(ok);bubPlace();g$('qnext').onclick=()=>{bu.remove();res(ok)}})})}
function throwDie(d){return new Promise(res=>{const bd=g$('sbd'),dl=g$('dl'),W=bd.clientWidth,H=bd.clientHeight*.909,S=Math.max(56,Math.min(96,W*.15));
const fx={1:0,6:0,3:0,4:0,2:-90,5:90}[d],fy={1:0,6:180,3:-90,4:90,2:0,5:0}[d];
const faces=[1,6,3,4,2,5].map(f=>`<div class="cf f${f}">${[...Array(9)].map((_,i)=>`<i class="${PIPS[f].includes(i)?'on':''}"></i>`).join('')}</div>`).join('');
dl.innerHTML=`<div class="dv" style="width:${S}px;height:${S}px"><div class="dsh"></div><div class="dtilt"><div class="cube" style="--h:${S/2}px">${faces}</div></div></div>`;
const dv=dl.firstChild,cube=dv.querySelector('.cube'),cx=(Math.random()<.5?-1:1)*W*.46,cy=(Math.random()<.5?-1:1)*H*.44,T=(x,y,s)=>`translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${s})`,DUR=1700;
dv.animate([{transform:T(cx,cy,.25),offset:0},{transform:T(cx*.6,cy*.6-34,.42),offset:.22},{transform:T(cx*.42,cy*.42,.5),offset:.4},{transform:T(cx*.2,cy*.2-46,.78),offset:.6},{transform:T(cx*.06,cy*.06,1.05),offset:.82},{transform:T(0,0,1),offset:1}],{duration:DUR,easing:'ease-in-out',fill:'forwards'});
cube.animate([{transform:'rotateX(0deg) rotateY(0deg) rotateZ(0deg)'},{transform:`rotateX(${fx+720}deg) rotateY(${fy+1080}deg) rotateZ(360deg)`}],{duration:DUR,easing:'cubic-bezier(.15,.7,.3,1)',fill:'forwards'});
setTimeout(()=>setTimeout(()=>{dl.innerHTML='';res()},800),DUR)})}
window.SLroll=async()=>{if(busy||won!==null)return;busy=true;try{const t=turn+1,from=dpos[turn];g$('rbtn').disabled=true;
const d=1+Math.floor(Math.random()*6);await throwDie(d);log(`Kelompok ${t} melempar dadu: <b>${d}</b>`);await sl(250);
let q=from,dir=1;for(let k=0;k<d;k++){if(q===100)dir=-1;q+=dir;dpos[turn]=q;place();await sl(260)}
if(q!==100){await sl(250);const ok=await ask(q,from),lad=SL.L[q],sn=SL.S[q];
if(ok){if(lad){log(`✅ Benar! 🪜 Naik tangga dari ${q} ke ${lad}`);await jump(lad)}else if(sn)log(`✅ Benar! Selamat dari ular di kotak ${q}`);else log(`✅ Benar! Bidak tetap di kotak ${q}`)}
else{if(sn){log(`❌ Salah. 🐍 Turun dari ${q} ke ${sn}`);await jump(sn)}else{log(`❌ Salah. Kembali ke ${from?'kotak '+from:'START'}`);await jump(from)}}}
if(dpos[turn]===100){won=turn;busy=false;top();AU.sfx(true);win();return}
if(d===6)log(`🎲 Dadu 6! Kelompok ${t} mendapat kesempatan melempar lagi`);else turn=(turn+1)%n;busy=false;top()}catch(e){}};
function win(){const r=dpos.map((p,i)=>[i+1,p]).sort((a,b)=>b[1]-a[1]);
g$('ovl').innerHTML=`<div class="ovl"><div class="card fbx"><div class="fbi">🏆</div><h2>Kelompok ${won+1} menang!</h2><p>Tepat sampai kotak 100.</p><div style="text-align:left">${r.map((x,i)=>`<div class="rank" style="--c:${W[(x[0]-1)%6]}"><b>${i===0?'🏆':i+1}</b><span class="dt"></span><span style="flex:1">Kelompok ${x[0]}</span><b class="nl2">${x[1]||'–'}</b></div>`).join('')}</div><p style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center"><button class="btn" onclick="SLagain()">Main Lagi</button><button class="btn ghost" onclick="go('')">Kembali ke Menu</button></p></div></div>`}
setup()}


function stage(){applyStage(innerWidth>=900&&innerWidth/innerHeight>=1.25)}
addEventListener('resize',stage);
ular();stage();AU.play();
