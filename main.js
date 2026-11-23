/* IMPORTNOW — shared UI: SVG sprite, nav, reveal, motion, blog rendering, quote form */
(function(){
'use strict';
var PHONE='+91 99897 24320', WA='919989724320';
var page=document.body.dataset.page||'home';

/* ---------- SVG sprite ---------- */
var sprite=document.createElementNS('http://www.w3.org/2000/svg','svg');
sprite.setAttribute('width','0');sprite.setAttribute('height','0');
sprite.style.position='absolute';sprite.setAttribute('aria-hidden','true');
sprite.innerHTML='<defs>'+
'<symbol id="flag-cn" viewBox="0 0 30 20"><rect width="30" height="20" fill="#de2910"/><path fill="#ffde00" d="M5 3l1.18 3.6h3.8l-3.07 2.23 1.17 3.6L5 10.2l-3.08 2.23 1.18-3.6L.02 6.6h3.8z"/><circle cx="10.5" cy="2.5" r=".9" fill="#ffde00"/><circle cx="12.5" cy="4.6" r=".9" fill="#ffde00"/><circle cx="12.5" cy="7.6" r=".9" fill="#ffde00"/><circle cx="10.5" cy="9.6" r=".9" fill="#ffde00"/></symbol>'+
'<symbol id="flag-in" viewBox="0 0 30 20"><rect width="30" height="20" fill="#fff"/><rect width="30" height="6.67" fill="#ff9933"/><rect y="13.33" width="30" height="6.67" fill="#138808"/><circle cx="15" cy="10" r="2.6" fill="none" stroke="#000080" stroke-width=".7"/><circle cx="15" cy="10" r=".6" fill="#000080"/></symbol>'+
'<symbol id="logo-o" viewBox="0 0 24 24"><path d="M8.2 3.1A9.5 9.5 0 1 0 15.8 3.1" fill="none" stroke="currentColor" stroke-width="3.6"/><path d="M12 1.5v10.2M7.6 8l4.4 4.6L16.4 8" fill="none" stroke="currentColor" stroke-width="3.2"/></symbol>'+
'<symbol id="i-ship" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M3 17l1.6 3.2c.2.4.6.8 1.1.8h12.6c.5 0 .9-.3 1.1-.8L21 17H3zM5 17V12h14v5M8 12V8h8v4M11 8V4h3v4M2 22c1.5-.8 3-.8 4.5 0s3 .8 4.5 0 3-.8 4.5 0 3 .8 4.5 0"/></symbol>'+
'<symbol id="ic-route" viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="14" cy="48" r="6"/><circle cx="50" cy="16" r="6"/><path d="M20 48h18a8 8 0 000-16H26a8 8 0 010-16h18" stroke-dasharray="4 5"/></g></symbol>'+
'<symbol id="ic-market" viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="2.6" stroke-linejoin="round"><path d="M8 26l5-14h38l5 14M8 26h48v4a7 7 0 01-12 5 7 7 0 01-12 0 7 7 0 01-12 0A7 7 0 018 30z"/><path d="M12 36v18h40V36M26 54V42h12v12"/></g></symbol>'+
'<symbol id="ic-sofa" viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="2.6" stroke-linejoin="round"><path d="M14 28v-8a6 6 0 016-6h24a6 6 0 016 6v8"/><path d="M8 32a5 5 0 0110 0v6h28v-6a5 5 0 0110 0v14H8z"/><path d="M14 46v6M50 46v6"/></g></symbol>'+
'<symbol id="ic-scooter" viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="14" cy="46" r="7"/><circle cx="50" cy="46" r="7"/><path d="M21 46h18l6-22h-8M45 24l5 22M34 14l3 10M14 46l8-10h12"/><path d="M28 24l3-8M26 30l2-6"/></g></symbol>'+
'<symbol id="ic-plane" viewBox="0 0 64 64"><path fill="none" stroke="currentColor" stroke-width="2.6" stroke-linejoin="round" d="M58 10L6 30l18 6 4 18 8-12 12 8z M24 36l34-26"/></symbol>'+
'<symbol id="ic-shield" viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M32 6l20 8v16c0 13-9 22-20 26-11-4-20-13-20-26V14z"/><path d="M23 32l7 7 12-14"/></g></symbol>'+
'<symbol id="ic-container" viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="2.6" stroke-linejoin="round"><path d="M6 20h52v28H6z"/><path d="M14 24v20M22 24v20M30 24v20M38 24v20M46 24v20M52 24v20"/><path d="M20 20l12-10 12 10"/></g></symbol>'+
'<symbol id="ic-doc" viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M16 6h22l12 12v40H16z"/><path d="M38 6v12h12M24 32h18M24 40h18M24 48h10"/><circle cx="46" cy="48" r="9"/><path d="M43 48h6M46 45v6"/></g></symbol>'+
'<symbol id="ic-bulb" viewBox="0 0 64 64"><g fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M24 46h16M26 54h12M32 8a16 16 0 00-9 29v9h18v-9A16 16 0 0032 8z"/><path d="M32 2v-0M10 24H4M60 24h-6M14 8l-4-4M50 8l4-4"/></g></symbol>'+
'</defs>';
document.body.insertBefore(sprite,document.body.firstChild);

/* ---------- nav behaviour ---------- */
var nav=document.getElementById('nav');
var onScroll=function(){if(nav)nav.classList.toggle('scrolled',window.scrollY>30)};
window.addEventListener('scroll',onScroll,{passive:true});onScroll();
var mm=document.getElementById('mmenu'),bg=document.getElementById('burger');
if(bg)bg.addEventListener('click',function(){mm.classList.toggle('open')});
if(mm)mm.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){mm.classList.remove('open')})});

