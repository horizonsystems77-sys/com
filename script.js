const IMG={cctv:"assets/cctv.jpg",it:"assets/it.jpg",home:"assets/home.jpg",code:"assets/code.jpg"};
let L=(()=>{try{return localStorage.getItem('hz')}catch(e){}})()||'ar',cat='web';
const t=s=>s.split('|')[L=='ar'?0:1];
const $=s=>document.querySelector(s);
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
<h2>${t('لماذا تحتاجها؟|Why you need it')}</h2><div class="why">${s.why.map(w=>`<div class="card rv"><h3>${t(w[0])}</h3><p>${t(w[1])}</p></div>`).join('')}</div>`
+(s.offer.length?`<div class="offer rv"><h3 style="margin-bottom:10px">${t('ما نقدمه|What we offer')}</h3><ul>${s.offer.map(o=>`<li>${t(o)}</li>`).join('')}</ul>${s.note?`<p class="note">${t(s.note)}</p>`:''}</div><div class="cta rv"><h3>${t('جاهز نبدأ؟|Ready to start?')}</h3><a class="btn" href="#contact">${t('تواصل معنا|Contact us')}</a></div>`:'')}
function render(){
document.documentElement.lang=L;document.documentElement.dir=L=='ar'?'rtl':'ltr';
$('#lang').textContent=L=='ar'?'English':'العربية';
$('#nav').innerHTML=[['home','الرئيسية|Home'],['about','من نحن|About'],...S.map(s=>[s.id,NV[s.id]]),['contact','تواصل معنا|Contact']].map(n=>`<a href="#${n[0]}" class="${n[0]==cur?'on':''}">${t(n[1])}</a>`).join('');
document.querySelectorAll('[data-t]').forEach(e=>e.textContent=t(e.dataset.t));
document.querySelectorAll('[data-p]').forEach(e=>e.placeholder=t(e.dataset.p));
$('#homeSv').innerHTML=S.map(s=>`<a href="#${s.id}" class="hc"><img src="${IMG[s.img]}" alt=""><div class="ic">${s.ic}</div><h3 style="margin-top:8px">${t(s.t)}</h3><p>${t(s.s)}</p><b>${t('اكتشف القسم|Explore')} ${L=='ar'?'←':'→'}</b></a>`).join('');
S.forEach(s=>{$('#top-'+s.id).innerHTML=svcHTML(s)});
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