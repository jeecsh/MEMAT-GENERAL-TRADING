/**
 * Comprehensive Product Database
 * Based on Best-in-Class Chinese Solar Components for African Off-Grid Markets
 */

export interface ProductSpecification {
  name: string;
  value: string;
  unit?: string;
}

export interface Product {
  id: string;
  name: {
    en: string;
    ar: string;
  };
  category: string;
  subcategory?: string;
  shortDescription: {
    en: string;
    ar: string;
  };
  detailedDescription: {
    en: string;
    ar: string;
  };
  keyFeatures: {
    en: string[];
    ar: string[];
  };
  specifications: ProductSpecification[];
  applications: {
    en: string[];
    ar: string[];
  };
  certifications: string[];
  warranty: string;
  operatingConditions: {
    temperatureRange: string;
    humidity?: string;
    ip_rating?: string;
  };
  images: string[];
  datasheetUrl?: string;
  manufacturerBrands?: string[];
}

export const solarProducts: Product[] = [
  {
    id: "mono-si-panels",
    name: {
      en: "Monocrystalline Solar Panels (Mono-SI)",
      ar: "ألواح شمسية أحادية البلورة"
    },
    category: "solar",
    subcategory: "panels",
    shortDescription: {
      en: "High-efficiency monocrystalline modules from Chinese Tier-1 manufacturers achieving ~20-22% efficiency",
      ar: "وحدات أحادية البلورة عالية الكفاءة من مصنعين صينيين من الدرجة الأولى بكفاءة ~20-22%"
    },
    detailedDescription: {
      en: "Chinese Tier-1 manufacturers (e.g. Jinko, Trina, LONGi) offer high-efficiency monocrystalline modules from ~100 W (for small off-grid systems) up to 600 W utility panels. These modules typically achieve ~20–22% efficiency and have low temperature coefficients (~−0.3%/°C), meaning they lose less performance in extreme heat. Quality Mono-Si panels are built with durable tempered glass and anodized aluminum frames, often certified to withstand harsh conditions.",
      ar: "المصنعون الصينيون من الدرجة الأولى (مثل جينكو، ترينا، لونجي) يقدمون وحدات أحادية البلورة عالية الكفاءة من ~100 واط (للأنظمة الصغيرة خارج الشبكة) حتى 600 واط للألواح المرافقية. تحقق هذه الوحدات عادة كفاءة ~20-22% ولها معاملات حرارة منخفضة (~-0.3%/°م)، مما يعني أنها تفقد أداءً أقل في الحرارة الشديدة."
    },
    keyFeatures: {
      en: ["20-22% efficiency rating", "Low temperature coefficient (-0.3%/°C)", "25+ year linear power warranty", "Anti-reflective coating", "PID-resistance technology"],
      ar: ["تصنيف كفاءة 20-22%", "معامل حرارة منخفض (-0.3%/°م)", "ضمان طاقة خطي 25+ سنة", "طلاء مضاد للانعكاس", "تقنية مقاومة PID"]
    },
    specifications: [
      { name: "Power Range", value: "100-600", unit: "W" },
      { name: "Efficiency", value: "20-22", unit: "%" },
      { name: "Temperature Coefficient", value: "-0.3", unit: "%/°C" },
      { name: "Front Load", value: "5400", unit: "Pa" },
      { name: "Operating Temperature", value: "-40 to +70", unit: "°C" }
    ],
    applications: {
      en: ["Off-grid residential systems", "Commercial solar installations", "Utility-scale projects", "Remote power generation"],
      ar: ["أنظمة سكنية خارج الشبكة", "التركيبات الشمسية التجارية", "مشاريع مرافقية", "توليد طاقة بعيد"]
    },
    certifications: ["IEC 61215", "IEC 61730", "IEC 61701", "IEC 62716", "TÜV"],
    warranty: "25 years linear power warranty",
    operatingConditions: {
      temperatureRange: "-40°C to +70°C",
      humidity: "High humidity resistant",
      ip_rating: "IP67 junction box"
    },
    images: [
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&h=300&fit=crop"
    ],
    manufacturerBrands: ["Jinko Solar", "Trina Solar", "LONGi Solar", "JA Solar", "Canadian Solar"]
  },
  {
    id: "floating-solar",
    name: {
      en: "Floating Solar Panels",
      ar: "ألواح شمسية عائمة"
    },
    category: "solar",
    subcategory: "floating-systems",
    shortDescription: {
      en: "Floating PV systems with HDPE platforms designed for 25-year lifetimes, providing cooling effects",
      ar: "أنظمة كهروضوئية عائمة مع منصات HDPE مصممة لعمر 25 سنة، توفر تأثيرات التبريد"
    },
    detailedDescription: {
      en: "Floating solar PV systems mount standard solar modules on specialized floats so they can operate on water surfaces (lakes, reservoirs). Chinese providers like Sungrow FPV supply HDPE (high-density polyethylene) float platforms designed for 25-year lifetimes, with UV-resistant, anti-corrosion material that resists water absorption and degradation.",
      ar: "أنظمة الطاقة الشمسية العائمة تركب وحدات شمسية قياسية على طوافات متخصصة حتى تتمكن من العمل على أسطح المياه (البحيرات، الخزانات). الموردون الصينيون مثل Sungrow FPV يوفرون منصات طوف HDPE مصممة لعمر 25 سنة."
    },
    keyFeatures: {
      en: ["25-year float platform lifetime", "Water cooling effect (+5-10% efficiency)", "Reduces water evaporation", "Anti-slip and anti-crack design", "Marine-grade components"],
      ar: ["عمر منصة طوف 25 سنة", "تأثير تبريد المياه (+5-10% كفاءة)", "يقلل تبخر المياه", "تصميم مانع للانزلاق والتشقق", "مكونات بحرية"]
    },
    specifications: [
      { name: "Load Capacity", value: ">150", unit: "kg/m²" },
      { name: "Platform Material", value: "HDPE", unit: "" },
      { name: "Design Life", value: "25", unit: "years" },
      { name: "Wave Resistance", value: "High", unit: "" },
      { name: "UV Resistance", value: "Yes", unit: "" }
    ],
    applications: {
      en: ["Reservoir installations", "Lake solar farms", "Water treatment facilities", "Industrial water bodies"],
      ar: ["تركيبات الخزانات", "مزارع شمسية في البحيرات", "مرافق معالجة المياه", "المسطحات المائية الصناعية"]
    },
    certifications: ["TÜV Certified", "IEC Standards", "Damp-heat tested", "UV exposure tested"],
    warranty: "25 years on float platform",
    operatingConditions: {
      temperatureRange: "-20°C to +60°C",
      humidity: "100% (designed for water exposure)",
      ip_rating: "Marine grade"
    },
    images: [
      "Floating-solar.jpg"
    ],
    manufacturerBrands: ["Sungrow FPV", "Ciel & Terre", "SPG Solar"]
  },
  {
    id: "solar-street-lights",
    name: {
      en: "Solar Street Lights with Motion Sensors",
      ar: "أضواء شوارع شمسية مع أجهزة استشعار الحركة"
    },
    category: "solar",
    subcategory: "lighting",
    shortDescription: {
      en: "All-in-one solar LED street lights (20-100W) with PIR motion sensors and LiFePO₄ batteries",
      ar: "أضواء شوارع LED شمسية متكاملة (20-100 واط) مع أجهزة استشعار PIR وبطاريات LiFePO₄"
    },
    detailedDescription: {
      en: "Integrated solar LED street lights from China combine a solar panel, battery (often LiFePO₄ lithium), LED lamp, and PIR motion sensor in one unit. Typical models range from ~20 W to 100 W LED power, producing 3000–10000 lumens for illuminating rural roads or compounds.",
      ar: "أضواء شوارع LED الشمسية المتكاملة من الصين تجمع بين لوح شمسي وبطارية (غالباً ليثيوم LiFePO₄) ومصباح LED وجهاز استشعار حركة PIR في وحدة واحدة."
    },
    keyFeatures: {
      en: ["IP65+ waterproof rating", "PIR motion sensor technology", "12+ hours lighting time", "LiFePO₄ battery with 2000+ cycles", "Aluminum alloy housing"],
      ar: ["تصنيف مقاوم للماء IP65+", "تقنية جهاز استشعار حركة PIR", "وقت إضاءة 12+ ساعة", "بطارية LiFePO₄ مع 2000+ دورة", "هيكل سبائك الألومنيوم"]
    },
    specifications: [
      { name: "LED Power", value: "20-100", unit: "W" },
      { name: "Luminous Flux", value: "3000-10000", unit: "lumens" },
      { name: "Solar Panel", value: "18-90", unit: "W" },
      { name: "Battery Cycle Life", value: "2000+", unit: "cycles" },
      { name: "Operating Temperature", value: "-20 to +60", unit: "°C" }
    ],
    applications: {
      en: ["Rural road lighting", "Compound illumination", "Park pathways", "Remote area lighting"],
      ar: ["إضاءة الطرق الريفية", "إضاءة المجمعات", "ممرات الحدائق", "إضاءة المناطق النائية"]
    },
    certifications: ["IP65", "CE", "RoHS", "FCC"],
    warranty: "3-5 years comprehensive warranty",
    operatingConditions: {
      temperatureRange: "-20°C to +60°C",
      humidity: "95% RH",
      ip_rating: "IP65"
    },
    images: [
      "ali.avif"
    ],
    manufacturerBrands: ["Shenzhen Manufacturers", "Solar LED Specialists"]
  },
  {
    id: "agm-batteries",
    name: {
      en: "AGM Batteries (Absorbent Glass Mat)",
      ar: "بطاريات AGM (حصيرة زجاجية ماصة)"
    },
    category: "solar",
    subcategory: "energy-storage",
    shortDescription: {
      en: "Sealed lead-acid batteries (50-250Ah) with maintenance-free design and excellent high-current performance",
      ar: "بطاريات حمض الرصاص المختومة (50-250 أمبير/ساعة) مع تصميم خالٍ من الصيانة وأداء تيار عالي ممتاز"
    },
    detailedDescription: {
      en: "AGM batteries are sealed lead-acid batteries well-suited for solar storage due to their maintenance-free design and good high-current performance. Common capacities range from ~50 Ah to 250 Ah per 12 V battery (which can be combined for higher storage). AGM uses fiberglass mats to absorb the electrolyte, preventing spills and allowing installation at various angles.",
      ar: "بطاريات AGM هي بطاريات حمض الرصاص المختومة المناسبة جيداً لتخزين الطاقة الشمسية بسبب تصميمها الخالي من الصيانة وأداء التيار العالي الجيد."
    },
    keyFeatures: {
      en: ["Maintenance-free operation", "500+ cycle life at 50% DOD", "Vibration and shock resistant", "Low self-discharge (2-3%/month)", "Spill-proof design"],
      ar: ["تشغيل خالٍ من الصيانة", "عمر دورة 500+ عند 50% DOD", "مقاوم للاهتزاز والصدمات", "تفريغ ذاتي منخفض (2-3%/شهر)", "تصميم مانع للانسكاب"]
    },
    specifications: [
      { name: "Capacity Range", value: "50-250", unit: "Ah" },
      { name: "Voltage", value: "12", unit: "V" },
      { name: "Cycle Life", value: "500+", unit: "cycles @ 50% DOD" },
      { name: "Operating Temperature", value: "-15 to +50", unit: "°C" },
      { name: "Self-discharge", value: "2-3", unit: "%/month" }
    ],
    applications: {
      en: ["Solar energy storage", "Off-grid systems", "UPS backup power", "Rural electrification"],
      ar: ["تخزين الطاقة الشمسية", "أنظمة خارج الشبكة", "طاقة احتياطية UPS", "الكهرباء الريفية"]
    },
    certifications: ["IEC 60896", "UL", "CE"],
    warranty: "2-3 years",
    operatingConditions: {
      temperatureRange: "-15°C to +50°C",
      humidity: "Sealed, humidity resistant"
    },
    images: [
      "agm.jpg",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop"
    ],
    manufacturerBrands: ["Victron Energy", "Trojan Battery", "VARTA"]
  },
  {
    id: "gel-batteries",
    name: {
      en: "GEL Batteries",
      ar: "بطاريات الجل"
    },
    category: "solar",
    subcategory: "energy-storage",
    shortDescription: {
      en: "Sealed lead-acid batteries with silica gel electrolyte, superior performance in extreme temperatures",
      ar: "بطاريات حمض الرصاص المختومة مع إلكتروليت جل السيليكا، أداء فائق في درجات الحرارة القصوى"
    },
    detailedDescription: {
      en: "GEL batteries are another type of sealed lead-acid battery, using a silica gel to immobilize the electrolyte. They are known for superior durability in extreme temperatures and deep discharge conditions. Like AGMs, GEL batteries come in 6 V or 12 V blocks (typical 100–200 Ah sizes for solar systems).",
      ar: "بطاريات الجل هي نوع آخر من بطاريات حمض الرصاص المختومة، تستخدم جل السيليكا لتثبيت الإلكتروليت. تُعرف بالمتانة الفائقة في درجات الحرارة القصوى وظروف التفريغ العميق."
    },
    keyFeatures: {
      en: ["600+ cycle life at 50% DOD", "Excellent heat tolerance", "Deep discharge capability (80% DOD)", "10-12 year design life", "No electrolyte evaporation"],
      ar: ["عمر دورة 600+ عند 50% DOD", "تحمل حراري ممتاز", "قدرة تفريغ عميق (80% DOD)", "عمر تصميم 10-12 سنة", "لا يوجد تبخر للإلكتروليت"]
    },
    specifications: [
      { name: "Capacity Range", value: "100-200", unit: "Ah" },
      { name: "Voltage", value: "6/12", unit: "V" },
      { name: "Cycle Life", value: "600+", unit: "cycles @ 50% DOD" },
      { name: "Design Life", value: "10-12", unit: "years @ 20°C" },
      { name: "Deep Discharge", value: "80", unit: "% DOD" }
    ],
    applications: {
      en: ["High-temperature environments", "Deep cycle applications", "Critical backup systems", "Long-term storage"],
      ar: ["بيئات عالية الحرارة", "تطبيقات الدورة العميقة", "أنظمة احتياطية حرجة", "تخزين طويل الأمد"]
    },
    certifications: ["IEC 60896", "UL Listed", "CE Marked"],
    warranty: "3-5 years",
    operatingConditions: {
      temperatureRange: "-20°C to +55°C",
      humidity: "Sealed design, humidity proof"
    },
    images: [
      "gel.jpg"
    ],
    manufacturerBrands: ["Narada", "Vision Battery", "Sonnenschein"]
  },
  {
    id: "lifepo4-batteries",
    name: {
      en: "Lithium-Ion Batteries (LiFePO₄)",
      ar: "بطاريات ليثيوم أيون (LiFePO₄)"
    },
    category: "solar",
    subcategory: "energy-storage",
    shortDescription: {
      en: "Advanced LiFePO₄ batteries with 3000-6000 cycle life and exceptional thermal stability",
      ar: "بطاريات LiFePO₄ متقدمة مع عمر دورة 3000-6000 واستقرار حراري استثنائي"
    },
    detailedDescription: {
      en: "Lithium Iron Phosphate (LiFePO₄) batteries are increasingly the battery of choice for solar applications in Africa due to their long life and high temperature stability. Chinese manufacturers like CATL, BYD, EVE, and others produce LiFePO₄ cells and battery packs in sizes from 12 V/100 Ah drop-in units up to large 48 V bank modules.",
      ar: "بطاريات فوسفات الحديد الليثيوم (LiFePO₄) تزداد شعبية كخيار البطارية لتطبيقات الطاقة الشمسية في أفريقيا بسبب عمرها الطويل واستقرارها الحراري العالي."
    },
    keyFeatures: {
      en: ["3000-6000 cycle life @ 80% DOD", "Excellent thermal stability", "Built-in BMS protection", "Lightweight (1/3 weight of lead-acid)", "10+ year lifespan"],
      ar: ["عمر دورة 3000-6000 @ 80% DOD", "استقرار حراري ممتاز", "حماية BMS مدمجة", "خفيف الوزن (1/3 وزن حمض الرصاص)", "عمر 10+ سنوات"]
    },
    specifications: [
      { name: "Cycle Life", value: "3000-6000", unit: "cycles @ 80% DOD" },
      { name: "Operating Temperature", value: "0 to +50", unit: "°C (discharge)" },
      { name: "Charging Temperature", value: "0 to +45", unit: "°C" },
      { name: "Depth of Discharge", value: "80-90", unit: "%" },
      { name: "Weight Reduction", value: "66", unit: "% vs lead-acid" }
    ],
    applications: {
      en: ["Premium solar installations", "Electric vehicle charging", "Grid-scale storage", "Critical power systems"],
      ar: ["تركيبات شمسية متميزة", "شحن المركبات الكهربائية", "تخزين على نطاق الشبكة", "أنظمة طاقة حرجة"]
    },
    certifications: ["UN38.3", "UL1973", "IEC62619", "CE"],
    warranty: "10+ years",
    operatingConditions: {
      temperatureRange: "0°C to +50°C (discharge), 0°C to +45°C (charge)",
      ip_rating: "IP65+ (when in outdoor enclosures)"
    },
    images: [
"lopo.jpg"    ],
    manufacturerBrands: ["CATL", "BYD", "EVE Energy", "CALB", "Pylontech"]
  },
  {
    id: "solar-inverters",
    name: {
      en: "Solar Inverters (Including Pump Inverters)",
      ar: "محولات شمسية (بما في ذلك محولات المضخات)"
    },
    category: "solar",
    subcategory: "power-conversion",
    shortDescription: {
      en: "Robust DC to AC inverters including specialized solar pump inverters with MPPT technology",
      ar: "محولات قوية من التيار المستمر إلى المتردد تشمل محولات مضخات شمسية متخصصة مع تقنية MPPT"
    },
    detailedDescription: {
      en: "Inverters convert DC power (from solar panels or batteries) into AC power, and Chinese manufacturers offer robust options for off-grid and specialized uses like water pumping. Solar pump inverters deserve special mention – these are VFD (variable frequency drive) inverters with MPPT that can drive AC water pumps directly from PV arrays.",
      ar: "المحولات تحول طاقة التيار المستمر (من الألواح الشمسية أو البطاريات) إلى طاقة التيار المتردد، والمصنعون الصينيون يقدمون خيارات قوية للاستخدام خارج الشبكة والاستخدامات المتخصصة مثل ضخ المياه."
    },
    keyFeatures: {
      en: ["MPPT technology for maximum power", "IP65 weatherproof enclosure", "Wide operating temperature range", "Built-in surge protection", "Remote monitoring capability"],
      ar: ["تقنية MPPT لأقصى طاقة", "حاوية مقاومة للطقس IP65", "نطاق درجة حرارة تشغيل واسع", "حماية تيار زائد مدمجة", "قدرة مراقبة عن بُعد"]
    },
    specifications: [
      { name: "Power Range", value: "1.5-20+", unit: "kW" },
      { name: "Input Voltage", value: "150-400", unit: "VDC" },
      { name: "Output Voltage", value: "230/400", unit: "VAC" },
      { name: "Operating Temperature", value: "-25 to +60", unit: "°C" },
      { name: "Efficiency", value: "90-95", unit: "%" }
    ],
    applications: {
      en: ["Water pumping systems", "Irrigation projects", "Off-grid power conversion", "Remote water supply"],
      ar: ["أنظمة ضخ المياه", "مشاريع الري", "تحويل طاقة خارج الشبكة", "إمداد المياه النائي"]
    },
    certifications: ["CE", "TÜV", "IEC Standards"],
    warranty: "2-5 years",
    operatingConditions: {
      temperatureRange: "-25°C to +60°C",
      ip_rating: "IP65"
    },
    images: [
      "inverters.jpg",
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=500&h=300&fit=crop"
    ],
    manufacturerBrands: ["JNTECH", "Growatt", "Solarmax", "Samil Power"]
  },
  {
    id: "hybrid-inverters",
    name: {
      en: "Hybrid Solar Inverters",
      ar: "محولات شمسية هجينة"
    },
    category: "solar",
    subcategory: "power-conversion",
    shortDescription: {
      en: "Multi-functional hybrid inverters combining grid-tied and off-grid capabilities (3-10kW range)",
      ar: "محولات هجينة متعددة الوظائف تجمع بين قدرات الربط بالشبكة وخارج الشبكة (نطاق 3-10 كيلو واط)"
    },
    detailedDescription: {
      en: "Hybrid inverters are multi-functional devices combining PV inverter and battery inverter capabilities, allowing both grid-tied and off-grid operation. Chinese models (Growatt, GoodWe, Solis) in 3–10 kW range support PV input with internal MPPT, battery management, and seamless grid switching with <20ms transfer time.",
      ar: "المحولات الهجينة هي أجهزة متعددة الوظائف تجمع بين قدرات محول الطاقة الشمسية ومحول البطارية، مما يسمح بالتشغيل المرتبط بالشبكة وخارج الشبكة."
    },
    keyFeatures: {
      en: ["Grid-tie and off-grid modes", "Seamless switching (<20ms)", "Internal MPPT controller", "Battery management system", "Smart energy management"],
      ar: ["أوضاع ربط الشبكة وخارج الشبكة", "تبديل سلس (<20 مللي ثانية)", "وحدة تحكم MPPT داخلية", "نظام إدارة البطارية", "إدارة طاقة ذكية"]
    },
    specifications: [
      { name: "Power Range", value: "3-10", unit: "kW" },
      { name: "MPPT Voltage Range", value: "120-450", unit: "V" },
      { name: "Transfer Time", value: "<20", unit: "ms" },
      { name: "Battery Voltage", value: "48", unit: "V" },
      { name: "Operating Temperature", value: "0 to +50", unit: "°C" }
    ],
    applications: {
      en: ["Hybrid residential systems", "Village power systems", "Commercial backup", "Grid optimization"],
      ar: ["أنظمة سكنية هجينة", "أنظمة طاقة القرى", "نسخ احتياطي تجاري", "تحسين الشبكة"]
    },
    certifications: ["IEC Standards", "Grid Connection Standards"],
    warranty: "5 years comprehensive warranty",
    operatingConditions: {
      temperatureRange: "0°C to +50°C (up to 60°C with derating)",
      ip_rating: "IP20-IP21 (indoor installation)"
    },
    images: [
"hybird.webp"    ],
    manufacturerBrands: ["Growatt", "GoodWe", "Solis", "Sofar Solar"]
  },
  {
    id: "charge-controllers",
    name: {
      en: "Solar Charge Controllers (MPPT)",
      ar: "أجهزة التحكم في الشحن الشمسي (MPPT)"
    },
    category: "solar",
    subcategory: "accessories",
    shortDescription: {
      en: "High-efficiency MPPT charge controllers (10-100A) with advanced battery management features",
      ar: "أجهزة تحكم شحن MPPT عالية الكفاءة (10-100 أمبير) مع ميزات إدارة البطارية المتقدمة"
    },
    detailedDescription: {
      en: "MPPT charge controllers manage PV charging of batteries with >95-98% conversion efficiency. Chinese controllers (EPEver, Victron-compatible) feature wide PV input ranges, temperature compensation, and comprehensive protections including over-temperature shutdown at >85°C.",
      ar: "أجهزة التحكم في الشحن MPPT تدير شحن البطاريات الكهروضوئية بكفاءة تحويل >95-98%. وحدات التحكم الصينية تتميز بنطاقات إدخال كهروضوئية واسعة."
    },
    keyFeatures: {
      en: ["95-98% conversion efficiency", "Wide PV input range (150-200V)", "Temperature compensation", "LCD display", "Multiple load control modes"],
      ar: ["كفاءة تحويل 95-98%", "نطاق إدخال كهروضوئي واسع (150-200 فولت)", "تعويض درجة الحرارة", "شاشة LCD", "أوضاع تحكم حمولة متعددة"]
    },
    specifications: [
      { name: "Current Rating", value: "10-100", unit: "A" },
      { name: "System Voltage", value: "12/24/48", unit: "V" },
      { name: "PV Input Voltage", value: "150-200", unit: "V" },
      { name: "Conversion Efficiency", value: "95-98", unit: "%" },
      { name: "Operating Temperature", value: "-35 to +60", unit: "°C" }
    ],
    applications: {
      en: ["Off-grid solar systems", "Battery charging", "Load control", "Solar lighting systems"],
      ar: ["أنظمة شمسية خارج الشبكة", "شحن البطاريات", "التحكم في الحمولة", "أنظمة الإضاءة الشمسية"]
    },
    certifications: ["CE", "FCC", "RoHS"],
    warranty: "2-3 years",
    operatingConditions: {
      temperatureRange: "-35°C to +60°C",
      ip_rating: "IP20-IP32 (requires enclosure)"
    },
    images: [
"mppt.jpg"    ],
    manufacturerBrands: ["EPEver", "Victron Energy", "Morningstar"]
  },
  {
    id: "solar-mounting",
    name: {
      en: "Solar Panel Mounting Systems",
      ar: "أنظمة تركيب الألواح الشمسية"
    },
    category: "solar",
    subcategory: "accessories",
    shortDescription: {
      en: "Robust aluminum and steel mounting structures for roof and ground installations",
      ar: "هياكل تركيب قوية من الألومنيوم والفولاذ لتركيبات الأسطح والأرض"
    },
    detailedDescription: {
      en: "Chinese suppliers offer anodized aluminum and galvanized steel mounting systems designed for high wind loads (100+ km/h). Features include adjustable tilt frames, pole-mount kits, and UV-resistant coatings with stainless steel fasteners for 10+ year lifetimes in harsh environments.",
      ar: "الموردون الصينيون يقدمون أنظمة تركيب من الألومنيوم المؤكسد والفولاذ المجلفن المصممة لأحمال الرياح العالية (100+ كم/ساعة)."
    },
    keyFeatures: {
      en: ["Wind load rated 100+ km/h", "Anodized aluminum construction", "Stainless steel fasteners", "Adjustable tilt angles", "UV-resistant coatings"],
      ar: ["مصنف لحمولة رياح 100+ كم/ساعة", "بناء ألومنيوم مؤكسد", "مثبتات فولاذ مقاوم للصدأ", "زوايا ميل قابلة للتعديل", "طلاءات مقاومة للأشعة فوق البنفسجية"]
    },
    specifications: [
      { name: "Wind Load Rating", value: "100+", unit: "km/h" },
      { name: "Material", value: "Anodized Aluminum/Galvanized Steel", unit: "" },
      { name: "Tilt Angle", value: "0-60", unit: "degrees" },
      { name: "Design Life", value: "10+", unit: "years" }
    ],
    applications: {
      en: ["Roof installations", "Ground mounting", "Pole mounting", "Utility-scale projects"],
      ar: ["تركيبات الأسطح", "التركيب الأرضي", "تركيب العمود", "مشاريع مرافقية"]
    },
    certifications: ["Structural Engineering Standards", "Wind Load Certification"],
    warranty: "10+ years structural warranty",
    operatingConditions: {
      temperatureRange: "-40°C to +85°C",
      humidity: "All weather conditions"
    },
    images: [
"mo.jpg"    ],
    manufacturerBrands: ["Chinese Mounting Specialists", "Structural Steel Manufacturers"]
  }
];

