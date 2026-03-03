(function(){
if(document.getElementById('luca-root'))return;
var s=document.createElement('style');
s.textContent='@import url("https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600&display=swap");#lr *{box-sizing:border-box;margin:0;padding:0;font-family:\'Jost\',sans-serif;-webkit-font-smoothing:antialiased}:root{--ob:#1A1A1A;--cr:#E6D9C9;--bn:#F5F5F0;--bd:rgba(230,217,201,.18);--cr2:rgba(230,217,201,.12);--bn6:rgba(245,245,240,.6)}#lt{position:fixed;bottom:32px;left:50%;transform:translateX(-50%);z-index:9998;display:flex;align-items:center;gap:10px;background:#1A1A1A;border:1px solid rgba(230,217,201,.18);color:#F5F5F0;padding:14px 22px 14px 16px;border-radius:50px;cursor:pointer;font-size:13px;font-weight:500;letter-spacing:.08em;text-transform:uppercase;transition:background .25s,transform .2s;box-shadow:0 8px 32px rgba(0,0,0,.45);user-select:none;font-family:\'Jost\',sans-serif;white-space:nowrap}#lt:hover{background:#222;border-color:rgba(230,217,201,.4);transform:translateX(-50%) translateY(-2px)}.lpd{width:9px;height:9px;background:#E6D9C9;border-radius:50%;flex-shrink:0;position:relative}.lpd::after{content:"";position:absolute;inset:-4px;border-radius:50%;border:1.5px solid #E6D9C9;animation:lp 2s ease-out infinite}@keyframes lp{0%{opacity:.9;transform:scale(1)}70%{opacity:0;transform:scale(2.2)}100%{opacity:0;transform:scale(2.2)}}#lp{position:fixed;bottom:90px;left:50%;transform:translateX(-50%) translateY(16px) scale(.97);z-index:9999;width:400px;height:570px;background:#1A1A1A;border:1px solid rgba(230,217,201,.18);border-radius:22px;box-shadow:0 32px 80px rgba(0,0,0,.55),0 8px 24px rgba(0,0,0,.4);display:flex;flex-direction:column;overflow:hidden;opacity:0;pointer-events:none;transition:opacity .3s cubic-bezier(.4,0,.2,1),transform .3s cubic-bezier(.4,0,.2,1)}#lp.lo{opacity:1;transform:translateX(-50%) translateY(0) scale(1);pointer-events:all}#lh{display:flex;align-items:center;justify-content:space-between;padding:20px 22px;border-bottom:1px solid rgba(230,217,201,.18);background:rgba(255,255,255,.02);flex-shrink:0}.lhl{display:flex;align-items:center;gap:12px}.lav{width:32px;height:32px;border-radius:10px;background:rgba(230,217,201,.12);border:1px solid rgba(230,217,201,.18);display:flex;align-items:center;justify-content:center;flex-shrink:0}.lav svg{width:16px;height:16px;opacity:.85}.lnm{font-size:13px;font-weight:600;color:#F5F5F0;letter-spacing:.12em;text-transform:uppercase;font-family:\'Jost\',sans-serif}.lst{font-size:10px;color:rgba(245,245,240,.6);letter-spacing:.05em;display:flex;align-items:center;gap:5px;margin-top:2px;font-family:\'Jost\',sans-serif}.lsd{width:5px;height:5px;border-radius:50%;background:#7BC67E}#lc{background:none;border:none;cursor:pointer;color:rgba(245,245,240,.6);padding:4px;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;line-height:0;transition:color .2s,background .2s}#lc:hover{color:#F5F5F0;background:rgba(230,217,201,.12)}#lm{flex:1;overflow-y:auto;padding:24px 20px;display:flex;flex-direction:column;gap:16px;scrollbar-width:thin;scrollbar-color:rgba(230,217,201,.18) transparent}#lm::-webkit-scrollbar{width:4px}#lm::-webkit-scrollbar-thumb{background:rgba(230,217,201,.18);border-radius:2px}.lmsg{display:flex;flex-direction:column;max-width:88%;animation:lmi .28s ease-out both}@keyframes lmi{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}.lmsg.lu{align-self:flex-end;align-items:flex-end}.lmsg.lb{align-self:flex-start;align-items:flex-start}.lbb{padding:12px 16px;border-radius:18px;font-size:13.5px;line-height:1.65;font-weight:400;font-family:\'Jost\',sans-serif}.lu .lbb{background:#E6D9C9;color:#1A1A1A;border-bottom-right-radius:5px}.lb .lbb{background:rgba(230,217,201,.12);border:1px solid rgba(230,217,201,.18);color:#F5F5F0;border-bottom-left-radius:5px}.lmt{font-size:10px;color:rgba(245,245,240,.6);margin-top:5px;letter-spacing:.03em;font-family:\'Jost\',sans-serif}#lty{display:none;align-self:flex-start;align-items:center;gap:12px;padding:12px 16px;background:rgba(230,217,201,.12);border:1px solid rgba(230,217,201,.18);border-radius:18px;border-bottom-left-radius:5px}#lty.lv{display:flex}.ltt{font-size:12px;color:rgba(245,245,240,.6);letter-spacing:.04em;font-style:italic;font-family:\'Jost\',sans-serif}.lds{display:flex;gap:4px}.lds span{width:4px;height:4px;border-radius:50%;background:#E6D9C9;animation:ld 1.3s ease-in-out infinite}.lds span:nth-child(2){animation-delay:.2s}.lds span:nth-child(3){animation-delay:.4s}@keyframes ld{0%,60%,100%{opacity:.25;transform:scale(.9)}30%{opacity:1;transform:scale(1.2)}}#lf{border-top:1px solid rgba(230,217,201,.18);padding:14px 16px;background:rgba(255,255,255,.015);flex-shrink:0}.lir{display:flex;align-items:flex-end;gap:10px;background:rgba(230,217,201,.12);border:1px solid rgba(230,217,201,.18);border-radius:16px;padding:10px 10px 10px 16px;transition:border-color .2s}.lir:focus-within{border-color:rgba(230,217,201,.45)}#li{flex:1;background:none;border:none;outline:none;color:#F5F5F0;font-size:13.5px;font-family:\'Jost\',sans-serif;resize:none;max-height:100px;overflow-y:auto;scrollbar-width:none;line-height:1.5}#li::placeholder{color:rgba(245,245,240,.6);font-style:italic}#ls{background:#E6D9C9;border:none;border-radius:50%;width:36px;height:36px;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background .2s,transform .15s;line-height:0}#ls:hover{background:#F5F5F0;transform:scale(1.08)}#ls:active{transform:scale(.96)}#ls:disabled{opacity:.4;cursor:not-allowed;transform:none}#ls svg{width:15px;height:15px}.lhi{font-size:10px;color:rgba(245,245,240,.6);text-align:center;margin-top:8px;letter-spacing:.03em;font-family:\'Jost\',sans-serif}@media(max-width:480px){#lp{width:calc(100vw - 24px);bottom:80px}#lt{bottom:18px}}';
document.head.appendChild(s);

var h=document.createElement('div');
h.id='luca-root';
h.innerHTML='<button id="lt" aria-label="Abrir chat con LUCA"><span class="lpd"></span>Hablar con LUCA</button><div id="lp" role="dialog" aria-modal="true"><div id="lh"><div class="lhl"><div class="lav"><svg viewBox="0 0 24 24" fill="none"><path d="M7 5v14h10v-2.5H9.5V5H7Z" fill="#E6D9C9"/></svg></div><div><div class="lnm">LUCA</div><div class="lst"><span class="lsd"></span>Asistente activo</div></div></div><button id="lc" aria-label="Cerrar"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></button></div><div id="lm" role="log" aria-live="polite"><div class="lmsg lb"><div class="lbb">Hola, soy LUCA \u2014 tu asistente de IA para emprendedores. \u00bfEn qu\u00e9 puedo ayudarte hoy?</div><span class="lmt">ahora</span></div><div id="lty"><span class="ltt">LUCA est\u00e1 procesando</span><div class="lds"><span></span><span></span><span></span></div></div></div><div id="lf"><div class="lir"><textarea id="li" rows="1" placeholder="Escribe tu pregunta..." autocomplete="off"></textarea><button id="ls" aria-label="Enviar"><svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button></div><p class="lhi">Enter para enviar \u00b7 Shift+Enter nueva l\u00ednea</p></div></div>';
document.body.appendChild(h);

var WH='https://luca8.app.n8n.cloud/webhook/b17468e9-aa32-44f9-b0b5-bc0c91c33663/chat';
var SID='luca_'+Math.random().toString(36).slice(2,11);
var trigger=document.getElementById('lt'),panel=document.getElementById('lp'),closeBtn=document.getElementById('lc'),msgs=document.getElementById('lm'),inp=document.getElementById('li'),send=document.getElementById('ls'),ty=document.getElementById('lty');
var isOpen=false,busy=false,hist=[];

function oc(){isOpen=true;panel.classList.add('lo');setTimeout(function(){inp.focus()},320)}
function cc(){isOpen=false;panel.classList.remove('lo')}
trigger.addEventListener('click',function(){isOpen?cc():oc()});
closeBtn.addEventListener('click',cc);
document.addEventListener('click',function(e){if(isOpen&&!panel.contains(e.target)&&e.target!==trigger)cc()});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&isOpen)cc()});
inp.addEventListener('input',function(){this.style.height='auto';this.style.height=Math.min(this.scrollHeight,100)+'px'});

