/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { EmergencyCode, RoleResponsibility, GeneralSafetyTip } from './types';

// General Safety Tips (Slide 1, Section 1)
export const generalSafetyTips: GeneralSafetyTip[] = [
  {
    id: 'tip-1',
    textAr: 'تعرف على مخارج الطوارئ.',
    textEn: 'Know the emergency exits.'
  },
  {
    id: 'tip-2',
    textAr: 'أبلغ عن أي خطر فوراً.',
    textEn: 'Report any hazard immediately.'
  },
  {
    id: 'tip-3',
    textAr: 'حافظ على هدوئك أثناء الطوارئ.',
    textEn: 'Stay calm during emergencies.'
  },
  {
    id: 'tip-4',
    textAr: 'استخدم معدات الحماية عند الحاجة.',
    textEn: 'Use protective gear when needed.'
  },
  {
    id: 'tip-5',
    textAr: 'شارك في تدريبات السلامة.',
    textEn: 'Participate in safety drills.'
  }
];

// Responsibilities during an emergency (Slide 1, Section 2)
export const roleResponsibilities: RoleResponsibility[] = [
  {
    id: 'doctors',
    titleAr: 'الأطباء',
    titleEn: 'Doctors',
    descriptionAr: 'ضمان سلامة المرضى، وتقديم الإسعافات الأولية حسب الحاجة.',
    descriptionEn: 'Ensure patient safety and provide first aid as needed.',
    bulletsAr: [
      'ضمان سلامة المرضى.',
      'تقديم الإسعافات الأولية حسب الحاجة.'
    ],
    bulletsEn: [
      'Ensure patient safety.',
      'Provide first aid as needed.'
    ],
    icon: 'user-md'
  },
  {
    id: 'nurses',
    titleAr: 'الممرضون',
    titleEn: 'Nurses',
    descriptionAr: 'مساعدة المرضى في الإخلاء، وإبلاغ الفريق الطبي بأية إصابات أو احتياجات عاجلة.',
    descriptionEn: 'Assist patients in evacuation, and inform the medical team of any injuries or urgent needs.',
    bulletsAr: [
      'مساعدة المرضى في الإخلاء.',
      'إبلاغ الفريق الطبي بأية إصابات أو احتياجات عاجلة.'
    ],
    bulletsEn: [
      'Assist patients in evacuation.',
      'Inform the medical team of any injuries or urgent needs.'
    ],
    icon: 'nurse'
  },
  {
    id: 'administrators',
    titleAr: 'الإداريون',
    titleEn: 'Administrators',
    descriptionAr: 'تفعيل خطط الطوارئ، والتواصل مع فرق الاستجابة لتنسيق الجهود.',
    descriptionEn: 'Activate emergency plans, and communicate with response teams to coordinate efforts.',
    bulletsAr: [
      'تفعيل خطط الطوارئ.',
      'التواصل مع فرق الاستجابة لتنسيق الجهود.'
    ],
    bulletsEn: [
      'Activate emergency plans.',
      'Communicate with response teams to coordinate efforts.'
    ],
    icon: 'briefcase'
  },
  {
    id: 'security',
    titleAr: 'فرق الأمن والسلامة',
    titleEn: 'Security and Safety Teams',
    descriptionAr: 'إرشاد الأفراد إلى المخارج الآمنة، والسيطرة على الموقف وتقليل الأخطار.',
    descriptionEn: 'Guiding individuals to safe exits, and control the situation and reduce risks.',
    bulletsAr: [
      'إرشاد الأفراد إلى المخارج الآمنة.',
      'السيطرة على الموقف وتقليل الأخطار.'
    ],
    bulletsEn: [
      'Guiding individuals to safe exits.',
      'Control the situation and reduce risks.'
    ],
    icon: 'shield'
  },
  {
    id: 'others',
    titleAr: 'الموظفون الآخرون',
    titleEn: 'Other Employees',
    descriptionAr: 'اتباع تعليمات السلامة، والتعاون مع الفرق المتخصصة في الإخلاء أو الإبلاغ.',
    descriptionEn: 'Follow safety instructions, and cooperate with specialized teams in evacuation or reporting.',
    bulletsAr: [
      'اتباع تعليمات السلامة.',
      'التعاون مع الفرق المتخصصة في الإخلاء أو الإبلاغ.'
    ],
    bulletsEn: [
      'Follow safety instructions.',
      'Cooperate with specialized teams in evacuation or reporting.'
    ],
    icon: 'users'
  }
];

