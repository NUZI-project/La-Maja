
// ── NAV
const nav=document.getElementById('nav'),hbg=document.getElementById('hbg'),mob=document.getElementById('mob');
window.addEventListener('scroll',()=>{
  if(scrollY>60){nav.classList.add('s');nav.classList.remove('not-s')}
  else{nav.classList.remove('s');nav.classList.add('not-s')}
},{passive:true});
function toggleNav(){hbg.classList.toggle('x');mob.classList.toggle('o');document.body.style.overflow=mob.classList.contains('o')?'hidden':'';}
function closeMob(){hbg.classList.remove('x');mob.classList.remove('o');document.body.style.overflow='';}

// ── PARALLAX
const hImg=document.getElementById('heroImg');
window.addEventListener('scroll',()=>{if(scrollY<innerHeight)hImg.style.transform=`scale(1.07) translateY(${scrollY*.22}px)`;},{passive:true});

// ── REVEAL
const ro=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('vis');ro.unobserve(e.target)}})},{threshold:.1,rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.rv,.rvl,.rvr').forEach(el=>ro.observe(el));

// ── STAGGER
const so=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.querySelectorAll('.mi,.rc,.svc-card').forEach((c,i)=>{setTimeout(()=>{c.style.opacity='1';c.style.transform='none'},i*30)});so.unobserve(e.target)}})},{threshold:.05});
document.querySelectorAll('.mgrid,.rev-track,.svc-grid').forEach(el=>{el.querySelectorAll('.mi,.rc,.svc-card').forEach(c=>{c.style.opacity='0';c.style.transform='translateY(10px)';c.style.transition='opacity .4s ease,transform .4s ease'});so.observe(el)});

// ── MENU TABS
function setTab(btn,id){
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('on'));
  document.querySelectorAll('.panel').forEach(p=>p.classList.remove('on'));
  btn.classList.add('on');
  document.getElementById(id).classList.add('on');
  btn.scrollIntoView({inline:'center',behavior:'smooth',block:'nearest'});
}

// ── LIGHTBOX
function openLb(src){document.getElementById('lbImg').src=src;document.getElementById('lb').classList.add('o');document.body.style.overflow='hidden';}
function closeLb(){document.getElementById('lb').classList.remove('o');document.body.style.overflow='';}

// ── DRAG SCROLL
function drag(el){let d=false,sx,sl;
  el.addEventListener('mousedown',e=>{d=true;sx=e.pageX-el.offsetLeft;sl=el.scrollLeft;el.style.cursor='grabbing'});
  ['mouseleave','mouseup'].forEach(ev=>el.addEventListener(ev,()=>{d=false;el.style.cursor='grab'}));
  el.addEventListener('mousemove',e=>{if(!d)return;e.preventDefault();el.scrollLeft=sl-(e.pageX-el.offsetLeft-sx)*1.4});}
drag(document.getElementById('galTrack'));drag(document.getElementById('revTrack'));

// ── RATING COUNTER
let cnt=false;const rEl=document.getElementById('rNum');
new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting&&!cnt){cnt=true;let v=4,end=4.7,t=setInterval(()=>{v=Math.min(v+.04,end);rEl.textContent=v.toFixed(1);if(v>=end)clearInterval(t)},16)}})}).observe(rEl);

// ── SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const t=document.querySelector(a.getAttribute('href'));if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth',block:'start'})}}));