export const constructionProducts: Product[] = [
  {
    id: "construction-blocks",
    name: {
      en: "Construction Blocks & Materials",
      ar: "كتل ومواد البناء"
    },
    category: "construction",
    subcategory: "blocks",
    shortDescription: {
      en: "High-quality construction blocks and building materials for durable infrastructure projects",
      ar: "كتل بناء عالية الجودة ومواد بناء لمشاريع البنية التحتية المتينة"
    },
    detailedDescription: {
      en: "Premium construction blocks and materials designed for African climate conditions, offering excellent durability and thermal properties for residential and commercial construction projects.",
      ar: "كتل ومواد بناء متميزة مصممة لظروف المناخ الأفريقي، توفر متانة ممتازة وخصائص حرارية للمشاريع السكنية والتجارية."
    },
    keyFeatures: {
      en: ["Weather resistant", "High thermal insulation", "Durable construction", "Cost-effective", "Local climate adapted"],
      ar: ["مقاوم للطقس", "عزل حراري عالي", "بناء متين", "فعال من حيث التكلفة", "متكيف مع المناخ المحلي"]
    },
    specifications: [
      { name: "Compressive Strength", value: "High", unit: "MPa" },
      { name: "Thermal Conductivity", value: "Low", unit: "W/m·K" },
      { name: "Water Absorption", value: "Minimal", unit: "%" }
    ],
    applications: {
      en: ["Residential construction", "Commercial buildings", "Infrastructure projects", "Retaining walls"],
      ar: ["البناء السكني", "المباني التجارية", "مشاريع البنية التحتية", "الجدران الاستنادية"]
    },
    certifications: ["Local Building Standards", "Quality Assurance"],
    warranty: "Material quality guarantee",
    operatingConditions: {
      temperatureRange: "-10°C to +60°C"
    },
    images: [
      "blocks.jpg",
      "consruction2.jpg",
      "construction.jpg"
    ]
  }
];

