/* Musik latar dan suara jawaban benar/salah (Web Audio + Speech Synthesis) */
const AU={ctx:null,on:true,playing:false,paused:false,step:0,next:0,timer:null,rt:null,tk:0,
MEL:[[79,0,76,0,79,0,84,0,83,0,79,0,76,0,0,0],[74,0,79,0,83,0,86,0,83,0,79,0,74,0,0,0],[76,0,81,0,84,0,81,0,79,0,76,0,81,0,0,0],[77,0,81,0,84,0,81,0,79,0,77,0,76,0,79,0]],
init(){try{speechSynthesis.getVoices()}catch(e){}if(this.ctx)return true;const C=window.AudioContext||window.webkitAudioContext;if(!C)return false;
const c=this.ctx=new C(),m=this.mg=c.createGain(),s=this.sg=c.createGain();m.gain.value=.16;s.gain.value=.55;m.connect(c.destination);s.connect(c.destination);
const b=this.nb=c.createBuffer(1,c.sampleRate,c.sampleRate),d=b.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=Math.random()*2-1;return true},
f:m=>440*Math.pow(2,(m-69)/12),
osc(type,fr,t,dur,v,dest,fe){const c=this.ctx,o=c.createOscillator(),g=c.createGain();o.type=type;o.frequency.setValueAtTime(fr,t);if(fe)o.frequency.exponentialRampToValueAtTime(fe,t+dur);
g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(v,t+.01);g.gain.exponentialRampToValueAtTime(.0001,t+dur);o.connect(g);g.connect(dest);o.start(t);o.stop(t+dur+.02)},
nz(t,dur,v,hp,dest){const c=this.ctx,s=c.createBufferSource(),f=c.createBiquadFilter(),g=c.createGain();s.buffer=this.nb;f.type='highpass';f.frequency.value=hp;
g.gain.setValueAtTime(v,t);g.gain.exponentialRampToValueAtTime(.0001,t+dur);s.connect(f);f.connect(g);g.connect(dest);s.start(t);s.stop(t+dur+.02)},
note(st,t){const bar=Math.floor(st/16),s=st%16,m=this.mg,root=[48,43,45,41][bar],tn=[[72,76,79],[71,74,79],[72,76,81],[72,77,81]][bar];
if([0,6,8,14].includes(s))this.osc('triangle',this.f(root),t,.17,.7,m);else if(s===4||s===12)this.osc('triangle',this.f(root+12),t,.14,.55,m);
if(s%2===0)this.osc('triangle',this.f(tn[[0,1,2,1][(s/2)%4]]),t,.14,.18,m);
if(s%4===2)this.osc('square',this.f(tn[0]-12),t,.06,.07,m);
const ml=this.MEL[bar][s];if(ml){this.osc('square',this.f(ml),t,.2,.08,m);this.osc('triangle',this.f(ml),t,.24,.22,m);this.osc('sine',this.f(ml+12),t,.12,.08,m)}
if(s%4===0)this.osc('sine',140,t,.14,.7,m,45);
if(s===4||s===12)this.nz(t,.1,.22,1800,m);
this.nz(t,s%4===2?.05:.025,s%4===2?.11:.04,8000,m)},
sched(){const c=this.ctx;if(!this.playing||this.paused){this.next=Math.max(this.next,c.currentTime+.05);return}
if(this.next<c.currentTime-.3)this.next=c.currentTime+.05;
while(this.next<c.currentTime+.25){if(this.on)this.note(this.step,this.next);this.next+=.12;this.step=(this.step+1)%64}},
play(){if(!this.init())return;this.ctx.resume();if(!this.playing){this.playing=true;this.paused=false;this.mg.gain.value=this.on?.16:0;this.next=this.ctx.currentTime+.1;this.timer=setInterval(()=>this.sched(),50)}this.btn(true)},
stop(){this.playing=false;this.paused=false;clearInterval(this.timer);clearTimeout(this.rt);this.timer=null;this.tk++;try{speechSynthesis.cancel()}catch(e){}this.btn(false)},
pause(sp){this.paused=true;const c=this.ctx;this.mg.gain.cancelScheduledValues(c.currentTime);this.mg.gain.setTargetAtTime(0,c.currentTime,.02);clearTimeout(this.rt);this.rt=setTimeout(()=>this.resume(),sp?3500:1600)},
resume(){if(!this.paused)return;this.paused=false;clearTimeout(this.rt);const c=this.ctx;this.mg.gain.cancelScheduledValues(c.currentTime);this.mg.gain.setTargetAtTime(this.on?.16:0,c.currentTime,.05);this.next=c.currentTime+.15},
voice(){const vs=speechSynthesis.getVoices().filter(x=>/^en/i.test(x.lang)),male=/david|mark|alex|daniel|fred|george|guy|ryan|james|thomas|male(?!.*female)|\bman\b/i,fem=[/samantha/i,/zira/i,/aria/i,/jenny/i,/ava\b/i,/allison/i,/tessa/i,/karen/i,/susan/i,/hazel/i,/libby/i,/sonia/i,/serena/i,/kate/i,/victoria/i,/fiona/i,/moira/i,/female/i,/google (us|uk) english/i];
for(const r of fem){const v=vs.find(x=>r.test(x.name)&&!(male.test(x.name)&&!/female/i.test(x.name)));if(v)return v}
return vs.find(x=>!male.test(x.name))||vs[0]||null},
speak(txt){if(!('speechSynthesis' in window))return false;try{speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(txt),id=++this.tk;u.lang='en-US';u.rate=1.08;u.pitch=1.6;u.volume=1;
const v=this.voice();if(v){u.voice=v;u.lang=v.lang}u.onend=u.onerror=()=>{if(id===this.tk)this.resume()};speechSynthesis.speak(u);return true}catch(e){return false}},
sfx(ok){if(!this.init())return;const c=this.ctx;c.resume();const t=c.currentTime+.01,d=this.sg;const sp='speechSynthesis' in window;this.pause(sp);
if(ok){this.osc('sine',1318.5,t,1,.6,d);this.osc('sine',2637,t,.8,.25,d);this.osc('triangle',1975.5,t+.02,.7,.2,d)}
else{this.osc('sawtooth',110,t,.5,.55,d,90);this.osc('square',117,t,.5,.3,d,95);this.osc('sawtooth',55,t,.5,.4,d)}
this.speak(ok?'Correct! Well done!':'Oops! Try again!')},
toggle(){if(!this.ctx)return;this.on=!this.on;const c=this.ctx;if(!this.paused)this.mg.gain.setTargetAtTime(this.on?.16:0,c.currentTime,.03);if(this.on)c.resume();this.btn(true)},
btn(show){let b=document.getElementById('mbtn');if(!show){if(b)b.remove();return}if(!b){b=document.createElement('button');b.id='mbtn';b.onclick=()=>AU.toggle();document.body.appendChild(b)}b.textContent=this.on?'🔊':'🔇';b.title=this.on?'Matikan musik':'Nyalakan musik';b.setAttribute('aria-label','Nyalakan atau matikan musik latar')}};
addEventListener('pointerdown',()=>{if(AU.playing&&AU.ctx&&AU.ctx.state!=='running')AU.ctx.resume()});