// Interactive Emergency Codes (Arabic/English audio and actions EXACTLY matching Image 5)
export const emergencyCodes: EmergencyCode[] = [
  {
    id: 'blue',
    color: 'Blue',
    nameAr: 'حالة توقف قلب',
    nameEn: 'CODE BLUE',
    descriptionAr: 'حالة توقف قلب / CARDIAC ARREST',
    descriptionEn: 'Cardiac arrest',
    hexColor: '#2563eb', // Blue-600
    textColor: 'text-blue-600',
    glowColor: 'shadow-blue-500/50',
    actionsAr: [
      'الإعلان عن الكود عند وجود حالة مؤكدة لتوقف القلب.',
      'البدء بإجراء الإنعاش القلبي الرئوي (30 ضغطة ثم نفسين).',
      'الاستمرار بالإنعاش القلبي الرئوي حتى قدوم الفريق الطبي أو إفاقة المصاب.',
      'إعلان انتهاء الحالة بتفعيل كود (ALL CLEAR) وكتابة التقرير.'
    ],
    actionsEn: [
      'Announce the code when there is a confirmed case of cardiac arrest.',
      'Start CPR (30 compressions, then 2 breaths).',
      'Continue CPR until the medical team arrives or the injured person wakes up.',
      'Announcing the end of the case by activating the code (ALL CLEAR) and writing the report.'
    ],
    icon: 'HeartPulse'
  },
  {
    id: 'red',
    color: 'Red',
    nameAr: 'حرائق',
    nameEn: 'CODE RED',
    descriptionAr: 'حرائق / FIRE',
    descriptionEn: 'Fire',
    hexColor: '#dc2626', // Red-600
    textColor: 'text-red-600',
    glowColor: 'shadow-red-500/50',
    actionsAr: [
      'تفعيل الكود فوراً والإبلاغ عن حالة الحريق.',
      'الإستجابة السريعة وتنفيذ خطة الإخلاء المعتمدة (أفقي - عمودي - جزئي - كلي).',
      'تطبيق قاعدة (RACE) و (PASS) المستخدمة أثناء الحريق.',
      'التعاون مع فرق الدفاع المدني لإخماد الحريق والإنقاذ.',
      'تقديم الإسعافات الأولية عند الحاجة .',
      'إعلان إنتهاء الحالة بتفعيل كود (ALL CLEAR) وكتابة التقرير.'
    ],
    actionsEn: [
      'Activate the code immediately and report the fire.',
      'Rapid response and implementation of the approved evacuation plan (horizontal - Vertical - Partial - Total).',
      'Application of the (RACE) and (PASS) rules used during a fire.',
      'Cooperate with civil defense teams to extinguish fires and rescue.',
      'Providing first aid when needed.',
      'Announcing the end of the case by activating the code (ALL CLEAR) and writing the report.'
    ],
    icon: 'Flame'
  },
  {
    id: 'yellow',
    color: 'Yellow',
    nameAr: 'الأزمات الخارجية',
    nameEn: 'CODE YELLOW',
    descriptionAr: 'الأزمات الخارجية / EXTERNAL DISASTER',
    descriptionEn: 'External Disaster',
    hexColor: '#eab308', // Yellow-500
    textColor: 'text-yellow-600',
    glowColor: 'shadow-yellow-500/50',
    actionsAr: [
      'تفعيل خطة الطوارئ للكوارث الخارجية فور تلقي البلاغ وتجهيز فريق القيادة.',
      'فتح مسارات الطوارئ وتجهيز منطقة استقبال وفرز حالات المصابين بشكل فوري.',
      'استدعاء كافة الكوادر الطبية والإدارية لدعم الأقسام الحيوية بالمستشفى.',
      'إعادة توزيع الموارد الطبية وسريرية وتجهيز غرف العمليات والتعامل اللوجستي.',
      'التنسيق الفوري والكامل مع الهلال الأحمر والدفاع المدني والجهات الحكومية.',
      'إعلان زوال الخطر وتفعيل كود (ALL CLEAR) فور انتهاء استجابة الأزمة وكتابة البلاغ.'
    ],
    actionsEn: [
      'Activate the external disaster emergency plan immediately and prepare command team.',
      'Open emergency pathways and set up immediate casualty reception and triage zones.',
      'Recall all medical and administrative personnel to support vital hospital wards.',
      'Redistribute medical reserves, prepare operating units and manage logistics.',
      'Establish direct and comprehensive coordination with Red Crescent and Civil Defense.',
      'Announce end of the crisis and activate (ALL CLEAR) upon completion, writing reports.'
    ],
    icon: 'AlertTriangle'
  },
  {
    id: 'pink',
    color: 'Pink',
    nameAr: 'طفل أو رضيع مفقود',
    nameEn: 'CODE PINK',
    descriptionAr: 'طفل أو رضيع مفقود / CHILD ABDUCTION',
    descriptionEn: 'Child Abduction',
    hexColor: '#ec4899', // Pink-500
    textColor: 'text-pink-500',
    glowColor: 'shadow-pink-500/50',
    actionsAr: [
      'الإبلاغ فوراً عن اشتباه حالة اختطاف وإغلاق كافة مخارج ومداخل المنشأة.',
      'إيقاف تشغيل المصاعد وسلالم الطوارئ بالمنشأة تماماً لمنع حركة الجاني.',
      'مراقبة وفحص أي شخص يغادر حاملاً حقيبة كبيرة، طرد، أو معطف ثقيل.',
      'تقديم وصف دقيق للطفل المشتبه باختطافه ونشره لكافة حراس الأمن بالموقع.',
      'التعاون الكامل مع الشرطة والأقسام الأمنية وتزويدهم بتسجيلات الكاميرات.',
      'إعلان زوال خطر كود الرمز الوردي بتفعيل (ALL CLEAR) بعد العثور على الطفل.'
    ],
    actionsEn: [
      'Report abduction suspicion immediately and lock down all hospital exits/entrances.',
      'Shut down passenger elevators and emergency escalators to freeze suspect moving.',
      'Inspect and monitor any outgoing individual carrying large bags, boxes, or thick clothing.',
      'Acquire detailed profile of the missing infant and distribute to security posts.',
      'Cooperate closely with law enforcement and supply surveillance records.',
      'Announce the end of Code Pink by activating (ALL CLEAR) after locating the child.'
    ],
    icon: 'Baby'
  },
  {
    id: 'orange',
    color: 'Orange',
    nameAr: 'تسرب مواد خطرة',
    nameEn: 'CODE ORANGE',
    descriptionAr: 'تسرب مواد خطرة / CHIMICAL SPILL',
    descriptionEn: 'Chemical Spill',
    hexColor: '#f97316', // Orange-500
    textColor: 'text-orange-500',
    glowColor: 'shadow-orange-500/50',
    actionsAr: [
      'إخلاء المنطقة الملوثة والمحيطة تماماً بالحادث والحد من انتشار التسرب.',
      'مراجعة صحيفة سلامة المواد الكيماوية (MSDS) لمعالجة المادة المتسربة بشكل آمن.',
      'تجهيز وارتداء طاقم معدات الوقاية الشخصية الكاملة (PPE) قبل مكافحة البقعة.',
      'استخدام الحواجز الطينية أو الماصة لمنع وصول المواد المتسربة لمجاري الصرف.',
      'الاتصال الفوري والمباشر بفرق الأمن البيئي والدفاع المدني للتحكم المحترف.',
      'تطهير المنطقة بشكل كامل وإجراء فحص للتهوية قبل إعلان كود (ALL CLEAR).'
    ],
    actionsEn: [
      'Evacuate the immediate contamination zone and isolate access to the chemical spill area.',
      'Consult the Material Safety Data Sheets (MSDS) to handle spill characteristics safely.',
      'Equip and wear full Personal Protective Equipment (PPE) prior to cleanup actions.',
      'Utilize containment kits and absorbents to direct hazardous material away from sewers.',
      'Notify environmental health safety teams and Civil Defense units for professional sweep.',
      'Decontaminate the entire area and clear ventilation units before declaring (ALL CLEAR).'
    ],
    icon: 'Radio'
  },
  {
    id: 'gray',
    color: 'Gray',
    nameAr: 'حالة الطقس المهددة',
    nameEn: 'CODE GRAY',
    descriptionAr: 'حالة الطقس المهددة / SEVERE WEATHER',
    descriptionEn: 'Severe Weather',
    hexColor: '#4b5563', // Gray-600
    textColor: 'text-gray-600',
    glowColor: 'shadow-gray-500/50',
    actionsAr: [
      'متابعة ومراقبة النشرات لتقارير الطقس والتحذيرات الصادرة من نظام الأرصاد والبيئة.',
      'إحكام إغلاق النوافذ، الأبواب والمخارج المؤدية للساحات المفتوحة تماماً.',
      'تأمين ونقل الأجهزة والمستلزمات الطبية والتقنية الحساسة إلى المناطق الداخلية.',
      'توفير والتأكد من تفعيل مصادر الطاقة والمولدات الاحتياطية وشبكات المياه البديلة.',
      'تجميع وتأمين المرضى والمنسوبين بعيداً عن الواجهات الزجاجية للغرف والأسرة.',
      'إعلان زوال الخطر (ALL CLEAR) فور استقرار المناخ وإصدار توجيهات الأمان.'
    ],
    actionsEn: [
      'Track meteorological bulletins and warnings issued by local atmospheric watch.',
      'Securely lock and brace exterior window panes, doors, and walkways to open fields.',
      'Relocate critical clinical appliances and medical supplies to central secure zones.',
      'Verify backup power reserves, electrical generators, and internal water grids.',
      'Congregate patients and staff members away from exterior glass features.',
      'Announce standard (ALL CLEAR) after severe weather conditions stabilize.'
    ],
    icon: 'CloudLightning' // Wait, using an icon like cloud which is severe weather
  },
  {
    id: 'white',
    color: 'White',
    nameAr: 'شخص عنيف / سلوك عدواني',
    nameEn: 'CODE WHITE',
    descriptionAr: 'شخص عنيف / سلوك عدواني / VIOLENT BEHAVIOUR',
    descriptionEn: 'Violent Behaviour',
    hexColor: '#1e293b', // represented dark slate for rich styling but white color bar
    textColor: 'text-slate-600',
    glowColor: 'shadow-slate-450/40',
    actionsAr: [
      'استدعاء فرق التدخل السريع التابعة للأمن فوراً لتطويق النطاق دون لفت الانتباه.',
      'محاولة التهدئة وتجنب استخدام نبرة حادة للاستفزاز البصري واللفظي للشخص.',
      'طرد أو عزل وتطهير موقع المواجهة من المواد الحادة أو الأدوات التي يسهل تحويلها لسلاح.',
      'المحافظة على وضعية دفاعية آمنة وإخلاء المرضى والزوار من موضع التهديد.',
      'مخاطبة الجهات الأمنية والشرطة في حال تطور السلوك لتهديد حياة الموظفين.',
      'تفعيل كود (ALL CLEAR) فور زوال حالة الغضب واستلام الأمن السيطرة وكتابة تقرير.'
    ],
    actionsEn: [
      'Deploy the security de-escalation task force immediately to isolate the location.',
      'Apply verbal de-escalation gestures; avoid sudden aggressive or challenging actions.',
      'Clear the proximity of any sharp tools or fixtures that can be weaponized.',
      'Keep a protective defensive distance and evacuate patients from the danger zone.',
      'Call emergency law enforcement if aggression compromises life safety.',
      'Declare (ALL CLEAR) after the situation is entirely neutralized and secure.'
    ],
    icon: 'UserX'
  },
  {
    id: 'black',
    color: 'Black',
    nameAr: 'تهديد بوجود قنبلة',
    nameEn: 'CODE BLACK',
    descriptionAr: 'تهديد بوجود قنبلة / BOMB THREAT',
    descriptionEn: 'Bomb Threat',
    hexColor: '#111827', // Gray-900 (Black appearance)
    textColor: 'text-gray-900',
    glowColor: 'shadow-gray-900/50',
    actionsAr: [
      'الحفاظ على الهدوء التام في المكالمة التهديدية وتدوين تفاصيل المتصل وصوته بدقة.',
      'إخطار لجان الأزمات والأمن وغرفة القيادة والسيطرة فوراً وتجنب إثارة ذعر الحضور.',
      'بدء تفتيش بصري هادئ للأقسام والعيادات بحثاً عن طرود غريبة أو مجهولة المالك.',
      'يُمنع منعاً باتاً لمس، هز، أو تحريك أي جسم يشتبه كونه متفجراً وتأمين ساحته.',
      'تأهيل الأطقم الطبية وتعبئة الممرات ترقباً لصدور أوامر الإخلاء المنظم.',
      'إعلان زوال الخطر وتفعيل (ALL CLEAR) عقب الانتهاء من المعاينة الأمنية المتخصصة.'
    ],
    actionsEn: [
      'Maintain composure during threat calls and record Caller ID and acoustic characteristics.',
      'Notify commands and security departments instantly without creating institutional panic.',
      'Conduct silent visual scans of clinical rooms to spot unregistered packages.',
      'Do absolutely NOT handle, shake, or open any suspicious objects; isolate the zone.',
      'Coordinate clinical teams in preparation for structured evacuation directives.',
      'Declare (ALL CLEAR) only after official explosive disposal units clear the facility.'
    ],
    icon: 'Bomb'
  },
  {
    id: 'brown',
    color: 'Brown',
    nameAr: 'انقطاع الخدمات',
    nameEn: 'CODE BROWN',
    descriptionAr: 'انقطاع الخدمات / UTILITY FAILURE',
    descriptionEn: 'Utility Failure',
    hexColor: '#78350f', // Brown-900
    textColor: 'text-amber-900',
    glowColor: 'shadow-amber-800/50',
    actionsAr: [
      'تحديد نوع ومكان الخلل الخدماتي (أنظمة الطاقة، إمداد المياه، غازات طبية).',
      'تفعيل عمل المولدات الاحتياطية وإيصال الأجهزة الحرجة بالتيار الكهربائي الطارئ.',
      'حصر المرضى الخاضعين لأجهزة الإنعاش ومراقبة الأكسجين البديل والأكياس المساعدة.',
      'التواصل والتنسيق مع فرق الصيانة وإدارة المشاريع للعمل على إنقاذ الخلل الفني.',
      'ترشيد استخدام الاحتياطيات غير الطارئة لحين انتظام الخدمات وعودة التدفق.',
      'إعلان زوال الكود البني وكتابة التقرير فور استقرار التيار والشبكات الطبية.'
    ],
    actionsEn: [
      'Determine the precise source of failure (electrical power, water networks, medical gas).',
      'Engage backup power generators and move ventilator-dependent systems to red outlets.',
      'Track all critical patients attached to intensive care components.',
      'Establish constant coordination with engineering, maintenance, and operators.',
      'Preserve water usage and utility storage blocks by halting secondary non-critical loads.',
      'Announce standard (ALL CLEAR) upon full restoration of utilities and facilities.'
    ],
    icon: 'Hammer'
  },
  {
    id: 'silver',
    color: 'Silver',
    nameAr: 'شخص مسلح',
    nameEn: 'CODE SILVER',
    descriptionAr: 'شخص مسلح / ACTIVE SHOOTER/WEAPON',
    descriptionEn: 'Active Shooter/Weapon',
    hexColor: '#64748b', // Slate-500 (Silver color appearance)
    textColor: 'text-slate-500',
    glowColor: 'shadow-slate-400/50',
    actionsAr: [
      'تطبيق خطة الهروب (RUN) بشكل سريع وفوري والتوجه لبوابة الخروج في حال سمحت البيئة.',
      'إذا تعذر الفرار، طبّق (HIDE): اغلق وتترس الأبواب بالخزائن، اطفئ النور وصمّت الهاتف.',
      'كخيار دفاعي أخير للمحافظة على الأرواح، طبّق العنف الجماعي (FIGHT) لشل المسلح.',
      'الاتصال الفوري بجهاز الشرطة وقوات الأمن وإعطاء إفادات كاملة عن طبيعة السلاح.',
      'عند دخول عناصر قوة الشرطة، ابق يديك مكشوفتين ومفتوحتين تماماً، واتبع الأوامر.',
      'إعلان زوال خطر كود الرمز الفضي بعد سيطرة الشرطة التامة وتأمين مباني المستشفى.'
    ],
    actionsEn: [
      'Enforce ESCAPE (RUN) instantly by moving through safe exterior corridors and gates.',
      'If trapped, BARRICADE (HIDE): Lock doors behind heavy storage, kill lights & silence phones.',
      'As a last defensive resort to guard lives, NEUTRALIZE (FIGHT) with maximum group force.',
      'Contact police emergency teams right away; describe weapons and gunman.',
      'Upon command entrance of law enforcement, keep hands empty and fully exposed.',
      'Declare standard (ALL CLEAR) after SWAT/police forces finalize search & secure sweeps.'
    ],
    icon: 'Sword'
  },
  {
    id: 'all_clear',
    color: 'All Clear',
    nameAr: 'زوال الخطر',
    nameEn: 'ALL CLEAR',
    descriptionAr: 'زوال الخطر',
    descriptionEn: 'All Clear',
    hexColor: '#16a34a', // Green-600
    textColor: 'text-emerald-600',
    glowColor: 'shadow-emerald-500/50',
    actionsAr: [
      'تلقي التوجيه المعتمد لإغلاق الأزمة من مدير مستشفى أو قائد الحدث الميداني.',
      'تفعيل نداء (زوال الخطر / ALL CLEAR) بصوت مرتفع ثلاث مرات في نظام النداء الداخلي.',
      'إعادة توجيه المرضى والمنسوبين والزوار تدريجياً للعمل بأماكنهم الأصلية المنظمة.',
      'تأكيد جاهزية وتشغيل وتتبع جميع الأقسام الطارئة وأجهزة التدخل والسلامة بالموقع.',
      'حصر وتجميع كافة مطافئ الحريق المستهلكة وإرسالها للصيانة والشحن الاحتياطي الفوري.',
      'عقد جلسات تفتيشية ومراجعة الأداء والملاحظات الهامة وكتابة التقرير القياسي لوزارة الصحة.'
    ],
    actionsEn: [
      'Acknowledge official closure codes authorized by the Incident Commander.',
      'Broadcast the (ALL CLEAR / زوال الخطر) announcement thrice over the intercom system.',
      'Sponsor gradual, organized reentry of patients, visitors, and workers to baseline zones.',
      'Conduct verification sweeps to ensure diagnostic and clinical assets are run-ready.',
      'Isolate used or expired Extinguishers and transmit them immediately for recharging.',
      'Host debriefing exercises and complete mandatory reports for safety archives.'
    ],
    icon: 'BadgeCheck'
  }
];

