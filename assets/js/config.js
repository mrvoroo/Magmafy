/**
 * ============================================================
 *  Magmafy — إعدادات الموقع (الملف الوحيد للبيانات العامة)
 * ============================================================
 *  - عدّل الأرقام ومعلومات التواصل وروابط المنصات من هنا.
 *  - أرقام شريط الثقة تُعدَّل من مصفوفة stats فقط.
 *  - دراسات الحالة والشهادات تُعدَّل من مصفوفتَي cases و testimonials.
 *    اجعل isSample: false بعد استبدال النموذج ببيانات عميل حقيقي
 *    لتختفي شارة «نموذج توضيحي» تلقائيًا.
 *  - نصوص بقية الأقسام موجودة في index.html وكل قسم مُعلَّم بتعليق <!-- ✎ -->.
 */
window.MAGMAFY_CONFIG = {
  brand: "Magmafy",

  /* ----- التواصل ----- */
  // رقم واتساب بالصيغة الدولية بدون + أو أصفار (مثال: 966501234567)
  whatsappNumber: "966500000000",
  whatsappMessage: "مرحبًا Magmafy، لدي نشاط في مجال الأثاث والديكور وأريد استشارة مجانية لتنمية حساباتي.",
  email: "hello@magmafy.com",
  phone: "+966 50 000 0000",
  address: "نعمل عن بُعد مع عملاء في جميع أنحاء الوطن العربي",
  workingHours: "الأحد – الخميس · 9 ص – 6 م",

  /* ----- روابط المنصات الاجتماعية (اتركها فارغة لإخفاء الأيقونة) ----- */
  social: {
    instagram: "https://instagram.com/magmafy",
    tiktok: "https://tiktok.com/@magmafy",
    snapchat: "https://snapchat.com/add/magmafy",
    pinterest: "https://pinterest.com/magmafy",
    x: "https://x.com/magmafy",
    facebook: "https://facebook.com/magmafy",
    youtube: ""
  },

  /* ----- شريط الثقة (أرقام قابلة للتعديل من هنا فقط) ----- */
  // prefix: قبل الرقم · suffix: بعد الرقم مباشرة (مثل %) · unit: كلمة بعد الرقم (مثل ألف)
  stats: [
    { prefix: "+", value: 120, suffix: "", unit: "", label: "حسابًا في الأثاث والديكور تمت إدارته" },
    { prefix: "+", value: 500, suffix: "", unit: "ألف", label: "وصول لمحتوى عملائنا" },
    { prefix: "+", value: 40, suffix: "%", unit: "", label: "نمو في التفاعل" },
    { prefix: "", value: 85, suffix: "", unit: "", label: "عميلًا سعيدًا" }
  ],

  /* ----- دراسات الحالة -----
   * category يطابق data-filter: home | office | interior | decor | online
   * isSample: true يعرض شارة «نموذج توضيحي» على البطاقة.
   */
  cases: [
    {
      isSample: true,
      category: "home",
      categoryLabel: "أثاث منزلي",
      visual: "v1",
      reel: false,
      platform: "instagram",
      handle: "dar.living",
      title: "عرض الصالات",
      line: "تخفيض حتى 25% على الكنب",
      m1Icon: "i-heart",
      m1: "12.4K",
      m2Icon: "i-comment",
      m2: "842",
      saveIcon: "i-bookmark",
      alt: "صالة معيشة عصرية بكنبة رمادية وعرض تخفيض على الكنب",
      name: "دار ليفنج للأثاث",
      metric: "+60%",
      metricLabel: "زيادة في التفاعل",
      text: "محتوى يعرض القطعة داخل غرفة حقيقية وحملة قصص أسبوعية للعروض رفعت زيارات المعرض خلال 3 أشهر."
    },
    {
      isSample: true,
      category: "interior",
      categoryLabel: "تصميم داخلي",
      visual: "v2",
      reel: true,
      platform: "tiktok",
      handle: "masaha.design",
      title: "قبل وبعد",
      line: "تحويل شقة 140م² في 6 أسابيع",
      m1Icon: "i-eye",
      m1: "150K",
      m2Icon: "i-heart",
      m2: "9.1K",
      saveIcon: "i-send",
      alt: "شقة سكنية قبل وبعد التصميم الداخلي خلال ستة أسابيع",
      name: "مساحة للتصميم الداخلي",
      metric: "150,000",
      metricLabel: "مشاهدة لأفضل ريل",
      text: "سلسلة ريلز قبل وبعد لمشاريع حقيقية جعلت المكتب مرجعًا في مدينته وزادت طلبات المعاينة."
    },
    {
      isSample: true,
      category: "online",
      categoryLabel: "متاجر أونلاين",
      visual: "v3",
      reel: false,
      platform: "snapchat",
      handle: "ranna.store",
      title: "خصم 30%",
      line: "على غرف النوم لمدة 48 ساعة فقط",
      m1Icon: "i-eye",
      m1: "84K",
      m2Icon: "i-cart",
      m2: "1.2K",
      saveIcon: "i-send",
      alt: "غرفة نوم منسّقة مع عرض خصم لمتجر أثاث أونلاين",
      name: "متجر رنّة للأثاث",
      metric: "+40%",
      metricLabel: "رفع عدد الطلبات",
      text: "إعلانات كتالوج على سناب وتيك توك مع اختبارات إبداعية أسبوعية خفّضت تكلفة الطلب الواحد."
    },
    {
      isSample: true,
      category: "office",
      categoryLabel: "أثاث مكتبي",
      visual: "v4",
      reel: false,
      platform: "facebook",
      handle: "maktab.pro",
      title: "جهّز مكتبك",
      line: "أثاث مكاتب متكامل مع التركيب",
      m1Icon: "i-heart",
      m1: "3.8K",
      m2Icon: "i-comment",
      m2: "516",
      saveIcon: "i-send",
      alt: "مكتب عمل بأثاث مكتبي متكامل وخدمة التركيب",
      name: "مكتب برو للأثاث المكتبي",
      metric: "3x",
      metricLabel: "طلبات عروض أسعار مؤهلة",
      text: "حملات تستهدف مديري الشركات وجولات فيديو لمشاريع منفّذة ضاعفت طلبات عروض الأسعار ثلاث مرات."
    },
    {
      isSample: true,
      category: "decor",
      categoryLabel: "ديكور وإكسسوارات",
      visual: "v5",
      reel: false,
      platform: "pinterest",
      handle: "lamsa.decor",
      title: "5 أخطاء تفسد ديكور صالتك",
      line: "خيط من 7 نقاط",
      m1Icon: "i-heart",
      m1: "2.6K",
      m2Icon: "i-comment",
      m2: "340",
      saveIcon: "i-send",
      alt: "ركن ديكور وإكسسوارات مع نصائح لتنسيق الصالة",
      name: "لمسة ديكور",
      metric: "+85%",
      metricLabel: "رسائل من عملاء محتملين",
      text: "محتوى نصائح تنسيق يبني الخبرة والثقة، وحضور أقوى على Instagram وPinterest جلب عملاء من أول شهرين."
    },
    {
      isSample: true,
      category: "home",
      categoryLabel: "أثاث منزلي",
      visual: "v6",
      reel: true,
      platform: "tiktok",
      handle: "nakhla.wood",
      title: "من الورشة",
      line: "خلف الكواليس في مصنعنا",
      m1Icon: "i-eye",
      m1: "2.3M",
      m2Icon: "i-heart",
      m2: "61K",
      saveIcon: "i-send",
      alt: "ورشة أثاث خشبي ومصنع من خلف الكواليس",
      name: "مصنع نخلة للأثاث الخشبي",
      metric: "2.3M",
      metricLabel: "ظهور خلال شهر واحد",
      text: "محتوى يومي من خلف الكواليس في الورشة حوّل المصنع إلى اسم معروف وزاد طلبات التفصيل."
    },
    {
      isSample: true,
      category: "decor",
      categoryLabel: "ديكور وإكسسوارات",
      visual: "v7",
      reel: false,
      platform: "instagram",
      handle: "noor.home",
      title: "إضاءة غرفتك",
      line: "3 خطوات فقط",
      m1Icon: "i-heart",
      m1: "8.7K",
      m2Icon: "i-comment",
      m2: "1.1K",
      saveIcon: "i-bookmark",
      alt: "إضاءة دافئة في غرفة معيشة مع خطوات تنسيق الإضاءة",
      name: "Noor Home",
      metric: "86K",
      metricLabel: "متابع في 6 أشهر",
      text: "هوية بصرية متناسقة وصنّاع محتوى ديكور مناسبون نقلوا الحساب من الصفر إلى مجتمع نشط."
    }
  ],

  /* ----- الشهادات ----- */
  testimonials: [
    {
      isSample: true,
      large: true,
      quote: "قبل Magmafy كنا ننشر صور منتجات دون أن نعرف أيها يبيع فعلًا. اليوم أرى في التقرير الشهري أي محتوى جلب الطلبات، ومبيعاتنا من السوشيال ارتفعت بوضوح خلال أول 3 أشهر.",
      initials: "س ع",
      name: "سارة العتيبي",
      role: "مديرة التسويق · متجر رنّة للأثاث"
    },
    {
      isSample: true,
      large: false,
      quote: "الفريق يفهم ذوق عملائنا ويعرف كيف يصوّر القطعة لتظهر كما هي في الواقع. زيارات المعرض زادت بعد أول حملة.",
      initials: "خ ش",
      name: "خالد الشمري",
      role: "المؤسس · دار ليفنج للأثاث"
    },
    {
      isSample: true,
      large: false,
      quote: "أكثر ما أعجبني الشفافية. التقارير بسيطة وواضحة، وأعرف أين تذهب ميزانية الإعلانات وماذا حققت.",
      initials: "ن ق",
      name: "نورة القحطاني",
      role: "المالكة · لمسة ديكور"
    },
    {
      isSample: true,
      large: true,
      quote: "جرّبنا أكثر من وكالة، وهذه أول مرة نشعر فيها أن الفريق شريك في الهدف وليس مجرد منفّذ. طلبات عروض الأسعار من الشركات تضاعفت، وصرنا نخطط حملاتنا بثقة.",
      initials: "م ح",
      name: "محمد الحربي",
      role: "المدير العام · مكتب برو للأثاث المكتبي"
    }
  ],

  /* ----- استقبال النماذج -----
   * اتركها فارغة = يتم فتح واتساب برسالة جاهزة بتفاصيل الطلب (تعمل فورًا بدون خادم).
   * لاستقبال الطلبات عبر البريد: أنشئ نموذجًا في Formspree أو Getform وضع رابطه هنا
   * مثال: "https://formspree.io/f/xxxxxxx"
   */
  contactFormEndpoint: "",
  newsletterEndpoint: ""
};