/* ---------- reveal observer ---------- */
var RM=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.1,rootMargin:'0px 0px -30px 0px'});
function observe(root){(root||document).querySelectorAll('.rv:not(.in)').forEach(function(el){io.observe(el)})}
observe();

/* ---------- scroll progress bar ---------- */
var bar=document.createElement('div');bar.className='progress';document.body.appendChild(bar);
var prog=function(){var h=document.documentElement.scrollHeight-window.innerHeight;bar.style.transform='scaleX('+(h>0?window.scrollY/h:0)+')'};
window.addEventListener('scroll',prog,{passive:true});window.addEventListener('resize',prog);prog();

/* ---------- word-by-word headline reveal ---------- */
function splitWords(el){var i=0;(function walk(node){Array.prototype.slice.call(node.childNodes).forEach(function(n){
  if(n.nodeType===3){var frag=document.createDocumentFragment();n.textContent.split(/(\s+)/).forEach(function(t){if(!t)return;if(/^\s+$/.test(t)){frag.appendChild(document.createTextNode(' '));return}
    var w=document.createElement('span');w.className='w';var wi=document.createElement('span');wi.className='wi';wi.style.setProperty('--i',i++);wi.textContent=t;w.appendChild(wi);frag.appendChild(w)});n.replaceWith(frag)}
  else if(n.nodeType===1&&!/^(BR|SVG)$/i.test(n.tagName))walk(n)})})(el);el.classList.add('split','rv')}
if(!RM)document.querySelectorAll('.hero h1,.section-head h2,.page-hero h1,.article h1,.j-head h2,.shanghai h2,.contact h2').forEach(splitWords);

/* ---------- count-up ---------- */
var cio=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;cio.unobserve(e.target);
  var el=e.target,to=+el.dataset.count,t0=performance.now(),d=1600;
  var step=function(t){var k=Math.min(1,(t-t0)/d);el.textContent=Math.round(to*(1-Math.pow(1-k,3)));if(k<1)requestAnimationFrame(step)};requestAnimationFrame(step)})},{threshold:.6});
document.querySelectorAll('[data-count]').forEach(function(el){cio.observe(el)});

/* ---------- marquee loop ---------- */
var mq=document.getElementById('mq');if(mq)mq.innerHTML+=mq.innerHTML;

/* ---------- tilt (pointer devices) ---------- */
if(window.matchMedia('(hover:hover) and (pointer:fine)').matches){
  document.querySelectorAll('.tilt').forEach(function(c){
    c.addEventListener('pointermove',function(e){var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;
      c.style.transform='perspective(900px) rotateX('+((.5-y)*6)+'deg) rotateY('+((x-.5)*8)+'deg) translateY(-4px)';
      c.style.setProperty('--mx',x*100+'%');c.style.setProperty('--my',y*100+'%')});
    c.addEventListener('pointerleave',function(){c.style.transform=''});
  });
  var lic=document.getElementById('license');
  if(lic){var st=lic.parentElement;
    st.addEventListener('pointermove',function(e){var r=st.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;lic.style.transform='rotateY('+(x*24)+'deg) rotateX('+(-y*16)+'deg)'});
    st.addEventListener('pointerleave',function(){lic.style.transform=''})}
}

/* ---------- magnetic buttons ---------- */
if(!RM&&window.matchMedia('(hover:hover) and (pointer:fine)').matches){
  document.addEventListener('pointermove',function(e){var b=e.target.closest&&e.target.closest('.btn-primary,.read-more,.btn-ghost');
    document.querySelectorAll('.magnet').forEach(function(x){if(x!==b){x.style.transform='';x.classList.remove('magnet')}});
    if(!b)return;var r=b.getBoundingClientRect();b.classList.add('magnet');
    b.style.transform='translate('+(((e.clientX-r.left)/r.width-.5)*12)+'px,'+(((e.clientY-r.top)/r.height-.5)*10)+'px)'});
}

/* ---------- blog helpers ---------- */
function fmtDate(d){return new Date(d+'T00:00:00').toLocaleDateString('en-IN',{day:'numeric',month:'long',year:'numeric'})}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
window.IN_BLOG={fmtDate:fmtDate,esc:esc};
window.IN_COVER=function(p,short){
  return '<span class="cover-in"><span class="cv-bg '+p.cv+'"></span><svg class="cv-ic"><use href="#ic-'+p.icon+'"/></svg>'+
    '<span class="cv-cat">'+esc(p.cat)+'</span><span class="cv-flags"><svg class="flag"><use href="#flag-cn"/></svg>→<svg class="flag"><use href="#flag-in"/></svg></span>'+
    (short?'':'<span class="cv-title">'+esc(p.title.split(':')[0])+'</span>')+'</span>'};