// Content for RACE (Slide 2, Section 1)
export interface RaceStep {
  letter: string;
  wordAr: string;
  wordEn: string;
  descriptionAr: string;
  descriptionEn: string;
}

export const raceSteps: RaceStep[] = [
  {
    letter: 'R',
    wordAr: 'إنقاذ المرضى',
    wordEn: 'Rescue',
    descriptionAr: 'نقل المرضى / الزوار من مكان الخطر إلى مكان آمن.',
    descriptionEn: 'Safe anyone from the fire area to another safe place.'
  },
  {
    letter: 'A',
    wordAr: 'تفعيل الإنذار',
    wordEn: 'Activate Alarm',
    descriptionAr: 'أطلق نداء الشفرة الحمراء بصوت مرتفع، اتصل بخط البلاغ الخاص بالمستشفى، اسحب جهاز الإنذار.',
    descriptionEn: 'Call Code Red, Call the Hospital Reporting Line, Activate Fire Alarm.'
  },
  {
    letter: 'C',
    wordAr: 'احتواء وحصر الحريق',
    wordEn: 'Contain Fire',
    descriptionAr: 'أغلق جميع الأبواب، أغلق محبس الأكسجين، ضع مناشف مبتلة أسفل الباب.',
    descriptionEn: 'Close The Door, Oxygen Vavle Lock, Put Towels The Door.'
  },
  {
    letter: 'E',
    wordAr: 'الإطفاء أو الإخلاء',
    wordEn: 'Extinguish Or EVACUATE',
    descriptionAr: 'الإطفاء والإخلاء.',
    descriptionEn: 'Extinguish Or EVACUATE .'
  }
];

