/**
 * ============================================================
 *  Magmafy — إعدادات الموقع (الملف الوحيد الذي تحتاج تعديله للبيانات العامة)
 * ============================================================
 *  - عدّل الأرقام ومعلومات التواصل وروابط المنصات من هنا.
 *  - نصوص الأقسام (الخدمات، الأعمال، الباقات، الأسئلة...) موجودة مباشرة في index.html
 *    وكل قسم مُعلَّم بتعليق واضح <!-- ✎ -->.
 */
window.MAGMAFY_CONFIG = {
  brand: "Magmafy",

  /* ----- التواصل ----- */
  // رقم واتساب بالصيغة الدولية بدون + أو أصفار (مثال: 966501234567)
  whatsappNumber: "966500000000",
  whatsappMessage: "مرحبًا Magmafy، أرغب في معرفة المزيد عن خدماتكم.",
  email: "hello@magmafy.com",
  phone: "+966 50 000 0000",
  address: "نعمل عن بُعد مع عملاء في جميع أنحاء الوطن العربي",
  workingHours: "الأحد – الخميس · 9 ص – 6 م",

  /* ----- روابط المنصات الاجتماعية (اتركها فارغة لإخفاء الأيقونة) ----- */
  social: {
    instagram: "https://instagram.com/magmafy",
    tiktok: "https://tiktok.com/@magmafy",
    snapchat: "https://snapchat.com/add/magmafy",
    x: "https://x.com/magmafy",
    facebook: "https://facebook.com/magmafy",
    youtube: ""
  },

  /* ----- شريط الثقة (أرقام قابلة للتعديل) ----- */
  // prefix: قبل الرقم · suffix: بعد الرقم مباشرة (مثل %) · unit: كلمة بعد الرقم (مثل ألف)
  stats: [
    { prefix: "+", value: 120, suffix: "", unit: "", label: "حساب تمت إدارته" },
    { prefix: "+", value: 500, suffix: "", unit: "ألف", label: "وصول شهري لحملاتنا" },
    { prefix: "+", value: 40, suffix: "%", unit: "", label: "متوسط النمو في التفاعل" },
    { prefix: "", value: 85, suffix: "", unit: "", label: "عميل سعيد" }
  ],

  /* ----- استقبال النماذج -----
   * اتركها فارغة = يتم فتح واتساب برسالة جاهزة بتفاصيل الطلب (تعمل فورًا بدون خادم).
   * لاستقبال الطلبات عبر البريد: أنشئ نموذجًا في Formspree أو Getform وضع رابطه هنا
   * مثال: "https://formspree.io/f/xxxxxxx"
   */
  contactFormEndpoint: "",
  newsletterEndpoint: ""
};
