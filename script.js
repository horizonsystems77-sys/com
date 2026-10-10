const IMG={cctv:"assets/cctv.jpg",it:"assets/it.jpg",home:"assets/home.jpg",code:"assets/code.jpg"};
let L=(()=>{try{return localStorage.getItem('hz')}catch(e){}})()||'ar',cat='web';
const t=s=>s.split('|')[L=='ar'?0:1];
const $=s=>document.querySelector(s);
const VS={};document.querySelectorAll('.vs').forEach(e=>VS[e.dataset.s]=e);
const S=[
{id:'cctv',img:'cctv',ic:'📹',t:'كاميرات المراقبة والأمان|CCTV & security',s:'راقب ممتلكاتك على مدار الساعة|Watch over your property around the clock',
intro:'نركّب ونبرمج أنظمة كاميرات المراقبة وأجهزة NVR/DVR مع المراقبة عن بُعد، لتطمئن على بيتك أو عملك في أي وقت.|We install and program CCTV systems and NVR/DVR recorders with remote viewing, so you can check on your home or business at any time.',
why:[['ردع السرقة والتخريب|Deters theft and vandalism','وجود الكاميرات الظاهرة يقلل محاولات الاعتداء قبل حدوثها.|Visible cameras discourage break-ins before they happen.'],['مراقبة عن بُعد|Remote viewing','شاهد المكان مباشرة من هاتفك أينما كنت.|See the place live from your phone, wherever you are.'],['تسجيلات كدليل|Recordings as evidence','تسجيل واضح يفيدك عند أي خلاف أو حادثة.|Clear footage helps when there is a dispute or incident.'],['إدارة أفضل|Better management','تابع المداخل والمخازن والعمل اليومي بدقة.|Keep track of entrances, stock rooms and daily work.']],
offer:['كاميرات Hikvision|Hikvision cameras','أجهزة NVR / DVR|NVR / DVR recorders','تركيب وبرمجة|Installation and setup','مراقبة من الهاتف|Phone monitoring','انترفون|Intercom systems'],
note:'فرع الجيزة – مصر متخصص بالكاميرات والانترفون فقط.|Our Giza – Egypt branch handles cameras and intercom only.'},
{id:'it',img:'it',ic:'💻',t:'حلول IT والشبكات|IT & network solutions',s:'شبكة مستقرة وبنية تقنية جاهزة|A stable network and solid infrastructure',
intro:'نجهّز الشبكات وأنظمة Wi-Fi والبنية التقنية للشركات والمنازل بحيث يعمل كل شيء بثبات وأمان.|We set up networks, Wi-Fi and technical infrastructure for companies and homes so everything runs reliably and safely.',
why:[['اتصال مستقر|Reliable connection','شبكة منظمة تعني إنترنت أسرع وانقطاعات أقل.|A well-planned network means faster internet and fewer drops.'],['تغطية Wi-Fi كاملة|Full Wi-Fi coverage','إشارة قوية في كل زاوية من المكتب أو المنزل.|Strong signal in every corner of the office or home.'],['حماية البيانات|Data protection','إعدادات صحيحة تحمي أجهزتك وملفاتك.|Correct configuration protects your devices and files.'],['جاهزية للتوسع|Ready to grow','بنية تتسع مع نمو عملك دون إعادة تركيب.|Infrastructure that grows with your business, no rebuild.']],
offer:['تركيب وإعداد الشبكات|Network installation and setup','أنظمة Wi-Fi|Wi-Fi systems','البنية التحتية التقنية|Technical infrastructure','حلول تقنية المعلومات|IT solutions','دعم وصيانة|Support and maintenance'],note:''},
{id:'smart',img:'home',ic:'🏠',t:'المنازل الذكية|Smart home',s:'تحكم ببيتك من مكان واحد|Control your home from one place',
intro:'نحوّل منزلك إلى مكان أكثر راحة وأمانًا، بالتحكم بالإضاءة والأجهزة والأنظمة بطريقة عملية وحديثة.|We make your home more comfortable and secure, controlling lighting, devices and systems in a practical, modern way.',
why:[['راحة يومية|Everyday comfort','أضواء وأجهزة تعمل بلمسة أو بجدول تحدده.|Lights and devices that run on a tap or a schedule you set.'],['توفير في الطاقة|Energy savings','لا ينسى الضوء مشتعلًا، وتتحكم بالاستهلاك.|Never leave a light on by mistake, and manage consumption.'],['أمان مدمج|Built-in security','اربط الكاميرات والإنذار بنفس التطبيق.|Connect cameras and alarms in the same app.'],['منزل عصري|A modern home','تجربة سكن حديثة ترفع قيمة العقار.|A modern living experience that adds value to the property.']],
offer:['إضاءة ذكية|Smart lighting','تحكم بالأجهزة|Device control','تحكم من الجوال|Mobile control','أتمتة المنزل|Home automation','ربط الأمان والكاميرات|Security and camera integration'],note:''},
{id:'web',img:'code',ic:'🌐',t:'تصميم وتطوير المواقع|Website design & development',s:'موقع احترافي يمثّل عملك|A professional site that represents your business',
intro:'نصمم مواقع عصرية ومتجاوبة تناسب الشركات والمطاعم والمشاريع على اختلافها، بالعربية والإنجليزية.|We design modern, responsive sites for companies, restaurants and projects of every kind, in Arabic and English.',
why:[['حضور دائم|Always open','موقعك يعرّف بعملك على مدار الساعة.|Your site presents your business around the clock.'],['ثقة العملاء|Customer trust','واجهة مرتبة تعطي انطباعًا احترافيًا من أول زيارة.|A tidy interface gives a professional first impression.'],['عملاء جدد|New customers','يظهر عملك لمن يبحث عنه في Google.|Your business shows up for people searching on Google.'],['تواصل سريع|Quick contact','أزرار واتساب واتصال وخريطة بنقرة واحدة.|WhatsApp, call and map buttons one tap away.']],
offer:[],note:''}];
const NV={cctv:'الكاميرات|CCTV',it:'الشبكات|IT',smart:'المنزل الذكي|Smart Home',web:'المواقع|Websites'};
const ST='التواصل وفهم احتياجاتك|Contact & understand your needs;تحديد الصفحات والخصائص|Define pages & features;عرض السعر|Quotation;الدفعة الأولى|First payment;تصميم الواجهة|Interface design;التطوير والبرمجة|Development;مراجعتك|Your review;التعديلات المتفق عليها|Agreed revisions;ربط الدومين والاستضافة|Domain & hosting;التسليم النهائي|Final delivery'.split(';');
const C={
web:['مواقع الشركات|Business sites',[
['STARTER','أفراد ومشاريع صغيرة|Individuals & small projects','الأبسط: حضور سريع على الإنترنت|The simplest: a fast online presence',['حتى 4 صفحات|Up to 4 pages','متجاوب وأزرار WhatsApp والاتصال|Responsive, WhatsApp & call buttons','Google Maps ونموذج تواصل|Google Maps & contact form','SEO أساسي ورفع الموقع|Basic SEO & hosting setup','التنفيذ 3–5 أيام|3–5 days']],
['BUSINESS','مطاعم وشركات ومكاتب|Restaurants, companies, offices','الأنسب لمعظم الأعمال: تصميم مخصص وعربي + English|Best for most: custom design, Arabic + English',['حتى 8 صفحات|Up to 8 pages','معرض صور ومشاريع|Gallery & projects','ربط الدومين وSSL وSearch Console|Domain, SSL & Search Console','تدريب على استخدام الموقع|Training on the site','التنفيذ 5–10 أيام|5–10 days'],1],
['PROFESSIONAL','شركات ومؤسسات كبيرة|Large companies & institutions','الأكمل: UI/UX مخصص ولوحة تحكم ودعم بعد التسليم|The most complete: custom UI/UX, dashboard, post-launch support',['صفحات حسب المشروع|Pages by project scope','نظام إدارة محتوى ولوحة تحكم|CMS & control panel','أخبار / مدونة وطلب عروض أسعار|News/blog & quote requests','SEO متقدم وGoogle Analytics|Advanced SEO & Analytics','نسخ احتياطي ودعم|Backups & support']]]],
rest:['مواقع المطاعم|Restaurants',[
['BASIC','مطعم يريد حضورًا واضحًا|A restaurant wanting a clear presence','منيو ومعلومات وأوقات عمل|Menu, info and opening hours',['الرئيسية وقائمة الطعام|Home & menu','معرض الصور|Photo gallery','WhatsApp وGoogle Maps|WhatsApp & Google Maps','عربي + English|Arabic + English']],
['PRO','مطعم يدير منيو متغيّرًا|A restaurant with a changing menu','منيو تفاعلي تعدّله بنفسك بلا كود|Interactive menu you edit yourself, no code',['لوحة إدارة للمنيو|Menu admin panel','عروض وخصومات|Offers & discounts','طلب عبر WhatsApp|Order via WhatsApp','QR Code للمنيو|Menu QR code'],1],
['ADVANCED','مطعم يريد طلبات أونلاين|A restaurant taking online orders','نظام طلبات كامل مع دفع إلكتروني|Full ordering system with online payment',['سلة مشتريات وحسابات عملاء|Cart & customer accounts','إدارة الطلبات والمنتجات|Order & product management','كوبونات وعروض|Coupons & offers','دفع حسب البوابة المتاحة|Payment via available gateway']]]],
con:['المقاولات والعقارات|Construction & real estate',[
['BASIC','شركة تحتاج واجهة تعريفية|A firm needing a showcase site','تعريف بالشركة ومشاريعها|Company and projects overview',['الرئيسية ومن نحن وخدماتنا|Home, about, services','مشاريعنا ومعرض الصور|Projects & gallery','WhatsApp وGoogle Maps|WhatsApp & Google Maps']],
['PRO','شركة تريد استقبال طلبات|A firm that wants leads','صفحة تفصيلية لكل مشروع وطلب عرض سعر|A detail page per project and quote requests',['تصميم مخصص عربي + English|Custom design, Arabic + English','معرض صور متقدم|Advanced gallery','نموذج طلب عرض سعر|Quote request form','إحصائيات الزيارات وSEO|Visit stats & SEO','لوحة إدارة للمحتوى|Content admin panel'],1]]],
shop:['المتاجر الإلكترونية|E-commerce',[
['BASIC','متجر يبدأ البيع|A store starting to sell','سلة وCheckout وإدارة الطلبات|Cart, checkout and order management',['منتجات وتصنيفات|Products & categories','لوحة تحكم|Control panel','WhatsApp|WhatsApp','تصميم متجاوب|Responsive design']],
['PRO','متجر يكبر ويحتاج إدارة كاملة|A growing store needing full control','مخزون وتقارير ودفع إلكتروني|Inventory, reports and online payment',['حسابات العملاء|Customer accounts','إدارة المخزون|Inventory','كوبونات وعروض|Coupons & offers','تقارير وGoogle Analytics|Reports & Analytics','لوحة تحكم متقدمة|Advanced dashboard'],1]]]};
function svcHTML(s){return `<div class="banner"><div><h2>${t(s.t)}</h2><p>${t(s.intro)}</p><a class="btn" href="#contact">${t('اطلب الخدمة|Request this service')}</a></div><div class="pic"><img src="${IMG[s.img]}" alt=""></div></div>
<h2>${t('لماذا تحتاجها؟|Why you need it')}</h2><div class="why">${s.why.map(w=>`<div class="card rv"><h3>${t(w[0])}</h3><p>${t(w[1])}</p></div>`).join('')}</div><div id="vslot-${s.id}"></div>`
+(s.offer.length?`<div class="offer rv"><h3 style="margin-bottom:10px">${t('ما نقدمه|What we offer')}</h3><ul>${s.offer.map(o=>`<li>${t(o)}</li>`).join('')}</ul>${s.note?`<p class="note">${t(s.note)}</p>`:''}</div><div class="cta rv"><h3>${t('جاهز نبدأ؟|Ready to start?')}</h3><a class="btn" href="#contact">${t('تواصل معنا|Contact us')}</a></div>`:'')}
function render(){
document.documentElement.lang=L;document.documentElement.dir=L=='ar'?'rtl':'ltr';
$('#lang').textContent=L=='ar'?'English':'العربية';
$('#nav').innerHTML=[['home','الرئيسية|Home'],['about','من نحن|About'],...S.map(s=>[s.id,NV[s.id]]),['contact','تواصل معنا|Contact']].map(n=>`<a href="#${n[0]}" class="${n[0]==cur?'on':''}">${t(n[1])}</a>`).join('');
document.querySelectorAll('[data-t]').forEach(e=>e.textContent=t(e.dataset.t));
document.querySelectorAll('[data-p]').forEach(e=>e.placeholder=t(e.dataset.p));
$('#homeSv').innerHTML=S.map(s=>`<a href="#${s.id}" class="hc"><img src="${IMG[s.img]}" alt=""><div class="ic">${s.ic}</div><h3 style="margin-top:8px">${t(s.t)}</h3><p>${t(s.s)}</p><b>${t('اكتشف القسم|Explore')} ${L=='ar'?'←':'→'}</b></a>`).join('');
S.forEach(s=>{$('#top-'+s.id).innerHTML=svcHTML(s);const sl=$('#vslot-'+s.id);if(sl&&VS[s.id])sl.replaceWith(VS[s.id])});
$('#steps').innerHTML=ST.map(x=>`<div>${t(x)}</div>`).join('');
$('#tabs').innerHTML=Object.keys(C).map(k=>`<button class="${k==cat?'on':''}" data-k="${k}">${t(C[k][0])}</button>`).join('');
const ts=C[cat][1];
$('#tiers').innerHTML=ts.map((x,i)=>`<div class="tier ${x[4]?'top':''}">${x[4]?`<span class="tag">${t('الأكثر طلبًا|Most chosen')}</span>`:''}<div class="lv">${ts.map((_,j)=>`<i class="${j<=i?'f':''}"></i>`).join('')}</div><h3>${x[0]}</h3><div class="for">${t(x[1])}</div><div class="key">${t(x[2])}</div><ul>${x[3].map(f=>`<li>${t(f)}</li>`).join('')}</ul></div>`).join('');
reveal();}
let io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('v');io.unobserve(e.target)}}),{threshold:.12});
function reveal(){document.querySelectorAll('.page.on .rv:not(.v)').forEach(e=>io.observe(e))}
let cur='home';function route(){const h=(location.hash||'#home').slice(1);cur=document.getElementById('p-'+h)?h:'home';const id='p-'+cur;
document.querySelectorAll('.page').forEach(p=>p.classList.toggle('on',p.id==id));
$('#nav').classList.remove('open');scrollTo(0,0);render();}
$('#lang').onclick=()=>{L=L=='ar'?'en':'ar';try{localStorage.setItem('hz',L)}catch(e){}render()};
$('#bg').onclick=()=>$('#nav').classList.toggle('open');
$('#tabs').onclick=e=>{if(e.target.dataset.k){cat=e.target.dataset.k;render()}};
$('#f').onsubmit=e=>{e.preventDefault();const m=`${t('الاسم|Name')}: ${$('#n').value}\n${t('الخدمة|Service')}: ${$('#s').value}\n${$('#m').value}`;window.open('https://wa.me/963956386378?text='+encodeURIComponent(m),'_blank')};
addEventListener('hashchange',route);
route();
/* ===== Websites page: scroll-driven "site being built" animation ===== */
(()=>{
const box=$('#scrub');if(!box)return;
const stick=box.querySelector('.stick'),code=$('#scCode'),view=$('#scView'),live=$('#scLive'),fill=$('#scFill'),pane=$('#scPrev');
const sh=view.attachShadow({mode:'open'});
const caps=[...box.querySelectorAll('.sc-cap>div')],chips=[...box.querySelectorAll('.sc-chips span')];
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const TF=150,IN=12,OUT=20,cl=(v,a=0,b=1)=>Math.min(b,Math.max(a,v));
const CODE=`<style>
  .card {
    padding: 48px 56px;
    border-radius: 24px;
    background: linear-gradient(135deg, #1f8bff, #35c4ff);
    color: #fff;
    font-family: sans-serif;
    text-align: center;
    box-shadow: 0 20px 50px #0004;
  }
  button {
    margin-top: 20px;
    padding: 12px 28px;
    border: 0;
    border-radius: 999px;
    font-weight: 700;
    font-size: 16px;
  }
</style>

<div class="card">
  <h1>Horizon Systems</h1>
  <p>Built line by line.</p>
  <button>Get started</button>
</div>`;
const esc=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const hl=src=>esc(src).replace(/(&lt;\/?[a-z0-9]+|&gt;)|(\.[a-z-]+)(?=\s*\{)|([a-z-]+)(?=:\s)|(#[0-9a-f]{3,6}\b|\d+px|\b\d+\b)/gi,
 (m,a,b,c,d)=>a?`<span class="t">${a}</span>`:b?`<span class="s">${b}</span>`:c?`<span class="p">${c}</span>`:`<span class="n">${d}</span>`);
let sc=1,fw=1,fh=1,size='';
const wrap=h=>`<style>:host{display:grid;place-items:center;width:100%;height:100%;overflow:hidden}#f{display:inline-block;transform:scale(${sc})}</style><div id="f">${h}</div>`;
function measure(){
  sc=1;sh.innerHTML=wrap(CODE);const f=sh.getElementById('f');fw=f.offsetWidth||1;fh=f.offsetHeight||1;
  sc=Math.min(1,(view.clientWidth-24)/fw,(view.clientHeight-24)/fh);size=view.clientWidth+'x'+view.clientHeight;
}
function frame(fr){
  fr=Math.max(0,Math.min(TF-1,Math.round(fr)));
  const p=cl((fr-IN)/(TF-IN-OUT)),typed=CODE.slice(0,Math.floor(p*CODE.length));
  code.innerHTML=hl(typed)+((p>0&&p<1)||Math.floor(fr/8)%2===0?'<span class="caret"></span>':'');
  code.scrollTop=code.scrollHeight;sh.innerHTML=wrap(typed);
}
let cur=0,last=-1;
function tick(){
  requestAnimationFrame(tick);
  if(!box.offsetHeight)return;                                   // page hidden
  const top=parseFloat(getComputedStyle(stick).top)||0,r=box.getBoundingClientRect();
  const target=cl((top-r.top)/(box.offsetHeight-stick.offsetHeight));
  cur=reduce?target:cur+(target-cur)*.15;if(Math.abs(cur-target)<.0004)cur=target;
  const sz=view.clientWidth+'x'+view.clientHeight;
  if(sz!==size)measure();else if(cur===last)return;
  last=cur;frame(cur*(TF-1));
  caps.forEach((el,i)=>{const a=[0,.14,.5,.86][i],b=[.14,.5,.86,1.01][i],o=cl((cur-a)/.04)*cl((b-cur)/.04);el.style.opacity=o;el.style.transform=`translateY(${(1-o)*16}px)`});
  const idx=cur<.14?0:cur<.5?1:cur<.86?2:3;chips.forEach((c,i)=>c.classList.toggle('on',i<=idx));
  fill.style.width=cur*100+'%';live.classList.toggle('on',cur>.9);
  if(!reduce&&innerWidth>860){const e=cl(cur/.9);pane.style.transform=`rotateY(${(1-e)*-14}deg) scale(${.94+.06*e})`}else pane.style.transform='';
}
tick();
})();

/* ===== Service pages (cameras / smart home / IT): video scenes driven by scroll ===== */
(()=>{
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const cl=(x,a=0,b=1)=>Math.min(b,Math.max(a,x)),sg=(f,a,b)=>cl((f-a)/(b-a)),ea=x=>1-Math.pow(1-x,3);
const V={
cam:()=>({
caps:[[0,'تثبيت لوحة الحائط|Mount the wall plate'],[25,'إحكام البراغي|Fix the screws'],[40,'تركيب الذراع|Attach the arm'],[58,'تثبيت جسم الكاميرا|Mount the camera body'],[80,'تركيب العدسة|Insert the lens'],[98,'إضافة الغطاء والكابل|Add sunshade & cable'],[125,'تشغيل الكاميرا والتسجيل|Power on, recording']],
svg:`<svg viewBox="0 0 1280 720" style="background:radial-gradient(1100px 600px at 70% 30%,#1b2658,#0a0f22)">
<defs><linearGradient id="g" x1="0" x2="1"><stop offset="0" stop-color="#38bdf8" stop-opacity=".45"/><stop offset="1" stop-color="#38bdf8" stop-opacity="0"/></linearGradient></defs>
<rect x="0" y="0" width="380" height="720" fill="#1a2144"/><rect x="376" y="0" width="4" height="720" fill="#2c3668"/>
<path id="cable" d="M392 430C392 530 300 570 240 700" stroke="#8b95c9" stroke-width="6" fill="none" pathLength="1" stroke-dasharray="1" stroke-dashoffset="1"/>
<g id="plate"><rect x="380" y="290" width="26" height="140" rx="6" fill="#aab4e6"/></g>
<g id="scr"><g stroke="#2b3460" stroke-width="3"><circle cx="393" cy="312" r="7" fill="#e5e9ff"/><circle cx="393" cy="408" r="7" fill="#e5e9ff"/><path d="M389 312h8M389 408h8"/></g></g>
<g id="arm"><rect x="406" y="350" width="112" height="22" rx="8" fill="#c9d1ff"/></g>
<g id="body"><rect x="520" y="318" width="262" height="84" rx="18" fill="#f1f4ff"/><rect x="540" y="372" width="150" height="8" rx="4" fill="#cbd2f5"/></g>
<g id="joint"><circle cx="520" cy="361" r="24" fill="#9aa6e0"/><circle cx="520" cy="361" r="9" fill="#5b679f"/></g>
<g id="shade"><rect x="520" y="298" width="296" height="20" rx="8" fill="#3a4580"/></g>
<g id="lens"><circle cx="782" cy="360" r="48" fill="#111833"/><circle cx="782" cy="360" r="32" fill="#0b1226" stroke="#38bdf8" stroke-width="4"/><circle cx="782" cy="360" r="14" fill="#1d4ed8"/><circle cx="774" cy="352" r="5" fill="#fff" opacity=".8"/></g>
<polygon id="cone" points="830,360 1250,150 1250,570" fill="url(#g)" opacity="0"/>
<circle id="led" cx="562" cy="340" r="7" fill="#ef4444" opacity="0"/></svg>`,
R($,f){
 const pl=(id,dx,dy,a,b)=>{const t=ea(sg(f,a,b)),e=$(id);e.setAttribute('transform',`translate(${dx*(1-t)} ${dy*(1-t)})`);e.style.opacity=t};
 pl('#plate',-120,0,4,24);pl('#scr',-90,-40,24,40);pl('#arm',0,-160,40,58);pl('#joint',0,-160,44,60);
 pl('#body',260,0,58,80);pl('#lens',320,0,78,98);pl('#shade',0,-140,98,112);
 $('#cable').setAttribute('stroke-dashoffset',1-ea(sg(f,106,124)));
 $('#cone').setAttribute('opacity',ea(sg(f,128,142)));
 $('#led').setAttribute('opacity',f>=125?(Math.floor(f/6)%2?1:.25):0);
}}),

home:()=>{
const T=[30,65,100],Y=[300,385,470],LAB=['الإضاءة|Light','قفل الباب|Door lock','المكيّف|Air con'],TG=[[745,440],[940,550],[1050,430]];
const KF=[[0,540,680],[T[0]-8,395,Y[0]],[T[0]+10,395,Y[0]],[T[1]-8,395,Y[1]],[T[1]+10,395,Y[1]],[T[2]-8,395,Y[2]],[T[2]+10,395,Y[2]],[149,540,700]];
const kf=f=>{for(let i=1;i<KF.length;i++)if(f<=KF[i][0]){const a=KF[i-1],b=KF[i],t=ea(sg(f,a[0],b[0]));return[a[1]+(b[1]-a[1])*t,a[2]+(b[2]-a[2])*t]}return[KF[7][1],KF[7][2]]};
return{
caps:[[0,'افتح التطبيق|Open the app'],[T[0],'شغّل الإضاءة|Turn on the lights'],[T[1],'افتح قفل الباب|Unlock the door'],[T[2],'برّد المنزل|Cool the house'],[125,'منزلك في يدك|Your home, in your hand']],
svg:`<svg viewBox="0 0 1280 720" style="background:radial-gradient(1100px 600px at 70% 30%,#1b2658,#0a0f22)">
<defs><radialGradient id="gl"><stop offset="0" stop-color="#fde68a" stop-opacity=".8"/><stop offset="1" stop-color="#fde68a" stop-opacity="0"/></radialGradient></defs>
<g id="house"><polygon points="610,330 880,200 1150,330" fill="#2a3470"/><rect x="640" y="330" width="480" height="290" fill="#1d2552" stroke="#3a4680" stroke-width="3"/>
<rect x="690" y="400" width="110" height="80" rx="6" fill="#0d1330"/><rect id="win" x="690" y="400" width="110" height="80" rx="6" fill="#fde68a" opacity="0"/><circle id="glow" cx="745" cy="440" r="150" fill="url(#gl)" opacity="0"/>
<rect x="890" y="480" width="100" height="140" rx="6" fill="#0d1330"/><rect id="dg" x="890" y="480" width="100" height="140" rx="6" fill="#22c55e" opacity="0"/>
<g transform="translate(940 550)"><path d="M-12 -4v-10a12 12 0 0124 0v10" stroke="#fff" stroke-width="5" fill="none"/><rect x="-18" y="-4" width="36" height="28" rx="5" fill="#ef4444"/><rect id="lk" x="-18" y="-4" width="36" height="28" rx="5" fill="#22c55e" opacity="0"/></g>
<text id="dt" x="940" y="660" text-anchor="middle" fill="#cfd6ff" font-size="20"></text>
<circle cx="1050" cy="430" r="36" fill="#0d1330" stroke="#3a4680" stroke-width="4"/><circle id="ac" cx="1050" cy="430" r="36" fill="none" stroke="#38bdf8" stroke-width="6" opacity="0"/><text id="tp" x="1050" y="438" text-anchor="middle" fill="#fff" font-size="24" font-weight="700">28°</text></g>
<g id="sigs"></g>
<g id="phone"><rect x="170" y="100" width="300" height="520" rx="42" fill="#0f1530" stroke="#4a57a0" stroke-width="5"/><text id="pt" x="320" y="170" text-anchor="middle" fill="#fff" font-size="26" font-weight="700"></text><g id="rows"></g>
<circle id="tapr" r="10" fill="none" stroke="#fff" stroke-width="4" opacity="0"/><circle id="fg" r="16" fill="#fff" opacity=".75"/></g></svg>`,
init($){
 $('#rows').innerHTML=Y.map((y,i)=>`<text id="lb${i}" x="205" y="${y+8}" fill="#cfd6ff" font-size="22"></text><rect x="360" y="${y-17}" width="70" height="34" rx="17" fill="#2a3470"/><rect id="tr${i}" x="360" y="${y-17}" width="70" height="34" rx="17" fill="#22c55e" opacity="0"/><circle id="kn${i}" cx="377" cy="${y}" r="13" fill="#fff"/>`).join('');
 $('#sigs').innerHTML=Y.map((y,i)=>`<path id="sp${i}" d="M430 ${y} Q640 ${y-220} ${TG[i][0]} ${TG[i][1]}" fill="none" stroke="#38bdf8" stroke-width="3" stroke-dasharray="6 8" opacity="0"/><circle id="sd${i}" r="9" fill="#38bdf8" opacity="0"/>`).join('');
},
R($,f,t){
 $('#phone').setAttribute('transform',`translate(${-320*(1-ea(sg(f,0,16)))} 0)`);
 $('#pt').textContent=t('المنزل الذكي|Smart Home');LAB.forEach((l,i)=>$('#lb'+i).textContent=t(l));
 const [fx,fy]=kf(f);$('#fg').setAttribute('cx',fx);$('#fg').setAttribute('cy',fy);
 T.map(x=>ea(sg(f,x,x+8))).forEach((v,i)=>{$('#kn'+i).setAttribute('cx',377+36*v);$('#tr'+i).setAttribute('opacity',v);
  const s=sg(f,T[i],T[i]+18),p=$('#sp'+i),d=$('#sd'+i),on=s>0&&s<1;p.setAttribute('opacity',on?.5:0);d.setAttribute('opacity',on?1:0);
  if(on){const q=p.getPointAtLength(p.getTotalLength()*ea(s));d.setAttribute('cx',q.x);d.setAttribute('cy',q.y)}});
 const r=$('#tapr'),k=T.findIndex(x=>f>=x&&f<x+10);
 if(k>=0){const u=sg(f,T[k],T[k]+10);r.setAttribute('cx',395);r.setAttribute('cy',Y[k]);r.setAttribute('r',12+28*u);r.setAttribute('opacity',1-u)}else r.setAttribute('opacity',0);
 const l=ea(sg(f,T[0]+10,T[0]+22)),d=ea(sg(f,T[1]+10,T[1]+22)),a=ea(sg(f,T[2]+10,T[2]+30));
 $('#win').setAttribute('opacity',l);$('#glow').setAttribute('opacity',l);
 $('#lk').setAttribute('opacity',d);$('#dg').setAttribute('opacity',d*.25);$('#dt').textContent=t(d>.5?'الباب: مفتوح|Door: Unlocked':'الباب: مقفل|Door: Locked');
 $('#ac').setAttribute('opacity',a);$('#tp').textContent=Math.round(28-6*a)+'°';
}}},

srv:()=>{
const SV=[[220,170],[220,500],[1060,170],[1060,500]];
const CB=['M640 135V330','M570 360C450 360 400 170 295 170','M570 360C450 360 400 500 295 500','M710 360C830 360 880 170 985 170','M710 360C830 360 880 500 985 500'];
const ST=[35,50,62,74,86],EN=[50,65,77,89,101];
let paths,pks;
const srv=(x,y,i)=>`<g id="n${i}"><rect x="${x-75}" y="${y-95}" width="150" height="190" rx="14" fill="#131a33" stroke="#3a4680" stroke-width="3"/>`+[-60,-10,40].map(o=>`<rect x="${x-60}" y="${y+o}" width="120" height="38" rx="6" fill="#0b1020"/><circle class="L${i}" cx="${x+42}" cy="${y+o+19}" r="6" fill="#ef4444"/><rect x="${x-48}" y="${y+o+15}" width="50" height="8" rx="4" fill="#27315f"/>`).join('')+'</g>';
return{
caps:[[0,'تركيب السيرفرات|Installing the servers'],[35,'ربط السويتش بالإنترنت|Connecting the switch to the internet'],[50,'ربط السيرفرات بالشبكة|Linking servers to the network'],[105,'كل الأنظمة تعمل|All systems online']],
svg:`<svg viewBox="0 0 1280 720" style="background:radial-gradient(1100px 600px at 50% 40%,#16224f,#080c1c)"><g id="cab"></g><g id="pk"></g><g id="nodes"></g></svg>`,
init($,root){
 $('#cab').innerHTML=CB.map(d=>`<path d="${d}" fill="none" stroke="#2c3668" stroke-width="5"/><path d="${d}" fill="none" stroke="#38bdf8" stroke-width="5" pathLength="1" stroke-dasharray="1" stroke-dashoffset="1"/>`).join('');
 $('#pk').innerHTML=CB.map(()=>'<circle r="7" fill="#e0f2fe"/><circle r="7" fill="#e0f2fe"/>').join('');
 $('#nodes').innerHTML=SV.map((p,i)=>srv(p[0],p[1],i+1)).join('')+
 `<g id="n0"><circle cx="610" cy="100" r="30" fill="#1e3a8a" stroke="#60a5fa" stroke-width="3"/><circle cx="645" cy="84" r="38" fill="#1e3a8a" stroke="#60a5fa" stroke-width="3"/><circle cx="680" cy="100" r="30" fill="#1e3a8a" stroke="#60a5fa" stroke-width="3"/><rect x="606" y="92" width="78" height="40" fill="#1e3a8a"/><text id="tI" x="645" y="112" text-anchor="middle" fill="#fff" font-size="18" font-weight="700"></text></g>
 <g id="n5"><rect x="570" y="330" width="140" height="60" rx="12" fill="#131a33" stroke="#60a5fa" stroke-width="3"/>${[0,1,2,3].map(k=>`<circle class="LS" cx="${600+k*26.6}" cy="360" r="6" fill="#22c55e"/>`).join('')}<text id="tS" x="640" y="415" text-anchor="middle" fill="#8b95c9" font-size="16"></text></g>`;
 paths=[...root.querySelectorAll('#cab path:nth-child(2n)')];pks=[...root.querySelectorAll('#pk circle')];
},
R($,f,t,root){
 const pop=(i,x,y,a,b)=>{const u=ea(sg(f,a,b)),e=$('#n'+i);e.setAttribute('transform',`translate(${x} ${y}) scale(${u}) translate(${-x} ${-y})`);e.style.opacity=u};
 SV.forEach((p,i)=>pop(i+1,p[0],p[1],i*7,i*7+16));pop(0,645,100,14,30);pop(5,640,360,20,34);
 $('#tI').textContent=t('الإنترنت|Internet');$('#tS').textContent=t('سويتش|Switch');
 paths.forEach((p,i)=>{p.setAttribute('stroke-dashoffset',1-ea(sg(f,ST[i],EN[i])));
  const L=p.getTotalLength(),on=f>=EN[i]+3;
  [0,1].forEach(k=>{const c=pks[i*2+k];c.setAttribute('opacity',on?1:0);if(on){const q=p.getPointAtLength(L*(((f-EN[i])/32+k*.5)%1));c.setAttribute('cx',q.x);c.setAttribute('cy',q.y)}});
  if(i>0)root.querySelectorAll('.L'+i).forEach((e,j)=>{const ok=f>=EN[i]+j*3;e.setAttribute('fill',ok?'#22c55e':'#ef4444');e.setAttribute('opacity',ok&&f>=105?(Math.floor((f+j*4)/5)%2?1:.45):1)})});
}}}
};

Object.values(VS).forEach(el=>{
  const mk=V[el.dataset.v];if(!mk)return;const v=mk();
  const stick=el.querySelector('.stick'),wrap=el.querySelector('.vwrap'),host=el.querySelector('.vd'),h3=el.querySelector('.vcap h3'),
        fill=el.querySelector('.sc-bar2 i'),cnt=el.querySelector('.cnt');
  const root=host.attachShadow({mode:'open'});
  root.innerHTML=`<style>:host{display:block;direction:ltr;border-radius:14px;overflow:hidden;border:1px solid rgba(80,160,255,.18)}svg{display:block;width:100%;height:100%;font-family:'Cairo','Sora',system-ui,sans-serif}</style>`+v.svg;
  const $=s=>root.querySelector(s);if(v.init)v.init($,root);const svg=root.querySelector('svg');
  let cur=0,last=-1,size='',lastL='',ci=-1;
  (function tick(){
    requestAnimationFrame(tick);
    if(!el.isConnected||!el.offsetHeight)return;                  // page hidden
    const top=parseFloat(getComputedStyle(stick).top)||0,r=el.getBoundingClientRect();
    const target=cl((top-r.top)/(el.offsetHeight-stick.offsetHeight));
    cur=reduce?target:cur+(target-cur)*.15;if(Math.abs(cur-target)<.0004)cur=target;
    let force=false;const mob=innerWidth<=860,sz=(mob?'m':'d')+wrap.clientWidth+'x'+(mob?0:wrap.clientHeight);
    if(sz!==size){size=sz;
      if(mob){const k=wrap.clientWidth/1060;svg.setAttribute('viewBox','130 36 1060 648');host.style.width=1060*k+'px';host.style.height=648*k+'px'}
      else{const k=Math.min(wrap.clientWidth/1280,wrap.clientHeight/720);svg.setAttribute('viewBox','0 0 1280 720');host.style.width=1280*k+'px';host.style.height=720*k+'px'}
      force=true}
    if(L!==lastL){lastL=L;force=true}
    if(cur===last&&!force)return;last=cur;
    const f=cur*149;v.R($,f,t,root);
    let i=0;v.caps.forEach((c,j)=>{if(f>=c[0])i=j});
    if(i!==ci||force){if(i!==ci){h3.classList.remove('sw');void h3.offsetWidth;h3.classList.add('sw')}ci=i;h3.textContent=t(v.caps[i][1]);cnt.textContent=(i+1)+' / '+v.caps.length}
    fill.style.width=cur*100+'%';
  })();
});
})();