// Content for PASS (Slide 2, Section 2)
export interface PassStep {
  step: string;
  letter: string;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  iconName: string;
}

export const passSteps: PassStep[] = [
  {
    step: '1',
    letter: 'P',
    titleAr: 'سحب مسمار الأمان',
    titleEn: 'pull the pin',
    descAr: 'سحب مسمار الأمان',
    descEn: 'pull the pin',
    iconName: 'Pull'
  },
  {
    step: '2',
    letter: 'A',
    titleAr: 'وجه الخرطوم إلى قاعدة الحريق',
    titleEn: 'Aim at the base of fire',
    descAr: 'وجه الخرطوم إلى قاعدة الحريق',
    descEn: 'Aim at the base of fire',
    iconName: 'Aim'
  },
  {
    step: '3',
    letter: 'S',
    titleAr: 'اضغط على المقبض',
    titleEn: 'Squeeze the trigger',
    descAr: 'اضغط على المقبض',
    descEn: 'Squeeze the trigger',
    iconName: 'Squeeze'
  },
  {
    step: '4',
    letter: 'S',
    titleAr: 'حرك الخرطوم يميناً ويساراً',
    titleEn: 'Sweep side to side',
    descAr: 'حرك الخرطوم يميناً ويساراً',
    descEn: 'Sweep side to side',
    iconName: 'Sweep'
  }
];