export const rawMaterialProducts: Product[] = [
  {
    id: "gabro-aggregate",
    name: {
      en: "Gabro Aggregate",
      ar: "ركام الجابرو"
    },
    category: "raw-materials",
    subcategory: "aggregates",
    shortDescription: {
      en: "High-quality gabro aggregate for construction and road building applications",
      ar: "ركام جابرو عالي الجودة لتطبيقات البناء وبناء الطرق"
    },
    detailedDescription: {
      en: "Premium gabro aggregate sourced from quality quarries, ideal for concrete production, road construction, and various infrastructure projects. Known for its excellent strength and durability properties.",
      ar: "ركام جابرو متميز مصدره من محاجر عالية الجودة، مثالي لإنتاج الخرسانة وبناء الطرق ومشاريع البنية التحتية المختلفة."
    },
    keyFeatures: {
      en: ["High compressive strength", "Excellent durability", "Weather resistant", "Multiple size grades", "Quality tested"],
      ar: ["قوة ضغط عالية", "متانة ممتازة", "مقاوم للطقس", "درجات حجم متعددة", "مختبر الجودة"]
    },
    specifications: [
      { name: "Aggregate Size", value: "Various", unit: "mm" },
      { name: "Compressive Strength", value: "High", unit: "MPa" },
      { name: "Density", value: "Standard", unit: "kg/m³" }
    ],
    applications: {
      en: ["Concrete production", "Road construction", "Foundation work", "Infrastructure projects"],
      ar: ["إنتاج الخرسانة", "بناء الطرق", "أعمال الأساسات", "مشاريع البنية التحتية"]
    },
    certifications: ["Quality Standards", "Material Testing"],
    warranty: "Quality guarantee",
    operatingConditions: {
      temperatureRange: "All weather conditions"
    },
    images: [
      "gabro.jpg"
    ]
  },
  {
    id: "sand-materials",
    name: {
      en: "Construction Sand & Aggregates",
      ar: "رمل البناء والركام"
    },
    category: "raw-materials",
    subcategory: "sand",
    shortDescription: {
      en: "High-grade construction sand and aggregates for various building applications",
      ar: "رمل بناء وركام عالي الجودة لتطبيقات البناء المختلفة"
    },
    detailedDescription: {
      en: "Premium quality construction sand and aggregates suitable for concrete mixing, plastering, and various construction applications. Carefully graded and tested for optimal performance.",
      ar: "رمل بناء وركام عالي الجودة مناسب لخلط الخرسانة والجص وتطبيقات البناء المختلفة. مصنف ومختبر بعناية للأداء الأمثل."
    },
    keyFeatures: {
      en: ["Graded materials", "Low impurity content", "Consistent quality", "Multiple applications", "Tested materials"],
      ar: ["مواد مصنفة", "محتوى شوائب منخفض", "جودة متسقة", "تطبيقات متعددة", "مواد مختبرة"]
    },
    specifications: [
      { name: "Grain Size", value: "Various", unit: "mm" },
      { name: "Silt Content", value: "Low", unit: "%" },
      { name: "Moisture Content", value: "Controlled", unit: "%" }
    ],
    applications: {
      en: ["Concrete mixing", "Plastering", "Foundation work", "General construction"],
      ar: ["خلط الخرسانة", "الجص", "أعمال الأساسات", "البناء العام"]
    },
    certifications: ["Construction Standards", "Quality Control"],
    warranty: "Material specification guarantee",
    operatingConditions: {
      temperatureRange: "All conditions"
    },
    images: [
      "rmala.jpg",
      "rmla.jpg",
      "rmla2.jpg"
    ]
  }
];

