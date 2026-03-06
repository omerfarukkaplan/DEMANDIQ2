export type Language = "en" | "tr" | "ar" | "zh" | "es";

export const languageNames: Record<Language, string> = {
  en: "English",
  tr: "Türkçe",
  ar: "العربية",
  zh: "中文",
  es: "Español",
};

export const languageFlags: Record<Language, string> = {
  en: "🇬🇧",
  tr: "🇹🇷",
  ar: "🇸🇦",
  zh: "🇨🇳",
  es: "🇪🇸",
};

export const rtlLanguages: Language[] = ["ar"];

type TranslationKeys = {
  // Nav
  nav_home: string;
  nav_rfqs: string;
  nav_suppliers: string;
  nav_products: string;
  nav_messages: string;
  nav_login: string;
  nav_register: string;
  nav_dashboard: string;
  nav_analytics: string;
  nav_demand_map: string;
  nav_notifications: string;
  nav_favorites: string;
  nav_ai_sourcing: string;
  // Landing
  hero_title: string;
  hero_subtitle: string;
  hero_cta: string;
  hero_cta_secondary: string;
  stats_rfqs: string;
  stats_suppliers: string;
  stats_countries: string;
  stats_buyers: string;
  // Common
  search_placeholder: string;
  no_results: string;
  loading: string;
  create_rfq: string;
  view_all: string;
  filter: string;
  category: string;
  country: string;
  budget: string;
  quantity: string;
  deadline: string;
  submit: string;
  cancel: string;
  save: string;
  verified: string;
  rating: string;
  reviews: string;
  contact: string;
  description: string;
  title: string;
  // RFQ
  rfq_marketplace: string;
  rfq_create: string;
  rfq_detail: string;
  rfq_empty: string;
  rfq_empty_desc: string;
  // Supplier
  supplier_directory: string;
  supplier_profile: string;
  supplier_empty: string;
  supplier_empty_desc: string;
  supplier_years: string;
  // Auth
  login_title: string;
  register_title: string;
  email: string;
  password: string;
  confirm_password: string;
  company_name: string;
  // Footer
  footer_about: string;
  footer_privacy: string;
  footer_terms: string;
  footer_data_protection: string;
  // Categories
  cat_metals: string;
  cat_textile: string;
  cat_electronics: string;
  cat_food: string;
  cat_machinery: string;
  cat_chemicals: string;
  cat_automotive: string;
  cat_construction: string;
  cat_packaging: string;
};