window.IN_CARD=function(p,i){
  return '<article class="post-card rv d'+((i%2)+1)+'">'+
    '<a class="cover" href="/blog/'+p.slug+'" aria-hidden="true" tabindex="-1">'+window.IN_COVER(p)+'</a>'+
    '<div class="bd"><h3><a href="/blog/'+p.slug+'">'+esc(p.title)+'</a></h3>'+
    '<div class="post-meta"><span>'+fmtDate(p.date)+'</span><span class="dot"></span><span>'+p.mins+' min read</span></div>'+
    '<p>'+esc(p.excerpt)+'</p>'+
    '<a class="read-more" href="/blog/'+p.slug+'">Read more <span aria-hidden="true">→</span></a></div></article>'};

/* home: latest guides */
var latestEl=document.getElementById('latest-posts');
if(latestEl&&window.POSTS)latestEl.innerHTML=window.POSTS.slice(0,3).map(window.IN_CARD).join(''),observe(latestEl);

/* blog listing */
if(page==='blog'&&window.POSTS){
  var grid=document.getElementById('post-grid'),pager=document.getElementById('pager'),catsEl=document.getElementById('cats'),q=document.getElementById('q');
  var cats=['All'];window.POSTS.forEach(function(p){if(cats.indexOf(p.cat)<0)cats.push(p.cat)});
  var cat='All',pg=1,PER=6;
  catsEl.innerHTML=cats.map(function(c){return '<button class="cat-btn'+(c==='All'?' on':'')+'" data-c="'+esc(c)+'">'+esc(c)+'</button>'}).join('');
  catsEl.addEventListener('click',function(e){var b=e.target.closest('.cat-btn');if(!b)return;cat=b.dataset.c;pg=1;catsEl.querySelectorAll('.cat-btn').forEach(function(x){x.classList.toggle('on',x===b)});render()});
  q.addEventListener('input',function(){pg=1;render()});
  pager.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;pg=+b.dataset.p;render();document.getElementById('posts-top').scrollIntoView({behavior:'smooth'})});
  function render(){
    var term=q.value.trim().toLowerCase();
    var list=window.POSTS.filter(function(p){return (cat==='All'||p.cat===cat)&&(!term||(p.title+' '+p.excerpt+' '+p.cat).toLowerCase().indexOf(term)>=0)});
    var pages=Math.max(1,Math.ceil(list.length/PER));pg=Math.min(pg,pages);
    grid.innerHTML=list.length?list.slice((pg-1)*PER,pg*PER).map(window.IN_CARD).join(''):'<div class="empty" style="grid-column:1/-1">No articles match “'+esc(term)+'”.</div>';
    pager.innerHTML=pages>1?Array.from({length:pages},function(_,i){return '<button data-p="'+(i+1)+'" class="'+(i+1===pg?'on':'')+'" aria-label="Page '+(i+1)+'">'+(i+1)+'</button>'}).join(''):'';
    observe(grid);
  }
  render();
}

/* ---------- toast ---------- */
var toastEl=document.getElementById('toast');
var toastTimer=null;
window.IN_TOAST=function(msg,kind){
  if(!toastEl)return;
  toastEl.textContent=msg;toastEl.classList.remove('ok','err');if(kind)toastEl.classList.add(kind);
  toastEl.classList.add('show');clearTimeout(toastTimer);
  toastTimer=setTimeout(function(){toastEl.classList.remove('show')},5000);
};

/* ---------- quote form -> save + WhatsApp ---------- */
var qf=document.getElementById('qform');
if(qf)qf.addEventListener('submit',function(e){
  e.preventDefault();
  var v=function(id){var el=document.getElementById(id);return el?el.value.trim():''};
  var name=v('f-name');
  if(!name){window.IN_TOAST('Please enter your name.','err');document.getElementById('f-name').focus();return}
  var btn=qf.querySelector('button[type=submit]');
  if(btn.disabled)return;
  btn.disabled=true;
  var payload={name:name,city:v('f-city'),category:v('f-cat'),quantity:v('f-qty'),budget:v('f-budget'),details:v('f-msg'),email:v('f-email'),phone:v('f-phone')};
  fetch('/quote',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)})
    .then(function(r){return r.json().then(function(j){return {status:r.status,body:j}})})
    .then(function(res){
      var j=res.body||{};
      if(res.status>=200&&res.status<300&&j.whatsapp_url){
        window.IN_TOAST(j.message||'Inquiry received. Opening WhatsApp…','ok');
        var w=window.open(j.whatsapp_url,'_blank','noopener');
        if(!w)window.IN_TOAST('Tap the WhatsApp button below to send your inquiry.','ok');
        qf.reset();
      }else{
        window.IN_TOAST(j.error||'Something went wrong. Please try again.','err');
      }
    })
    .catch(function(){window.IN_TOAST('Could not reach the server. Please try again or use WhatsApp directly.','err')})
    .finally(function(){btn.disabled=false});
});
})();