export const trafficSafetyProducts: Product[] = [
  {
    id: "road-safety-signs",
    name: {
      en: "Road Safety Signs & Signage",
      ar: "علامات وإشارات السلامة المرورية"
    },
    category: "traffic-safety",
    subcategory: "signage",
    shortDescription: {
      en: "Comprehensive range of road safety signs and traffic management signage systems",
      ar: "مجموعة شاملة من علامات السلامة المرورية وأنظمة إشارات إدارة المرور"
    },
    detailedDescription: {
      en: "Complete traffic safety signage solutions including reflective road signs, warning signs, regulatory signs, and information signs. Manufactured to international standards for maximum visibility and durability.",
      ar: "حلول إشارات السلامة المرورية الكاملة تشمل العلامات المرورية العاكسة وعلامات التحذير والعلامات التنظيمية وعلامات المعلومات."
    },
    keyFeatures: {
      en: ["High-visibility reflective materials", "Weather resistant", "International standard compliance", "Durable construction", "UV resistant"],
      ar: ["مواد عاكسة عالية الوضوح", "مقاوم للطقس", "امتثال للمعايير الدولية", "بناء متين", "مقاوم للأشعة فوق البنفسجية"]
    },
    specifications: [
      { name: "Reflectivity Class", value: "High Intensity", unit: "" },
      { name: "Material", value: "Aluminum/Steel", unit: "" },
      { name: "Visibility Distance", value: "500+", unit: "meters" }
    ],
    applications: {
      en: ["Highway signage", "Urban traffic management", "Construction zones", "Parking areas"],
      ar: ["إشارات الطرق السريعة", "إدارة المرور الحضري", "مناطق البناء", "مناطق الوقوف"]
    },
    certifications: ["International Traffic Standards", "Reflectivity Standards"],
    warranty: "5-10 years material warranty",
    operatingConditions: {
      temperatureRange: "-40°C to +70°C",
      ip_rating: "Weather resistant"
    },
    images: [
      "signs.jpg",
      "road.jpg"
    ]
  },
  {
    id: "glow-in-dark-materials",
    name: {
      en: "Glow-in-the-Dark Safety Materials",
      ar: "مواد السلامة المضيئة في الظلام"
    },
    category: "traffic-safety",
    subcategory: "luminescent",
    shortDescription: {
      en: "Photoluminescent safety materials for enhanced visibility in low-light conditions",
      ar: "مواد السلامة المضيئة ضوئياً لتحسين الرؤية في ظروف الإضاءة المنخفضة"
    },
    detailedDescription: {
      en: "Advanced photoluminescent materials that absorb ambient light during the day and emit a bright glow in darkness, providing continuous visibility without electricity. Ideal for emergency exits, pathways, and safety marking.",
      ar: "مواد مضيئة ضوئياً متقدمة تمتص الضوء المحيط أثناء النهار وتنبعث منها وهج ساطع في الظلام، توفر رؤية مستمرة بدون كهرباء."
    },
    keyFeatures: {
      en: ["12+ hours glow time", "No electricity required", "Weather resistant", "Long-lasting phosphorescence", "Easy installation"],
      ar: ["وقت إضاءة 12+ ساعة", "لا يتطلب كهرباء", "مقاوم للطقس", "فسفورية طويلة الأمد", "تركيب سهل"]
    },
    specifications: [
      { name: "Glow Duration", value: "12+", unit: "hours" },
      { name: "Charging Time", value: "10-30", unit: "minutes" },
      { name: "Luminance", value: "High", unit: "mcd/m²" }
    ],
    applications: {
      en: ["Emergency exits", "Pathway marking", "Safety signage", "Building evacuation"],
      ar: ["مخارج الطوارئ", "تحديد المسارات", "إشارات السلامة", "إخلاء المباني"]
    },
    certifications: ["Safety Standards", "Photoluminescent Standards"],
    warranty: "10+ years glow performance",
    operatingConditions: {
      temperatureRange: "-20°C to +60°C"
    },
    images: [
      "glow.jpg",
      "MematGlowintheDarkCOMPANYPROFILE.pdf"
    ]
  },
  {
    id: "safety-equipment",
    name: {
      en: "Traffic Safety Equipment",
      ar: "معدات السلامة المرورية"
    },
    category: "traffic-safety",
    subcategory: "equipment",
    shortDescription: {
      en: "Complete range of traffic safety equipment including barriers, cones, and protective gear",
      ar: "مجموعة كاملة من معدات السلامة المرورية تشمل الحواجز والمخاريط ومعدات الحماية"
    },
    detailedDescription: {
      en: "Comprehensive traffic safety equipment designed for road construction, traffic management, and accident prevention. High-visibility materials and robust construction for reliable performance.",
      ar: "معدات السلامة المرورية الشاملة المصممة لبناء الطرق وإدارة المرور ومنع الحوادث. مواد عالية الوضوح وبناء قوي للأداء الموثوق."
    },
    keyFeatures: {
      en: ["High visibility", "Durable materials", "Easy deployment", "Weather resistant", "Standard compliance"],
      ar: ["وضوح عالي", "مواد متينة", "نشر سهل", "مقاوم للطقس", "امتثال للمعايير"]
    },
    specifications: [
      { name: "Visibility", value: "High", unit: "" },
      { name: "Material", value: "PE/PVC", unit: "" },
      { name: "Height", value: "Various", unit: "cm" }
    ],
    applications: {
      en: ["Traffic control", "Construction zones", "Event management", "Road maintenance"],
      ar: ["التحكم في المرور", "مناطق البناء", "إدارة الأحداث", "صيانة الطرق"]
    },
    certifications: ["Traffic Safety Standards"],
    warranty: "Material quality guarantee",
    operatingConditions: {
      temperatureRange: "-30°C to +60°C"
    },
    images: [
      "safty.jpeg"
    ]
  }
];