export const translations: Record<Language, TranslationKeys> = {
  en: {
    nav_home: "Home",
    nav_rfqs: "RFQs",
    nav_suppliers: "Suppliers",
    nav_products: "Products",
    nav_messages: "Messages",
    nav_login: "Login",
    nav_register: "Register",
    nav_dashboard: "Dashboard",
    nav_analytics: "Analytics",
    nav_demand_map: "Demand Map",
    nav_notifications: "Notifications",
    nav_favorites: "Favorites",
    nav_ai_sourcing: "AI Sourcing",
    hero_title: "Global B2B Procurement, Reimagined",
    hero_subtitle: "Connect with verified suppliers worldwide. Create RFQs, discover products, and streamline your procurement process.",
    hero_cta: "Post an RFQ",
    hero_cta_secondary: "Find Suppliers",
    stats_rfqs: "Active RFQs",
    stats_suppliers: "Verified Suppliers",
    stats_countries: "Countries",
    stats_buyers: "Active Buyers",
    search_placeholder: "Search products, suppliers, or RFQs...",
    no_results: "No results found",
    loading: "Loading...",
    create_rfq: "Create RFQ",
    view_all: "View All",
    filter: "Filters",
    category: "Category",
    country: "Country",
    budget: "Budget",
    quantity: "Quantity",
    deadline: "Deadline",
    submit: "Submit",
    cancel: "Cancel",
    save: "Save",
    verified: "Verified",
    rating: "Rating",
    reviews: "Reviews",
    contact: "Contact",
    description: "Description",
    title: "Title",
    rfq_marketplace: "RFQ Marketplace",
    rfq_create: "Create RFQ",
    rfq_detail: "RFQ Details",
    rfq_empty: "No RFQs yet",
    rfq_empty_desc: "Be the first to post a procurement request and connect with global suppliers.",
    supplier_directory: "Supplier Directory",
    supplier_profile: "Supplier Profile",
    supplier_empty: "No suppliers yet",
    supplier_empty_desc: "Suppliers will appear here once they register on the platform.",
    supplier_years: "years in business",
    login_title: "Welcome back",
    register_title: "Create your account",
    email: "Email",
    password: "Password",
    confirm_password: "Confirm Password",
    company_name: "Company Name",
    footer_about: "About DemandIQ",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms of Service",
    footer_data_protection: "Data Protection",
    cat_metals: "Metals",
    cat_textile: "Textile",
    cat_electronics: "Electronics",
    cat_food: "Food & Beverage",
    cat_machinery: "Machinery",
    cat_chemicals: "Chemicals",
    cat_automotive: "Automotive",
    cat_construction: "Construction",
    cat_packaging: "Packaging",
  },
  tr: {
    nav_home: "Ana Sayfa",
    nav_rfqs: "Teklif Talepleri",
    nav_suppliers: "Tedarikçiler",
    nav_products: "Ürünler",
    nav_messages: "Mesajlar",
    nav_login: "Giriş",
    nav_register: "Kayıt Ol",
    nav_dashboard: "Panel",
    nav_analytics: "Analitik",
    nav_demand_map: "Talep Haritası",
    nav_notifications: "Bildirimler",
    nav_favorites: "Favoriler",
    nav_ai_sourcing: "AI Tedarik",
    hero_title: "Küresel B2B Tedarik, Yeniden Tasarlandı",
    hero_subtitle: "Dünya çapında doğrulanmış tedarikçilerle bağlantı kurun. Teklif talepleri oluşturun, ürünleri keşfedin.",
    hero_cta: "Teklif Talebi Oluştur",
    hero_cta_secondary: "Tedarikçi Bul",
    stats_rfqs: "Aktif Talepler",
    stats_suppliers: "Doğrulanmış Tedarikçiler",
    stats_countries: "Ülkeler",
    stats_buyers: "Aktif Alıcılar",
    search_placeholder: "Ürün, tedarikçi veya talep ara...",
    no_results: "Sonuç bulunamadı",
    loading: "Yükleniyor...",
    create_rfq: "Talep Oluştur",
    view_all: "Tümünü Gör",
    filter: "Filtreler",
    category: "Kategori",
    country: "Ülke",
    budget: "Bütçe",
    quantity: "Miktar",
    deadline: "Son Tarih",
    submit: "Gönder",
    cancel: "İptal",
    save: "Kaydet",
    verified: "Doğrulanmış",
    rating: "Değerlendirme",
    reviews: "Yorumlar",
    contact: "İletişim",
    description: "Açıklama",
    title: "Başlık",
    rfq_marketplace: "Teklif Talebi Pazarı",
    rfq_create: "Teklif Talebi Oluştur",
    rfq_detail: "Talep Detayları",
    rfq_empty: "Henüz talep yok",
    rfq_empty_desc: "İlk tedarik talebini oluşturun ve küresel tedarikçilerle bağlantı kurun.",
    supplier_directory: "Tedarikçi Rehberi",
    supplier_profile: "Tedarikçi Profili",
    supplier_empty: "Henüz tedarikçi yok",
    supplier_empty_desc: "Tedarikçiler platforma kaydoldukça burada görünecekler.",
    supplier_years: "yıllık deneyim",
    login_title: "Tekrar hoşgeldiniz",
    register_title: "Hesabınızı oluşturun",
    email: "E-posta",
    password: "Şifre",
    confirm_password: "Şifre Tekrar",
    company_name: "Şirket Adı",
    footer_about: "DemandIQ Hakkında",
    footer_privacy: "Gizlilik Politikası",
    footer_terms: "Kullanım Şartları",
    footer_data_protection: "Veri Koruma / KVKK",
    cat_metals: "Metaller",
    cat_textile: "Tekstil",
    cat_electronics: "Elektronik",
    cat_food: "Gıda",
    cat_machinery: "Makine",
    cat_chemicals: "Kimyasallar",
    cat_automotive: "Otomotiv",
    cat_construction: "İnşaat",
    cat_packaging: "Ambalaj",
  },
  ar: {
    nav_home: "الرئيسية",
    nav_rfqs: "طلبات العروض",
    nav_suppliers: "الموردين",
    nav_products: "المنتجات",
    nav_messages: "الرسائل",
    nav_login: "تسجيل الدخول",
    nav_register: "التسجيل",
    nav_dashboard: "لوحة التحكم",
    nav_analytics: "التحليلات",
    nav_demand_map: "خريطة الطلب",
    nav_notifications: "الإشعارات",
    nav_favorites: "المفضلة",
    nav_ai_sourcing: "التوريد الذكي",
    hero_title: "المشتريات العالمية B2B، بشكل جديد",
    hero_subtitle: "تواصل مع موردين معتمدين حول العالم. أنشئ طلبات عروض أسعار واكتشف المنتجات.",
    hero_cta: "إنشاء طلب عرض",
    hero_cta_secondary: "البحث عن موردين",
    stats_rfqs: "طلبات نشطة",
    stats_suppliers: "موردين معتمدين",
    stats_countries: "دول",
    stats_buyers: "مشترين نشطين",
    search_placeholder: "ابحث عن منتجات أو موردين...",
    no_results: "لا توجد نتائج",
    loading: "جاري التحميل...",
    create_rfq: "إنشاء طلب",
    view_all: "عرض الكل",
    filter: "التصفية",
    category: "الفئة",
    country: "الدولة",
    budget: "الميزانية",
    quantity: "الكمية",
    deadline: "الموعد النهائي",
    submit: "إرسال",
    cancel: "إلغاء",
    save: "حفظ",
    verified: "معتمد",
    rating: "التقييم",
    reviews: "المراجعات",
    contact: "اتصل",
    description: "الوصف",
    title: "العنوان",
    rfq_marketplace: "سوق طلبات العروض",
    rfq_create: "إنشاء طلب عرض",
    rfq_detail: "تفاصيل الطلب",
    rfq_empty: "لا توجد طلبات بعد",
    rfq_empty_desc: "كن أول من ينشر طلب شراء ويتواصل مع الموردين العالميين.",
    supplier_directory: "دليل الموردين",
    supplier_profile: "ملف المورد",
    supplier_empty: "لا يوجد موردين بعد",
    supplier_empty_desc: "سيظهر الموردون هنا بمجرد تسجيلهم على المنصة.",
    supplier_years: "سنوات في العمل",
    login_title: "مرحباً بعودتك",
    register_title: "أنشئ حسابك",
    email: "البريد الإلكتروني",
    password: "كلمة المرور",
    confirm_password: "تأكيد كلمة المرور",
    company_name: "اسم الشركة",
    footer_about: "عن DemandIQ",
    footer_privacy: "سياسة الخصوصية",
    footer_terms: "شروط الخدمة",
    footer_data_protection: "حماية البيانات",
    cat_metals: "المعادن",
    cat_textile: "النسيج",
    cat_electronics: "الإلكترونيات",
    cat_food: "الأغذية",
    cat_machinery: "الآلات",
    cat_chemicals: "المواد الكيميائية",
    cat_automotive: "السيارات",
    cat_construction: "البناء",
    cat_packaging: "التعبئة",
  },
  zh: {
    nav_home: "首页",
    nav_rfqs: "询价单",
    nav_suppliers: "供应商",
    nav_products: "产品",
    nav_messages: "消息",
    nav_login: "登录",
    nav_register: "注册",
    nav_dashboard: "仪表盘",
    nav_analytics: "分析",
    nav_demand_map: "需求地图",
    nav_notifications: "通知",
    nav_favorites: "收藏",
    nav_ai_sourcing: "AI采购",
    hero_title: "全球B2B采购，重新定义",
    hero_subtitle: "与全球验证供应商建立联系。创建询价单，发现产品，简化采购流程。",
    hero_cta: "发布询价",
    hero_cta_secondary: "寻找供应商",
    stats_rfqs: "活跃询价",
    stats_suppliers: "认证供应商",
    stats_countries: "国家",
    stats_buyers: "活跃买家",
    search_placeholder: "搜索产品、供应商或询价...",
    no_results: "未找到结果",
    loading: "加载中...",
    create_rfq: "创建询价",
    view_all: "查看全部",
    filter: "筛选",
    category: "类别",
    country: "国家",
    budget: "预算",
    quantity: "数量",
    deadline: "截止日期",
    submit: "提交",
    cancel: "取消",
    save: "保存",
    verified: "已认证",
    rating: "评分",
    reviews: "评价",
    contact: "联系",
    description: "描述",
    title: "标题",
    rfq_marketplace: "询价市场",
    rfq_create: "创建询价",
    rfq_detail: "询价详情",
    rfq_empty: "暂无询价",
    rfq_empty_desc: "成为第一个发布采购需求并与全球供应商建立联系的用户。",
    supplier_directory: "供应商目录",
    supplier_profile: "供应商简介",
    supplier_empty: "暂无供应商",
    supplier_empty_desc: "供应商注册后将在此显示。",
    supplier_years: "年经营经验",
    login_title: "欢迎回来",
    register_title: "创建账户",
    email: "邮箱",
    password: "密码",
    confirm_password: "确认密码",
    company_name: "公司名称",
    footer_about: "关于 DemandIQ",
    footer_privacy: "隐私政策",
    footer_terms: "服务条款",
    footer_data_protection: "数据保护",
    cat_metals: "金属",
    cat_textile: "纺织",
    cat_electronics: "电子",
    cat_food: "食品饮料",
    cat_machinery: "机械",
    cat_chemicals: "化工",
    cat_automotive: "汽车",
    cat_construction: "建筑",
    cat_packaging: "包装",
  },
  es: {
    nav_home: "Inicio",
    nav_rfqs: "Solicitudes",
    nav_suppliers: "Proveedores",
    nav_products: "Productos",
    nav_messages: "Mensajes",
    nav_login: "Iniciar Sesión",
    nav_register: "Registrarse",
    nav_dashboard: "Panel",
    nav_analytics: "Analíticas",
    nav_demand_map: "Mapa de Demanda",
    nav_notifications: "Notificaciones",
    nav_favorites: "Favoritos",
    nav_ai_sourcing: "IA Sourcing",
    hero_title: "Compras B2B Globales, Reinventadas",
    hero_subtitle: "Conéctese con proveedores verificados en todo el mundo. Cree solicitudes de cotización y descubra productos.",
    hero_cta: "Publicar Solicitud",
    hero_cta_secondary: "Buscar Proveedores",
    stats_rfqs: "Solicitudes Activas",
    stats_suppliers: "Proveedores Verificados",
    stats_countries: "Países",
    stats_buyers: "Compradores Activos",
    search_placeholder: "Buscar productos, proveedores o solicitudes...",
    no_results: "Sin resultados",
    loading: "Cargando...",
    create_rfq: "Crear Solicitud",
    view_all: "Ver Todo",
    filter: "Filtros",
    category: "Categoría",
    country: "País",
    budget: "Presupuesto",
    quantity: "Cantidad",
    deadline: "Fecha Límite",
    submit: "Enviar",
    cancel: "Cancelar",
    save: "Guardar",
    verified: "Verificado",
    rating: "Calificación",
    reviews: "Reseñas",
    contact: "Contacto",
    description: "Descripción",
    title: "Título",
    rfq_marketplace: "Mercado de Solicitudes",
    rfq_create: "Crear Solicitud",
    rfq_detail: "Detalle de Solicitud",
    rfq_empty: "Aún no hay solicitudes",
    rfq_empty_desc: "Sea el primero en publicar una solicitud y conectar con proveedores globales.",
    supplier_directory: "Directorio de Proveedores",
    supplier_profile: "Perfil de Proveedor",
    supplier_empty: "Aún no hay proveedores",
    supplier_empty_desc: "Los proveedores aparecerán aquí cuando se registren.",
    supplier_years: "años en negocio",
    login_title: "Bienvenido de nuevo",
    register_title: "Crea tu cuenta",
    email: "Correo",
    password: "Contraseña",
    confirm_password: "Confirmar Contraseña",
    company_name: "Nombre de Empresa",
    footer_about: "Sobre DemandIQ",
    footer_privacy: "Política de Privacidad",
    footer_terms: "Términos de Servicio",
    footer_data_protection: "Protección de Datos",
    cat_metals: "Metales",
    cat_textile: "Textil",
    cat_electronics: "Electrónica",
    cat_food: "Alimentos",
    cat_machinery: "Maquinaria",
    cat_chemicals: "Químicos",
    cat_automotive: "Automotriz",
    cat_construction: "Construcción",
    cat_packaging: "Embalaje",
  },
};