function gt(){return new Date().toLocaleTimeString('es-ES',{hour:'2-digit',minute:'2-digit'})}
function sb(){msgs.scrollTop=msgs.scrollHeight}

function addMsg(text,role){
  msgs.removeChild(ty);
  var w=document.createElement('div');w.className='lmsg l'+role;
  var b=document.createElement('div');b.className='lbb';
  var t=document.createElement('span');t.className='lmt';t.textContent=gt();
  w.appendChild(b);w.appendChild(t);msgs.appendChild(w);msgs.appendChild(ty);
  sb();
  if(role==='b')tw(b,text);else b.textContent=text;
}
function tw(el,text,sp){sp=sp||18;var i=0;el.textContent='';var iv=setInterval(function(){el.textContent+=text[i];i++;sb();if(i>=text.length)clearInterval(iv)},sp)}
function sty(){ty.classList.add('lv');sb()}
function hty(){ty.classList.remove('lv')}

function sm(){
  var text=inp.value.trim();if(!text||busy)return;
  busy=true;send.disabled=true;inp.value='';inp.style.height='auto';
  addMsg(text,'u');hist.push({role:'user',content:text});sty();
  fetch(WH,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({sessionId:SID,chatInput:text,message:text,history:hist})})
  .then(function(r){if(!r.ok)throw new Error(r.status);return r.json()})
  .then(function(d){
    var reply=d&&(d.output||d.text||d.message||d.response||(Array.isArray(d)&&(d[0].output||d[0].text||d[0].message)))||'Lo siento, no pude procesar tu mensaje.';
    hty();hist.push({role:'assistant',content:reply});addMsg(reply,'b');
  })
  .catch(function(e){console.error('[LUCA]',e);hty();addMsg('Hubo un problema al conectar. Int\u00e9ntalo en unos momentos.','b')})
  .finally(function(){busy=false;send.disabled=false;inp.focus()});
}
send.addEventListener('click',sm);
inp.addEventListener('keydown',function(e){if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();sm()}});
})();