export const allProducts = [
  ...solarProducts,
  ...constructionProducts,
  ...rawMaterialProducts,
  ...trafficSafetyProducts
];

// Helper functions
export const getProductsByCategory = (category: string) => {
  return allProducts.filter(product => product.category === category);
};

export const getProductsBySubcategory = (category: string, subcategory: string) => {
  return allProducts.filter(product => 
    product.category === category && product.subcategory === subcategory
  );
};

export const getProductById = (id: string) => {
  return allProducts.find(product => product.id === id);
};

export const searchProducts = (query: string, language: 'en' | 'ar' = 'en') => {
  const lowercaseQuery = query.toLowerCase();
  return allProducts.filter(product => 
    product.name[language].toLowerCase().includes(lowercaseQuery) ||
    product.shortDescription[language].toLowerCase().includes(lowercaseQuery) ||
    product.keyFeatures[language].some(feature => 
      feature.toLowerCase().includes(lowercaseQuery)
    )
  );
};

export const getCategorySummary = (language: 'en' | 'ar' = 'en') => {
  return {
    solar: {
      name: language === 'en' ? 'Solar Energy Solutions' : 'حلول الطاقة الشمسية',
      description: language === 'en' 
        ? 'Best-in-Class Chinese Solar Components for African Off-Grid Markets. Complete range from high-efficiency monocrystalline panels to advanced battery storage and power conversion systems.'
        : 'مكونات الطاقة الشمسية الصينية من الدرجة الأولى للأسواق الأفريقية خارج الشبكة. مجموعة كاملة من الألواح أحادية البلورة عالية الكفاءة إلى أنظمة تخزين البطاريات المتقدمة وتحويل الطاقة.',
      productCount: solarProducts.length,
      subcategories: [
        { name: 'panels', displayName: language === 'en' ? 'Solar Panels' : 'الألواح الشمسية' },
        { name: 'floating-systems', displayName: language === 'en' ? 'Floating Systems' : 'الأنظمة العائمة' },
        { name: 'lighting', displayName: language === 'en' ? 'Solar Lighting' : 'الإضاءة الشمسية' },
        { name: 'energy-storage', displayName: language === 'en' ? 'Energy Storage' : 'تخزين الطاقة' },
        { name: 'power-conversion', displayName: language === 'en' ? 'Power Conversion' : 'تحويل الطاقة' },
        { name: 'accessories', displayName: language === 'en' ? 'Accessories' : 'الملحقات' }
      ]
    },
    construction: {
      name: language === 'en' ? 'Construction Materials' : 'مواد البناء',
      description: language === 'en'
        ? 'High-quality construction materials designed for African climate conditions, offering excellent durability and thermal properties for residential and commercial projects.'
        : 'مواد بناء عالية الجودة مصممة لظروف المناخ الأفريقي، توفر متانة ممتازة وخصائص حرارية للمشاريع السكنية والتجارية.',
      productCount: constructionProducts.length,
      subcategories: [
        { name: 'blocks', displayName: language === 'en' ? 'Construction Blocks' : 'كتل البناء' }
      ]
    },
    'raw-materials': {
      name: language === 'en' ? 'Raw Materials' : 'المواد الخام',
      description: language === 'en'
        ? 'Premium quality aggregates and construction materials for infrastructure projects, including gabro aggregate and construction sand.'
        : 'ركام ومواد بناء عالية الجودة لمشاريع البنية التحتية، بما في ذلك ركام الجابرو ورمل البناء.',
      productCount: rawMaterialProducts.length,
      subcategories: [
        { name: 'aggregates', displayName: language === 'en' ? 'Aggregates' : 'الركام' },
        { name: 'sand', displayName: language === 'en' ? 'Sand Materials' : 'مواد الرمل' }
      ]
    },
    'traffic-safety': {
      name: language === 'en' ? 'Traffic Safety' : 'السلامة المرورية',
      description: language === 'en'
        ? 'Comprehensive traffic safety solutions including road signage, glow-in-the-dark materials, and safety equipment for road construction and traffic management.'
        : 'حلول السلامة المرورية الشاملة تشمل إشارات الطرق والمواد المضيئة في الظلام ومعدات السلامة لبناء الطرق وإدارة المرور.',
      productCount: trafficSafetyProducts.length,
      subcategories: [
        { name: 'signage', displayName: language === 'en' ? 'Road Signage' : 'إشارات الطرق' },
        { name: 'luminescent', displayName: language === 'en' ? 'Luminescent Materials' : 'المواد المضيئة' },
        { name: 'equipment', displayName: language === 'en' ? 'Safety Equipment' : 'معدات السلامة' }
      ]
    }
  };
};