// Content for Safety FAQs (Slide 3)
export interface SafetyFaq {
  questionAr: string;
  questionEn: string;
  answerAr: string;
  answerEn: string;
}

export const safetyFaqs: SafetyFaq[] = [
  {
    questionAr: 'ماذا أفعل إذا لم أتمكن من استخدام طفاية الحريق؟',
    questionEn: 'What do I do if I can\'t use a fire extinguisher?',
    answerAr: 'إذا لم تتمكن من استخدام طفاية الحريق، ابتعد فوراً عن منطقة الخطر وأبلغ عن الحريق عبر أقرب جهاز إنذار أو الرقم المخصص للطوارئ. قم بإرشاد الأشخاص الآخرين للخروج بأمان.',
    answerEn: 'If you cannot use a fire extinguisher, immediately move away from the danger area and report the fire to the nearest fire alarm or emergency number. Guide others to get out safely.'
  },
  {
    questionAr: 'كيف أتصرف إذا لم أجد مخرجاً آمناً أثناء الإخلاء؟',
    questionEn: 'What should I do if I cannot find a safe exit during an evacuation?',
    answerAr: 'ابق هادئاً، وانتقل إلى منطقة أقل خطورة. حاول إغلاق الأبواب لحصر الدخان أو الحريق. استخدم قطعة قماش مبللة لتغطية الأنف والفم وانتظر فرق الإنقاذ.',
    answerEn: 'Stay calm and move to a less dangerous area. Try to close doors to trap smoke or fire. Use a wet cloth to cover your nose and mouth and wait for rescue teams.'
  },
  {
    questionAr: 'من المسؤول عن إبلاغ الأكواد المختلفة في حالات الطوارئ؟',
    questionEn: 'Who is responsible for reporting different codes in emergency situations?',
    answerAr: 'أي شخص يلاحظ الحالة الطارئة يجب أن يبلغ فوراً، لكن مسؤولية إعلان الأكواد غالباً تقع على فرق الأمن والسلامة أو الموظفين المسؤولين في الموقع.',
    answerEn: 'Anyone who notices an emergency should report it immediately, but the responsibility for announcing codes often falls to the security and safety teams or responsible personnel on site.'
  },
  {
    questionAr: 'ماذا أفعل إذا لاحظت سلوكاً عدوانياً أو شخصاً عنيفاً؟',
    questionEn: 'What do I do if I notice aggressive behavior or a violent person?',
    answerAr: 'لا تحاول مواجهته. ابتعد عن المنطقة فوراً وأبلغ فريق الأمن بالوصف الدقيق للشخص وموقعه.',
    answerEn: 'Do not attempt to confront him. Leave the area immediately and report the person\'s exact description and location to the security team.'
  },
  {
    questionAr: 'هل يمكنني استخدام طفاية الحريق بدون تدريب مسبق؟',
    questionEn: 'Can I use a fire extinguisher without prior training?',
    answerAr: 'يفضل أن يكون لديك تدريب، لكن إذا كانت هناك حالة طارئة ولم يكن لديك خيار آخر، استخدم قاعدة (PASS) وغالباً تكون ملصقة على الطفاية أو الحائط.',
    answerEn: 'It is preferable to have training, but if there is an emergency and you have no other option use a rule, often attached to the extinguisher or wall (PASS).'
  },
  {
    questionAr: 'ماذا أفعل إذا انقطع التيار الكهربائي أثناء الطوارئ؟',
    questionEn: 'What do I do if the power goes out during an emergency?',
    answerAr: 'استخدم المصابيح اليدوية إذا توفرت. تجنب استخدام الشموع أو اللهب المفتوح، وابق في مكانك إذا كان التحرك غير آمن.',
    answerEn: 'Use flashlights if available. Avoid using candles or open flames, and stay where you are if it is unsafe to move.'
  },
  {
    questionAr: 'كيف يمكنني الاستعداد للطوارئ مسبقاً؟',
    questionEn: 'How can I prepare for emergencies in advance?',
    answerAr: 'تعرف على خطة الطوارئ في مكان العمل أو الموقع. احضر التدريبات الدورية واحفظ أرقام الطوارئ الأساسية. تأكد من معرفة مواقع الطفايات، المخارج، وأجهزة الإنذار.',
    answerEn: 'Have an emergency plan in your workplace or location. Attend regular drills and memorize basic emergency numbers. Make sure you know the locations of fire extinguishers, exits, and alarms.'
  }
];
