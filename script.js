/* ==========================================================
   📚 المنهج الكامل - الدروس 1 إلى 7
   ========================================================== */
const curriculum = [
{
  id: 1, unit: "الوحدة 1",
  title: "الدرس 1: البيانات والمعلومات والمعرفة",
  slides: [
    {
      title: "البيانات (Data)",
      narration: "البَياناتُ هِيَ حَقائِقُ تُمَثَّلُ بِاسْتِخْدامِ الأَرْقامِ أَوِ الأَحْرُفِ أَوِ الرُّموزِ، وَلَيْسَ لَها مَعْنىً بِمُفْرَدِها. فَمَثَلاً الأَرْقامُ خَمْسَةَ عَشَرَ، وَعِشْرونَ، وَثَلاثونَ، إِذا رَأَيْتَها وَحْدَها دونَ سِياقٍ، لَنْ تَسْتَطيعَ أَنْ تَفْهَمَ مِنْها شَيْئاً.",
      detail: "تَخَيَّلْ مَعي أَنَّكَ تَمْشي في شارِعٍ وَتَرى أَرْقاماً مَكْتوبَةً عَلى الجُدْرانِ: خَمْسَةَ عَشَرَ، عِشْرونَ، ثَلاثونَ. هَلْ تَعْرِفُ ما تَعْني هَذِهِ الأَرْقامُ؟ بِالطَّبْعِ لا! لِأَنَّها بِدونِ سِياقٍ أَوْ شَرْحٍ لَيْسَ لَها أَيُّ مَعْنى. هَذِهِ هِيَ البَياناتُ، وَهِيَ المَوادُّ الخامُ الَّتي نَجْمَعُها مِنَ العالَمِ حَوْلَنا، لَكِنَّها بِمُفْرَدِها لا تُقَدِّمُ لَنا أَيَّ مَعْلومَةٍ مُفيدَةٍ.",
      teacher: "البيانات هي حقائق تمثل باستخدام الأرقام أو الأحرف أو الرموز، وليس لها معنى بمفردها.",
      content: `
        <div class="definition-box">
          <span class="term">📊 التعريف:</span>
          هي حقائق تمثل باستخدام الأرقام أو الأحرف أو الرموز، وليس لها معنى بمفردها.
        </div>
        <div class="slide-text"><b>مثال:</b> الأرقام 15، 20، 30 (مجرد أرقام بدون سياق).</div>
      `,
      illustration: `
        <svg viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="70" r="28" fill="#fbbf24"/>
          <text x="100" y="80" text-anchor="middle" font-size="28">🤔</text>
          <text x="100" y="130" text-anchor="middle" font-size="12" font-weight="bold" fill="#92400e">شخص مرتبك</text>
          <g><circle cx="250" cy="45" r="26" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/><text x="250" y="52" text-anchor="middle" font-size="15" font-weight="bold" fill="#991b1b">15</text></g>
          <g><circle cx="330" cy="100" r="26" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/><text x="330" y="107" text-anchor="middle" font-size="15" font-weight="bold" fill="#991b1b">20</text></g>
          <g><circle cx="410" cy="55" r="26" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/><text x="410" y="62" text-anchor="middle" font-size="15" font-weight="bold" fill="#991b1b">30</text></g>
          <g><circle cx="480" cy="120" r="26" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/><text x="480" y="127" text-anchor="middle" font-size="15" font-weight="bold" fill="#991b1b">38</text></g>
          <g><circle cx="560" cy="80" r="26" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/><text x="560" y="87" text-anchor="middle" font-size="15" font-weight="bold" fill="#991b1b">40</text></g>
          <text x="350" y="195" text-anchor="middle" font-size="14" font-weight="bold" fill="#991b1b">أرقام متناثرة بلا معنى</text>
        </svg>
      `
    },
    {
      title: "المعلومات (Information)",
      narration: "وَعِنْدَما نُضيفُ سِياقاً لِهَذِهِ الأَرْقامِ، فَإِنَّها تَتَحَوَّلُ إِلى مَعْلوماتٍ. فَإِذا قُلْنا: سِعْرُ الطَّماطِمِ خَمْسَةَ عَشَرَ جُنَيْهاً، وَسِعْرُ الخِيارِ عِشْرينَ جُنَيْهاً، وَسِعْرُ البَطاطِسِ ثَلاثينَ جُنَيْهاً، فَقَدْ أَصْبَحَتْ هَذِهِ الأَرْقامُ ذاتَ مَعْنى.",
      detail: "الآنَ لاحِظِ الفَرْقَ المُهِمَّ. عِنْدَما نُضيفُ سِياقاً وَتَفْسيراً لِلْأَرْقامِ، تَتَحَوَّلُ هَذِهِ الأَرْقامُ إِلى مَعْلوماتٍ مُفيدَةٍ. المَعْلوماتُ هِيَ بَياناتٌ لَها مَعْنى وَقيمَةٌ، وَتُمْكِنُنا مِنِ اتِّخاذِ قَراراتٍ صَحيحَةٍ. مَثَلاً دَرَجاتُ الحَرارَةِ في القاهِرَةِ هَذا الأُسْبوعَ خَمْسَةٌ وَثَلاثونَ، وَأَرْبَعونَ، وَثَمانِيَةٌ وَثَلاثونَ دَرَجَةً. هَذِهِ الأَرْقامُ أَصْبَحَتْ ذاتَ مَعْنى لِأَنَّها تَتَحَدَّثُ عَنْ دَرَجاتِ الحَرارَةِ في مَدينَةٍ مُعَيَّنَةٍ.",
      teacher: "وعندما نضيف سياقاً لهذه الأرقام، فإنها تتحول إلى معلومات.",
      content: `
        <div class="definition-box">
          <span class="term">📈 التعريف:</span>
          هي بيانات لها معنى أو قيمة للمتلقي، وتُستخدم لاتخاذ القرار.
        </div>
        <div class="slide-text"><b>مثال:</b> "درجات الحرارة في القاهرة هذا الأسبوع 35، 40، 38".</div>
      `,
      illustration: `
        <svg viewBox="0 0 700 260" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="30" width="160" height="100" rx="12" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
          <text x="100" y="55" text-anchor="middle" font-size="13" font-weight="bold" fill="#991b1b">بيانات خام</text>
          <text x="100" y="85" text-anchor="middle" font-size="14" font-weight="bold" fill="#991b1b">15، 20، 30</text>
          <rect x="250" y="30" width="430" height="100" rx="12" fill="#d1fae5" stroke="#10b981" stroke-width="2"/>
          <text x="465" y="55" text-anchor="middle" font-size="13" font-weight="bold" fill="#065f46">معلومات واضحة</text>
          <g transform="translate(280,85)"><text x="0" y="0" text-anchor="middle" font-size="30">🍅</text><text x="0" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#065f46">= 15</text></g>
          <g transform="translate(370,85)"><text x="0" y="0" text-anchor="middle" font-size="30">🥒</text><text x="0" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#065f46">= 20</text></g>
          <g transform="translate(460,85)"><text x="0" y="0" text-anchor="middle" font-size="30">🥔</text><text x="0" y="20" text-anchor="middle" font-size="11" font-weight="bold" fill="#065f46">= 30</text></g>
          <text x="350" y="175" text-anchor="middle" font-size="14" font-weight="bold" fill="#065f46">أرقام لها معنى وارتباط بأشياء محددة</text>
        </svg>
      `
    },
    {
      title: "المعرفة (Knowledge)",
      narration: "المَعْرِفَةُ تَأْتي بَعْدَ المَعْلوماتِ، حينَ نُحَلِّلُ وَنُنَظِّمُ هَذِهِ المَعْلوماتِ لِاتِّخاذِ قَرارٍ أَوْ حَلِّ مُشْكِلَةٍ. فَإِذا قُلْنا: بِما أَنَّ الحَرارَةَ مُرْتَفِعَةٌ، فَيَجِبُ تَشْغيلُ المُكَيِّفِ وَشُرْبُ المَزيدِ مِنَ الماءِ، فَهَذِهِ مَعْرِفَةٌ.",
      detail: "المَعْرِفَةُ هِيَ أَعْلى مُسْتَوى في هَذِهِ السِّلْسِلَةِ. بَعْدَ أَنْ نَجْمَعَ البَياناتَ وَنُحَوِّلَها إِلى مَعْلوماتٍ، نَأْتي بِخُطْوَةٍ إِضافِيَّةٍ وَهِيَ تَحْليلُ هَذِهِ المَعْلوماتِ وَرَبْطُها بَعْضُها بِبَعْضٍ لِاسْتِخْلاصِ نَتائِجَ وَاتِّخاذِ قَراراتٍ.",
      teacher: "المعرفة تأتي بعد المعلومات، حين نحلل وننظم هذه المعلومات لاتخاذ قرار.",
      content: `
        <div class="definition-box">
          <span class="term">🧠 التعريف:</span>
          هي المعلومات التي تم تحليلها وتنظيمها بشكل منهجي للمساعدة في حل المشكلات.
        </div>
        <div class="slide-text"><b>مثال:</b> "بما أن الحرارة عالية، يجب تشغيل التكييف وشرب مياه كثيرة".</div>
      `,
      illustration: `
        <svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg">
          <circle cx="350" cy="60" r="45" fill="#fef3c7" stroke="#f59e0b" stroke-width="3"/>
          <text x="350" y="75" text-anchor="middle" font-size="48">💡</text>
          <text x="350" y="130" text-anchor="middle" font-size="16" font-weight="bold" fill="#92400e">قرار مبني على تحليل</text>
          <rect x="150" y="155" width="400" height="70" rx="12" fill="#d1fae5" stroke="#10b981" stroke-width="2"/>
          <text x="350" y="180" text-anchor="middle" font-size="13" fill="#065f46">🌡️ درجة الحرارة 40° = عالية</text>
          <text x="350" y="205" text-anchor="middle" font-size="13" font-weight="bold" fill="#065f46">❄️ القرار: شغّل المكيف + اشرب ماء</text>
        </svg>
      `
    },
    {
      title: "خصائص المعلومات",
      narration: "لِلْمَعْلوماتِ ثَلاثُ خَصائِصَ مُهِمَّةٍ: أَوَّلاً لا يُمْكِنُ مَحْوُها بِالكامِلِ بِمُجَرَّدِ إِنْشائِها. ثانِياً يُمْكِنُ نَسْخُها بِسُهولَةٍ بِكَمِّيّاتٍ كَبيرَةٍ. ثالِثاً تُسَهِّلُ نَشْرَها عَبْرَ وَسائِلِ الإِعْلامِ وَالإِنْتَرْنِت.",
      detail: "هَذِهِ الخَصائِصُ الثَّلاثُ تَجْعَلُ المَعْلوماتَ مُخْتَلِفَةً تَماماً عَنِ الأَشْياءِ المادِّيَّةِ. المَعْلوماتُ لَيْسَ لَها شَكْلٌ ثابِتٌ وَلا كِيانٌ مادِّيٌّ، لِذَلِكَ يُمْكِنُ نَسْخُها بِسُهولَةٍ وَنَشْرُها بِسُرْعَةٍ كَبيرَةٍ.",
      teacher: "للمعلومات ثلاث خصائص: عدم القابلية للمحو، سهولة النسخ، سهولة النشر.",
      content: `
        <ul class="slide-list">
          <li><b>عدم القابلية للمحو:</b> لا يمكن محوها بالكامل بمجرد إنشائها.</li>
          <li><b>سهولة النسخ:</b> إمكانية نسخها بسهولة بكميات كبيرة.</li>
          <li><b>سهولة النشر:</b> سهولة توصيلها ونشرها عبر وسائل الإعلام.</li>
        </ul>
      `,
      illustration: `
        <svg viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(50,30)"><circle cx="60" cy="60" r="45" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/><text x="60" y="75" text-anchor="middle" font-size="40">✋</text><text x="60" y="130" text-anchor="middle" font-size="13" font-weight="bold" fill="#991b1b">لا يمكن محوها</text></g>
          <g transform="translate(280,30)"><circle cx="60" cy="60" r="45" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/><text x="60" y="75" text-anchor="middle" font-size="40">📋</text><text x="60" y="130" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e40af">نسخ بلا حدود</text></g>
          <g transform="translate(510,30)"><circle cx="60" cy="60" r="45" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/><text x="60" y="75" text-anchor="middle" font-size="40">🌐</text><text x="60" y="130" text-anchor="middle" font-size="13" font-weight="bold" fill="#92400e">انتشار سريع</text></g>
        </svg>
      `
    },
    {
      title: "أنواع المعلومات",
      narration: "تَنْقَسِمُ المَعْلوماتُ إِلى نَوْعَيْنِ: المَعْلوماتُ الأَوَّلِيَّةُ وَهِيَ الَّتي نَحْصُلُ عَلَيْها مِنْ خِلالِ التَّجْرِبَةِ الشَّخْصِيَّةِ المُباشِرَةِ، وَالمَعْلوماتُ الثّانَوِيَّةُ وَهِيَ الَّتي نَحْصُلُ عَلَيْها مِنْ طَرَفٍ ثالِثٍ مِثْلَ الكُتُبِ وَالصُّحُفِ، وَهَذِهِ تَحْتاجُ إِلى التَّحَقُّقِ المُتَبادَلِ.",
      detail: "لِنَفْهَمِ الفَرْقَ بِمِثالٍ. لَوْ قُمْتَ بِنَفْسِكَ بِتَجْرِبَةٍ عِلْمِيَّةٍ في المُخْتَبَرِ وَسَجَّلْتَ النَّتائِجَ بِيَدِكَ، فَهَذِهِ مَعْلوماتٌ أَوَّلِيَّةٌ. أَمَّا لَوْ قَرَأْتَ عَنْ نَتائِجِ تَجْرِبَةٍ في كِتابٍ أَوْ مَجَلَّةٍ عِلْمِيَّةٍ، فَهَذِهِ مَعْلوماتٌ ثانَوِيَّةٌ. المَعْلوماتُ الثّانَوِيَّةُ قَدْ تَخْتَلِفُ عَنِ الأَصْلِيَّةِ، لِذَلِكَ مِنَ الضَّرورِيِّ مُقارَنَةُ المَعْلوماتِ مِنْ مَصادِرَ مُتَعَدِّدَةٍ.",
      teacher: "تنقسم المعلومات إلى نوعين: الأولية والثانوية. الثانوية تحتاج إلى التحقق المتبادل.",
      content: `
        <ul class="slide-list">
          <li><b>المعلومات الأولية:</b> يتم الحصول عليها من خلال التجربة الشخصية المباشرة.</li>
          <li><b>المعلومات الثانوية:</b> يتم الحصول عليها من طرف ثالث (كتب، صحف، تلفزيون).</li>
          <li><b>ملاحظة:</b> المعلومات الثانوية تحتاج إلى <b>التحقق المتبادل</b>.</li>
        </ul>
      `,
      illustration: `
        <svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(30,30)"><rect x="0" y="0" width="290" height="180" rx="14" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/><text x="145" y="30" text-anchor="middle" font-size="15" font-weight="bold" fill="#1e40af">🔬 مصدر مباشر</text><text x="90" y="95" text-anchor="middle" font-size="26">🧑‍🔬</text><text x="90" y="125" text-anchor="middle" font-size="11" fill="#1e40af">تجربة شخصية</text><text x="190" y="95" text-anchor="middle" font-size="30">🧪</text><text x="190" y="125" text-anchor="middle" font-size="11" fill="#1e40af">ملاحظة مباشرة</text><text x="145" y="160" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">معلومات أولية</text></g>
          <g transform="translate(380,30)"><rect x="0" y="0" width="290" height="180" rx="14" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/><text x="145" y="30" text-anchor="middle" font-size="15" font-weight="bold" fill="#92400e">📚 طرف ثالث</text><text x="70" y="95" text-anchor="middle" font-size="30">📖</text><text x="145" y="95" text-anchor="middle" font-size="30">📰</text><text x="220" y="95" text-anchor="middle" font-size="30">📺</text><text x="145" y="130" text-anchor="middle" font-size="11" fill="#92400e">كتب، صحف، تلفزيون</text><text x="145" y="160" text-anchor="middle" font-size="11" font-weight="bold" fill="#92400e">معلومات ثانوية</text></g>
          <text x="350" y="228" text-anchor="middle" font-size="12" font-weight="bold" fill="#6d28d9">🔍 تحتاج إلى تحقق متبادل</text>
        </svg>
      `
    }
  ],
  question: "الأرقام 35 و40 و38 وحدها (بدون سياق) تعتبر ماذا؟",
  options: ["معلومات", "بيانات", "معرفة"],
  correct: 1
},
{
  id: 2, unit: "الوحدة 1",
  title: "الدرس 2: أخلاقيات المعلومات",
  slides: [
    {
      title: "أخلاقيات المعلومات",
      narration: "أَخْلاقِيّاتُ المَعْلوماتِ هِيَ المَفاهيمُ وَالتَّوَجُّهاتُ الأَساسِيَّةُ اللّازِمَةُ لِلْقِيامِ بِأَنْشِطَةٍ مُناسِبَةٍ في مُجْتَمَعِ المَعْلوماتِ، بِغَضِّ النَّظَرِ عَنْ وُجودِ قَوانينَ أَوْ عَدَمِ وُجودِها.",
      detail: "المَبْدَأُ الأَساسِيُّ في أَخْلاقِيّاتِ المَعْلوماتِ هُوَ أَنَّكَ تَلْتَزِمُ بِالأَخْلاقِ لِأَنَّكَ مُقْتَنِعٌ بِها، وَلَيْسَ خَوْفاً مِنَ العِقابِ. فَالقانونُ يُلْزِمُكَ ظاهِرِيّاً، لَكِنَّ الأَخْلاقَ تَأْتي مِنْ داخِلِ الإِنْسانِ نَفْسِهِ.",
      teacher: "أخلاقيات المعلومات هي المفاهيم والتوجهات الأساسية اللازمة للقيام بأنشطة مناسبة.",
      content: `
        <div class="definition-box">
          <span class="term">⚖️ التعريف:</span>
          هي المفاهيم والتوجهات الأساسية اللازمة للقيام بأنشطة مناسبة في مجتمع المعلومات.
        </div>
        <div class="slide-text"><b>المبدأ:</b> أنت تلتزم بالأخلاق لأنك مقتنع بها، وليس خوفاً من العقاب.</div>
      `,
      illustration: `
        <svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg">
          <polygon points="350,40 370,80 330,80" fill="#8b5cf6"/>
          <rect x="345" y="80" width="10" height="80" fill="#6d28d9"/>
          <line x1="280" y1="60" x2="420" y2="60" stroke="#6d28d9" stroke-width="3"/>
          <ellipse cx="280" cy="105" rx="40" ry="8" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
          <text x="280" y="130" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e40af">القوانين</text>
          <ellipse cx="420" cy="105" rx="40" ry="8" fill="#d1fae5" stroke="#10b981" stroke-width="2"/>
          <text x="420" y="130" text-anchor="middle" font-size="12" font-weight="bold" fill="#065f46">الأخلاق</text>
          <text x="350" y="210" text-anchor="middle" font-size="14" font-weight="bold" fill="#6d28d9">الأخلاق تتجاوز القوانين</text>
        </svg>
      `
    },
    {
      title: "قواعد نشر المعلومات",
      narration: "عِنْدَ نَشْرِ أَيِّ مُحْتَوىً عَلى الإِنْتَرْنِت، يَجِبُ الِالْتِزامُ بِالقَواعِدِ التّالِيَةِ: عَدَمِ مُشارَكَةِ صورِ الآخَرينَ دونَ إِذْنِهِمْ، وَعَدَمِ تَسْريبِ بَياناتِهِمْ، وَاحْتِرامِ حُقوقِ المُؤَلِّفِ، وَعَدَمِ التَّنَمُّرِ الإِلِكْتُرونِيِّ.",
      detail: "الإِنْتَرْنِتُ عالَمٌ وَسيعٌ، وَكُلُّ ما تَنْشُرُهُ يَبْقى لِفَتَراتٍ طَويلَةٍ. لِذَلِكَ مِنَ المُهِمِّ أَنْ تَكُونَ حَذِراً عِنْدَ نَشْرِ أَيِّ مُحْتَوىً. عَدَمُ مُشارَكَةِ صورِ الآخَرينَ يَحْمي خُصوصِيَّتَهُمْ، وَاحْتِرامُ حُقوقِ المُؤَلِّفِ يَحْمي جُهودَهُمْ.",
      teacher: "عند نشر أي محتوى على الإنترنت، يجب الالتزام بقواعد أخلاقية.",
      content: `
        <ul class="slide-list">
          <li>عدم مشاركة الصور التي يمتلكها الآخرون دون إذن.</li>
          <li>عدم تسريب المعلومات الشخصية للآخرين.</li>
          <li>احترام حقوق المؤلف (Copyright).</li>
          <li>عدم انتهاك خصوصية الآخرين.</li>
          <li>عدم التنمر الإلكتروني (Cyber Bullying).</li>
        </ul>
      `,
      illustration: `
        <svg viewBox="0 0 700 260" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(350,60)"><circle cx="0" cy="0" r="50" fill="#8b5cf6"/><text x="0" y="15" text-anchor="middle" font-size="48" fill="#fff">⚖️</text></g>
          <text x="350" y="130" text-anchor="middle" font-size="14" font-weight="bold" fill="#6d28d9">قواعد النشر الآمن</text>
          <g transform="translate(50,150)"><circle cx="40" cy="40" r="32" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/><text x="40" y="52" text-anchor="middle" font-size="32">🚫</text><text x="40" y="90" text-anchor="middle" font-size="11" font-weight="bold" fill="#991b1b">لا للصور</text></g>
          <g transform="translate(220,150)"><circle cx="40" cy="40" r="32" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/><text x="40" y="52" text-anchor="middle" font-size="32">🔒</text><text x="40" y="90" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">احترم الخصوصية</text></g>
          <g transform="translate(390,150)"><circle cx="40" cy="40" r="32" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/><text x="40" y="52" text-anchor="middle" font-size="32">©️</text><text x="40" y="90" text-anchor="middle" font-size="11" font-weight="bold" fill="#92400e">حقوق المؤلف</text></g>
          <g transform="translate(560,150)"><circle cx="40" cy="40" r="32" fill="#d1fae5" stroke="#10b981" stroke-width="2"/><text x="40" y="52" text-anchor="middle" font-size="32">🛡️</text><text x="40" y="90" text-anchor="middle" font-size="11" font-weight="bold" fill="#065f46">لا للتنمر</text></g>
        </svg>
      `
    },
    {
      title: "العلامة الجغرافية (Geotagging)",
      narration: "العَلامَةُ الجُغْرافِيَّةُ هِيَ مَعْلوماتُ خُطوطِ الطّولِ وَالعَرْضِ المُضَمَّنَةُ في الصُّوَرِ وَمَقاطِعِ الفيديو المُلْتَقَطَةِ بِالهَواتِفِ الذَّكِيَّةِ. وَخُطورَتُها تَكْمُنُ في إِمْكانِيَّةِ تَحْديدِ مَوْقِعِ مَنْزِلِكَ بِدِقَّةٍ.",
      detail: "تَخَيَّلْ أَنَّكَ تَأْخُذُ صورةً في مَنْزِلِكَ وَتَنْشُرُها عَلى وَسائِلِ التَّواصُلِ الاجْتِماعيِّ. صورةٌ بَسيطَةٌ، صَح؟ لَكِنَّها قَدْ تَحْتَوي عَلى مَعْلوماتٍ خَفِيَّةٍ عَنْ مَوْقِعِكَ الدَّقيقِ. هَذِهِ المَعْلوماتُ تُسَمّى العَلامَةَ الجُغْرافِيَّةَ أَوِ الجيوتاجينج.",
      teacher: "العلامة الجغرافية هي معلومات خطوط الطول والعرض المضمنة في الصور.",
      content: `
        <div class="definition-box">
          <span class="term">📍 التعريف:</span>
          معلومات تتضمن خطوط الطول والعرض المضمنة في الصور ومقاطع الفيديو.
        </div>
        <div class="slide-text"><b>الخطر:</b> يمكن لأي شخص معرفة موقع منزلك بدقة عند نشر الصورة.</div>
      `,
      illustration: `
        <svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(40,40)"><rect x="0" y="0" width="180" height="140" rx="12" fill="#e0e7ff" stroke="#6366f1" stroke-width="2"/><text x="90" y="40" text-anchor="middle" font-size="13" font-weight="bold" fill="#4338ca">📸 صورة</text><text x="90" y="90" text-anchor="middle" font-size="40">🏠</text><text x="90" y="125" text-anchor="middle" font-size="10" fill="#4338ca">Lat: 30.04</text><text x="90" y="138" text-anchor="middle" font-size="10" fill="#4338ca">Long: 31.23</text></g>
          <path d="M 235 110 L 285 110" stroke="#ef4444" stroke-width="3"/>
          <polygon points="285,105 305,110 285,115" fill="#ef4444"/>
          <g transform="translate(320,40)"><rect x="0" y="0" width="180" height="140" rx="12" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/><text x="90" y="40" text-anchor="middle" font-size="13" font-weight="bold" fill="#991b1b">🗺️ خريطة</text><circle cx="90" cy="85" r="20" fill="#ef4444" opacity="0.3"/><circle cx="90" cy="85" r="10" fill="#ef4444"/><text x="90" y="128" text-anchor="middle" font-size="11" font-weight="bold" fill="#991b1b">موقع منزلك!</text></g>
          <g transform="translate(530,80)"><circle cx="60" cy="45" r="45" fill="#fef3c7" stroke="#f59e0b" stroke-width="3"/><text x="60" y="62" text-anchor="middle" font-size="48">⚠️</text><text x="60" y="115" text-anchor="middle" font-size="13" font-weight="bold" fill="#92400e">خطر</text></g>
        </svg>
      `
    },
    {
      title: "المعلومات المضللة والشائعات",
      narration: "هُناكَ نَوْعٌ مِنَ المَعْلوماتِ الكاذِبَةِ يَتِمُّ نَشْرُهُ عَمْداً، أَوْ شائِعاتٍ لا أَساسَ لَها، وَهَذا ما نُسَمّيهِ المَعْلوماتِ المُضِلَّلَةِ. وَلِذَلِكَ يَجِبُ التَّحَقُّقُ مِنْ أَيِّ مَعْلومَةٍ قَبْلَ نَشْرِها.",
      detail: "المَعْلوماتُ المُضِلَّلَةُ خَطَرٌ كَبيرٌ عَلى المُجْتَمَعِ. فَمَثَلاً لَوْ نَشَرَ أَحَدُهُمْ خَبَراً كاذِباً عَنْ وَجودِ خَطَرٍ في مَنْطِقَةٍ سَكَنِيَّةٍ، قَدْ يُسَبِّبُ ذَلِكَ ذُعْراً وَفَزَعاً لِسُكّانِ المَنْطِقَةِ. لِذَلِكَ مِنَ الضَّرورِيِّ أَنْ نَتَحَقَّقَ مِنَ المَعْلومَةِ قَبْلَ نَشْرِها.",
      teacher: "المعلومات المضللة هي معلومات كاذبة يتم نشرها عمداً أو شائعات لا أساس لها.",
      content: `
        <div class="definition-box">
          <span class="term">⚠️ التعريف:</span>
          معلومات كاذبة يتم نشرها عمداً أو شائعات لا أساس لها.
        </div>
        <div class="slide-text"><b>النصيحة:</b> تحقق من المعلومة قبل نشرها.</div>
      `,
      illustration: `
        <svg viewBox="0 0 700 200" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(80,30)"><rect x="0" y="0" width="240" height="130" rx="12" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/><text x="120" y="35" text-anchor="middle" font-size="30">📰</text><text x="120" y="70" text-anchor="middle" font-size="13" font-weight="bold" fill="#991b1b">❌ خبر كاذب</text><text x="120" y="95" text-anchor="middle" font-size="11" fill="#7f1d1d">شائعة تنتشر بسرعة</text></g>
          <text x="350" y="105" text-anchor="middle" font-size="40">🔍</text>
          <g transform="translate(390,30)"><rect x="0" y="0" width="240" height="130" rx="12" fill="#d1fae5" stroke="#10b981" stroke-width="2"/><text x="120" y="35" text-anchor="middle" font-size="30">✅</text><text x="120" y="70" text-anchor="middle" font-size="13" font-weight="bold" fill="#065f46">معلومة موثقة</text><text x="120" y="95" text-anchor="middle" font-size="11" fill="#065f46">تحققنا من المصدر</text></g>
        </svg>
      `
    }
  ],
  question: "ما اسم الميزة التي تحدد مكان التصوير في الصور؟",
  options: ["حقوق النشر", "العلامة الجغرافية (Geotagging)", "أخلاقيات المعلومات"],
  correct: 1
},
{
  id: 3, unit: "الوحدة 2",
  title: "الدرس 1: البيانات الشخصية",
  slides: [
    {
      title: "البيانات الشخصية",
      narration: "البَياناتُ الشَّخْصِيَّةُ هِيَ كُلُّ بَيانٍ أَوْ مَعْلومَةٍ تَتَعَلَّقُ بِشَخْصٍ طَبيعِيٍّ مُحَدَّدٍ، أَوْ يُمْكِنُ تَحْديدُهُ بِشَكْلٍ مُباشِرٍ أَوْ غَيْرِ مُباشِرٍ، مِنْ خِلالِ الرَّبْطِ مَعَ بَياناتٍ أُخْرى.",
      detail: "البَياناتُ الشَّخْصِيَّةُ هِيَ كُلُّ ما يَتَعَلَّقُ بِكَ كَشَخْصٍ: اسْمُكَ، عُنْوانُكَ، تاريخُ ميلادِكَ، رَقْمُ هاتِفِكَ، صُورَتُكَ، حَتّى بَصْمَةُ إِصْبَعِكَ وَقَزَحِيَّةُ عَيْنِكَ. كُلُّ هَذِهِ البَياناتِ يَجِبُ الحِفاظُ عَلَيْها مِنَ السَّرِقَةِ.",
      teacher: "البيانات الشخصية هي كل بيان يتعلق بشخص طبيعي محدد أو يمكن تحديده.",
      content: `
        <div class="definition-box">
          <span class="term">🔐 التعريف:</span>
          هي كل بيان أو معلومة تتعلق بشخص طبيعي محدد أو يمكن تحديده.
        </div>
        <div class="slide-text"><b>أمثلة:</b> الاسم، العنوان، تاريخ الميلاد، رقم الهاتف، الصورة، بصمة الإصبع.</div>
      `,
      illustration: `
        <svg viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(50,40)"><rect x="0" y="0" width="180" height="130" rx="12" fill="#e0e7ff" stroke="#6366f1" stroke-width="2"/><circle cx="55" cy="50" r="25" fill="#6366f1"/><text x="55" y="60" text-anchor="middle" font-size="26">👤</text><text x="100" y="40" font-size="11" font-weight="bold" fill="#4338ca">الاسم</text><text x="100" y="60" font-size="11" fill="#4338ca">الميلاد</text><text x="100" y="80" font-size="11" fill="#4338ca">الهاتف</text><text x="90" y="115" text-anchor="middle" font-size="11" font-weight="bold" fill="#4338ca">بطاقة هوية</text></g>
          <g transform="translate(260,40)"><rect x="0" y="0" width="180" height="130" rx="12" fill="#d1fae5" stroke="#10b981" stroke-width="2"/><text x="90" y="70" text-anchor="middle" font-size="55">📸</text><text x="90" y="115" text-anchor="middle" font-size="11" font-weight="bold" fill="#065f46">الصورة الشخصية</text></g>
          <g transform="translate(470,40)"><rect x="0" y="0" width="180" height="130" rx="12" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/><text x="90" y="70" text-anchor="middle" font-size="55">👆</text><text x="90" y="115" text-anchor="middle" font-size="11" font-weight="bold" fill="#92400e">بصمة الإصبع</text></g>
        </svg>
      `
    },
    {
      title: "أنواع البيانات الشخصية",
      narration: "تَنْقَسِمُ البَياناتُ الشَّخْصِيَّةُ إِلى ثَلاثَةِ أَنْواعٍ: البَياناتُ الأَساسِيَّةُ، وَأَرْقامُ الهُوِيَّةِ، وَالبَياناتُ الحَسّاسَةُ.",
      detail: "البَياناتُ الأَساسِيَّةُ مِثْلُ الاسْمِ وَالعُنْوانِ وَتاريخِ الميلادِ وَالنَّوْعِ. أَرْقامُ الهُوِيَّةِ مِثْلُ أَرْقامِ جَوازاتِ السَّفَرِ وَرُخَصِ القِيادَةِ وَالرَّقْمِ القَوْمِيِّ. أَمّا البَياناتُ الحَسّاسَةُ فَهِيَ الأَكْثَرُ خُطورَةً وَتَحْتاجُ عِنايَةً خاصَّةً.",
      teacher: "تنقسم البيانات الشخصية إلى ثلاثة أنواع: أساسية، وأرقام هوية، وحساسة.",
      content: `
        <ul class="slide-list">
          <li><b>البيانات الأساسية:</b> الاسم، العنوان، تاريخ الميلاد، النوع.</li>
          <li><b>أرقام الهوية:</b> جوازات السفر، رخص القيادة، الرقم القومي.</li>
          <li><b>البيانات الحساسة:</b> العرق، الديانة، الآراء السياسية، الحالة الصحية.</li>
        </ul>
      `,
      illustration: `
        <svg viewBox="0 0 700 260" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(40,30)"><rect x="0" y="0" width="200" height="180" rx="14" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/><text x="100" y="35" text-anchor="middle" font-size="20">📝</text><text x="100" y="65" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e40af">أساسية</text><text x="100" y="105" text-anchor="middle" font-size="12" fill="#1e40af">الاسم</text><text x="100" y="125" text-anchor="middle" font-size="12" fill="#1e40af">العنوان</text><text x="100" y="145" text-anchor="middle" font-size="12" fill="#1e40af">تاريخ الميلاد</text></g>
          <g transform="translate(250,30)"><rect x="0" y="0" width="200" height="180" rx="14" fill="#d1fae5" stroke="#10b981" stroke-width="2"/><text x="100" y="35" text-anchor="middle" font-size="20">🆔</text><text x="100" y="65" text-anchor="middle" font-size="14" font-weight="bold" fill="#065f46">أرقام هوية</text><text x="100" y="105" text-anchor="middle" font-size="12" fill="#065f46">رقم قومي</text><text x="100" y="125" text-anchor="middle" font-size="12" fill="#065f46">جواز سفر</text><text x="100" y="145" text-anchor="middle" font-size="12" fill="#065f46">رخصة قيادة</text></g>
          <g transform="translate(460,30)"><rect x="0" y="0" width="200" height="180" rx="14" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/><text x="100" y="35" text-anchor="middle" font-size="20">⚠️</text><text x="100" y="65" text-anchor="middle" font-size="14" font-weight="bold" fill="#991b1b">حساسة</text><text x="100" y="105" text-anchor="middle" font-size="12" fill="#991b1b">الديانة</text><text x="100" y="125" text-anchor="middle" font-size="12" fill="#991b1b">الحالة الصحية</text><text x="100" y="145" text-anchor="middle" font-size="12" fill="#991b1b">السجل الجنائي</text></g>
        </svg>
      `
    },
    {
      title: "قانون حماية البيانات الشخصية",
      narration: "لِحِمايَةِ بَياناتِكَ، يوجَدُ قانونٌ يُسَمّى قانونَ حِمايَةِ البَياناتِ الشَّخْصِيَّةِ، وَقاعِدَتُهُ الأَساسِيَّةُ: أَنَّهُ لا يَجوزُ جَمْعُ بَياناتِكَ أَوْ مُشارَكَتُها بِدونِ مُوافَقَتِكَ الصَّريحَةِ.",
      detail: "هَذا القانوُنُ يَحْمي حُقوقَكَ كَمُسْتَخْدِمٍ. وَمَعْناهُ أَنَّ أَيَّ شَرِكَةٍ أَوْ جِهَةٍ تُريدُ جَمْعَ بَياناتِكَ يَجِبُ أَنْ تَحْصُلَ عَلى مُوافَقَتِكَ الصَّريحَةِ أَوَّلاً. وَلا يُمْكِنُها مُشارَكَةُ هَذِهِ البَياناتِ مَعَ أَيِّ طَرَفٍ آخَرَ بِدونِ إِذْنِكَ.",
      teacher: "قانون حماية البيانات الشخصية يحدد قواعد جمع ومعالجة البيانات.",
      content: `
        <div class="definition-box">
          <span class="term">⚖️ التعريف:</span>
          قانون يحدد القواعد الأساسية لجمع ومعالجة وتخزين ونقل البيانات الشخصية.
        </div>
        <div class="slide-text"><b>القاعدة:</b> لا يجوز جمع البيانات إلا بعد موافقة صريحة.</div>
      `,
      illustration: `
        <svg viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(80,50)"><circle cx="60" cy="40" r="35" fill="#3b82f6"/><text x="60" y="52" text-anchor="middle" font-size="38">👤</text><text x="60" y="100" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e40af">صاحب البيانات</text></g>
          <g transform="translate(230,60)"><rect x="0" y="0" width="140" height="100" rx="12" fill="#d1fae5" stroke="#10b981" stroke-width="2"/><text x="70" y="40" text-anchor="middle" font-size="36">✅</text><text x="70" y="70" text-anchor="middle" font-size="12" font-weight="bold" fill="#065f46">موافقة</text></g>
          <g transform="translate(460,50)"><circle cx="60" cy="40" r="35" fill="#10b981"/><text x="60" y="52" text-anchor="middle" font-size="38">🏢</text><text x="60" y="100" text-anchor="middle" font-size="13" font-weight="bold" fill="#065f46">الجهة</text></g>
          <text x="350" y="200" text-anchor="middle" font-size="13" font-weight="bold" fill="#065f46">لا يمكن جمع أو مشاركة البيانات بدون موافقة</text>
        </svg>
      `
    },
    {
      title: "حالات توفير البيانات دون موافقة",
      narration: "هُناكَ خَمْسُ حالاتٍ اسْتِثْنائِيَّةٍ يُسْمَحُ فيها بِتَوْفيرِ البَياناتِ دونَ مُوافَقَةِ الفَرْدِ: عِنْدَ وُجودِ قانونٍ، أَوْ لِحِمايَةِ الأَمْنِ القَوْمِيِّ، أَوْ لِحِمايَةِ حَياةِ الشَّخْصِ، أَوْ لِتَنْفيذِ حُكْمٍ قَضائِيٍّ، أَوْ لِإِتْمامِ عَقْدٍ.",
      detail: "هَذِهِ الحالاتُ الاسْتِثْنائِيَّةُ وُضِعَتْ لِمَصْلَحَةِ المُجْتَمَعِ وَالفَرْدِ مَعاً. فَمَثَلاً لَوْ كانَ هُناكَ خَطَرٌ عَلى حَياةِ شَخْصٍ، يَجِبُ مُشارَكَةُ بَياناتِهِ الطِّبِّيَّةِ مَعَ الأَطِبّاءِ لِإِنْقاذِ حَياتِهِ حَتّى بِدونِ مُوافَقَةٍ.",
      teacher: "هناك خمس حالات يُسمح فيها بتوفير البيانات دون موافقة الفرد.",
      content: `
        <ul class="slide-list">
          <li>عندما يكون التزويد مستنداً إلى قوانين ولوائح.</li>
          <li>عندما يكون لازماً لحماية الأمن القومي.</li>
          <li>عندما يكون ضرورياً لحماية حياة الشخص.</li>
          <li>عندما يكون ضرورياً لتنفيذ حكم قضائي.</li>
          <li>عندما يكون ضرورياً لإتمام عقد.</li>
        </ul>
      `,
      illustration: `
        <svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(20,30)"><rect x="0" y="0" width="128" height="170" rx="12" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/><text x="64" y="55" text-anchor="middle" font-size="36">📜</text><text x="64" y="95" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">قانون</text></g>
          <g transform="translate(158,30)"><rect x="0" y="0" width="128" height="170" rx="12" fill="#d1fae5" stroke="#10b981" stroke-width="2"/><text x="64" y="55" text-anchor="middle" font-size="36">🛡️</text><text x="64" y="95" text-anchor="middle" font-size="11" font-weight="bold" fill="#065f46">الأمن القومي</text></g>
          <g transform="translate(296,30)"><rect x="0" y="0" width="128" height="170" rx="12" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/><text x="64" y="55" text-anchor="middle" font-size="36">❤️</text><text x="64" y="95" text-anchor="middle" font-size="11" font-weight="bold" fill="#92400e">حماية الحياة</text></g>
          <g transform="translate(434,30)"><rect x="0" y="0" width="128" height="170" rx="12" fill="#ede9fe" stroke="#8b5cf6" stroke-width="2"/><text x="64" y="55" text-anchor="middle" font-size="36">⚖️</text><text x="64" y="95" text-anchor="middle" font-size="11" font-weight="bold" fill="#5b21b6">حكم قضائي</text></g>
          <g transform="translate(572,30)"><rect x="0" y="0" width="110" height="170" rx="12" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/><text x="55" y="55" text-anchor="middle" font-size="36">📝</text><text x="55" y="95" text-anchor="middle" font-size="11" font-weight="bold" fill="#991b1b">إتمام عقد</text></g>
        </svg>
      `
    }
  ],
  question: "الديانة والحالة الصحية والسجل الجنائي تعتبر ماذا؟",
  options: ["بيانات أساسية", "أرقام هوية", "بيانات شخصية حساسة"],
  correct: 2
},
{
  id: 4, unit: "الوحدة 2",
  title: "الدرس 2: حقوق الملكية الفكرية",
  slides: [
    {
      title: "حقوق الملكية الفكرية",
      narration: "حُقوقُ المِلْكِيَّةِ الفِكْرِيَّةِ هِيَ حُقوقٌ تَحْمي نِتاجَ الإِبْداعِ الفِكْرِيِّ البَشَرِيِّ في المَجالاتِ الأَدَبِيَّةِ وَالفَنِّيَّةِ وَالعِلْمِيَّةِ وَالتِّجارِيَّةِ.",
      detail: "حُقوقُ المِلْكِيَّةِ الفِكْرِيَّةِ تَشْمَلُ حُقوقَ المُؤَلِّفِ وَالحُقوقَ المُجاوِرَةَ وَحُقوقَ المِلْكِيَّةِ الصِّناعِيَّةِ. وَتَهْدِفُ إِلى حِمايَةِ جُهودِ المُبْدِعينَ وَتَشْجيعِهِمْ عَلى الابْتِكارِ.",
      teacher: "حقوق الملكية الفكرية تحمي نتاج الإبداع الفكري البشري.",
      content: `
        <div class="definition-box">
          <span class="term">💡 التعريف:</span>
          حقوق تحمي نتاج الإبداع الفكري البشري في المجالات الأدبية والفنية والعلمية.
        </div>
        <div class="slide-text">تشمل: <b>حقوق المؤلف</b> و<b>الحقوق المجاورة</b> و<b>حقوق الملكية الصناعية</b>.</div>
      `,
      illustration: `
        <svg viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(280,60)"><circle cx="70" cy="50" r="50" fill="#8b5cf6"/><text x="70" y="65" text-anchor="middle" font-size="55">💡</text></g>
          <text x="350" y="145" text-anchor="middle" font-size="14" font-weight="bold" fill="#6d28d9">حقوق الملكية الفكرية</text>
          <g transform="translate(60,175)"><rect x="0" y="0" width="180" height="45" rx="10" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/><text x="90" y="30" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e40af">©️ حقوق المؤلف</text></g>
          <g transform="translate(460,175)"><rect x="0" y="0" width="180" height="45" rx="10" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/><text x="90" y="30" text-anchor="middle" font-size="13" font-weight="bold" fill="#92400e">⚙️ الملكية الصناعية</text></g>
        </svg>
      `
    },
    {
      title: "حقوق الملكية الصناعية",
      narration: "حُقوقُ المِلْكِيَّةِ الصِّناعِيَّةِ تَحْمي الابْتِكاراتِ المُتَعَلِّقَةَ بِالصِّناعَةِ وَالتِّجارَةِ، وَتَشْمَلُ الاخْتِراعاتِ، وَالرُّسومَ وَالنَّماذِجَ الصِّناعِيَّةَ، وَالعَلاماتِ التِّجارِيَّةَ. وَتَشْتَرِطُ مَبْدَأَ الشَّكْلِيَّةِ، أَيِ التَّسْجيلَ.",
      detail: "مَبْدَأُ الشَّكْلِيَّةِ يَعْني أَنَّهُ لِكَيْ تَحْصُلَ عَلى حِمايَةٍ قانونِيَّةٍ لِاخْتِراعِكَ، يَجِبُ أَنْ تُسَجِّلَهُ في الجِهَةِ المُخْتَصَّةِ. وَبِدونِ التَّسْجيلِ، لا تَحْصُلُ عَلى هَذِهِ الحِمايَةِ.",
      teacher: "حقوق الملكية الصناعية تحمي الابتكارات المتعلقة بالصناعة والتجارة.",
      content: `
        <div class="definition-box">
          <span class="term">⚙️ التعريف:</span>
          هي الحقوق التي تحمي الابتكارات المتعلقة بالنشاط الصناعي والتجاري.
        </div>
        <div class="slide-text"><b>مبدأ الشكلية (Formality):</b> تشترط التسجيل لدى الجهة المختصة.</div>
      `,
      illustration: `
        <svg viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(40,50)"><rect x="0" y="30" width="140" height="90" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/><polygon points="30,30 30,0 60,15 60,30" fill="#f59e0b"/><polygon points="80,30 80,0 110,15 110,30" fill="#f59e0b"/><text x="70" y="80" text-anchor="middle" font-size="30">🏭</text><text x="70" y="140" text-anchor="middle" font-size="12" font-weight="bold" fill="#92400e">مصنع</text></g>
          <g transform="translate(230,50)"><rect x="0" y="30" width="140" height="90" rx="8" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/><text x="70" y="90" text-anchor="middle" font-size="40">⚙️</text><text x="70" y="140" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e40af">اختراع</text></g>
          <g transform="translate(420,50)"><rect x="0" y="30" width="140" height="90" rx="8" fill="#d1fae5" stroke="#10b981" stroke-width="2"/><text x="70" y="90" text-anchor="middle" font-size="40">™️</text><text x="70" y="140" text-anchor="middle" font-size="12" font-weight="bold" fill="#065f46">علامة تجارية</text></g>
          <g transform="translate(600,80)"><text x="0" y="30" text-anchor="middle" font-size="50">📝</text><text x="0" y="100" text-anchor="middle" font-size="11" font-weight="bold" fill="#6d28d9">لازم تسجيل</text></g>
        </svg>
      `
    },
    {
      title: "مدد حماية حقوق الملكية الصناعية",
      narration: "كُلُّ نَوْعٍ مِنْ حُقوقِ المِلْكِيَّةِ الصِّناعِيَّةِ لَهُ مُدَّةُ حِمايَةٍ مُعَيَّنَةٌ، فَبَراءاتُ الاخْتِراعِ عِشْرونَ سَنَةً، وَنَموذَجُ المَنْفَعَةِ سَبْعُ سَنَواتٍ، وَالرُّسومُ وَالنَّماذِجُ الصِّناعِيَّةُ عَشْرُ سَنَواتٍ، وَالعَلامَةُ التِّجارِيَّةُ عَشْرُ سَنَواتٍ.",
      detail: "مُدَّةُ الحِمايَةِ تَبْدَأُ مِنْ تاريخِ التَّقْديمِ، وَبَعْدَ انْتِهاءِ هَذِهِ المُدَّةِ يُمْكِنُ لِلْآخَرينَ اسْتِخْدامُ الاخْتِراعِ أَوِ العَلامَةِ بِحُرِّيَّةٍ. لِذَلِكَ مِنَ المُهِمِّ تَجْديدُ التَّسْجيلِ قَبْلَ انْتِهاءِ المُدَّةِ.",
      teacher: "كل نوع من حقوق الملكية الصناعية له مدة حماية معينة.",
      content: `
        <ul class="slide-list">
          <li><b>براءات الاختراع:</b> 20 سنة من تاريخ التقديم.</li>
          <li><b>نموذج المنفعة:</b> 7 سنوات من تاريخ التقديم.</li>
          <li><b>الرسوم والنماذج الصناعية:</b> 10 سنوات.</li>
          <li><b>العلامة التجارية:</b> 10 سنوات من تاريخ التسجيل.</li>
        </ul>
      `,
      illustration: `
        <svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(30,30)"><rect x="0" y="0" width="150" height="170" rx="12" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/><text x="75" y="50" text-anchor="middle" font-size="40">🔬</text><text x="75" y="90" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e40af">براءة اختراع</text><rect x="30" y="110" width="90" height="30" rx="8" fill="#3b82f6"/><text x="75" y="130" text-anchor="middle" font-size="15" font-weight="bold" fill="#fff">20 سنة</text></g>
          <g transform="translate(195,30)"><rect x="0" y="0" width="150" height="170" rx="12" fill="#d1fae5" stroke="#10b981" stroke-width="2"/><text x="75" y="50" text-anchor="middle" font-size="40">🔧</text><text x="75" y="90" text-anchor="middle" font-size="13" font-weight="bold" fill="#065f46">نموذج منفعة</text><rect x="30" y="110" width="90" height="30" rx="8" fill="#10b981"/><text x="75" y="130" text-anchor="middle" font-size="15" font-weight="bold" fill="#fff">7 سنوات</text></g>
          <g transform="translate(360,30)"><rect x="0" y="0" width="150" height="170" rx="12" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/><text x="75" y="50" text-anchor="middle" font-size="40">🎨</text><text x="75" y="90" text-anchor="middle" font-size="13" font-weight="bold" fill="#92400e">رسم صناعي</text><rect x="30" y="110" width="90" height="30" rx="8" fill="#f59e0b"/><text x="75" y="130" text-anchor="middle" font-size="15" font-weight="bold" fill="#fff">10 سنوات</text></g>
          <g transform="translate(525,30)"><rect x="0" y="0" width="150" height="170" rx="12" fill="#ede9fe" stroke="#8b5cf6" stroke-width="2"/><text x="75" y="50" text-anchor="middle" font-size="40">™️</text><text x="75" y="90" text-anchor="middle" font-size="13" font-weight="bold" fill="#5b21b6">علامة تجارية</text><rect x="30" y="110" width="90" height="30" rx="8" fill="#8b5cf6"/><text x="75" y="130" text-anchor="middle" font-size="15" font-weight="bold" fill="#fff">10 سنوات</text></g>
        </svg>
      `
    },
    {
      title: "حقوق المؤلف (Copyrights)",
      narration: "حُقوقُ المُؤَلِّفِ تَتَعَلَّقُ بِالإِبْداعاتِ الفَنِّيَّةِ مِثْلَ الرِّواياتِ وَالأَفْلامِ وَاللَّوْحاتِ وَالموسيقى وَبَرامِجِ الحاسوبِ. وَميزَتُها أَنَّها لا تَحْتاجُ إِلى تَسْجيلٍ، إِذْ تَنْشَأُ الحُقوقُ بِمُجَرَّدِ إِنْشاءِ العَمَلِ، وَمُدَّةُ الحِمايَةِ فيها خَمْسونَ سَنَةً بَعْدَ وَفاةِ المُبْدِعِ.",
      detail: "مَعْنى أَنَّ حُقوقَ المُؤَلِّفِ لا تَحْتاجُ تَسْجيلاً هُوَ أَنَّهُ بِمُجَرَّدِ أَنْ تَكْتُبَ رِوايَةً أَوْ تَلْحَنَ أُغْنِيَةً، تُصْبِحُ لَكَ حُقوقٌ قانونِيَّةٌ عَلَيْها. وَلا يَحِقُّ لِأَيِّ شَخْصٍ آخَرَ نَسْخُها أَوْ بَيْعُها بِدونِ إِذْنِكَ.",
      teacher: "حقوق المؤلف تتعلق بالإبداعات الفنية ولا تحتاج تسجيل.",
      content: `
        <div class="definition-box">
          <span class="term">©️ التعريف:</span>
          حقوق تتعلق بالأنشطة الإبداعية في الفنون.
        </div>
        <div class="slide-text"><b>مبدأ عدم التسجيل:</b> تنشأ الحقوق في لحظة إنشاء العمل.</div>
        <div class="slide-text"><b>مدة الحماية:</b> 50 سنة بعد وفاة المبدع.</div>
      `,
      illustration: `
        <svg viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(60,50)"><circle cx="50" cy="40" r="30" fill="#8b5cf6"/><text x="50" y="52" text-anchor="middle" font-size="34">✍️</text><text x="50" y="100" text-anchor="middle" font-size="12" font-weight="bold" fill="#5b21b6">الكاتب</text></g>
          <g transform="translate(230,40)"><rect x="0" y="0" width="200" height="110" rx="12" fill="#ede9fe" stroke="#8b5cf6" stroke-width="2"/><text x="100" y="45" text-anchor="middle" font-size="34">📖</text><text x="100" y="80" text-anchor="middle" font-size="13" font-weight="bold" fill="#5b21b6">العمل الإبداعي</text></g>
          <g transform="translate(480,50)"><circle cx="60" cy="50" r="45" fill="#d1fae5" stroke="#10b981" stroke-width="2"/><text x="60" y="62" text-anchor="middle" font-size="40">⏰</text><text x="60" y="120" text-anchor="middle" font-size="14" font-weight="bold" fill="#065f46">50 سنة</text></g>
        </svg>
      `
    }
  ],
  question: "كم مدة حماية حقوق المؤلف بعد وفاته؟",
  options: ["20 سنة", "50 سنة", "10 سنوات"],
  correct: 1
},
{
  id: 5, unit: "الوحدة 3",
  title: "الدرس 1: أمن المعلومات",
  slides: [
    {
      title: "أمن المعلومات",
      narration: "أَمْنُ المَعْلوماتِ هُوَ عَمَلِيَّةُ إِدارَةِ المَعْلوماتِ بِشَكْلٍ صَحيحٍ وَالحِفاظِ عَلَيْها آمِنَةً. وَكَما أَنَّ لِمَنْزِلِكَ باباً وَقُفْلاً، فَكَذَلِكَ المَعْلوماتُ تَحْتاجُ إِلى حِمايَةٍ.",
      detail: "أَمْنُ المَعْلوماتِ مَبْدَأٌ أَساسِيٌّ في العَصْرِ الرَّقَمِيِّ. فَكَما تَحْمي مَنْزِلَكَ بِالأَقْفالِ وَكَما تَحْمي أَمْوالَكَ في البَنْكِ، يَجِبُ أَنْ تَحْميَ مَعْلوماتِكَ وَبَياناتِكَ مِنَ السَّرِقَةِ وَالتَّلاعُبِ.",
      teacher: "أمن المعلومات هو إدارة المعلومات بشكل صحيح والحفاظ عليها آمنة.",
      content: `
        <div class="definition-box">
          <span class="term">🔐 التعريف:</span>
          هو عملية إدارة المعلومات بشكل صحيح والحفاظ عليها آمنة.
        </div>
      `,
      illustration: `
        <svg viewBox="0 0 700 200" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(50,30)"><polygon points="70,0 140,40 0,40" fill="#f59e0b"/><rect x="10" y="40" width="120" height="90" fill="#fbbf24" stroke="#92400e" stroke-width="2"/><rect x="55" y="70" width="30" height="60" fill="#78350f"/><text x="70" y="160" text-anchor="middle" font-size="12" font-weight="bold" fill="#92400e">بيت محمي</text></g>
          <text x="280" y="110" text-anchor="middle" font-size="30">⇄</text>
          <g transform="translate(400,30)"><rect x="0" y="0" width="120" height="130" rx="10" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/><rect x="20" y="20" width="80" height="20" rx="4" fill="#3b82f6"/><rect x="20" y="50" width="80" height="20" rx="4" fill="#3b82f6"/><rect x="20" y="80" width="80" height="20" rx="4" fill="#3b82f6"/><text x="60" y="125" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">خادم</text></g>
          <g transform="translate(580,60)"><circle cx="40" cy="40" r="40" fill="#10b981"/><text x="40" y="55" text-anchor="middle" font-size="42">🔒</text><text x="40" y="105" text-anchor="middle" font-size="12" font-weight="bold" fill="#065f46">حماية</text></g>
        </svg>
      `
    },
    {
      title: "العناصر الثلاثة لأمن المعلومات",
      narration: "العَناصِرُ الثَّلاثَةُ لِأَمْنِ المَعْلوماتِ هِيَ: السِّرِّيَّةُ، أَيْ أَنَّ الأَفْرادَ المُصَرَّحَ لَهُمْ فَقَطْ يُمْكِنُهُمُ الوُصولُ إِلى المَعْلوماتِ. وَالسَّلامَةُ، أَي عَدَمُ تَدْميرِ المَعْلوماتِ أَوِ العَبَثِ بِها. وَالتَّوافُرِيَّةُ، أَيْ إِمْكانِيَّةُ الوُصولِ إِلى المَعْلوماتِ وَقْتَ الحاجَةِ إِلَيْها.",
      detail: "لِنَفْهَمْ كُلَّ عُنْصُرٍ بِمِثالٍ. السِّرِّيَّةُ مِثْلُ كَلِمَةِ سِرِّ بَنْكِكَ، لا يَجِبُ أَنْ يَعْرِفَها أَحَدٌ. السَّلامَةُ مِثْلُ دَرَجاتِكَ في المَدْرَسَةِ، لا يَجِبُ أَنْ يُغَيِّرَها أَحَدٌ. التَّوافُرِيَّةُ مِثْلُ خِدْمَةِ الإِنْتَرْنِت، يَجِبُ أَنْ تَعْمَلَ في أَيِّ وَقْتٍ تَحْتاجُها فيهِ.",
      teacher: "العناصر الثلاثة: السرية، والسلامة، والتوافرية.",
      content: `
        <ul class="slide-list">
          <li><b>السرية:</b> وصول الأفراد المصرّح لهم فقط.</li>
          <li><b>السلامة:</b> عدم تدمير أو العبث بالمعلومات.</li>
          <li><b>التوافرية:</b> الوصول للمعلومات وقت الحاجة.</li>
        </ul>
      `,
      illustration: `
        <svg viewBox="0 0 700 320" xmlns="http://www.w3.org/2000/svg">
          <polygon points="350,40 570,290 130,290" fill="#fee2e2" stroke="#ef4444" stroke-width="3"/>
          <text x="350" y="200" text-anchor="middle" font-size="20" font-weight="bold" fill="#991b1b">أمن المعلومات</text>
          <circle cx="350" cy="40" r="42" fill="#3b82f6"/>
          <text x="350" y="55" text-anchor="middle" font-size="42" fill="#fff">🔒</text>
          <text x="350" y="110" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e40af">السرية</text>
          <circle cx="130" cy="290" r="42" fill="#10b981"/>
          <text x="130" y="305" text-anchor="middle" font-size="42" fill="#fff">✅</text>
          <text x="130" y="355" text-anchor="middle" font-size="14" font-weight="bold" fill="#065f46">السلامة</text>
          <circle cx="570" cy="290" r="42" fill="#f59e0b"/>
          <text x="570" y="305" text-anchor="middle" font-size="42" fill="#fff">⚡</text>
          <text x="570" y="355" text-anchor="middle" font-size="14" font-weight="bold" fill="#92400e">التوافرية</text>
        </svg>
      `
    },
    {
      title: "مثال يوضح الفرق",
      narration: "مِثالٌ يُوَضِّحُ الفَرْقَ: إِذا اطَّلَعَ شَخْصٌ عَلى رَسائِلِكَ، فَهَذا خَطَرٌ عَلى السِّرِّيَّةِ. وَإِذا غَيَّرَ أَحَدُهُمْ دَرَجاتِكَ، فَهَذا خَطَرٌ عَلى السَّلامَةِ. وَإِذا تَعَطَّلَ الخادِمُ، فَهَذا خَطَرٌ عَلى التَّوافُرِيَّةِ.",
      detail: "هَذِهِ الأَمْثِلَةُ الثَّلاثَةُ تُوَضِّحُ الفَرْقَ بَيْنَ العَناصِرِ الثَّلاثَةِ. فَكُلُّ عُنْصُرٍ يَحْمي جانِباً مُخْتَلِفاً مِنَ المَعْلومَةِ، وَالحِفاظُ عَلى الثَّلاثَةِ مَعاً يُوَفِّرُ حِمايَةً شامِلَةً.",
      teacher: "كل عنصر يحمي جانباً مختلفاً من المعلومات.",
      content: `
        <ul class="slide-list">
          <li>إذا اطلع شخص على رسائلك ← خطر على <b>السرية</b>.</li>
          <li>إذا غيّر أحدهم درجاتك ← خطر على <b>السلامة</b>.</li>
          <li>إذا تعطل الخادم ← خطر على <b>التوافرية</b>.</li>
        </ul>
      `,
      illustration: `
        <svg viewBox="0 0 700 260" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(20,20)"><rect x="0" y="0" width="210" height="220" rx="14" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/><text x="105" y="40" text-anchor="middle" font-size="38">👀</text><text x="105" y="90" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e40af">شخص يقرأ رسائلك</text><text x="105" y="140" text-anchor="middle" font-size="14" font-weight="bold" fill="#ef4444">⚠️ خطر على</text><text x="105" y="175" text-anchor="middle" font-size="20" font-weight="bold" fill="#1e40af">السرية</text></g>
          <g transform="translate(240,20)"><rect x="0" y="0" width="210" height="220" rx="14" fill="#d1fae5" stroke="#10b981" stroke-width="2"/><text x="105" y="40" text-anchor="middle" font-size="38">📝</text><text x="105" y="90" text-anchor="middle" font-size="12" font-weight="bold" fill="#065f46">تغيير الدرجات</text><text x="105" y="140" text-anchor="middle" font-size="14" font-weight="bold" fill="#ef4444">⚠️ خطر على</text><text x="105" y="175" text-anchor="middle" font-size="20" font-weight="bold" fill="#065f46">السلامة</text></g>
          <g transform="translate(460,20)"><rect x="0" y="0" width="220" height="220" rx="14" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/><text x="110" y="40" text-anchor="middle" font-size="38">💥</text><text x="110" y="90" text-anchor="middle" font-size="12" font-weight="bold" fill="#92400e">الخادم تعطل</text><text x="110" y="140" text-anchor="middle" font-size="14" font-weight="bold" fill="#ef4444">⚠️ خطر على</text><text x="110" y="175" text-anchor="middle" font-size="20" font-weight="bold" fill="#92400e">التوافرية</text></g>
        </svg>
      `
    },
    {
      title: "التهديدات",
      narration: "هُناكَ تَهْديداتٌ كَثيرَةٌ لِأَمْنِ المَعْلوماتِ، مِنْها: الوُصولُ غَيْرُ المُصَرَّحِ بِهِ، وَالاخْتِراقُ، وَالبَرْمَجِيّاتُ الخَبيثَةُ الَّتي تَشْمَلُ الفيروساتِ وَحِصانَ طَرْوادَةَ وَالدِّيدانَ وَبَرامِجَ التَّجَسُّسِ وَبَرامِجَ الفِدْيَةِ، وَكَذَلِكَ الجَريمَةُ الإِلِكْتُرونِيَّةُ.",
      detail: "الفيروساتُ وَالبَرْمَجِيّاتُ الخَبيثَةُ هِيَ الأَعْداءُ الرَّقَمِيَّةُ لِجِهازِكَ. وَتَنْتَقِلُ عَنْ طَريقِ المَواقِعِ المُشَبَّهَةِ وَمُرْفَقاتِ البَريدِ وَمَخازِنِ الفَلاشِ المُلَوَّثَةِ. لِذَلِكَ يَجِبُ الحَذَرُ عِنْدَ تَحْميلِ أَيِّ مِلَفٍّ مِنَ الإِنْتَرْنِت.",
      teacher: "من التهديدات: الفيروسات وبرامج التجسس وبرامج الفدية.",
      content: `
        <ul class="slide-list">
          <li><b>الوصول غير المصرح به.</b></li>
          <li><b>الاختراق (Cracking).</b></li>
          <li><b>البرمجيات الخبيثة:</b> فيروسات، حصان طروادة، ديدان، تجسس، فدية.</li>
          <li><b>الجريمة الإلكترونية.</b></li>
        </ul>
      `,
      illustration: `
        <svg viewBox="0 0 700 260" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(30,30)"><rect x="0" y="0" width="120" height="150" rx="12" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/><text x="60" y="70" text-anchor="middle" font-size="55">🦠</text><text x="60" y="110" text-anchor="middle" font-size="13" font-weight="bold" fill="#991b1b">فيروس</text></g>
          <g transform="translate(165,30)"><rect x="0" y="0" width="120" height="150" rx="12" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/><text x="60" y="70" text-anchor="middle" font-size="55">🐴</text><text x="60" y="110" text-anchor="middle" font-size="13" font-weight="bold" fill="#991b1b">حصان طروادة</text></g>
          <g transform="translate(300,30)"><rect x="0" y="0" width="120" height="150" rx="12" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/><text x="60" y="70" text-anchor="middle" font-size="55">🪱</text><text x="60" y="110" text-anchor="middle" font-size="13" font-weight="bold" fill="#991b1b">دودة</text></g>
          <g transform="translate(435,30)"><rect x="0" y="0" width="120" height="150" rx="12" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/><text x="60" y="70" text-anchor="middle" font-size="55">🕵️</text><text x="60" y="110" text-anchor="middle" font-size="13" font-weight="bold" fill="#991b1b">تجسس</text></g>
          <g transform="translate(570,30)"><rect x="0" y="0" width="110" height="150" rx="12" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/><text x="55" y="70" text-anchor="middle" font-size="55">💰</text><text x="55" y="110" text-anchor="middle" font-size="13" font-weight="bold" fill="#991b1b">فدية</text></g>
          <text x="350" y="220" text-anchor="middle" font-size="14" font-weight="bold" fill="#991b1b">البرمجيات الخبيثة (Malware)</text>
        </svg>
      `
    }
  ],
  question: "إذا لم تتعرض المعلومات للتدمير أو العبث، فهذه خاصية ماذا؟",
  options: ["السرية", "السلامة", "التوافرية"],
  correct: 1
},
{
  id: 6, unit: "الوحدة 3",
  title: "الدرس 4: التشفير",
  slides: [
    {
      title: "التشفير (Encryption)",
      narration: "التَّشْفيرُ هُوَ طَريقَةٌ تُسْتَخْدَمُ عِنْدَ إِرْسالِ المَعْلوماتِ لِمَنْعِ اعْتِراضِها مِنْ قِبَلِ أَيِّ شَخْصٍ آخَرَ غَيْرِ المُسْتَقْبِلِ المَقْصودِ. وَيُطْلَقُ عَلى النَّصِّ الأَصْلِيِّ غَيْرِ المُشَفَّرِ اسْمُ (بْلين تِكْست)، وَعَلى النَّصِّ المُشَفَّرِ اسْمُ (سايفَر تِكْست).",
      detail: "التَّشْفيرُ هُوَ مِثْلُ وَضْعِ رِسالَةٍ في صُنْدوقٍ مُقْفَلٍ قَبْلَ إِرْسالِها. حَتّى إِذا اعْتَرَضَ أَحَدٌ الصُّنْدوقَ، لا يُمْكِنُهُ فَتْحُهُ وَقِراءَةُ الرِّسالَةِ إِلاَّ إِذا كانَ لَدَيْهِ المِفْتاحُ الصَّحيحُ.",
      teacher: "التشفير يمنع اعتراض المعلومات من غير المستلم.",
      content: `
        <div class="definition-box">
          <span class="term">🔐 التعريف:</span>
          طريقة لمنع اعتراض المعلومات من قبل أي شخص آخر غير المستلم المقصود.
        </div>
        <div class="slide-text">
          <b>النص العادي (Plaintext):</b> النص الأصلي قبل التشفير.<br>
          <b>النص المشفر (Ciphertext):</b> النص بعد التشفير.
        </div>
      `,
      illustration: `
        <svg viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(20,50)"><rect x="0" y="0" width="180" height="110" rx="12" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/><text x="90" y="35" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e40af">النص العادي</text><text x="90" y="70" text-anchor="middle" font-size="20" fill="#1e40af">مرحبا</text><text x="90" y="100" text-anchor="middle" font-size="10" fill="#64748b">Plaintext</text></g>
          <g transform="translate(220,55)"><circle cx="40" cy="50" r="35" fill="#8b5cf6"/><text x="40" y="62" text-anchor="middle" font-size="38" fill="#fff">🔒</text></g>
          <text x="260" y="130" text-anchor="middle" font-size="11" font-weight="bold" fill="#6d28d9">تشفير</text>
          <g transform="translate(400,50)"><rect x="0" y="0" width="180" height="110" rx="12" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/><text x="90" y="35" text-anchor="middle" font-size="13" font-weight="bold" fill="#991b1b">النص المشفر</text><text x="90" y="70" text-anchor="middle" font-size="16" font-weight="bold" fill="#991b1b">&amp;SA+F¥C</text><text x="90" y="100" text-anchor="middle" font-size="10" fill="#64748b">Ciphertext</text></g>
          <g transform="translate(600,55)"><circle cx="40" cy="50" r="35" fill="#10b981"/><text x="40" y="62" text-anchor="middle" font-size="38" fill="#fff">🔓</text></g>
        </svg>
      `
    },
    {
      title: "المفتاح (Key)",
      narration: "المِفْتاحُ هُوَ الإِجْراءُ أَوِ البَياناتُ المُحَدَّدَةُ المُسْتَخْدَمَةُ لِلتَّشْفيرِ وَفَكِّ التَّشْفيرِ. أَمّا فَكُّ التَّشْفيرِ فَهُوَ اسْتِعَادَةُ النَّصِّ الأَصْلِيِّ مِنَ النَّصِّ المُشَفَّرِ.",
      detail: "المِفْتاحُ هُوَ العُنْصُرُ الأَسَاسِيُّ في عَمَلِيَّةِ التَّشْفيرِ. وَبِدونِ المِفْتاحِ الصَّحيحِ، لا يُمْكِنُ فَكُّ تَشْفيرِ الرِّسالَةِ. لِذَلِكَ مِنَ المُهِمِّ الحِفاظُ عَلى سِرِّيَّةِ المِفْتاحِ وَعَدَمِ مُشارَكَتِهِ مَعَ أَيِّ شَخْصٍ غَيْرِ مُوَثَّقٍ.",
      teacher: "المفتاح هو الأداة المستخدمة للتشفير وفك التشفير.",
      content: `
        <div class="definition-box">
          <span class="term">🗝️ التعريف:</span>
          هو الإجراء أو البيانات المحددة المستخدمة للتشفير وفك التشفير.
        </div>
        <div class="slide-text"><b>فك التشفير:</b> استعادة النص الأصلي من النص المشفر.</div>
      `,
      illustration: `
        <svg viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(80,50)"><rect x="0" y="50" width="100" height="100" rx="12" fill="#3b82f6"/><circle cx="50" cy="95" r="12" fill="#fff"/><rect x="45" y="100" width="10" height="30" fill="#fff"/></g>
          <text x="130" y="200" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e40af">نص مشفر</text>
          <g transform="translate(280,80)"><circle cx="40" cy="40" r="30" fill="#f59e0b" stroke="#92400e" stroke-width="2"/><rect x="65" y="35" width="80" height="10" fill="#f59e0b" stroke="#92400e" stroke-width="2"/><rect x="120" y="45" width="15" height="20" fill="#f59e0b" stroke="#92400e" stroke-width="2"/></g>
          <text x="350" y="200" text-anchor="middle" font-size="13" font-weight="bold" fill="#92400e">المفتاح</text>
          <g transform="translate(480,50)"><rect x="0" y="50" width="100" height="100" rx="12" fill="#10b981"/><circle cx="50" cy="95" r="12" fill="#fff"/><rect x="45" y="100" width="10" height="30" fill="#fff"/></g>
          <text x="530" y="200" text-anchor="middle" font-size="13" font-weight="bold" fill="#065f46">النص الأصلي</text>
        </svg>
      `
    },
    {
      title: "التشفير بالمفتاح المتناظر",
      narration: "النَّوْعُ الأَوَّلُ هُوَ التَّشْفيرُ بِالمِفْتاحِ المُتَناظِرِ، وَفيهِ يُسْتَخْدَمُ نَفْسُ المِفْتاحِ لِلتَّشْفيرِ وَفَكِّ التَّشْفيرِ. ميزَتُهُ أَنَّهُ سَريعٌ، لَكِنَّ عَيْبَهُ أَنَّ الطَّرَفَيْنِ لا بُدَّ أَنْ يَتَشارَكا المِفْتاحَ بِأَمانٍ.",
      detail: "التَّشْفيرُ بِالمِفْتاحِ المُتَناظِرِ مِثْلُ اسْتِخْدامِ قُفْلٍ وَمِفْتاحٍ واحِدٍ لِلْإِرْسالِ وَالاسْتِقْبالِ. وَهُوَ سَريعٌ جِدّاً لِأَنَّهُ يَسْتَخْدِمُ نَفْسَ المِفْتاحِ في العَمَلِيَّتَيْنِ. لَكِنَّ المُشْكِلَةَ هِيَ كَيْفَ يُشارِكُ الطَّرَفانِ المِفْتاحَ بِشَكْلٍ آمِنٍ.",
      teacher: "التشفير المتناظر يستخدم نفس المفتاح للتشفير وفك التشفير.",
      content: `
        <div class="definition-box">
          <span class="term">🔑 التعريف:</span>
          طريقة تشفير يتم فيها استخدام نفس المفتاح المشترك للتشفير وفك التشفير.
        </div>
      `,
      illustration: `
        <svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(40,50)"><circle cx="50" cy="40" r="30" fill="#3b82f6"/><text x="50" y="50" text-anchor="middle" font-size="30">👤</text><text x="50" y="100" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e40af">المرسل</text></g>
          <g transform="translate(140,60)"><rect x="0" y="0" width="120" height="60" rx="10" fill="#f59e0b"/><text x="60" y="40" text-anchor="middle" font-size="30">🔑</text></g>
          <g transform="translate(290,50)"><rect x="0" y="0" width="120" height="60" rx="10" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/><text x="60" y="38" text-anchor="middle" font-size="14" font-weight="bold" fill="#991b1b">🔐 مشفرة</text></g>
          <g transform="translate(490,50)"><circle cx="50" cy="40" r="30" fill="#10b981"/><text x="50" y="50" text-anchor="middle" font-size="30">👤</text><text x="50" y="100" text-anchor="middle" font-size="13" font-weight="bold" fill="#065f46">المستقبل</text></g>
          <g transform="translate(590,60)"><rect x="0" y="0" width="100" height="60" rx="10" fill="#f59e0b"/><text x="50" y="40" text-anchor="middle" font-size="30">🔑</text></g>
          <rect x="100" y="180" width="500" height="45" rx="10" fill="#d1fae5" stroke="#10b981" stroke-width="1.5"/>
          <text x="350" y="208" text-anchor="middle" font-size="12" font-weight="bold" fill="#065f46">✅ سريع جداً | ❌ صعوبة تبادل المفتاح بأمان</text>
        </svg>
      `
    },
    {
      title: "التشفير بالمفتاح العام",
      narration: "النَّوْعُ الثّاني هُوَ التَّشْفيرُ بِالمِفْتاحِ العامِّ، وَفيهِ يُسْتَخْدَمُ مِفْتاحٌ عامٌّ لِلتَّشْفيرِ، وَمِفْتاحٌ خاصٌّ لِفَكِّ التَّشْفيرِ. وَيَتِمُّ التَّشْفيرُ بِالمِفْتاحِ العامِّ لِلْمُسْتَقْبِلِ، وَفَكُّ التَّشْفيرِ بِالمِفْتاحِ الخاصِّ لِلْمُسْتَقْبِلِ.",
      detail: "هَذِهِ الطَّريقَةُ هِيَ الأَكْثَرُ أَماناً في عَصْرِنا الحاليِّ. وَهِيَ مُسْتَخْدَمَةٌ في المَواقِعِ الإِلِكْتُرونِيَّةِ وَالبَنْوكِ. الفِكْرَةُ أَنَّ المِفْتاحَ العامَّ يُمْكِنُ نَشْرُهُ لِلْجَميعِ، أَمّا المِفْتاحُ الخاصُّ فَيَبْقى مَعَ صاحِبِهِ فَقَطْ.",
      teacher: "التشفير العام يستخدم مفتاح عام للتشفير ومفتاح خاص لفك التشفير.",
      content: `
        <div class="definition-box">
          <span class="term">🗝️ التعريف:</span>
          طريقة تشفير تستخدم مفتاح عام للتشفير، ومفتاح خاص لفك التشفير.
        </div>
      `,
      illustration: `
        <svg viewBox="0 0 700 260" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(30,60)"><circle cx="50" cy="40" r="30" fill="#3b82f6"/><text x="50" y="50" text-anchor="middle" font-size="30">👤</text><text x="50" y="100" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e40af">المرسل</text></g>
          <g transform="translate(140,60)"><rect x="0" y="0" width="130" height="80" rx="10" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/><text x="65" y="45" text-anchor="middle" font-size="34">🔓</text><text x="65" y="70" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e40af">مفتاح عام</text></g>
          <g transform="translate(290,60)"><rect x="0" y="0" width="130" height="80" rx="10" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/><text x="65" y="45" text-anchor="middle" font-size="14" font-weight="bold" fill="#991b1b">🔐 مشفر</text></g>
          <g transform="translate(500,60)"><circle cx="50" cy="40" r="30" fill="#10b981"/><text x="50" y="50" text-anchor="middle" font-size="30">👤</text><text x="50" y="100" text-anchor="middle" font-size="12" font-weight="bold" fill="#065f46">المستقبل</text></g>
          <g transform="translate(600,60)"><rect x="0" y="0" width="80" height="80" rx="10" fill="#f59e0b"/><text x="40" y="45" text-anchor="middle" font-size="34">🔐</text></g>
          <rect x="100" y="180" width="500" height="60" rx="10" fill="#d1fae5" stroke="#10b981" stroke-width="1.5"/>
          <text x="350" y="205" text-anchor="middle" font-size="12" font-weight="bold" fill="#065f46">✅ آمن جداً (المفتاح الخاص مع المستلم فقط)</text>
          <text x="350" y="225" text-anchor="middle" font-size="11" fill="#065f46">❌ أبطأ من المفتاح المتناظر</text>
        </svg>
      `
    },
    {
      title: "طريقة المفتاح المؤقت",
      narration: "وَوُجودُ طَريقَةٍ ثالِثَةٍ تُسَمّى طَريقَةَ المِفْتاحِ المُؤَقَّتِ، وَهِيَ تَجْمَعُ بَيْنَ المِفْتاحِ المُتَماثِلِ وَالمِفْتاحِ العامِّ، وَذَلِكَ لِلِاسْتِفادَةِ مِنْ سُرْعَةِ الأَوَّلِ وَأَمانِ الثّاني.",
      detail: "الطَّريقَةُ المُخْتَلِطَةُ هِيَ الأَفْضَلُ في العَمَلِ. فَهِيَ تَسْتَخْدِمُ المِفْتاحَ المُتَماثِلَ السَّريعَ في تَشْفيرِ الرِّسالَةِ نَفْسِها، وَتَسْتَخْدِمُ المِفْتاحَ العامَّ لِتَبادُلِ المِفْتاحِ المُتَماثِلِ بِأَمانٍ. وَبِهَذا نَحْصُلُ عَلى سُرْعَةٍ وَأَمانٍ في نَفْسِ الوَقْتِ.",
      teacher: "طريقة المفتاح المؤقت تجمع بين سرعة المتناظر وأمان العام.",
      content: `
        <div class="definition-box">
          <span class="term">🔀 التعريف:</span>
          طريقة تشفير تجمع بين التشفير بالمفتاح المتماثل والتشفير بالمفتاح العام.
        </div>
        <div class="slide-text"><b>الهدف:</b> الجمع بين السرعة والأمان.</div>
      `,
      illustration: `
        <svg viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(80,60)"><rect x="0" y="0" width="160" height="100" rx="12" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/><text x="80" y="50" text-anchor="middle" font-size="38">🔑</text><text x="80" y="85" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e40af">مفتاح متماثل</text></g>
          <text x="280" y="120" text-anchor="middle" font-size="40" font-weight="bold" fill="#8b5cf6">+</text>
          <g transform="translate(330,60)"><rect x="0" y="0" width="160" height="100" rx="12" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/><text x="80" y="50" text-anchor="middle" font-size="38">🗝️</text><text x="80" y="85" text-anchor="middle" font-size="12" font-weight="bold" fill="#92400e">مفتاح عام</text></g>
          <path d="M 520 110 L 560 110" stroke="#64748b" stroke-width="3"/>
          <polygon points="560,105 580,110 560,115" fill="#64748b"/>
          <g transform="translate(590,60)"><rect x="0" y="0" width="100" height="100" rx="12" fill="#ede9fe" stroke="#8b5cf6" stroke-width="2"/><text x="50" y="55" text-anchor="middle" font-size="40">✨</text><text x="50" y="85" text-anchor="middle" font-size="10" font-weight="bold" fill="#5b21b6">مثالي</text></g>
        </svg>
      `
    }
  ],
  question: "في التشفير بالمفتاح العام، يتم فك التشفير باستخدام ماذا؟",
  options: ["المفتاح العام", "المفتاح الخاص للمستلم", "نفس مفتاح المرسل"],
  correct: 1
},
{
  id: 7, unit: "الوحدة 8",
  title: "الدرس 3: بروتوكولات TCP/IP",
  slides: [
    {
      title: "الحزمة (Packet)",
      narration: "عِنْدَ إِرْسالِ رِسالَةٍ عَبْرَ الإِنْتَرْنِت، يَتِمُّ تَقْسيمُها إِلى أَجْزاءٍ صَغيرَةٍ تُسَمّى الحُزَمَ. وَكُلُّ حُزْمَةٍ يُضافُ إِلَيْها رَأْسٌ يَحْتَوي عَلى مَعْلوماتِ الوِجْهَةِ.",
      detail: "تَخَيَّلْ أَنَّكَ تُريدُ إِرْسالَ كِتابٍ ضَخْمٍ عَبْرَ البَريدِ. مِنَ الصَّعْبِ إِرْسالُهُ كَقِطْعَةٍ واحِدَةٍ، لِذَلِكَ يَتِمُّ تَقْسيمُهُ إِلى عِدَّةِ صَناديقَ صَغيرَةٍ، وَيُكْتَبُ عَلى كُلِّ صُنْدوقٍ رَقْمُهُ وَعُنْوانُ الوِجْهَةِ. هَذا هُوَ بالضَّبْطِ ما يَحْدُثُ في شَبَكاتِ الكَمْبيوتَرِ.",
      teacher: "الحزمة هي وحدة صغيرة تُقسَّم إليها البيانات.",
      content: `
        <div class="definition-box">
          <span class="term">📦 التعريف:</span>
          الوحدة المستخدمة عند تقسيم البيانات إلى أجزاء صغيرة لإرسالها عبر الشبكة.
        </div>
      `,
      illustration: `
        <svg viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(30,50)"><rect x="0" y="0" width="140" height="120" rx="10" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/><text x="70" y="50" text-anchor="middle" font-size="34">📄</text><text x="70" y="85" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e40af">ملف كامل</text></g>
          <g transform="translate(250,20)"><rect x="0" y="0" width="200" height="50" rx="8" fill="#d1fae5" stroke="#10b981" stroke-width="2"/><rect x="0" y="0" width="50" height="50" rx="8" fill="#10b981"/><text x="25" y="32" text-anchor="middle" font-size="14" fill="#fff">📌</text><text x="125" y="32" text-anchor="middle" font-size="11" font-weight="bold" fill="#065f46">جزء 1</text></g>
          <g transform="translate(250,85)"><rect x="0" y="0" width="200" height="50" rx="8" fill="#d1fae5" stroke="#10b981" stroke-width="2"/><rect x="0" y="0" width="50" height="50" rx="8" fill="#10b981"/><text x="25" y="32" text-anchor="middle" font-size="14" fill="#fff">📌</text><text x="125" y="32" text-anchor="middle" font-size="11" font-weight="bold" fill="#065f46">جزء 2</text></g>
          <g transform="translate(250,150)"><rect x="0" y="0" width="200" height="50" rx="8" fill="#d1fae5" stroke="#10b981" stroke-width="2"/><rect x="0" y="0" width="50" height="50" rx="8" fill="#10b981"/><text x="25" y="32" text-anchor="middle" font-size="14" fill="#fff">📌</text><text x="125" y="32" text-anchor="middle" font-size="11" font-weight="bold" fill="#065f46">جزء 3</text></g>
          <g transform="translate(480,80)"><circle cx="60" cy="60" r="55" fill="#8b5cf6"/><text x="60" y="75" text-anchor="middle" font-size="55" fill="#fff">🎯</text><text x="60" y="140" text-anchor="middle" font-size="13" font-weight="bold" fill="#6d28d9">الوجهة</text></g>
        </svg>
      `
    },
    {
      title: "بروتوكول الاتصال",
      narration: "البْرُوتُوكولُ هُوَ اتِّفاقِيَّةٌ مُشْتَرَكَةٌ في شَبَكاتِ المَعْلوماتِ وَالاتِّصالاتِ.",
      detail: "البْرُوتُوكولُ مِثْلُ اللُّغَةِ المُشْتَرَكَةِ بَيْنَ شَخْصَيْنِ. فَلَوْ كانَ أَحَدُهُما يَتَكَلَّمُ العَرَبِيَّةَ وَالآخَرُ الصّينِيَّةَ، لَنْ يَتَفاهَما. كَذَلِكَ الأَجْهِزَةُ في الشَّبَكَةِ تَحْتاجُ إِلى بْرُوتُوكولٍ مُشْتَرَكٍ لِتَتَفاهَمَ مَعَ بَعْضِها.",
      teacher: "البروتوكول هو اتفاقية مشتركة في الشبكات.",
      content: `
        <div class="definition-box">
          <span class="term">🤝 التعريف:</span>
          اتفاقية مشتركة في شبكات المعلومات والاتصالات.
        </div>
      `,
      illustration: `
        <svg viewBox="0 0 700 200" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(80,50)"><rect x="0" y="0" width="120" height="90" rx="10" fill="#3b82f6"/><text x="60" y="55" text-anchor="middle" font-size="38" fill="#fff">💻</text></g>
          <g transform="translate(260,70)"><rect x="0" y="0" width="180" height="50" rx="25" fill="#8b5cf6"/><text x="90" y="32" text-anchor="middle" font-size="14" font-weight="bold" fill="#fff">🤝 اتفاقية مشتركة</text></g>
          <g transform="translate(500,50)"><rect x="0" y="0" width="120" height="90" rx="10" fill="#10b981"/><text x="60" y="55" text-anchor="middle" font-size="38" fill="#fff">🖥️</text></g>
          <text x="350" y="180" text-anchor="middle" font-size="13" font-weight="bold" fill="#475569">كل الأجهزة تتفق على نفس اللغة للتواصل</text>
        </svg>
      `
    },
    {
      title: "البروتوكولات الرئيسية",
      narration: "أَشْهَرُ ثَلاثَةِ بْرُوتُوكولاتٍ هِيَ: TCP وَهُوَ مَوْثوقٌ لِأَنَّهُ يُقَسِّمُ وَيُرَتِّبُ وَيُعيدُ إِرْسالَ المَفْقودِ. وَ UDP وَهُوَ سَريعٌ لِأَنَّهُ يَهْتَمُّ بِالوَقْتِ الفِعْلِيِّ. وَ IP وَهُوَ الَّذي يُعَيِّنُ العَناوينَ وَيُوَجِّهُ الحُزَمَ.",
      detail: "TCP مِثْلُ إِرْسالِ رِسالَةٍ مُهِمَّةٍ بالبَريدِ المُسَجَّلِ، حَيْثُ تَتَأَكَّدُ أَنَّها وَصَلَتْ سَليمَةً. UDP مِثْلُ بَثِّ رِسالَةٍ عَبْرَ مِكْبِرِ الصَّوْتِ، الأَهَمُّ هُوَ الوُصولُ السَّريعُ حَتّى لَوْ فُقِدَ بَعْضُ الكَلامِ.",
      teacher: "TCP للموثوقية، UDP للسرعة، IP للعنونة والتوجيه.",
      content: `
        <ul class="slide-list">
          <li><b>TCP:</b> يقسم البيانات ويرتب الحزم ويعيد المفقود.</li>
          <li><b>UDP:</b> يؤكد على الوقت الفعلي (بث الفيديو).</li>
          <li><b>IP:</b> يعين العناوين ويوجه الحزم.</li>
        </ul>
      `,
      illustration: `
        <svg viewBox="0 0 700 260" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(20,30)"><rect x="0" y="0" width="210" height="200" rx="14" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/><text x="105" y="45" text-anchor="middle" font-size="36">📧</text><text x="105" y="85" text-anchor="middle" font-size="16" font-weight="bold" fill="#1e40af">TCP</text><text x="105" y="110" text-anchor="middle" font-size="11" fill="#1e40af">موثوق • منظم</text><text x="105" y="155" text-anchor="middle" font-size="11" fill="#1e40af">✅ يرتب الحزم</text><text x="105" y="175" text-anchor="middle" font-size="11" fill="#1e40af">✅ يعيد المفقود</text></g>
          <g transform="translate(245,30)"><rect x="0" y="0" width="210" height="200" rx="14" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/><text x="105" y="45" text-anchor="middle" font-size="36">🎥</text><text x="105" y="85" text-anchor="middle" font-size="16" font-weight="bold" fill="#92400e">UDP</text><text x="105" y="110" text-anchor="middle" font-size="11" fill="#92400e">سريع • مباشر</text><text x="105" y="155" text-anchor="middle" font-size="11" fill="#92400e">✅ بدون ترتيب</text><text x="105" y="175" text-anchor="middle" font-size="11" fill="#92400e">✅ بدون إعادة</text></g>
          <g transform="translate(470,30)"><rect x="0" y="0" width="210" height="200" rx="14" fill="#ede9fe" stroke="#8b5cf6" stroke-width="2"/><text x="105" y="45" text-anchor="middle" font-size="36">🎯</text><text x="105" y="85" text-anchor="middle" font-size="16" font-weight="bold" fill="#5b21b6">IP</text><text x="105" y="110" text-anchor="middle" font-size="11" fill="#5b21b6">عنونة وتوجيه</text><text x="105" y="155" text-anchor="middle" font-size="11" fill="#5b21b6">✅ يعين العناوين</text><text x="105" y="175" text-anchor="middle" font-size="11" fill="#5b21b6">✅ يوجه الحزم</text></g>
        </svg>
      `
    },
    {
      title: "نموذج TCP/IP رباعي الطبقات",
      narration: "نَموذَجُ TCP/IP يَتَكَوَّنُ مِنْ أَرْبَعِ طَبَقاتٍ: طَبَقَةُ التَّطْبيقِ وَفيها HTTP وَ SMTP، وَطَبَقَةُ النَّقْلِ وَفيها TCP وَ UDP، وَطَبَقَةُ الإِنْتَرْنِت وَفيها IP، وَطَبَقَةُ واجِهَةِ الشَّبَكَةِ وَفيها Ethernet.",
      detail: "كُلُّ طَبَقَةٍ لَها وَظيفَتُها المُحَدَّدَةُ. طَبَقَةُ التَّطْبيقِ تَتَعامَلُ مَعَ المُسْتَخْدِمِ، وَطَبَقَةُ النَّقْلِ تَضْمَنُ الوُصولَ، وَطَبَقَةُ الإِنْتَرْنِت تُوَجِّهُ الحُزَمَ، وَطَبَقَةُ واجِهَةِ الشَّبَكَةِ تَتَعامَلُ مَعَ العَتَادِ.",
      teacher: "نموذج TCP/IP يتكون من أربع طبقات.",
      content: `
        <ul class="slide-list">
          <li><b>طبقة التطبيق:</b> HTTP, SMTP.</li>
          <li><b>طبقة النقل:</b> TCP, UDP.</li>
          <li><b>طبقة الإنترنت:</b> IP.</li>
          <li><b>طبقة واجهة الشبكة:</b> Ethernet.</li>
        </ul>
      `,
      illustration: `
        <svg viewBox="0 0 700 320" xmlns="http://www.w3.org/2000/svg">
          <rect x="80" y="20" width="540" height="60" rx="12" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
          <text x="350" y="45" text-anchor="middle" font-size="15" font-weight="bold" fill="#1e40af">طبقة التطبيق (Application)</text>
          <text x="350" y="68" text-anchor="middle" font-size="12" fill="#1e40af">HTTP • SMTP • FTP</text>
          <rect x="80" y="90" width="540" height="60" rx="12" fill="#d1fae5" stroke="#10b981" stroke-width="2"/>
          <text x="350" y="115" text-anchor="middle" font-size="15" font-weight="bold" fill="#065f46">طبقة النقل (Transport)</text>
          <text x="350" y="138" text-anchor="middle" font-size="12" fill="#065f46">TCP • UDP</text>
          <rect x="80" y="160" width="540" height="60" rx="12" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
          <text x="350" y="185" text-anchor="middle" font-size="15" font-weight="bold" fill="#92400e">طبقة الإنترنت (Internet)</text>
          <text x="350" y="208" text-anchor="middle" font-size="12" fill="#92400e">IP</text>
          <rect x="80" y="230" width="540" height="60" rx="12" fill="#ede9fe" stroke="#8b5cf6" stroke-width="2"/>
          <text x="350" y="255" text-anchor="middle" font-size="15" font-weight="bold" fill="#5b21b6">طبقة واجهة الشبكة</text>
          <text x="350" y="278" text-anchor="middle" font-size="12" fill="#5b21b6">Ethernet • Wi-Fi</text>
        </svg>
      `
    }
  ],
  question: "ما هو البروتوكول المسؤول عن إعادة إرسال الحزم المفقودة؟",
  options: ["UDP", "IP", "TCP"],
  correct: 2
}
,
{
  id: 8, unit: "الوحدة 4",
  title: "الدرس 1: تطور تكنولوجيا المعلومات والمجتمع",
  slides: [
    {
      title: "تطور المجتمع البشري",
      narration: "تَطَوَّرَ المُجْتَمَعُ البَشَرِيُّ عَبْرَ خَمْسِ مَراحِلَ: مُجْتَمَعُ الصَّيّادينَ وَالجَامِعينَ، ثُمَّ المُجْتَمَعُ الزِّراعِيُّ، ثُمَّ المُجْتَمَعُ الصِّناعِيُّ، ثُمَّ مُجْتَمَعُ المَعْلوماتِ، وَأَخيراً مُجْتَمَعُ الجيلِ الخامِسِ الَّذي يَدْمِجُ الفَضاءَ الافْتِراضِيَّ مَعَ الفَضاءِ الحَقيقِيِّ.",
      detail: "المُجْتَمَعُ البَشَرِيُّ مَرَّ بِخَمْسِ مَراحِلَ مُهِمَّةٍ. في كُلِّ مَرْحَلَةٍ تَطَوَّرَتِ الأَدَواتُ وَالتِّكْنولوجيا المُسْتَخْدَمَةُ. بَدَأَ الإِنْسانُ بِالصَّيْدِ وَجَمْعِ الثِّمارِ، ثُمَّ تَعَلَّمَ الزِّراعَةَ وَاسْتَقَرَّ في مَكانٍ واحِدٍ، ثُمَّ جاءَتِ الثَّوْرَةُ الصِّناعِيَّةُ بِالمُحَرِّكاتِ وَالآلاتِ، ثُمَّ جاءَ عَصْرُ المَعْلوماتِ وَالإِنْتَرْنِت، وَأَخيراً مُجْتَمَعُ الجيلِ الخامِسِ الَّذي يَدْمِجُ العالَمَ الرَّقَمِيَّ بِالعالَمِ الحَقيقِيِّ.",
      teacher: "تطور المجتمع البشري عبر خمس مراحل: من الصيد إلى الزراعة إلى الصناعة إلى المعلومات وأخيراً الجيل الخامس.",
      content: `
        <div class="definition-box">
          <span class="term">📜 مراحل تطور المجتمع:</span>
        </div>
        <ul class="slide-list">
          <li><b>مجتمع الصيادين والجامعين:</b> منذ ولادة البشرية، اعتمد على الفؤوس الحجرية والأقواس وتقنيات إشعال النار.</li>
          <li><b>المجتمع الزراعي:</b> منذ حوالي 13,000 قبل الميلاد، اعتمد على الأدوات الزراعية والري.</li>
          <li><b>المجتمع الصناعي:</b> منذ منتصف القرن الثامن عشر بعد الثورة الصناعية.</li>
          <li><b>مجتمع المعلومات:</b> منذ النصف الثاني من القرن العشرين، بتقدم أجهزة الكمبيوتر والإنترنت.</li>
          <li><b>مجتمع الجيل الخامس:</b> مجتمع يدمج الفضاء الافتراضي مع الفضاء الحقيقي.</li>
        </ul>
      `,
      illustration: `
        <svg viewBox="0 0 700 260" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(20,30)"><rect x="0" y="0" width="120" height="120" rx="10" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/><text x="60" y="60" text-anchor="middle" font-size="45">🏹</text><text x="60" y="95" text-anchor="middle" font-size="11" font-weight="bold" fill="#92400e">صيادين</text></g>
          <g transform="translate(150,30)"><rect x="0" y="0" width="120" height="120" rx="10" fill="#d1fae5" stroke="#10b981" stroke-width="2"/><text x="60" y="60" text-anchor="middle" font-size="45">🌾</text><text x="60" y="95" text-anchor="middle" font-size="11" font-weight="bold" fill="#065f46">زراعي</text></g>
          <g transform="translate(280,30)"><rect x="0" y="0" width="120" height="120" rx="10" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/><text x="60" y="60" text-anchor="middle" font-size="45">🏭</text><text x="60" y="95" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">صناعي</text></g>
          <g transform="translate(410,30)"><rect x="0" y="0" width="120" height="120" rx="10" fill="#ede9fe" stroke="#8b5cf6" stroke-width="2"/><text x="60" y="60" text-anchor="middle" font-size="45">💻</text><text x="60" y="95" text-anchor="middle" font-size="11" font-weight="bold" fill="#5b21b6">معلومات</text></g>
          <g transform="translate(540,30)"><rect x="0" y="0" width="140" height="120" rx="10" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/><text x="70" y="60" text-anchor="middle" font-size="45">🌐</text><text x="70" y="95" text-anchor="middle" font-size="11" font-weight="bold" fill="#991b1b">الجيل الخامس</text></g>
          <text x="350" y="200" text-anchor="middle" font-size="14" font-weight="bold" fill="#475569">تطور المجتمع البشري عبر العصور</text>
        </svg>
      `
    },
    {
      title: "تقنيات المعلومات الجديدة",
      narration: "أَبْرَزُ تِكْنولوجِيّاتِ المَعْلوماتِ الجَديدَةِ هِيَ: البَياناتُ الضَّخْمَةُ، وَالذَّكاءُ الاصْطِناعِيُّ، وَتَعَلُّمُ الآلَةِ، وَإِنْتَرْنِتُ الأَشْياءِ، وَالواقِعُ الافْتِراضِيُّ، وَالواقِعُ المُعَزَّزُ.",
      detail: "هَذِهِ التِّكْنولوجِيّاتُ الجَديدَةُ تُغَيِّرُ حَياتَنا بِشَكْلٍ جَذْرِيٍّ. البَياناتُ الضَّخْمَةُ تُساعِدُ الشَّرِكاتِ عَلى فَهْمِ عُمَلائِها، وَالذَّكاءُ الاصْطِناعِيُّ يُساعِدُ في التَّشْخيصِ الطِّبِّيِّ وَالقِيادَةِ الذّاتِيَّةِ، وَإِنْتَرْنِتُ الأَشْياءِ يَرْبِطُ أَجْهِزَةَ المَنْزِلِ بِبَعْضِها.",
      teacher: "تقنيات جديدة: بيانات ضخمة، ذكاء اصطناعي، إنترنت أشياء، واقع افتراضي ومعزز.",
      content: `
        <ul class="slide-list">
          <li><b>البيانات الضخمة (Big Data):</b> مجموعات ضخمة من البيانات تتميز بالحجم والتنوع.</li>
          <li><b>الذكاء الاصطناعي (AI):</b> تقنية تستخدم أجهزة الكمبيوتر لتقليد السلوك الفكري البشري.</li>
          <li><b>تعلم الآلة:</b> تقنية تتعلم فيها أجهزة الكمبيوتر من البيانات.</li>
          <li><b>إنترنت الأشياء (IoT):</b> ربط الأجهزة المنزلية بالإنترنت للتواصل.</li>
          <li><b>الواقع الافتراضي (VR):</b> بيئة محاكاة يغوص فيها المستخدم.</li>
          <li><b>الواقع المعزز (AR):</b> إضافة معلومات رقمية للبيئة الواقعية.</li>
        </ul>
      `,
      illustration: `
        <svg viewBox="0 0 700 260" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(30,40)"><circle cx="50" cy="50" r="40" fill="#3b82f6"/><text x="50" y="65" text-anchor="middle" font-size="45">🤖</text><text x="50" y="115" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e40af">ذكاء اصطناعي</text></g>
          <g transform="translate(160,40)"><circle cx="50" cy="50" r="40" fill="#10b981"/><text x="50" y="65" text-anchor="middle" font-size="45">📊</text><text x="50" y="115" text-anchor="middle" font-size="12" font-weight="bold" fill="#065f46">بيانات ضخمة</text></g>
          <g transform="translate(290,40)"><circle cx="50" cy="50" r="40" fill="#f59e0b"/><text x="50" y="65" text-anchor="middle" font-size="45">🏠</text><text x="50" y="115" text-anchor="middle" font-size="12" font-weight="bold" fill="#92400e">إنترنت الأشياء</text></g>
          <g transform="translate(420,40)"><circle cx="50" cy="50" r="40" fill="#8b5cf6"/><text x="50" y="65" text-anchor="middle" font-size="45">🥽</text><text x="50" y="115" text-anchor="middle" font-size="12" font-weight="bold" fill="#5b21b6">واقع افتراضي</text></g>
          <g transform="translate(550,40)"><circle cx="50" cy="50" r="40" fill="#ef4444"/><text x="50" y="65" text-anchor="middle" font-size="45">📱</text><text x="50" y="115" text-anchor="middle" font-size="12" font-weight="bold" fill="#991b1b">واقع معزز</text></g>
          <text x="350" y="220" text-anchor="middle" font-size="14" font-weight="bold" fill="#475569">تقنيات المعلومات الجديدة</text>
        </svg>
      `
    },
    {
      title: "التغيرات في الحياة بسبب التكنولوجيا",
      narration: "هُناكَ عِدَّةُ تَغَيُّراتٍ في الحَياةِ بِسَبَبِ التِّكْنولوجيا، مِنْها الإِجْهادُ التِّكْنولوجيُّ، وَرُهابُ التِّكْنولوجيا، وَالإِدْمانُ التِّكْنولوجيُّ، وَاضْطِرابُ VDT، وَالفَجْوَةُ الرَّقَمِيَّةُ.",
      detail: "التِّكْنولوجيا سِلاحٌ ذو حَدَّيْنِ. مِنْ ناحِيَةٍ تُسَهِّلُ حَياتَنا، وَمِنْ ناحِيَةٍ أُخْرى قَدْ تُسَبِّبُ مَشاكِلَ صِحِّيَّةً وَنَفْسِيَّةً إِذا أُسيءَ اسْتِخْدامُها. الفَجْوَةُ الرَّقَمِيَّةُ خُطورَتُها في زِيادَةِ الفارِقِ بَيْنَ المُجْتَمَعاتِ المُتَقَدِّمَةِ وَالنّامِيَةِ.",
      teacher: "من تأثيرات التكنولوجيا: الإجهاد، الرهاب، الإدمان، والفجوة الرقمية.",
      content: `
        <ul class="slide-list">
          <li><b>الإجهاد التكنولوجي:</b> مشاكل عقلية وجسدية من استخدام أجهزة الكمبيوتر.</li>
          <li><b>رهاب التكنولوجيا:</b> قلق أو خوف من استخدام الأجهزة.</li>
          <li><b>الإدمان التكنولوجي:</b> الاعتماد المفرط على الأجهزة.</li>
          <li><b>اضطراب VDT:</b> إجهاد العين والكف.</li>
          <li><b>الفجوة الرقمية:</b> التفاوت بين من يمكنهم استخدام التقنية ومن لا يستطيعون.</li>
        </ul>
      `,
      illustration: `
        <svg viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(60,40)"><circle cx="50" cy="50" r="40" fill="#fee2e2"/><text x="50" y="65" text-anchor="middle" font-size="45">😰</text><text x="50" y="115" text-anchor="middle" font-size="11" font-weight="bold" fill="#991b1b">الإجهاد</text></g>
          <g transform="translate(200,40)"><circle cx="50" cy="50" r="40" fill="#fef3c7"/><text x="50" y="65" text-anchor="middle" font-size="45">😨</text><text x="50" y="115" text-anchor="middle" font-size="11" font-weight="bold" fill="#92400e">الرهاب</text></g>
          <g transform="translate(340,40)"><circle cx="50" cy="50" r="40" fill="#dbeafe"/><text x="50" y="65" text-anchor="middle" font-size="45">📱</text><text x="50" y="115" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">الإدمان</text></g>
          <g transform="translate(480,40)"><circle cx="50" cy="50" r="40" fill="#ede9fe"/><text x="50" y="65" text-anchor="middle" font-size="45">👁️</text><text x="50" y="115" text-anchor="middle" font-size="11" font-weight="bold" fill="#5b21b6">إجهاد العين</text></g>
          <g transform="translate(600,40)"><circle cx="50" cy="50" r="40" fill="#d1fae5"/><text x="50" y="65" text-anchor="middle" font-size="45">⚖️</text><text x="50" y="115" text-anchor="middle" font-size="11" font-weight="bold" fill="#065f46">الفجوة</text></g>
        </svg>
      `
    }
  ],
  question: "ما المصطلح الذي يصف التفاوت بين من يمكنهم استخدام التقنية ومن لا يستطيعون؟",
  options: ["الإجهاد التكنولوجي", "الفجوة الرقمية", "الإدمان التكنولوجي"],
  correct: 1
},
{
  id: 9, unit: "الوحدة 5",
  title: "الدرس 1: تطوير وسائل الاتصال",
  slides: [
    {
      title: "تطور وسائل الاتصال",
      narration: "تَطَوَّرَتْ وَسائِلُ الاتِّصالِ مِنْ إِشاراتِ النّارِ وَالحَمامِ الزّاجِلِ إِلى البَريدِ الحَديثِ، ثُمَّ التِّلِغرافِ، فَالهاتِفِ، ثُمَّ التِّلِغرافِ اللّاسِلْكِيِّ، وَأَخيراً الهَواتِفِ المَحْمولَةِ.",
      detail: "الإِنْسانُ بِطَبيعَتِهِ اجْتِماعيٌّ يَحْتاجُ إِلى التَّواصُلِ. عَبْرَ التّاريخِ ابْتَكَرَ وَسائِلَ مُتَعَدِّدَةً لِلتَّواصُلِ. بَدَأَ بِإِشاراتِ النّارِ وَالحَمامِ الزّاجِلِ، ثُمَّ جاءَ البَريدُ المُنَظَّمُ، ثُمَّ التِّلِغرافُ الَّذي نَقَلَ الرَّسائِلَ بِالأَسْلاكِ، ثُمَّ الهاتِفُ الَّذي نَقَلَ الصَّوْتَ، وَأَخيراً الهَواتِفُ الذَّكِيَّةُ الَّتي نَقَلَتِ الصَّوْتَ وَالصُّورَةَ وَالفيديو.",
      teacher: "تطورت وسائل الاتصال من إشارات النار إلى الهواتف الذكية.",
      content: `
        <ul class="slide-list">
          <li><b>قبل الاتصالات السلكية:</b> إشارات النار والحمام الزاجل.</li>
          <li><b>1837:</b> مورس يخترع التلغراف المرسي.</li>
          <li><b>1876:</b> بيل يخترع الهاتف.</li>
          <li><b>1895:</b> ماركوني يخترع التلغراف اللاسلكي.</li>
          <li><b>1946:</b> بدء خدمة الهاتف المحمول.</li>
        </ul>
      `,
      illustration: `
        <svg viewBox="0 0 700 200" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(30,50)"><text x="40" y="50" text-anchor="middle" font-size="50">🔥</text><text x="40" y="100" text-anchor="middle" font-size="10" font-weight="bold" fill="#92400e">إشارات نار</text></g>
          <g transform="translate(140,50)"><text x="40" y="50" text-anchor="middle" font-size="50">🕊️</text><text x="40" y="100" text-anchor="middle" font-size="10" font-weight="bold" fill="#92400e">حمام زاجل</text></g>
          <g transform="translate(260,50)"><text x="40" y="50" text-anchor="middle" font-size="50">📮</text><text x="40" y="100" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e40af">بريد</text></g>
          <g transform="translate(380,50)"><text x="40" y="50" text-anchor="middle" font-size="50">📞</text><text x="40" y="100" text-anchor="middle" font-size="10" font-weight="bold" fill="#065f46">هاتف</text></g>
          <g transform="translate(500,50)"><text x="40" y="50" text-anchor="middle" font-size="50">📱</text><text x="40" y="100" text-anchor="middle" font-size="10" font-weight="bold" fill="#5b21b6">موبايل</text></g>
          <text x="350" y="180" text-anchor="middle" font-size="14" font-weight="bold" fill="#475569">تطور وسائل الاتصال عبر التاريخ</text>
        </svg>
      `
    },
    {
      title: "تصنيفات الاتصال",
      narration: "يُصَنَّفُ الاتِّصالُ حَسَبَ عَدَدِ المُرْسِلينَ وَالمُسْتَقْبِلينَ إِلى: واحِدٍ إِلى واحِدٍ، وَواحِدٍ إِلى العَديدِ، وَالعَديدِ إِلى واحِدٍ، وَالعَديدِ إِلى العَديدِ. وَحَسَبَ العَلاقَةِ بَيْنَ المُرْسِلِ وَالمُسْتَقْبِلِ إِلى مُباشِرٍ وَغَيْرِ مُباشِرٍ. وَحَسَبَ التَّزامُنِ إِلى مُتَزامِنٍ وَغَيْرِ مُتَزامِنٍ.",
      detail: "الاتِّصالُ المُتَزامِنُ يَحْدُثُ في نَفْسِ الوَقْتِ مِثْلَ المُحادَثَةِ وَالمُكالماتِ، أَمّا غَيْرُ المُتَزامِنِ فَيَحْدُثُ في أَوْقاتٍ مُخْتَلِفَةٍ مِثْلَ البَريدِ الإِلِكْتُرونيِّ. كُلُّ نَوْعٍ لَهُ اسْتِخْداماتُهُ المُناسِبَةُ.",
      teacher: "تصنيفات الاتصال: حسب العدد، وحسب العلاقة، وحسب التزامن.",
      content: `
        <ul class="slide-list">
          <li><b>واحد إلى واحد:</b> الرسائل والهواتف.</li>
          <li><b>واحد إلى العديد:</b> الصحف والراديو والتلفزيون.</li>
          <li><b>العديد إلى واحد:</b> جدولة الاستبيانات.</li>
          <li><b>العديد إلى العديد:</b> مؤتمرات الفيديو ووسائل التواصل.</li>
          <li><b>مباشر:</b> المرسل والمستلم وجهًا لوجه.</li>
          <li><b>غير مباشر:</b> البريد الإلكتروني.</li>
          <li><b>متزامن:</b> المحادثة والمكالمات.</li>
          <li><b>غير متزامن:</b> البريد الإلكتروني.</li>
        </ul>
      `,
      illustration: `
        <svg viewBox="0 0 700 260" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(40,30)"><rect x="0" y="0" width="140" height="80" rx="10" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/><text x="70" y="35" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e40af">واحد إلى واحد</text><text x="70" y="60" text-anchor="middle" font-size="20">👤 → 👤</text></g>
          <g transform="translate(200,30)"><rect x="0" y="0" width="140" height="80" rx="10" fill="#d1fae5" stroke="#10b981" stroke-width="2"/><text x="70" y="35" text-anchor="middle" font-size="13" font-weight="bold" fill="#065f46">واحد إلى العديد</text><text x="70" y="60" text-anchor="middle" font-size="20">👤 → 👥</text></g>
          <g transform="translate(360,30)"><rect x="0" y="0" width="140" height="80" rx="10" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/><text x="70" y="35" text-anchor="middle" font-size="13" font-weight="bold" fill="#92400e">العديد إلى واحد</text><text x="70" y="60" text-anchor="middle" font-size="20">👥 → 👤</text></g>
          <g transform="translate(520,30)"><rect x="0" y="0" width="140" height="80" rx="10" fill="#ede9fe" stroke="#8b5cf6" stroke-width="2"/><text x="70" y="35" text-anchor="middle" font-size="13" font-weight="bold" fill="#5b21b6">العديد إلى العديد</text><text x="70" y="60" text-anchor="middle" font-size="20">👥 ↔ 👥</text></g>
          <g transform="translate(40,140)"><rect x="0" y="0" width="140" height="80" rx="10" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/><text x="70" y="35" text-anchor="middle" font-size="13" font-weight="bold" fill="#991b1b">مباشر</text><text x="70" y="60" text-anchor="middle" font-size="20">👤 ↔ 👤</text></g>
          <g transform="translate(200,140)"><rect x="0" y="0" width="140" height="80" rx="10" fill="#e0f2fe" stroke="#0ea5e9" stroke-width="2"/><text x="70" y="35" text-anchor="middle" font-size="13" font-weight="bold" fill="#0c4a6e">غير مباشر</text><text x="70" y="60" text-anchor="middle" font-size="20">👤 → 📧 → 👤</text></g>
          <g transform="translate(360,140)"><rect x="0" y="0" width="140" height="80" rx="10" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/><text x="70" y="35" text-anchor="middle" font-size="13" font-weight="bold" fill="#92400e">متزامن</text><text x="70" y="60" text-anchor="middle" font-size="20">💬 💬</text></g>
          <g transform="translate(520,140)"><rect x="0" y="0" width="140" height="80" rx="10" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/><text x="70" y="35" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e40af">غير متزامن</text><text x="70" y="60" text-anchor="middle" font-size="20">✉️ ⏰ ✉️</text></g>
        </svg>
      `
    }
  ],
  question: "المحادثة والمكالمات الهاتفية تعتبر من نوع الاتصال:",
  options: ["غير مباشر وغير متزامن", "مباشر ومتزامن", "مباشر وغير متزامن"],
  correct: 1
},
{
  id: 10, unit: "الوحدة 6",
  title: "الدرس 1: التناظري والرقمي",
  slides: [
    {
      title: "التناظري والرقمي",
      narration: "الكَمِّيَّةُ التَّناظُرِيَّةُ هِيَ الَّتي تَتَغَيَّرُ تَدْريجِيّاً وَبِشَكْلٍ مُسْتَمِرٍّ وَيُمْكِنُ قِياسُها بِدِقَّةٍ، مِثْلَ الكُتْلَةِ وَالوَقْتِ وَدَرَجَةِ الحَرارَةِ. أَمّا الكَمِّيَّةُ الرَّقَمِيَّةُ فَهِيَ الَّتي تَتَغَيَّرُ في خُطُواتٍ مُحَدَّدَةٍ وَمُنْفَصِلَةٍ وَيَتِمُّ تَمْثيلُها رَقَمِيّاً.",
      detail: "لِنَفْهَمِ الفَرْقَ بِمِثالٍ بَسيطٍ. الميزانُ التَّقْليديُّ الَّذي يُظْهِرُ الوَزْنَ بِإِبْرَةٍ مُتَحَرِّكَةٍ هُوَ تَناظُرِيٌّ. أَمّا الميزانُ الرَّقَمِيُّ الَّذي يُظْهِرُ الوَزْنَ بِأَرْقامٍ فَهُوَ رَقَمِيٌّ. البَياناتُ التَّناظُرِيَّةُ تَتَغَيَّرُ بِاسْتِمْرارٍ، وَالرَّقَمِيَّةُ تَتَغَيَّرُ في خُطُواتٍ.",
      teacher: "التناظري يتغير باستمرار، والرقمي يتغير في خطوات محددة.",
      content: `
        <div class="definition-box">
          <span class="term">📊 التناظري (Analog):</span>
          كميات تتغير تدريجيًا وبشكل مستمر.
        </div>
        <div class="definition-box">
          <span class="term">💻 الرقمي (Digital):</span>
          كميات تتغير في خطوات محددة ومنفصلة.
        </div>
        <div class="slide-text">
          <b>التحويل من تناظري إلى رقمي:</b> A/D conversion<br>
          <b>التحويل من رقمي إلى تناظري:</b> D/A conversion
        </div>
      `,
      illustration: `
        <svg viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(50,30)"><rect x="0" y="0" width="250" height="140" rx="12" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/><text x="125" y="30" text-anchor="middle" font-size="14" font-weight="bold" fill="#92400e">تناظري (Analog)</text><path d="M 20 80 Q 60 40 100 90 T 180 70 T 230 100" stroke="#f59e0b" stroke-width="3" fill="none"/><text x="125" y="125" text-anchor="middle" font-size="11" fill="#92400e">موجة مستمرة</text></g>
          <g transform="translate(380,30)"><rect x="0" y="0" width="250" height="140" rx="12" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/><text x="125" y="30" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e40af">رقمي (Digital)</text><g transform="translate(30,60)"><rect x="0" y="0" width="30" height="30" fill="#3b82f6"/><rect x="40" y="20" width="30" height="10" fill="#3b82f6"/><rect x="80" y="0" width="30" height="30" fill="#3b82f6"/><rect x="120" y="20" width="30" height="10" fill="#3b82f6"/><rect x="160" y="0" width="30" height="30" fill="#3b82f6"/></g><text x="125" y="125" text-anchor="middle" font-size="11" fill="#1e40af">قيم منفصلة 0 و 1</text></g>
        </svg>
      `
    },
    {
      title: "النظام الثنائي والبايت",
      narration: "البِتْ هُوَ أَصْغَرُ وَحْدَةٍ لِلْمَعْلوماتِ، وَيُمَثِّلُ حالَتَيْنِ: صِفْراً أَوْ واحِداً. البايتُ هُوَ وَحْدَةٌ تَتَكَوَّنُ مِنْ ثَمانِيَةِ بِتاتٍ، وَيُمْكِنُ أَنْ يُمَثِّلَ مِئَتَيْنِ وَسِتَّةً وَخَمْسينَ احْتِمالاً.",
      detail: "البِتْ هُوَ أَسَاسُ كُلِّ شَيْءٍ في عالَمِ الحاسوبِ. كُلُّ صُورَةٍ وَكُلُّ أُغْنِيَةٍ وَكُلُّ نَصٍّ في الحاسوبِ هُوَ في النِّهايَةِ سِلْسِلَةٌ مِنَ الأَصْفارِ وَالآحادِ. وَالبايتُ يَتَكَوَّنُ مِنْ ثَمانِيَةِ بِتاتٍ، وَيُمْكِنُهُ تَمْثيلُ حَرْفٍ واحِدٍ أَوْ رَقْمٍ واحِدٍ.",
      teacher: "البت أصغر وحدة، والبايت 8 بتات. وحدات التخزين تتصاعد بـ 1024.",
      content: `
        <div class="definition-box">
          <span class="term">🔢 البت (bit):</span>
          أصغر وحدة للمعلومات، يمثل 0 أو 1.
        </div>
        <div class="definition-box">
          <span class="term">📦 البايت (Byte):</span>
          وحدة تتكون من 8 بتات، وتمثل 256 احتمالاً.
        </div>
        <div class="slide-text">
          <b>وحدات التخزين:</b><br>
          1 KB = 1024 B<br>
          1 MB = 1024 KB<br>
          1 GB = 1024 MB<br>
          1 TB = 1024 GB
        </div>
      `,
      illustration: `
        <svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg">
          <text x="350" y="30" text-anchor="middle" font-size="15" font-weight="bold" fill="#1e40af">وحدات قياس البيانات</text>
          <g transform="translate(50,60)"><rect x="0" y="0" width="120" height="60" rx="10" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/><text x="60" y="35" text-anchor="middle" font-size="20" font-weight="bold" fill="#1e40af">bit</text><text x="60" y="52" text-anchor="middle" font-size="10" fill="#1e40af">0 أو 1</text></g>
          <g transform="translate(200,60)"><rect x="0" y="0" width="120" height="60" rx="10" fill="#d1fae5" stroke="#10b981" stroke-width="2"/><text x="60" y="35" text-anchor="middle" font-size="20" font-weight="bold" fill="#065f46">Byte</text><text x="60" y="52" text-anchor="middle" font-size="10" fill="#065f46">8 bit</text></g>
          <g transform="translate(350,60)"><rect x="0" y="0" width="120" height="60" rx="10" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/><text x="60" y="35" text-anchor="middle" font-size="20" font-weight="bold" fill="#92400e">KB</text><text x="60" y="52" text-anchor="middle" font-size="10" fill="#92400e">1024 B</text></g>
          <g transform="translate(500,60)"><rect x="0" y="0" width="120" height="60" rx="10" fill="#ede9fe" stroke="#8b5cf6" stroke-width="2"/><text x="60" y="35" text-anchor="middle" font-size="20" font-weight="bold" fill="#5b21b6">MB</text><text x="60" y="52" text-anchor="middle" font-size="10" fill="#5b21b6">1024 KB</text></g>
          <text x="350" y="170" text-anchor="middle" font-size="14" font-weight="bold" fill="#475569">كل وحدة = 1024 من الوحدة الأصغر</text>
          <text x="350" y="200" text-anchor="middle" font-size="12" fill="#64748b">1 Byte = 8 bits = 256 احتمال</text>
        </svg>
      `
    },
    {
      title: "النظام السادس عشر",
      narration: "النِّظامُ السّادِسُ عَشَرَ هُوَ طَريقَةٌ لِتَمْثيلِ الأَرْقامِ بِاسْتِخْدامِ الأَرْقامِ مِنْ صِفْرٍ إِلى تِسْعَةٍ وَأَحْرُفِ الأَبْجَدِيَّةِ مِنْ A إِلى F.",
      detail: "النِّظامُ السّادِسُ عَشَرَ يُسْتَخْدَمُ في البَرْمَجَةِ وَتَصْميمِ الأَلْوانِ عَلى المَواقِعِ. فَمَثَلاً اللَّوْنُ الأَحْمَرُ يُرَمَّزُ لَهُ بِـ FF0000. وَهَذا النِّظامُ يُخْتَصَرُ فيهِ الأَرْقامُ الكَبيرَةُ الَّتي كانَتْ سَتَكونُ طَويلَةً في النِّظامِ الثُّنائِيِّ.",
      teacher: "النظام السادس عشر يستخدم 0-9 و A-F لتمثيل الأرقام.",
      content: `
        <div class="definition-box">
          <span class="term">🔢 النظام السادس عشر (Hexadecimal):</span>
          طريقة لتمثيل الأرقام باستخدام 0-9 و A-F.
        </div>
        <div class="slide-text"><b>مثال:</b> A = 10، B = 11، C = 12، D = 13، E = 14، F = 15</div>
      `,
      illustration: `
        <svg viewBox="0 0 700 200" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(50,40)">
            <text x="0" y="0" font-size="14" font-weight="bold" fill="#1e40af">عشري:</text>
            <text x="80" y="0" font-size="14" fill="#1e40af">10</text>
            <text x="130" y="0" font-size="14" fill="#1e40af">11</text>
            <text x="180" y="0" font-size="14" fill="#1e40af">12</text>
            <text x="230" y="0" font-size="14" fill="#1e40af">13</text>
            <text x="280" y="0" font-size="14" fill="#1e40af">14</text>
            <text x="330" y="0" font-size="14" fill="#1e40af">15</text>
            <text x="0" y="40" font-size="14" font-weight="bold" fill="#065f46">سداسي:</text>
            <text x="80" y="40" font-size="14" font-weight="bold" fill="#065f46">A</text>
            <text x="130" y="40" font-size="14" font-weight="bold" fill="#065f46">B</text>
            <text x="180" y="40" font-size="14" font-weight="bold" fill="#065f46">C</text>
            <text x="230" y="40" font-size="14" font-weight="bold" fill="#065f46">D</text>
            <text x="280" y="40" font-size="14" font-weight="bold" fill="#065f46">E</text>
            <text x="330" y="40" font-size="14" font-weight="bold" fill="#065f46">F</text>
          </g>
          <text x="350" y="140" text-anchor="middle" font-size="14" font-weight="bold" fill="#475569">التحويل بين النظام العشري والسادس عشر</text>
          <text x="350" y="170" text-anchor="middle" font-size="12" fill="#64748b">A5 = 165 في النظام العشري</text>
        </svg>
      `
    }
  ],
  question: "كم بت في البايت الواحد؟",
  options: ["4 بتات", "8 بتات", "16 بتة"],
  correct: 1
},
{
  id: 11, unit: "الوحدة 7",
  title: "الدرس 1: مكونات الحاسوب",
  slides: [
    {
      title: "المكونات الخمسة الرئيسية",
      narration: "يَتَكَوَّنُ الكَمْبيوتَرُ مِنْ خَمْسَةِ مُكَوِّناتٍ رَئيسِيَّةٍ: وَحْدَةِ التَّحَكُّمِ، وَوَحْدَةِ الحِسابِ وَالمَنْطِقِ، وَوَحْدَةِ التَّخْزينِ، وَوَحْدَةِ الإِدْخالِ، وَوَحْدَةِ الإِخْراجِ.",
      detail: "هَذِهِ المُكَوِّناتُ الخَمْسَةُ تَعْمَلُ مَعاً بِتَكامُلٍ. وَحْدَةُ الإِدْخالِ تَسْتَقْبِلُ البَياناتَ، وَوَحْدَةُ التَّحَكُّمِ تُوَجِّهُ العَمَلِيَّاتِ، وَوَحْدَةُ الحِسابِ تُجْري العَمَلِيّاتِ الحِسابِيَّةَ، وَوَحْدَةُ التَّخْزينِ تَحْفَظُ البَياناتَ، وَوَحْدَةُ الإِخْراجِ تُظْهِرُ النَّتائِجَ.",
      teacher: "مكونات الحاسوب الخمسة: التحكم، الحساب، التخزين، الإدخال، الإخراج.",
      content: `
        <div class="definition-box">
          <span class="term">🖥️ المكونات الخمسة:</span>
        </div>
        <ul class="slide-list">
          <li><b>وحدة التحكم (CU):</b> تنفذ التعليمات وتصدر الأوامر.</li>
          <li><b>وحدة الحساب والمنطق (ALU):</b> تؤدي الحسابات.</li>
          <li><b>وحدة التخزين:</b> تخزن البرامج والبيانات.</li>
          <li><b>وحدة الإدخال:</b> تدخل البيانات من الخارج.</li>
          <li><b>وحدة الإخراج:</b> تخرج المعلومات للخارج.</li>
        </ul>
        <div class="slide-text">تُشار وحدة التحكم ووحدة الحساب معًا باسم <b>المعالج (CPU)</b>.</div>
      `,
      illustration: `
        <svg viewBox="0 0 700 280" xmlns="http://www.w3.org/2000/svg">
          <rect x="200" y="20" width="300" height="100" rx="12" fill="#dbeafe" stroke="#3b82f6" stroke-width="3"/>
          <text x="350" y="45" text-anchor="middle" font-size="16" font-weight="bold" fill="#1e40af">CPU</text>
          <rect x="220" y="55" width="120" height="45" rx="8" fill="#3b82f6"/>
          <text x="280" y="83" text-anchor="middle" font-size="12" fill="#fff">وحدة التحكم</text>
          <rect x="360" y="55" width="120" height="45" rx="8" fill="#3b82f6"/>
          <text x="420" y="83" text-anchor="middle" font-size="12" fill="#fff">وحدة الحساب</text>
          <g transform="translate(50,160)"><rect x="0" y="0" width="140" height="60" rx="10" fill="#d1fae5" stroke="#10b981" stroke-width="2"/><text x="70" y="35" text-anchor="middle" font-size="13" font-weight="bold" fill="#065f46">وحدة الإدخال</text></g>
          <g transform="translate(510,160)"><rect x="0" y="0" width="140" height="60" rx="10" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/><text x="70" y="35" text-anchor="middle" font-size="13" font-weight="bold" fill="#92400e">وحدة الإخراج</text></g>
          <g transform="translate(280,160)"><rect x="0" y="0" width="140" height="60" rx="10" fill="#ede9fe" stroke="#8b5cf6" stroke-width="2"/><text x="70" y="35" text-anchor="middle" font-size="13" font-weight="bold" fill="#5b21b6">وحدة التخزين</text></g>
          <line x1="190" y1="190" x2="280" y2="190" stroke="#64748b" stroke-width="2"/>
          <line x1="420" y1="190" x2="510" y2="190" stroke="#64748b" stroke-width="2"/>
          <line x1="350" y1="120" x2="350" y2="160" stroke="#64748b" stroke-width="2"/>
          <text x="350" y="250" text-anchor="middle" font-size="14" font-weight="bold" fill="#475569">مكونات الحاسوب الخمسة</text>
        </svg>
      `
    },
    {
      title: "البرمجيات",
      narration: "البَرْمَجِيّاتُ هِيَ البَرامِجُ وَالبَياناتُ الَّتي تَعْمَلُ عَلى العَتادِ، وَتَنْقَسِمُ إِلى بَرْمَجِيّاتِ النِّظامِ مِثْلَ نِظامِ التَّشْغيلِ، وَبَرامِجِ التَّطْبيقِ مِثْلَ بَرامِجِ مُعالَجَةِ النُّصوصِ وَالجَداوِلِ، وَبَرامِجِ تَشْغيلِ الأَجْهِزَةِ.",
      detail: "العَتادُ (Hardware) هُوَ المادِّيُّ، وَالبَرْمَجِيّاتُ (Software) هِيَ الرُّوحيَّةُ. وَبِدونِ بَرْمَجِيّاتٍ، يَبْقى العَتادُ قِطْعَةً صَمّاءَ لا تَعْمَلُ. نِظامُ التَّشْغيلِ مِثْلَ Windows أَوْ macOS هُوَ أَهَمُّ بَرْمَجِيّاتِ النِّظامِ.",
      teacher: "البرمجيات تنقسم إلى: نظام (مثل OS) وتطبيقات وتشغيل أجهزة.",
      content: `
        <ul class="slide-list">
          <li><b>برمجيات النظام:</b> البرامج اللازمة لتشغيل العتاد.</li>
          <li><b>نظام التشغيل (OS):</b> إدارة المهام والذاكرة والملفات.</li>
          <li><b>برنامج التطبيق:</b> معالجة نصوص، جداول، إلخ.</li>
          <li><b>برنامج تشغيل الجهاز:</b> التحكم في الأجهزة المتصلة.</li>
        </ul>
        <div class="slide-text"><b>أمثلة:</b> Windows, macOS, Android OS</div>
      `,
      illustration: `
        <svg viewBox="0 0 700 260" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(50,30)"><rect x="0" y="0" width="180" height="180" rx="12" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/><text x="90" y="35" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e40af">برمجيات النظام</text><rect x="20" y="60" width="140" height="40" rx="8" fill="#3b82f6"/><text x="90" y="85" text-anchor="middle" font-size="12" fill="#fff">نظام التشغيل</text><text x="90" y="125" text-anchor="middle" font-size="11" fill="#1e40af">Windows</text><text x="90" y="145" text-anchor="middle" font-size="11" fill="#1e40af">macOS</text><text x="90" y="165" text-anchor="middle" font-size="11" fill="#1e40af">Android</text></g>
          <g transform="translate(260,30)"><rect x="0" y="0" width="180" height="180" rx="12" fill="#d1fae5" stroke="#10b981" stroke-width="2"/><text x="90" y="35" text-anchor="middle" font-size="14" font-weight="bold" fill="#065f46">برامج التطبيق</text><text x="90" y="90" text-anchor="middle" font-size="40">📝</text><text x="90" y="130" text-anchor="middle" font-size="11" fill="#065f46">معالجة نصوص</text><text x="90" y="155" text-anchor="middle" font-size="11" fill="#065f46">جداول حسابية</text></g>
          <g transform="translate(470,30)"><rect x="0" y="0" width="180" height="180" rx="12" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/><text x="90" y="35" text-anchor="middle" font-size="14" font-weight="bold" fill="#92400e">تشغيل الأجهزة</text><text x="90" y="90" text-anchor="middle" font-size="40">🖨️</text><text x="90" y="130" text-anchor="middle" font-size="11" fill="#92400e">Drivers</text><text x="90" y="155" text-anchor="middle" font-size="11" fill="#92400e">برامج التعريف</text></g>
        </svg>
      `
    },
    {
      title: "الدوائر المنطقية",
      narration: "الدّائِرَةُ المَنْطِقِيَّةُ هِيَ دائِرَةٌ مُصَمَّمَةٌ لِأَداءِ عَمَلِيّاتٍ مَنْطِقِيَّةٍ. البَوّابَةُ AND تُخْرِجُ 1 فَقَطْ عِنْدَما تَكونُ جَميعُ المُدْخَلاتِ 1. البَوّابَةُ OR تُخْرِجُ 1 إِذا كانَ هُناكَ عَلى الأَقَلِّ مُدْخَلٌ واحِدٌ 1. البَوّابَةُ NOT تُخْرِجُ النَّتيجَةَ المُعاكِسَةَ لِلْمُدْخَلِ.",
      detail: "الدَّوائِرُ المَنْطِقِيَّةُ هِيَ أَساسُ عَمَلِ المَعْالِجاتِ في الكَمْبيوتَرِ. وَتَعْمَلُ بِمَنْطِقِ الصِّفْرِ وَالواحِدِ فَقَطْ. وَمِنْ خِلالِ تَرْكيبِ عَدَدٍ كَبيرٍ مِنْها، يُمْكِنُ بِناءُ مُعالِجاتٍ قَوِيَّةٍ تُجْري مِلايينَ العَمَلِيّاتِ في الثّانِيَةِ.",
      teacher: "البوابات المنطقية: AND، OR، NOT.",
      content: `
        <ul class="slide-list">
          <li><b>بوابة AND:</b> تخرج 1 فقط عندما تكون جميع المدخلات 1.</li>
          <li><b>بوابة OR:</b> تخرج 1 إذا كان هناك على الأقل مدخل واحد 1.</li>
          <li><b>بوابة NOT:</b> تخرج النتيجة المعاكسة للمدخل.</li>
        </ul>
      `,
      illustration: `
        <svg viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(40,50)"><text x="30" y="30" font-size="14" font-weight="bold" fill="#1e40af">AND</text><path d="M 20 50 L 60 50 L 60 90 L 20 90 Z" stroke="#3b82f6" stroke-width="2" fill="#dbeafe"/><path d="M 60 50 Q 90 70 60 90" stroke="#3b82f6" stroke-width="2" fill="#dbeafe"/><text x="0" y="65" font-size="12" fill="#1e40af">A</text><text x="0" y="85" font-size="12" fill="#1e40af">B</text><text x="100" y="75" font-size="12" fill="#1e40af">X</text></g>
          <g transform="translate(260,50)"><text x="30" y="30" font-size="14" font-weight="bold" fill="#065f46">OR</text><path d="M 20 50 Q 50 50 50 70 Q 50 90 20 90 Q 40 70 20 50 Z" stroke="#10b981" stroke-width="2" fill="#d1fae5"/><text x="0" y="65" font-size="12" fill="#065f46">A</text><text x="0" y="85" font-size="12" fill="#065f46">B</text><text x="90" y="75" font-size="12" fill="#065f46">X</text></g>
          <g transform="translate(480,50)"><text x="30" y="30" font-size="14" font-weight="bold" fill="#92400e">NOT</text><polygon points="20,50 20,90 70,70" stroke="#f59e0b" stroke-width="2" fill="#fef3c7"/><circle cx="75" cy="70" r="5" fill="#f59e0b"/><text x="0" y="75" font-size="12" fill="#92400e">A</text><text x="95" y="75" font-size="12" fill="#92400e">X</text></g>
        </svg>
      `
    }
  ],
  question: "أي بوابة منطقية تخرج 1 فقط عندما تكون جميع المدخلات 1؟",
  options: ["OR", "AND", "NOT"],
  correct: 1
},
{
  id: 12, unit: "الوحدة 9",
  title: "الدرس 1: قواعد البيانات",
  slides: [
    {
      title: "نظام إدارة قواعد البيانات",
      narration: "قاعِدَةُ البَياناتِ هِيَ مَجْموعَةٌ مُنَظَّمَةٌ مِنَ البَياناتِ، مُنَظَّمَةٌ وَمُخَزَّنَةٌ بِشَكْلٍ يُسَهِّلُ الوُصولَ إِلَيْها لِأَغْراضٍ مُحَدَّدَةٍ. وَنِظامُ إِدارَةِ قَواعِدِ البَياناتِ هُوَ نِظامٌ يُنْشِئُ وَيُشَغِّلُ وَيُديرُ قَواعِدَ البَياناتِ.",
      detail: "تَخَيَّلْ دَفْتَرَ عُنْوانٍ في هاتِفِكَ. هَذا في الحَقيقَةِ قاعِدَةُ بَياناتٍ بَسيطَةٌ. الشَّرِكاتُ الكَبيرَةُ تَحْتاجُ قَواعِدَ بَياناتٍ أَكْبَرَ بِكَثيرٍ لِتَخْزينِ بَياناتِ العُمَلاءِ وَالمُنْتَجاتِ وَالمُعامَلاتِ. وَنِظامُ الإِدارَةِ يُسَهِّلُ العَمَلَ عَلى هَذِهِ القَواعِدِ.",
      teacher: "قاعدة البيانات مجموعة منظمة من البيانات، وDBMS يديرها.",
      content: `
        <div class="definition-box">
          <span class="term">🗄️ قاعدة البيانات (Database):</span>
          مجموعة منظمة من البيانات مخزنة بشكل يسهل الوصول إليها.
        </div>
        <div class="definition-box">
          <span class="term">⚙️ نظام إدارة قواعد البيانات (DBMS):</span>
          نظام ينشئ ويشغل ويدير قواعد البيانات.
        </div>
      `,
      illustration: `
        <svg viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(100,40)"><ellipse cx="100" cy="30" rx="100" ry="25" fill="#3b82f6"/><rect x="0" y="30" width="200" height="100" fill="#3b82f6"/><ellipse cx="100" cy="130" rx="100" ry="25" fill="#3b82f6"/><text x="100" y="90" text-anchor="middle" font-size="40" fill="#fff">🗄️</text></g>
          <g transform="translate(400,60)"><circle cx="80" cy="60" r="60" fill="#10b981"/><text x="80" y="75" text-anchor="middle" font-size="50" fill="#fff">⚙️</text><text x="80" y="140" text-anchor="middle" font-size="13" font-weight="bold" fill="#065f46">DBMS</text></g>
        </svg>
      `
    },
    {
      title: "وظائف نظام إدارة قواعد البيانات",
      narration: "لِنِظامِ إِدارَةِ قَواعِدِ البَياناتِ خَمْسُ وَظائِفَ رَئيسِيَّةٍ: تَناسُقُ البَياناتِ، وَتَكامُلُ البَياناتِ، وَاسْتِقْلالِيَّةُ البَياناتِ، وَسِرِّيَّةُ البَياناتِ، وَتَوافُرُ البَياناتِ.",
      detail: "كُلُّ وَظيفَةٍ مِنْ هَذِهِ الوَظائِفِ تُحِلُّ مُشْكِلَةً مُعَيَّنَةً. تَناسُقُ البَياناتِ يَمْنَعُ التَّناقُضاتِ، وَتَكامُلُ البَياناتِ يَحْمي مِنَ التَّلاعُبِ، وَاسْتِقْلالِيَّةُ البَياناتِ تُفْصِلُ البَياناتَ عَنِ البَرامِجِ، وَالسِّرِّيَّةُ تَحْمي مِنَ الوُصولِ غَيْرِ المُصَرَّحِ، وَالتَّوافُرُ يَضْمَنُ بَقاءَ النِّظامِ يَعْمَلُ.",
      teacher: "خمس وظائف: التناسق، التكامل، الاستقلالية، السرية، التوافر.",
      content: `
        <ul class="slide-list">
          <li><b>تناسق البيانات:</b> منع التناقضات في العمليات المتزامنة.</li>
          <li><b>تكامل البيانات:</b> منع التكرار والعبث.</li>
          <li><b>استقلالية البيانات:</b> فصل البيانات عن البرامج.</li>
          <li><b>سرية البيانات:</b> أذونات الوصول والمصادقة.</li>
          <li><b>توافر البيانات:</b> النسخ الاحتياطي والاستعادة.</li>
        </ul>
      `,
      illustration: `
        <svg viewBox="0 0 700 260" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(30,40)"><circle cx="50" cy="50" r="45" fill="#3b82f6"/><text x="50" y="65" text-anchor="middle" font-size="40">🔄</text><text x="50" y="120" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">تناسق</text></g>
          <g transform="translate(160,40)"><circle cx="50" cy="50" r="45" fill="#10b981"/><text x="50" y="65" text-anchor="middle" font-size="40">✅</text><text x="50" y="120" text-anchor="middle" font-size="11" font-weight="bold" fill="#065f46">تكامل</text></g>
          <g transform="translate(290,40)"><circle cx="50" cy="50" r="45" fill="#f59e0b"/><text x="50" y="65" text-anchor="middle" font-size="40">📦</text><text x="50" y="120" text-anchor="middle" font-size="11" font-weight="bold" fill="#92400e">استقلالية</text></g>
          <g transform="translate(420,40)"><circle cx="50" cy="50" r="45" fill="#8b5cf6"/><text x="50" y="65" text-anchor="middle" font-size="40">🔐</text><text x="50" y="120" text-anchor="middle" font-size="11" font-weight="bold" fill="#5b21b6">سرية</text></g>
          <g transform="translate(550,40)"><circle cx="50" cy="50" r="45" fill="#ef4444"/><text x="50" y="65" text-anchor="middle" font-size="40">💾</text><text x="50" y="120" text-anchor="middle" font-size="11" font-weight="bold" fill="#991b1b">توافر</text></g>
        </svg>
      `
    },
    {
      title: "قاعدة البيانات العلائقية",
      narration: "قاعِدَةُ البَياناتِ العَلائِقِيَّةُ هِيَ قاعِدَةُ بَياناتٍ يَتِمُّ فيها تَنْظيمُ البَياناتِ عَبْرَ جَداوِلَ مُتَعَدِّدَةٍ مُرْتَبِطَةٍ بِبَعْضِها. الجَدْوَلُ يَتَكَوَّنُ مِنْ صُفوفٍ (سِجِلّاتٍ) وَأَعْمِدَةٍ (حُقولٍ). وَعَمَلِيّاتُ الجَبْرِ العَلائِقِيِّ هِيَ: الانْتِقاءُ، وَالعَرْضُ، وَالرَّبْطُ.",
      detail: "القَواعِدُ العَلائِقِيَّةُ هِيَ الأَكْثَرُ اسْتِخْداماً في العالَمِ اليَوْمَ. فَمَثَلاً قاعِدَةُ بَياناتِ مَدْرَسَةٍ قَدْ تَحْتَوي عَلى جَدْوَلٍ لِلطُّلّابِ وَآخَرَ لِلْمُعَلِّمينَ وَثالِثٍ لِلْحِصَصِ. وَيُمْكِنُ رَبْطُ هَذِهِ الجَداوِلِ لِلْحُصولِ عَلى مَعْلوماتٍ مُفيدَةٍ.",
      teacher: "قاعدة البيانات العلائقية تنظم البيانات في جداول مترابطة.",
      content: `
        <div class="definition-box">
          <span class="term">📋 قاعدة البيانات العلائقية (RDB):</span>
          جداول متعددة مرتبطة ببعضها.
        </div>
        <ul class="slide-list">
          <li><b>الجدول:</b> صفوف (سجلات) وأعمدة (حقول).</li>
          <li><b>الانتقاء:</b> استخراج صفوف بشروط معينة.</li>
          <li><b>العرض:</b> عرض أعمدة معينة فقط.</li>
          <li><b>الربط:</b> ربط جداول متعددة.</li>
          <li><b>SQL:</b> لغة الاستعلام الهيكلية.</li>
        </ul>
      `,
      illustration: `
        <svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(40,30)"><rect x="0" y="0" width="180" height="150" rx="8" fill="#fff" stroke="#3b82f6" stroke-width="2"/><rect x="0" y="0" width="180" height="35" fill="#3b82f6"/><text x="90" y="23" text-anchor="middle" font-size="12" fill="#fff" font-weight="bold">جدول الطلاب</text><line x1="0" y1="35" x2="180" y2="35" stroke="#e2e8f0"/><text x="30" y="55" text-anchor="middle" font-size="10" fill="#1e40af">الرمز</text><text x="90" y="55" text-anchor="middle" font-size="10" fill="#1e40af">الاسم</text><text x="150" y="55" text-anchor="middle" font-size="10" fill="#1e40af">النادي</text><text x="30" y="80" text-anchor="middle" font-size="10" fill="#64748b">S01</text><text x="90" y="80" text-anchor="middle" font-size="10" fill="#64748b">عادل</text><text x="150" y="80" text-anchor="middle" font-size="10" fill="#64748b">C1</text><text x="30" y="105" text-anchor="middle" font-size="10" fill="#64748b">S02</text><text x="90" y="105" text-anchor="middle" font-size="10" fill="#64748b">آدم</text><text x="150" y="105" text-anchor="middle" font-size="10" fill="#64748b">C2</text></g>
          <g transform="translate(280,50)"><rect x="0" y="0" width="140" height="110" rx="8" fill="#fff" stroke="#10b981" stroke-width="2"/><rect x="0" y="0" width="140" height="35" fill="#10b981"/><text x="70" y="23" text-anchor="middle" font-size="12" fill="#fff" font-weight="bold">جدول الأندية</text><text x="70" y="55" text-anchor="middle" font-size="10" fill="#065f46">C1: نادي السباحة</text><text x="70" y="80" text-anchor="middle" font-size="10" fill="#065f46">C2: نادي التنس</text></g>
          <path d="M 230 105 L 270 105" stroke="#ef4444" stroke-width="2" stroke-dasharray="4"/>
        </svg>
      `
    }
  ],
  question: "أي عملية من عمليات الجبر العلائقي تستخرج الصفوف التي تستوفي شروطًا معينة؟",
  options: ["العرض", "الربط", "الانتقاء"],
  correct: 2
},
{
  id: 13, unit: "الوحدة 10",
  title: "الدرس 1: تحليل البيانات",
  slides: [
    {
      title: "أنواع البيانات",
      narration: "تَنْقَسِمُ البَياناتُ إِلى نَوْعَيْنِ: البَياناتُ النَّوْعِيَّةُ وَهِيَ الَّتي تَصِفُ الصِّفاتِ أَوِ الخَصائِصَ، وَالبَياناتُ الكَمِّيَّةُ وَهِيَ البَياناتُ الرَّقَمِيَّةُ الَّتي يُمْكِنُ قِياسُها.",
      detail: "البَياناتُ النَّوْعِيَّةُ مِثْلُ الجِنْسِ وَلَوْنِ العَيْنِ، وَلا يُمْكِنُ إِجْراءُ عَمَلِيّاتٍ حِسابِيَّةٍ عَلَيْها. أَمّا البَياناتُ الكَمِّيَّةُ مِثْلُ الطّولِ وَالوَزْنِ وَالعُمْرِ، فَيُمْكِنُ إِجْراءُ حِساباتٍ عَلَيْها.",
      teacher: "نوعان: نوعية (صفات) وكمية (أرقام).",
      content: `
        <ul class="slide-list">
          <li><b>البيانات النوعية:</b> تصف الصفات.
            <br>• اسمية (الجنس، اللون).
            <br>• ترتيبية (مستوى التعليم).</li>
          <li><b>البيانات الكمية:</b> أرقام قابلة للقياس.
            <br>• فاصلة (درجة الحرارة).
            <br>• نسبية (الطول، الوزن).</li>
        </ul>
      `,
      illustration: `
        <svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(50,30)"><rect x="0" y="0" width="280" height="180" rx="12" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/><text x="140" y="30" text-anchor="middle" font-size="14" font-weight="bold" fill="#92400e">بيانات نوعية</text><rect x="20" y="50" width="110" height="50" rx="8" fill="#fff"/><text x="75" y="70" text-anchor="middle" font-size="11" font-weight="bold" fill="#92400e">اسمية</text><text x="75" y="90" text-anchor="middle" font-size="10" fill="#92400e">الجنس</text><rect x="150" y="50" width="110" height="50" rx="8" fill="#fff"/><text x="205" y="70" text-anchor="middle" font-size="11" font-weight="bold" fill="#92400e">ترتيبية</text><text x="205" y="90" text-anchor="middle" font-size="10" fill="#92400e">مستوى التعليم</text></g>
          <g transform="translate(370,30)"><rect x="0" y="0" width="280" height="180" rx="12" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/><text x="140" y="30" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e40af">بيانات كمية</text><rect x="20" y="50" width="110" height="50" rx="8" fill="#fff"/><text x="75" y="70" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">فاصلة</text><text x="75" y="90" text-anchor="middle" font-size="10" fill="#1e40af">الحرارة</text><rect x="150" y="50" width="110" height="50" rx="8" fill="#fff"/><text x="205" y="70" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">نسبية</text><text x="205" y="90" text-anchor="middle" font-size="10" fill="#1e40af">الطول، الوزن</text></g>
        </svg>
      `
    },
    {
      title: "مقاييس النزعة المركزية",
      narration: "مَقاييسُ النَّزْعَةِ المَرْكَزِيَّةِ هِيَ قيمَةٌ رَقَمِيَّةٌ واحِدَةٌ تُمَثِّلُ خاصِّيَّةَ مَجْموعَةِ البَياناتِ، وَتَشْمَلُ المُتَوَسِّطَ وَالوَسِيطَ وَالمِنْوالَ.",
      detail: "لِنَفْهَمْ الفَرْقَ. المُتَوَسِّطُ هُوَ مَجْموعُ القِيَمِ مَقْسوماً عَلى عَدَدِها. الوَسِيطُ هُوَ القيمَةُ الوُسْطى بَعْدَ تَرْتيبِ البَياناتِ. المِنْوالُ هُوَ القيمَةُ الأَكْثَرُ تَكْراراً. كُلُّ واحِدٍ لَهُ اسْتِخْداماتُهُ.",
      teacher: "المتوسط والوسيط والمنوال.",
      content: `
        <ul class="slide-list">
          <li><b>المتوسط:</b> مجموع البيانات ÷ عددها. الدالة: AVERAGE</li>
          <li><b>الوسيط:</b> القيمة المركزية. الدالة: MEDIAN</li>
          <li><b>المنوال:</b> أكثر القيم تكرارًا. الدالة: MODE</li>
        </ul>
      `,
      illustration: `
        <svg viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(50,50)"><circle cx="60" cy="50" r="45" fill="#3b82f6"/><text x="60" y="65" text-anchor="middle" font-size="40" fill="#fff">X̄</text><text x="60" y="120" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e40af">المتوسط</text></g>
          <g transform="translate(280,50)"><circle cx="60" cy="50" r="45" fill="#10b981"/><text x="60" y="65" text-anchor="middle" font-size="40" fill="#fff">M</text><text x="60" y="120" text-anchor="middle" font-size="13" font-weight="bold" fill="#065f46">الوسيط</text></g>
          <g transform="translate(510,50)"><circle cx="60" cy="50" r="45" fill="#f59e0b"/><text x="60" y="65" text-anchor="middle" font-size="40" fill="#fff">Mo</text><text x="60" y="120" text-anchor="middle" font-size="13" font-weight="bold" fill="#92400e">المنوال</text></g>
        </svg>
      `
    },
    {
      title: "الرباعيات ومخطط الصندوق والشارب",
      narration: "الرَّباعِيّاتُ هِيَ الأَرْقامُ الَّتي تَقْسِمُ البَياناتِ إِلى أَرْبَعَةِ أَجْزاءٍ مُتَساوِيَةٍ. الرَّباعيُّ الأَوَّلُ هُوَ الوَسِيطُ لِلنِّصْفِ الأَصْغَرِ، وَالرَّباعيُّ الثّاني هُوَ الوَسِيطُ، وَالرَّباعيُّ الثّالِثُ هُوَ الوَسِيطُ لِلنِّصْفِ الأَكْبَرِ. وَمُخَطَّطُ الصُّنْدوقِ وَالشّارِبِ هُوَ شَكْلٌ يُسْتَخْدَمُ لِتَمْثيلِ هَذِهِ القِيَمِ.",
      detail: "مُخَطَّطُ الصُّنْدوقِ وَالشّارِبِ يُسْتَخْدَمُ كَثيراً في الإِحْصاءِ لِتَوْضيحِ تَوَزُّعِ البَياناتِ بِشَكْلٍ بَصَرِيٍّ. يُظْهِرُ القيمَةَ الدُّنْيا وَالرَّباعِيّاتِ الثَّلاثَ وَالقيمَةَ العُظْمى.",
      teacher: "الرباعيات تقسم البيانات إلى أربعة أجزاء متساوية.",
      content: `
        <div class="definition-box">
          <span class="term">📦 الرباعيات (Quartiles):</span>
          الأرقام التي تقسم البيانات إلى أربعة أجزاء متساوية.
        </div>
        <ul class="slide-list">
          <li><b>الرباعي الأول (Q1):</b> الوسيط للنصف الأصغر.</li>
          <li><b>الرباعي الثاني (Q2):</b> الوسيط.</li>
          <li><b>الرباعي الثالث (Q3):</b> الوسيط للنصف الأكبر.</li>
        </ul>
      `,
      illustration: `
        <svg viewBox="0 0 700 200" xmlns="http://www.w3.org/2000/svg">
          <line x1="50" y1="100" x2="650" y2="100" stroke="#475569" stroke-width="2"/>
          <line x1="100" y1="70" x2="100" y2="130" stroke="#ef4444" stroke-width="3"/>
          <line x1="200" y1="70" x2="200" y2="130" stroke="#3b82f6" stroke-width="3"/>
          <rect x="200" y="70" width="200" height="60" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
          <line x1="300" y1="70" x2="300" y2="130" stroke="#8b5cf6" stroke-width="3"/>
          <line x1="400" y1="70" x2="400" y2="130" stroke="#3b82f6" stroke-width="3"/>
          <line x1="500" y1="70" x2="500" y2="130" stroke="#10b981" stroke-width="3"/>
          <text x="100" y="160" text-anchor="middle" font-size="10" font-weight="bold" fill="#ef4444">الدنيا</text>
          <text x="200" y="160" text-anchor="middle" font-size="10" font-weight="bold" fill="#3b82f6">Q1</text>
          <text x="300" y="160" text-anchor="middle" font-size="10" font-weight="bold" fill="#8b5cf6">Q2</text>
          <text x="400" y="160" text-anchor="middle" font-size="10" font-weight="bold" fill="#3b82f6">Q3</text>
          <text x="500" y="160" text-anchor="middle" font-size="10" font-weight="bold" fill="#10b981">العظمى</text>
        </svg>
      `
    }
  ],
  question: "ما القيمة التي تمثل أكثر البيانات تكرارًا؟",
  options: ["المتوسط", "الوسيط", "المنوال"],
  correct: 2
},
{
  id: 14, unit: "الوحدة 12",
  title: "الدرس 1: الخوارزميات والبرمجة",
  slides: [
    {
      title: "مفهوم الخوارزميات",
      narration: "الخَوارِزْمِيَّةُ هِيَ طَريقَةٌ أَوْ إِجْراءٌ لِحَلِّ مُشْكِلَةٍ مُعَيَّنَةٍ. وَيُمْكِنُ تَمْثيلُها بِاسْتِخْدامِ المُخَطَّطاتِ الانْسِيابِيَّةِ أَوْ مُخَطَّطاتِ النَّشاطِ.",
      detail: "الخَوارِزْمِيَّةُ مِثْلُ وُصْفَةِ طَبْخٍ. فَهيَ سِلْسِلَةٌ مِنَ الخُطُواتِ المُحَدَّدَةِ لِحَلِّ مُشْكِلَةٍ. المُخَطَّطُ الانْسِيابِيُّ يُوَضِّحُ هَذِهِ الخُطُواتِ بِشَكْلٍ بَصَرِيٍّ يُسَهِّلُ فَهْمَها.",
      teacher: "الخوارزمية هي طريقة لحل مشكلة، وتمثل بالمخططات.",
      content: `
        <div class="definition-box">
          <span class="term">🧮 الخوارزمية (Algorithm):</span>
          طريقة أو إجراء لحل مشكلة معينة.
        </div>
        <div class="slide-text"><b>المخطط الانسيابي:</b> توضيح تدفق عملية واحدة.</div>
        <div class="slide-text"><b>مخطط النشاط:</b> تمثيل العمليات المتوازية.</div>
      `,
      illustration: `
        <svg viewBox="0 0 700 260" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(50,20)">
            <ellipse cx="80" cy="20" rx="80" ry="15" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
            <text x="80" y="25" text-anchor="middle" font-size="11" fill="#1e40af">البداية</text>
            <line x1="80" y1="35" x2="80" y2="60" stroke="#475569" stroke-width="2"/>
            <polygon points="80,60 140,80 80,100 20,80" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
            <text x="80" y="85" text-anchor="middle" font-size="10" fill="#92400e">هل الشمس ساطعة؟</text>
            <line x1="80" y1="100" x2="80" y2="130" stroke="#475569" stroke-width="2"/>
            <line x1="140" y1="80" x2="180" y2="80" stroke="#475569" stroke-width="2"/>
            <rect x="180" y="65" width="120" height="30" rx="5" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
            <text x="240" y="85" text-anchor="middle" font-size="10" fill="#1e40af">خذ مظلة</text>
            <ellipse cx="80" cy="150" rx="80" ry="15" fill="#d1fae5" stroke="#10b981" stroke-width="2"/>
            <text x="80" y="155" text-anchor="middle" font-size="11" fill="#065f46">النهاية</text>
          </g>
          <text x="500" y="150" text-anchor="middle" font-size="14" font-weight="bold" fill="#475569">مثال على مخطط انسيابي</text>
        </svg>
      `
    },
    {
      title: "المتغيرات والعمليات الحسابية",
      narration: "المُتَغَيِّرُ هُوَ مِثْلُ مُرَبَّعٍ لِتَخْزينِ البَياناتِ. المُعامِلُ الحِسابِيُّ هُوَ رَمْزٌ مِثْلُ زائِدٍ وَناقِصٍ يُسْتَخْدَمُ في العَمَلِيّاتِ الحِسابِيَّةِ. وَلُغَةُ بايثون هِيَ لُغَةٌ تُسْتَخْدَمُ في مَجالاتٍ مِثْلَ الذَّكاءِ الاصْطِناعيِّ وَالإِحْصاءِ.",
      detail: "المُتَغَيِّرُ هُوَ عُلْبَةٌ نُخَزِّنُ فيها قيمَةً. في بايثون يُمْكِنُ كِتابَةُ: x = 5 وَتَكونُ القيمَةُ 5 مَحْفوظَةً داخِلَ x. وَيُمْكِنُ التَّعْديلُ عَلَيْها لاحِقاً.",
      teacher: "المتغير مثل مربع للتخزين. بايثون لغة قوية للذكاء الاصطناعي.",
      content: `
        <div class="definition-box">
          <span class="term">📦 المتغير (Variable):</span>
          مثل مربع لتخزين البيانات.
        </div>
        <ul class="slide-list">
          <li><b>+:</b> الجمع &nbsp;&nbsp; <b>-:</b> الطرح</li>
          <li><b>*:</b> الضرب &nbsp;&nbsp; <b>/:</b> القسمة</li>
          <li><b>//:</b> حاصل القسمة</li>
          <li><b>%:</b> باقي القسمة</li>
          <li><b>**:</b> الأس</li>
        </ul>
      `,
      illustration: `
        <svg viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(50,40)"><rect x="0" y="0" width="160" height="60" rx="8" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/><text x="80" y="30" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e40af">المتغير</text><text x="80" y="50" text-anchor="middle" font-size="11" fill="#1e40af">city = "Cairo"</text></g>
          <text x="250" y="80" text-anchor="middle" font-size="30" fill="#8b5cf6">→</text>
          <g transform="translate(290,40)"><rect x="0" y="0" width="160" height="60" rx="8" fill="#d1fae5" stroke="#10b981" stroke-width="2"/><text x="80" y="30" text-anchor="middle" font-size="12" font-weight="bold" fill="#065f46">القيمة</text><text x="80" y="50" text-anchor="middle" font-size="11" fill="#065f46">Cairo</text></g>
          <g transform="translate(480,30)"><rect x="0" y="0" width="180" height="80" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/><text x="90" y="25" text-anchor="middle" font-size="12" font-weight="bold" fill="#92400e">العمليات</text><text x="90" y="50" text-anchor="middle" font-size="11" fill="#92400e">+ - * /</text><text x="90" y="70" text-anchor="middle" font-size="11" fill="#92400e">% ** //</text></g>
        </svg>
      `
    },
    {
      title: "هياكل التحكم",
      narration: "هَياكِلُ التَّحَكُّمِ ثَلاثٌ: البِنْيَةُ التَّسَلْسُلِيَّةُ الَّتي تُنَفِّذُ العَمَلِيّاتِ بِالتَّرْتيبِ، وَبِنْيَةُ الحَلْقَةِ الَّتي تُكَرِّرُ العَمَلِيَّةَ، وَبِنْيَةُ التَّفَرُّعِ الَّتي تَفْصِلُ العَمَلِيّاتِ حَسَبَ الشُّروطِ.",
      detail: "هَياكِلُ التَّحَكُّمِ هِيَ أَساسُ البَرْمَجَةِ. فَأَنْتَ تَحْتاجُ لِتَكْريرِ عَمَلِيَّةٍ (حَلْقَة)، وَلِاتِّخاذِ قَرارٍ (تَفَرُّع)، وَلِتَنْفيذِ خُطُواتٍ بِالتَّرْتيبِ (تَسَلْسُل).",
      teacher: "هياكل التحكم: تسلسلي، حلقة، تفرع.",
      content: `
        <ul class="slide-list">
          <li><b>البنية التسلسلية:</b> تنفيذ بالترتيب.</li>
          <li><b>بنية الحلقة (for):</b> تكرار العملية.</li>
          <li><b>بنية التفرع (if):</b> فصل حسب الشروط.</li>
        </ul>
        <div class="slide-text"><b>مثال بايثون:</b><br>
        x = 70<br>
        if x &gt;= 60:<br>
        &nbsp;&nbsp;&nbsp;&nbsp;result = 'ناجح'<br>
        else:<br>
        &nbsp;&nbsp;&nbsp;&nbsp;result = 'راسب'</div>
      `,
      illustration: `
        <svg viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(30,50)"><rect x="0" y="0" width="180" height="120" rx="10" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/><text x="90" y="25" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e40af">تسلسلي</text><rect x="40" y="40" width="100" height="25" rx="5" fill="#3b82f6"/><text x="90" y="57" text-anchor="middle" font-size="10" fill="#fff">عملية 1</text><rect x="40" y="75" width="100" height="25" rx="5" fill="#3b82f6"/><text x="90" y="92" text-anchor="middle" font-size="10" fill="#fff">عملية 2</text></g>
          <g transform="translate(250,50)"><rect x="0" y="0" width="180" height="120" rx="10" fill="#d1fae5" stroke="#10b981" stroke-width="2"/><text x="90" y="25" text-anchor="middle" font-size="12" font-weight="bold" fill="#065f46">حلقة</text><polygon points="90,40 140,60 90,80 40,60" fill="#10b981"/><text x="90" y="64" text-anchor="middle" font-size="9" fill="#fff">شرط</text><rect x="40" y="90" width="100" height="25" rx="5" fill="#10b981"/><text x="90" y="107" text-anchor="middle" font-size="10" fill="#fff">عملية متكررة</text></g>
          <g transform="translate(470,50)"><rect x="0" y="0" width="180" height="120" rx="10" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/><text x="90" y="25" text-anchor="middle" font-size="12" font-weight="bold" fill="#92400e">تفرع</text><polygon points="90,40 140,60 90,80 40,60" fill="#f59e0b"/><text x="90" y="64" text-anchor="middle" font-size="9" fill="#fff">شرط</text><rect x="20" y="90" width="70" height="25" rx="5" fill="#f59e0b"/><text x="55" y="107" text-anchor="middle" font-size="9" fill="#fff">نعم</text><rect x="100" y="90" width="70" height="25" rx="5" fill="#f59e0b"/><text x="135" y="107" text-anchor="middle" font-size="9" fill="#fff">لا</text></g>
        </svg>
      `
    }
  ],
  question: "ما هو هيكل التحكم الذي يكرر العملية عدة مرات؟",
  options: ["البنية التسلسلية", "بنية الحلقة", "بنية التفرع"],
  correct: 1
},
{
  id: 15, unit: "الوحدة 13",
  title: "الدرس 1: الذكاء الاصطناعي التوليدي",
  slides: [
    {
      title: "ما هو الذكاء الاصطناعي التوليدي؟",
      narration: "الذَّكاءُ الاصْطِناعيُّ التَّوْليدِيُّ هُوَ نَوْعٌ مِنَ الذَّكاءِ الاصْطِناعيِّ يَقومُ بِتَنْفيذِ المَهَمّاتِ الذِّهْنِيَّةِ وَالمَعْرِفِيَّةِ مُحاكاةً لِلْإِنْسانِ، وَيَعْتَمِدُ عَلى مُعالَجَةِ كَمِّيّاتٍ هائِلَةٍ مِنَ البَياناتِ لِتَوْليدِ نُصوصٍ ذاتِ صِياغَةٍ طَبيعِيَّةٍ بِناءً عَلى ما يُقَدِّمُهُ المُسْتَخْدِمُ مِنْ أَوامِرَ.",
      detail: "الذَّكاءُ الاصْطِناعيُّ التَّوْليدِيُّ مِثْلُ ChatGPT وَ Google Gemini وَ Microsoft Copilot هُوَ ثَوْرَةٌ في العالَمِ الرَّقَمِيِّ. يَعْتَمِدُ عَلى النَّمْذَجَةِ الاحْتِمالِيَّةِ لِاخْتِيارِ الكَلِمَةِ الَّتي تَمْتَلِكُ أَعْلى نِسْبَةِ تَرْجيحٍ. وَلَكِنْ يَجِبُ عَدَمُ التَّسْليمِ بِصِحَّةِ مُخْرَجاتِهِ بِنِسْبَةِ 100%.",
      teacher: "الذكاء الاصطناعي التوليدي يولد محتوى بناء على الأوامر.",
      content: `
        <div class="definition-box">
          <span class="term">🤖 الذكاء الاصطناعي التوليدي:</span>
          نوع من الذكاء الاصطناعي يقوم بتنفيذ المهام الذهنية محاكاة للإنسان.
        </div>
        <div class="slide-text">
          <b>آلية العمل:</b> النمذجة الاحتمالية لاختيار الكلمة الأكثر ترجيحًا.
        </div>
        <div class="slide-text">
          <b>تطبيقاته:</b> توليد الأفكار، تلخيص النصوص، البرمجة.
        </div>
        <div class="help-box">
          <b>⚠️ تنبيه:</b> لا تسلّم بصحة مخرجاته بنسبة 100%.
        </div>
      `,
      illustration: `
        <svg viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(350,60)"><circle cx="0" cy="0" r="60" fill="#8b5cf6"/><text x="0" y="15" text-anchor="middle" font-size="55" fill="#fff">🤖</text></g>
          <text x="350" y="150" text-anchor="middle" font-size="14" font-weight="bold" fill="#5b21b6">الذكاء الاصطناعي التوليدي</text>
          <text x="350" y="175" text-anchor="middle" font-size="11" fill="#64748b">يولد المحتوى بناءً على الأوامر (Prompts)</text>
          <text x="350" y="200" text-anchor="middle" font-size="11" fill="#64748b">ChatGPT • Google Gemini • Microsoft Copilot</text>
        </svg>
      `
    },
    {
      title: "HTML و CSS",
      narration: "لُغَةُ HTML هِيَ اللُّغَةُ الأَساسِيَّةُ المُسْتَخْدَمَةُ لِعَرْضِ صَفَحاتِ المَواقِعِ عَبْرَ مُتَصَفِّحاتِ الويبِ، وَتَتَرَكَّزُ وَظيفَتُها في بِناءِ الهَيْكَلِ الأَساسِيِّ لِلصَّفْحَةِ. وَلُغَةُ CSS هِيَ اللُّغَةُ المَسْؤُولَةُ عَنْ شَكْلِ وَتَصْميمِ صَفْحَةِ الويبِ.",
      detail: "HTML هِيَ الهَيْكَلُ، مِثْلُ عِظامِ الجِسْمِ. CSS هُوَ التَّصْميمُ، مِثْلُ الجِلْدِ وَالمَلابِسِ. وَJavaScript هُوَ الحَرَكَةُ، مِثْلُ العَضَلاتِ. الثَّلاثَةُ مَعاً يُكَوِّنونَ صَفْحَةَ ويبٍ كامِلَةً.",
      teacher: "HTML للهيكل، CSS للتصميم.",
      content: `
        <div class="definition-box">
          <span class="term">🌐 HTML:</span>
          لغة ترميز النص التشعبي لبناء هيكل الصفحة.
        </div>
        <div class="definition-box">
          <span class="term">🎨 CSS:</span>
          أوراق الأنماط المتتالية لتصميم الصفحة.
        </div>
        <div class="slide-text"><b>مثال HTML:</b> &lt;h1&gt;My page&lt;/h1&gt;</div>
        <div class="slide-text"><b>مثال CSS:</b> .name { color: blue; }</div>
      `,
      illustration: `
        <svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(50,30)"><rect x="0" y="0" width="280" height="180" rx="12" fill="#fff" stroke="#3b82f6" stroke-width="2"/><rect x="0" y="0" width="280" height="35" rx="12" fill="#3b82f6"/><text x="140" y="23" text-anchor="middle" font-size="14" fill="#fff" font-weight="bold">HTML - الهيكل</text><text x="20" y="65" font-size="11" fill="#1e40af" font-family="monospace">&lt;h1&gt;My page&lt;/h1&gt;</text><text x="20" y="90" font-size="11" fill="#1e40af" font-family="monospace">&lt;p&gt;HELLO&lt;/p&gt;</text></g>
          <text x="355" y="120" text-anchor="middle" font-size="40" fill="#8b5cf6">+</text>
          <g transform="translate(380,30)"><rect x="0" y="0" width="280" height="180" rx="12" fill="#fff" stroke="#10b981" stroke-width="2"/><rect x="0" y="0" width="280" height="35" rx="12" fill="#10b981"/><text x="140" y="23" text-anchor="middle" font-size="14" fill="#fff" font-weight="bold">CSS - التصميم</text><text x="20" y="65" font-size="11" fill="#065f46" font-family="monospace">p {</text><text x="30" y="85" font-size="11" fill="#065f46" font-family="monospace">color: red;</text><text x="20" y="105" font-size="11" fill="#065f46" font-family="monospace">}</text></g>
        </svg>
      `
    },
    {
      title: "JavaScript",
      narration: "JavaScript هِيَ لُغَةُ بَرْمَجَةٍ تَعْمَلُ داخِلَ مُتَصَفِّحاتِ الويبِ. مِنْ خِلالِ دَمْجِها في صَفَحاتِ الويبِ، يُمْكِنُكَ إِضْفاءُ تَفاعُلِيَّةٍ إِلى الصَّفْحَةِ أَوْ إِحْداثِ تَغْييراتٍ اسْتِجابَةً لِإِجْراءاتِ المُسْتَخْدِمِ.",
      detail: "JavaScript هِيَ الَّتي تَجْعَلُ الصَّفْحَةَ حَيَّةً. فَعِنْدَما تَضْغَطُ زِرّاً وَيَتَغَيَّرُ اللَّوْنُ أَوِ النَّصُّ، فَهَذا بِفَضْلِ JavaScript. وَهِيَ مُسْتَخْدَمَةٌ في كُلِّ المَواقِعِ التَّفاعُلِيَّةِ تَقْريباً.",
      teacher: "JavaScript تضيف التفاعلية لصفحات الويب.",
      content: `
        <div class="definition-box">
          <span class="term">⚡ JavaScript:</span>
          لغة برمجة تعمل داخل متصفحات الويب.
        </div>
        <div class="slide-text"><b>مثال:</b> document.getElementById("name").textContent = "Omar";</div>
        <div class="slide-text"><b>الاستخدامات:</b> تغيير النصوص والألوان والتفاعل مع الأزرار.</div>
      `,
      illustration: `
        <svg viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(50,40)"><rect x="0" y="0" width="280" height="140" rx="12" fill="#fff" stroke="#f59e0b" stroke-width="2"/><rect x="0" y="0" width="280" height="35" rx="12" fill="#f59e0b"/><text x="140" y="23" text-anchor="middle" font-size="14" fill="#fff" font-weight="bold">كود JavaScript</text><text x="15" y="65" font-size="11" fill="#92400e" font-family="monospace">const p = document</text><text x="15" y="85" font-size="11" fill="#92400e" font-family="monospace">.getElementById("name");</text><text x="15" y="105" font-size="11" fill="#92400e" font-family="monospace">btn.onclick = () =&gt; {</text><text x="15" y="125" font-size="11" fill="#92400e" font-family="monospace">  p.textContent = "Omar";</text></g>
          <g transform="translate(380,40)"><rect x="0" y="0" width="280" height="140" rx="12" fill="#fff" stroke="#8b5cf6" stroke-width="2"/><rect x="0" y="0" width="280" height="35" rx="12" fill="#8b5cf6"/><text x="140" y="23" text-anchor="middle" font-size="14" fill="#fff" font-weight="bold">النتيجة</text><text x="140" y="70" text-anchor="middle" font-size="16" fill="#5b21b6">Adam</text><rect x="100" y="85" width="80" height="30" rx="5" fill="#e2e8f0"/><text x="140" y="105" text-anchor="middle" font-size="11" fill="#475569">Change</text><text x="140" y="160" text-anchor="middle" font-size="16" fill="#5b21b6">Omar</text></g>
        </svg>
      `
    }
  ],
  question: "ما اللغة المسؤولة عن شكل وتصميم صفحة الويب؟",
  options: ["HTML", "CSS", "JavaScript"],
  correct: 1
}
];
/* ==========================================================
   🎯 بنك أسئلة الشرائح - النظام العشوائي
   المفتاح: "معرّف-الدرس-رقم-الشريحة"
   ========================================================== */
const slideQuizzes = {
  /* ========== الوحدة 1 - الدرس 1 ========== */
  "1-0": [
    { q: "ما هو تعريف البيانات؟", options: ["حقائق تُمثَّل بالأرقام أو الأحرف أو الرموز وليس لها معنى بمفردها", "معلومات لها معنى وقيمة", "قرارات مبنية على تحليل"], correct: 0 },
    { q: "الأرقام (15، 20، 30) وحدها تُعتبر:", options: ["معلومات", "بيانات", "معرفة"], correct: 1 },
    { q: "أي مما يلي يمثل بيانات خام؟", options: ["سعر الطماطم 15 جنيه", "الرقم 40 وحده", "شغّل المكيف"], correct: 1 }
  ],
  "1-1": [
    { q: "المعلومات هي بيانات:", options: ["بدون معنى", "لها معنى أو قيمة للمتلقي", "لا تُستخدم في القرار"], correct: 1 },
    { q: "مثال على المعلومات من الحياة اليومية:", options: ["الرقم 35", "درجة الحرارة في القاهرة 35°", "الحرف A"], correct: 1 },
    { q: "عندما نضيف سياقًا للأرقام فإنها تتحول إلى:", options: ["بيانات", "معلومات", "رموز"], correct: 1 }
  ],
  "1-2": [
    { q: "المعرفة هي المعلومات التي:", options: ["لم تُحلَّل بعد", "تم تحليلها وتنظيمها لحل المشكلات", "بدون سياق"], correct: 1 },
    { q: "مثال على المعرفة:", options: ["الرقم 40", "بما أن الحرارة مرتفعة نُشغّل المكيف", "الحرف A"], correct: 1 },
    { q: "المعرفة تأتي:", options: ["قبل البيانات", "بعد البيانات فقط", "بعد تحليل المعلومات"], correct: 2 }
  ],
  "1-3": [
    { q: "أي من الخصائص التالية للمعلومات؟", options: ["يمكن محوها بسهولة", "لا يمكن محوها بالكامل بمجرد إنشائها", "لها شكل مادي ثابت"], correct: 1 },
    { q: "خاصية (Reproducibility) تعني:", options: ["الاستمرارية", "إمكانية النسخ بكميات كبيرة", "سهولة النشر"], correct: 1 },
    { q: "المعلومات تنتشر بسهولة عبر:", options: ["الورق فقط", "وسائل الإعلام والإنترنت", "الهاتف فقط"], correct: 1 }
  ],
  "1-4": [
    { q: "المعلومات الأولية يتم الحصول عليها من:", options: ["الكتب والصحف", "التجربة الشخصية المباشرة", "التلفزيون"], correct: 1 },
    { q: "المعلومات الثانوية تحتاج إلى:", options: ["لا شيء", "التحقق المتبادل", "النسخ"], correct: 1 },
    { q: "أي مما يلي مثال على معلومات ثانوية؟", options: ["تجربة معملية شخصية", "نتائج استبيان أجريته", "مقال في صحيفة"], correct: 2 }
  ],

  /* ========== الوحدة 1 - الدرس 2 ========== */
  "2-0": [
    { q: "أخلاقيات المعلومات هي المفاهيم اللازمة للقيام بأنشطة مناسبة في مجتمع المعلومات:", options: ["بشرط وجود قوانين", "بغض النظر عن وجود قوانين", "فقط عند العقاب"], correct: 1 },
    { q: "المبدأ الأساسي في أخلاقيات المعلومات:", options: ["الالتزام خوفًا من العقاب", "الالتزام بقناعة داخلية", "الالتزام فقط أمام الناس"], correct: 1 },
    { q: "أخلاقيات المعلومات ترتبط بـ:", options: ["المال فقط", "الأنشطة في مجتمع المعلومات", "الترفيه فقط"], correct: 1 }
  ],
  "2-1": [
    { q: "من قواعد نشر المعلومات على الإنترنت:", options: ["مشاركة صور الآخرين بحرية", "احترام حقوق المؤلف", "نشر بيانات الآخرين"], correct: 1 },
    { q: "التنمر الإلكتروني يُعتبر:", options: ["سلوك مقبول", "من قواعد أخلاقيات المعلومات تجنبه", "أمر طبيعي"], correct: 1 },
    { q: "عند نشر محتوى على الإنترنت يجب:", options: ["عدم مراعاة حقوق الآخرين", "التحقق واحترام خصوصية الآخرين", "نشر كل شيء"], correct: 1 }
  ],
  "2-2": [
    { q: "العلامة الجغرافية (Geotagging) هي:", options: ["نوع من الصور", "معلومات خطوط الطول والعرض في الصور", "برنامج تعديل"], correct: 1 },
    { q: "خطورة العلامة الجغرافية:", options: ["لا خطورة", "إمكانية تحديد موقع منزلك بدقة", "تسريع الإنترنت"], correct: 1 },
    { q: "أين تُضمَّن العلامة الجغرافية؟", options: ["في النصوص فقط", "في الصور ومقاطع الفيديو الملتقطة بالهواتف", "في الرسائل النصية"], correct: 1 }
  ],
  "2-3": [
    { q: "المعلومات المضللة هي:", options: ["معلومات صحيحة", "معلومات كاذبة تُنشر عمدًا أو شائعات", "معلومات قديمة"], correct: 1 },
    { q: "قبل نشر أي معلومة يجب:", options: ["نشرها فورًا", "التحقق من صحتها ومصدرها", "تجاهلها"], correct: 1 },
    { q: "الشائعات لا أساس لها من:", options: ["الصحة", "الفكاهة", "الأخبار"], correct: 0 }
  ],

  /* ========== الوحدة 2 - الدرس 1 ========== */
  "3-0": [
    { q: "البيانات الشخصية هي:", options: ["أي بيانات عامة", "كل بيان يتعلق بشخص طبيعي محدد أو يمكن تحديده", "بيانات الشركات فقط"], correct: 1 },
    { q: "من أمثلة البيانات الشخصية:", options: ["حالة الطقس", "بصمة الإصبع وقزحية العين", "أسعار الذهب"], correct: 1 },
    { q: "البيانات الشخصية تُحدد الشخص:", options: ["بشكل مباشر فقط", "بشكل مباشر أو غير مباشر", "لا تُحدده"], correct: 1 }
  ],
  "3-1": [
    { q: "البيانات الأساسية تشمل:", options: ["الاسم والعنوان وتاريخ الميلاد", "الديانة والعرق", "السجل الجنائي"], correct: 0 },
    { q: "البيانات الشخصية الحساسة تشمل:", options: ["الاسم", "العنوان", "الديانة والحالة الصحية والسجل الجنائي"], correct: 2 },
    { q: "أرقام الهوية الشخصية مثل:", options: ["رقم الهاتف", "الرقم القومي وجواز السفر", "تاريخ الميلاد"], correct: 1 }
  ],
  "3-2": [
    { q: "قاعدة قانون حماية البيانات الشخصية:", options: ["جمع البيانات بحرية", "لا يجوز جمعها إلا بعد موافقة صريحة", "تُجمع بدون إخبار أحد"], correct: 1 },
    { q: "الموافقة المطلوبة لجمع البيانات هي:", options: ["ضمنية", "صريحة ومسبقة", "شخصية فقط"], correct: 1 },
    { q: "قانون حماية البيانات يحدد قواعد:", options: ["البيع والشراء", "الجمع والمعالجة والتخزين والنقل", "الطباعة"], correct: 1 }
  ],
  "3-3": [
    { q: "من حالات توفير البيانات دون موافقة:", options: ["لأغراض تجارية", "لحماية الأمن القومي", "للدعاية"], correct: 1 },
    { q: "عدد الحالات الاستثنائية لتوفير البيانات دون موافقة:", options: ["3 حالات", "5 حالات", "7 حالات"], correct: 1 },
    { q: "توفير البيانات ضروري لتنفيذ حكم قضائي:", options: ["ممنوع دائمًا", "مسموح ضمن الاستثناءات", "يحتاج موافقة"], correct: 1 }
  ],

  /* ========== الوحدة 2 - الدرس 2 ========== */
  "4-0": [
    { q: "حقوق الملكية الفكرية تحمي:", options: ["الأشياء المادية", "نتاج الإبداع الفكري البشري", "السيارات"], correct: 1 },
    { q: "حقوق الملكية الفكرية تشمل:", options: ["حقوق المؤلف والملكية الصناعية", "الأراضي", "العقارات"], correct: 0 },
    { q: "حقوق الملكية الفكرية تحمي الإبداع في المجالات:", options: ["الأدبية والفنية والعلمية والتجارية", "الطبية فقط", "الرياضية"], correct: 0 }
  ],
  "4-1": [
    { q: "حقوق الملكية الصناعية تحمي:", options: ["الروايات", "الاختراعات والرسوم والعلامات التجارية", "الأفلام"], correct: 1 },
    { q: "مبدأ الشكلية (Formality) يعني:", options: ["عدم التسجيل", "التسجيل لدى الجهة المختصة", "الشكل الجمالي"], correct: 1 },
    { q: "من أمثلة حقوق الملكية الصناعية:", options: ["براءات الاختراع", "الأغاني", "الروايات"], correct: 0 }
  ],
  "4-2": [
    { q: "مدة حماية براءات الاختراع:", options: ["10 سنوات", "20 سنة", "50 سنة"], correct: 1 },
    { q: "مدة حماية نموذج المنفعة:", options: ["7 سنوات", "20 سنة", "10 سنوات"], correct: 0 },
    { q: "مدة حماية العلامة التجارية:", options: ["5 سنوات", "10 سنوات من التسجيل", "20 سنة"], correct: 1 }
  ],
  "4-3": [
    { q: "حقوق المؤلف تنشأ:", options: ["بعد التسجيل", "بمجرد إنشاء العمل", "بعد النشر"], correct: 1 },
    { q: "مدة حماية حقوق المؤلف:", options: ["20 سنة بعد الوفاة", "50 سنة بعد وفاة المبدع", "10 سنوات"], correct: 1 },
    { q: "حقوق المؤلف تتعلق بـ:", options: ["الاختراعات", "الإبداعات الفنية مثل الروايات والأفلام", "العلامات التجارية"], correct: 1 }
  ],

  /* ========== الوحدة 3 - الدرس 1 ========== */
  "5-0": [
    { q: "أمن المعلومات هو:", options: ["حذف المعلومات", "إدارة المعلومات بشكل صحيح والحفاظ عليها آمنة", "نسخ المعلومات"], correct: 1 },
    { q: "أمن المعلومات يشبه:", options: ["باب وقفل للمنزل", "زجاج شفاف", "ورق عادي"], correct: 0 },
    { q: "الهدف من أمن المعلومات:", options: ["الوصول للجميع", "الحفاظ على المعلومات آمنة", "حذف البيانات"], correct: 1 }
  ],
  "5-1": [
    { q: "العناصر الثلاثة لأمن المعلومات هي:", options: ["السرعة والحجم والدقة", "السرية والسلامة والتوافرية", "الطول والعرض والارتفاع"], correct: 1 },
    { q: "السرية تعني:", options: ["وصول الجميع", "وصول الأفراد المصرح لهم فقط", "الوصول السريع"], correct: 1 },
    { q: "السلامة تعني:", options: ["سرعة الوصول", "عدم تدمير المعلومات أو العبث بها", "الحذف التلقائي"], correct: 1 }
  ],
  "5-2": [
    { q: "إذا اطلع شخص على رسائلك فهذا خطر على:", options: ["السلامة", "السرية", "التوافرية"], correct: 1 },
    { q: "إذا غيّر أحدهم درجاتك فهذا خطر على:", options: ["السرية", "السلامة", "التوافرية"], correct: 1 },
    { q: "إذا تعطل الخادم فهذا خطر على:", options: ["السرية", "السلامة", "التوافرية"], correct: 2 }
  ],
  "5-3": [
    { q: "الفيروسات وحصان طروادة والديدان هي:", options: ["برامج مفيدة", "برمجيات خبيثة (Malware)", "أنظمة تشغيل"], correct: 1 },
    { q: "الوصول غير المصرح به يعني:", options: ["الوصول المسموح", "الوصول غير القانوني للتلاعب بالبيانات", "النسخ الاحتياطي"], correct: 1 },
    { q: "الجريمة الإلكترونية (Cybercrime) هي:", options: ["أفعال إجرامية عبر شبكات الكمبيوتر", "ألعاب فيديو", "برامج تعليمية"], correct: 0 }
  ],

  /* ========== الوحدة 3 - الدرس 4 ========== */
  "6-0": [
    { q: "التشفير هو:", options: ["حذف المعلومات", "طريقة لمنع اعتراض المعلومات من غير المستلم", "نسخ المعلومات"], correct: 1 },
    { q: "النص العادي (Plaintext) هو:", options: ["النص المشفر", "النص الأصلي قبل التشفير", "نوع من الملفات"], correct: 1 },
    { q: "النص المشفر (Ciphertext) هو:", options: ["النص الأصلي", "النص بعد التشفير", "الملف المضغوط"], correct: 1 }
  ],
  "6-1": [
    { q: "المفتاح (Key) هو:", options: ["كلمة سر", "الإجراء أو البيانات المستخدمة للتشفير وفك التشفير", "قفل حقيقي"], correct: 1 },
    { q: "فك التشفير (Decryption) هو:", options: ["إنشاء نص مشفر", "استعادة النص الأصلي من النص المشفر", "حذف النص"], correct: 1 },
    { q: "التشفير وفك التشفير يحتاجان إلى:", options: ["مفتاح", "بطارية", "برنامج معين"], correct: 0 }
  ],
  "6-2": [
    { q: "في التشفير بالمفتاح المتناظر يُستخدم:", options: ["مفتاحان مختلفان", "نفس المفتاح للتشفير وفك التشفير", "بدون مفتاح"], correct: 1 },
    { q: "ميزة التشفير المتناظر:", options: ["بطيء جدًا", "سريع جدًا", "غير آمن"], correct: 1 },
    { q: "عيب التشفير المتناظر:", options: ["لا يوجد عيب", "صعوبة تبادل المفتاح بأمان", "يحتاج أجهزة خاصة"], correct: 1 }
  ],
  "6-3": [
    { q: "في التشفير بالمفتاح العام يُستخدم:", options: ["نفس المفتاح", "مفتاح عام للتشفير ومفتاح خاص لفك التشفير", "بدون مفتاح"], correct: 1 },
    { q: "يتم فك التشفير باستخدام:", options: ["المفتاح العام", "المفتاح الخاص للمستلم", "المفتاح العام للمرسل"], correct: 1 },
    { q: "ميزة التشفير العام:", options: ["سريع جدًا", "آمن جدًا (المفتاح الخاص مع المستلم)", "بدون مفاتيح"], correct: 1 }
  ],
  "6-4": [
    { q: "طريقة المفتاح المؤقت تجمع بين:", options: ["تشفيرين مختلفين تمامًا", "المفتاح المتماثل والعام", "تشفير وضغط"], correct: 1 },
    { q: "الهدف من طريقة المفتاح المؤقت:", options: ["البطء الشديد", "الجمع بين سرعة المتماثل وأمان العام", "الحذف التلقائي"], correct: 1 },
    { q: "المفتاح المؤقت (Session Key) يستخدم:", options: ["مرة واحدة", "مدى الحياة", "بدون استخدام"], correct: 0 }
  ],

  /* ========== الوحدة 8 - الدرس 3 ========== */
  "7-0": [
    { q: "الحزمة (Packet) هي:", options: ["ملف كامل", "وحدة صغيرة تُقسَّم إليها البيانات مع رأس يحتوي معلومات الوجهة", "نوع من الصور"], correct: 1 },
    { q: "الرأس (Header) في الحزمة يحتوي على:", options: ["صورة", "معلومات الوجهة", "موسيقى"], correct: 1 },
    { q: "لماذا تُقسَّم البيانات إلى حزم؟", options: ["لتقليل الحجم فقط", "لإرسالها بكفاءة عبر الشبكة", "لحذفها بسهولة"], correct: 1 }
  ],
  "7-1": [
    { q: "البروتوكول (Protocol) هو:", options: ["جهاز كمبيوتر", "اتفاقية مشتركة في شبكات المعلومات والاتصالات", "نوع من الملفات"], correct: 1 },
    { q: "البروتوكول يشبه:", options: ["لغة مشتركة يتكلمها الطرفان", "حائط", "نافذة"], correct: 0 },
    { q: "بدون بروتوكول:", options: ["تعمل الشبكة بسرعة", "لا يمكن للأجهزة التواصل بكفاءة", "لا يوجد فرق"], correct: 1 }
  ],
  "7-2": [
    { q: "TCP يهتم بـ:", options: ["السرعة فقط", "الموثوقية وإعادة إرسال المفقود", "الشكل الجمالي"], correct: 1 },
    { q: "UDP يهتم بـ:", options: ["إعادة إرسال المفقود", "الوقت الفعلي (البث المباشر)", "الترتيب"], correct: 1 },
    { q: "IP يعمل على:", options: ["تعيين العناوين وتوجيه الحزم", "ضغط البيانات", "حذف البيانات"], correct: 0 }
  ],
  "7-3": [
    { q: "طبقة التطبيق تحتوي على بروتوكولات مثل:", options: ["TCP و UDP", "HTTP و SMTP", "IP"], correct: 1 },
    { q: "طبقة النقل تحتوي على:", options: ["HTTP", "TCP و UDP", "Ethernet"], correct: 1 },
    { q: "عدد طبقات نموذج TCP/IP:", options: ["طبقتان", "أربع طبقات", "سبع طبقات"], correct: 1 }
  ],

  /* ========== الوحدة 4 - الدرس 1 ========== */
  "8-0": [
    { q: "أول مرحلة في تطور المجتمع البشري:", options: ["المجتمع الزراعي", "مجتمع الصيادين والجامعين", "المجتمع الصناعي"], correct: 1 },
    { q: "المجتمع الصناعي بدأ:", options: ["منذ ولادة البشرية", "منتصف القرن الثامن عشر بعد الثورة الصناعية", "النصف الثاني من القرن العشرين"], correct: 1 },
    { q: "مجتمع الجيل الخامس يدمج:", options: ["الزراعة والصناعة", "الفضاء الافتراضي والحقيقي", "الحيوانات والنباتات"], correct: 1 }
  ],
  "8-1": [
    { q: "البيانات الضخمة (Big Data) تتميز بـ:", options: ["صغر الحجم", "الحجم والتنوع ووتيرة التوليد", "قلة المعلومات"], correct: 1 },
    { q: "إنترنت الأشياء (IoT) يربط:", options: ["الأشخاص فقط", "الأجهزة المنزلية وغيرها بالإنترنت", "السيارات فقط"], correct: 1 },
    { q: "الواقع المعزز (AR):", options: ["يخلق بيئة وهمية كاملة", "يضيف معلومات رقمية للبيئة الواقعية", "حذف الواقع"], correct: 1 }
  ],
  "8-2": [
    { q: "الفجوة الرقمية (Digital Divide) هي:", options: ["فرق السرعة", "التفاوت بين من يمكنهم استخدام التقنية ومن لا يستطيعون", "نوع من الفيروسات"], correct: 1 },
    { q: "اضطراب VDT ينتج عن:", options: ["النوم الزائد", "الاستخدام الطويل للكمبيوتر", "الرياضة"], correct: 1 },
    { q: "الإدمان التكنولوجي يعني:", options: ["الاستخدام المعتدل", "الاعتماد المفرط على الأجهزة", "استخدام التقنية في العمل"], correct: 1 }
  ],

  /* ========== الوحدة 5 - الدرس 1 ========== */
  "9-0": [
    { q: "من وسائل الاتصال القديمة:", options: ["الهواتف الذكية", "إشارات النار والحمام الزاجل", "الإنترنت"], correct: 1 },
    { q: "من اخترع الهاتف عام 1876؟", options: ["مورس", "بيل", "ماركوني"], correct: 1 },
    { q: "بدأت خدمة الهاتف المحمول عام:", options: ["1876", "1895", "1946"], correct: 2 }
  ],
  "9-1": [
    { q: "اتصال واحد إلى واحد مثل:", options: ["الصحف", "الرسائل والهواتف", "التلفزيون"], correct: 1 },
    { q: "الاتصال المتزامن يعني:", options: ["في أوقات مختلفة", "في نفس الوقت تقريبًا", "لا يوجد فرق"], correct: 1 },
    { q: "البريد الإلكتروني نوع اتصال:", options: ["متزامن مباشر", "غير مباشر وغير متزامن", "غير مباشر ومتزامن"], correct: 1 }
  ],

  /* ========== الوحدة 6 - الدرس 1 ========== */
  "10-0": [
    { q: "الكمية التناظرية تتغير:", options: ["في خطوات منفصلة", "تدريجيًا وبشكل مستمر", "بشكل عشوائي"], correct: 1 },
    { q: "الكمية الرقمية تتغير:", options: ["باستمرار", "في خطوات محددة ومنفصلة", "عشوائيًا"], correct: 1 },
    { q: "تحويل تناظري إلى رقمي يسمى:", options: ["D/A conversion", "A/D conversion (digitization)", "توليد الإشارة"], correct: 1 }
  ],
  "10-1": [
    { q: "أصغر وحدة للمعلومات:", options: ["البايت", "البت (bit)", "الكيلوبايت"], correct: 1 },
    { q: "البايت الواحد يساوي:", options: ["4 بتات", "8 بتات", "16 بتة"], correct: 1 },
    { q: "1 كيلوبايت يساوي:", options: ["1000 بايت", "1024 بايت", "512 بايت"], correct: 1 }
  ],
  "10-2": [
    { q: "النظام السادس عشر يستخدم:", options: ["0-9 فقط", "0-9 و A-F", "0-1 فقط"], correct: 1 },
    { q: "في النظام السادس عشر، الحرف A يساوي:", options: ["8", "10", "15"], correct: 1 },
    { q: "الحرف F في النظام السادس عشر يساوي:", options: ["10", "15", "20"], correct: 1 }
  ],

  /* ========== الوحدة 7 - الدرس 1 ========== */
  "11-0": [
    { q: "المكونات الخمسة الرئيسية للحاسوب:", options: ["الشاشة، الكيبورد، الماوس، السماعة، الكاميرا", "وحدة التحكم، الحساب، التخزين، الإدخال، الإخراج", "CPU، RAM، SSD، GPU، PSU"], correct: 1 },
    { q: "وحدة التحكم وظيفتها:", options: ["تخزين البيانات", "تنفيذ التعليمات وإصدار الأوامر", "إخراج المعلومات"], correct: 1 },
    { q: "المعالج (CPU) يتكون من:", options: ["وحدة التحكم ووحدة الحساب", "الذاكرة والتخزين", "الشاشة والكيبورد"], correct: 0 }
  ],
  "11-1": [
    { q: "نظام التشغيل (OS) من:", options: ["برامج التطبيق", "برمجيات النظام", "العتاد"], correct: 1 },
    { q: "برنامج معالجة النصوص مثال على:", options: ["برمجيات النظام", "برامج التطبيق", "العتاد"], correct: 1 },
    { q: "من أمثلة أنظمة التشغيل:", options: ["Word و Excel", "Windows و macOS و Android", "Chrome و Firefox"], correct: 1 }
  ],
  "11-2": [
    { q: "بوابة AND تخرج 1 عندما:", options: ["مدخل واحد 1", "جميع المدخلات 1", "جميع المدخلات 0"], correct: 1 },
    { q: "بوابة OR تخرج 1 عندما:", options: ["جميع المدخلات 1", "على الأقل مدخل واحد 1", "على الأقل مدخل واحد 0"], correct: 1 },
    { q: "بوابة NOT وظيفتها:", options: ["الجمع", "العكس", "الضرب"], correct: 1 }
  ],

  /* ========== الوحدة 9 - الدرس 1 ========== */
  "12-0": [
    { q: "قاعدة البيانات هي:", options: ["برنامج رسم", "مجموعة منظمة من البيانات يسهل الوصول إليها", "نوع من الأجهزة"], correct: 1 },
    { q: "DBMS هو:", options: ["لغة برمجة", "نظام ينشئ ويشغل ويدير قواعد البيانات", "جهاز تخزين"], correct: 1 },
    { q: "قاعدة بيانات جهات الاتصال في الهاتف مثال على:", options: ["قاعدة بيانات صغيرة", "برنامج رسم", "لعبة"], correct: 0 }
  ],
  "12-1": [
    { q: "تناسق البيانات يعني:", options: ["حذف البيانات", "ضمان عدم التناقضات في العمليات المتزامنة", "نسخ البيانات"], correct: 1 },
    { q: "تكامل البيانات يعني:", options: ["إضافة البيانات", "منع التكرار والعبث", "حذف البيانات"], correct: 1 },
    { q: "توافر البيانات يعني:", options: ["إخفاء البيانات", "إجراء نسخ احتياطية واستعادة", "حذف البيانات"], correct: 1 }
  ],
  "12-2": [
    { q: "قاعدة البيانات العلائقية تنظم البيانات في:", options: ["شجرة", "شبكة", "جداول مترابطة"], correct: 2 },
    { q: "عملية الانتقاء (Selection):", options: ["عرض أعمدة فقط", "استخراج صفوف تستوفي شروطًا", "ربط الجداول"], correct: 1 },
    { q: "SQL هي:", options: ["لغة تصميم", "لغة الاستعلام الهيكلية", "نظام تشغيل"], correct: 1 }
  ],

  /* ========== الوحدة 10 - الدرس 1 ========== */
  "13-0": [
    { q: "البيانات النوعية:", options: ["أرقام قابلة للقياس", "تصف الصفات أو الخصائص", "نتائج حسابية"], correct: 1 },
    { q: "البيانات الكمية النسبية:", options: ["بدون صفر مطلق", "مع صفر مطلق وتكون النسب ذات معنى", "فئات"], correct: 1 },
    { q: "الجنس واللون من البيانات:", options: ["الكمية الفاصلة", "النوعية الاسمية", "النوعية الترتيبية"], correct: 1 }
  ],
  "13-1": [
    { q: "المتوسط يعني:", options: ["أكثر قيمة تكرارًا", "مجموع البيانات ÷ عددها", "القيمة الوسطى"], correct: 1 },
    { q: "الوسيط يعني:", options: ["القيمة الوسطى بعد الترتيب", "مجموع القيم", "أكثر قيمة تكرارًا"], correct: 0 },
    { q: "المنوال يعني:", options: ["القيمة الوسطى", "أكثر القيم تكرارًا", "مجموع القيم"], correct: 1 }
  ],
  "13-2": [
    { q: "الرباعي الأول (Q1):", options: ["الوسيط", "الوسيط للنصف الأصغر", "الوسيط للنصف الأكبر"], correct: 1 },
    { q: "الرباعي الثاني (Q2) هو:", options: ["القيمة الدنيا", "الوسيط", "القيمة العظمى"], correct: 1 },
    { q: "مخطط الصندوق والشارب يمثل:", options: ["البيانات النوعية", "القيم الخمس الأساسية", "الرسوم المتحركة"], correct: 1 }
  ],

  /* ========== الوحدة 12 - الدرس 1 ========== */
  "14-0": [
    { q: "الخوارزمية هي:", options: ["جهاز كمبيوتر", "طريقة أو إجراء لحل مشكلة معينة", "نوع من البيانات"], correct: 1 },
    { q: "المخطط الانسيابي يستخدم لـ:", options: ["رسم الأشكال", "توضيح تدفق عملية واحدة", "الطباعة"], correct: 1 },
    { q: "مخطط النشاط مناسب لـ:", options: ["عملية واحدة", "العمليات المتوازية", "الطباعة"], correct: 1 }
  ],
  "14-1": [
    { q: "المتغير في البرمجة:", options: ["ثابت لا يتغير", "مثل مربع لتخزين البيانات", "نوع من الملفات"], correct: 1 },
    { q: "المعامل % في البرمجة يعني:", options: ["القسمة", "باقي القسمة", "الضرب"], correct: 1 },
    { q: "لغة بايثون تستخدم في:", options: ["الطباعة فقط", "الذكاء الاصطناعي والإحصاء", "الرسم فقط"], correct: 1 }
  ],
  "14-2": [
    { q: "البنية التسلسلية:", options: ["تكرر العملية", "تنفذ العمليات بالترتيب", "تفصل حسب الشروط"], correct: 1 },
    { q: "بنية الحلقة (for):", options: ["تنفيذ مرة واحدة", "تكرار العملية عدة مرات", "لا تنفذ"], correct: 1 },
    { q: "بنية التفرع (if):", options: ["تكرار", "فصل العمليات حسب الشروط", "تسلسل"], correct: 1 }
  ],

  /* ========== الوحدة 13 - الدرس 1 ========== */
  "15-0": [
    { q: "الذكاء الاصطناعي التوليدي:", options: ["يحفظ البيانات", "ينفذ مهام ذهنية محاكاة للإنسان", "يطبع الأوراق"], correct: 1 },
    { q: "من تطبيقات الذكاء الاصطناعي التوليدي:", options: ["الشاشة", "توليد الأفكار والبرمجة", "لوحة المفاتيح"], correct: 1 },
    { q: "من أدوات الذكاء الاصطناعي التوليدي:", options: ["Windows", "ChatGPT و Google Gemini", "Google Chrome"], correct: 1 }
  ],
  "15-1": [
    { q: "HTML هي لغة:", options: ["تصميم الصور", "بناء هيكل الصفحة", "لون الخلفية"], correct: 1 },
    { q: "CSS مسؤولة عن:", options: ["الهيكل", "الشكل والتصميم", "البرمجة"], correct: 1 },
    { q: "من استخدامات HTML:", options: ["تلوين الخلفية", "العناوين والجداول والقوائم", "الحركة"], correct: 1 }
  ],
  "15-2": [
    { q: "JavaScript هي لغة:", options: ["تصميم", "برمجة تعمل في المتصفح", "تنسيق"], correct: 1 },
    { q: "من استخدامات JavaScript:", options: ["تلوين النصوص", "التفاعل مع الأزرار وتغيير النصوص", "إضافة صور"], correct: 1 },
    { q: "document.getElementById تستخدم لـ:", options: ["حذف العنصر", "الوصول لعنصر HTML محدد", "طباعة الصفحة"], correct: 1 }
  ]
};
/* ==========================================================
   🧠 الحالة العامة للتطبيق
   ========================================================== */
let currentLesson = null;
let currentSlideIndex = 0;
let isSpeaking = false;
let autoAdvance = true;
let selectedVoice = null;
let allVoices = [];
let rate = 0.9;
let pitch = 1.0;
let currentAudio = null;
let currentQuizList = [];
let currentQuizIdx = 0;
let selectedText = '';
let longPressTimer = null;
let quizState = {}; // { "lessonId-slideIdx": { passed: true/false, currentQuestion: {...} } }

/* ==========================================================
   📱 التنقل في القائمة الجانبية
   ========================================================== */
function toggleSidebar(){
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  if(window.innerWidth <= 768){
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active', sidebar.classList.contains('open'));
  } else {
    sidebar.classList.toggle('collapsed');
  }
}
function closeSidebar(){
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('overlay').classList.remove('active');
}
function renderSidebar(){
  const list = document.getElementById('lesson-list');
  list.innerHTML = '';
  let lastUnit = '';
  curriculum.forEach(lesson=>{
    if(lesson.unit !== lastUnit){
      lastUnit = lesson.unit;
      const h = document.createElement('div');
      h.className = 'unit-header';
      h.textContent = '📖 ' + lesson.unit;
      list.appendChild(h);
    }
    const item = document.createElement('div');
    item.className = 'lesson-item' + (currentLesson === lesson.id ? ' active' : '');
    let icon = '⚪';
    if(lesson.status === 'understood') icon = '✅';
    if(lesson.status === 'review') icon = '🔁';
    item.innerHTML = '<span>' + lesson.title + '</span><span class="badge">' + icon + '</span>';
    item.onclick = ()=>{ openLesson(lesson.id); closeSidebar(); };
    list.appendChild(item);
  });
}

/* ==========================================================
   💾 حفظ واسترجاع التقدم
   ========================================================== */
function loadProgress(){
  try{
    const saved = localStorage.getItem('studyBuddyV10');
    if(saved){
      const parsed = JSON.parse(saved);
      curriculum.forEach(l=>{ if(parsed.lessons && parsed.lessons[l.id]) l.status = parsed.lessons[l.id]; });
      if(parsed.quizzes) quizState = parsed.quizzes;
    }
  }catch(e){ console.warn('loadProgress error:', e); }
}
function saveProgress(){
  try{
    const lessons = {};
    curriculum.forEach(l=>{ lessons[l.id] = l.status || 'unread'; });
    localStorage.setItem('studyBuddyV10', JSON.stringify({
      lessons: lessons,
      quizzes: quizState
    }));
  }catch(e){ console.warn('saveProgress error:', e); }
}

/* ==========================================================
   🎯 نظام اختيار سؤال عشوائي
   ========================================================== */
function getRandomQuestion(lessonId, slideIdx){
  const key = lessonId + '-' + slideIdx;
  const bank = slideQuizzes[key];
  if(!bank || bank.length === 0) return null;
  
  // إذا كانت هناك أسئلة لم تُطرح بعد، اختر من بينها
  const state = quizState[key] || { passed: false, usedIndices: [] };
  let available = bank.map((_, i) => i).filter(i => !state.usedIndices.includes(i));
  
  // إذا استُنفدت كل الأسئلة، أعد التصفير
  if(available.length === 0){
    available = bank.map((_, i) => i);
    state.usedIndices = [];
  }
  
  const randomIdx = available[Math.floor(Math.random() * available.length)];
  state.usedIndices.push(randomIdx);
  state.currentQuestionIdx = randomIdx;
  state.passed = false;
  quizState[key] = state;
  saveProgress();
  
  return { ...bank[randomIdx], bankIndex: randomIdx };
}

/* ==========================================================
   📖 فتح الدرس وبناء الشرائح
   ========================================================== */
function openLesson(id){
  stopSpeak();
  currentLesson = id;
  currentSlideIndex = 0;
  const lesson = curriculum.find(l=>l.id===id);
  document.getElementById('top-title').textContent = lesson.title;
  
  const content = document.getElementById('content');
  let html = '<h1 id="lesson-title">' + lesson.title + '</h1>';
  
  // شريط تقدم الاختبارات
  html += `
    <div class="quiz-progress" id="quiz-progress">
      <span>🎯 تقدمك:</span>
      <div class="quiz-progress-dots" id="quiz-progress-dots"></div>
    </div>
  `;
  
  lesson.slides.forEach((slide, i)=>{
    const key = id + '-' + i;
    const state = quizState[key] || {};
    const passedClass = state.passed ? ' quiz-passed' : '';
    
    html += `
      <div class="slide-card${passedClass}" id="slide-${i}" data-slide="${i}">
        <div class="slide-header">
          <span class="slide-number">الشريحة ${i+1} من ${lesson.slides.length}</span>
          <button class="slide-play-btn" onclick="speakSlide(${i})" title="اسمع الشريحة">🔊</button>
        </div>
        <span class="voice-badge" id="voice-badge-${i}">
          <span class="voice-wave"><span></span><span></span><span></span><span></span></span>
          <span>جاري الشرح...</span>
        </span>
        <h2 class="slide-title">${slide.title}</h2>
        <div class="teacher-hidden" id="teacher-${i}">${slide.teacher || ''}</div>
        <div class="detail-hidden" id="detail-${i}">${slide.detail || ''}</div>
        <div class="detail-hidden" id="narration-${i}">${slide.narration || ''}</div>
        <div class="slide-body">
          ${slide.content}
        </div>
        ${slide.illustration ? `<div class="slide-illustration">${slide.illustration}</div>` : ''}
        <div class="slide-quiz" id="quiz-${i}">
          <div class="slide-quiz-header">🎯 اختبر فهمك قبل الانتقال</div>
          <div class="slide-quiz-question" id="quiz-q-${i}">جاري تحميل السؤال...</div>
          <div class="slide-quiz-options" id="quiz-opts-${i}"></div>
          <div class="slide-quiz-feedback" id="quiz-fb-${i}"></div>
        </div>
      </div>
    `;
  });
  
  html += `
    <div class="action-bar">
      <button class="btn btn-success" onclick="markStatus('understood')">✅ فهمت</button>
      <button class="btn btn-warn" onclick="markStatus('review')">🔁 راجع</button>
      <button class="btn btn-primary" onclick="startSingleQuiz(${lesson.id})">❓ اختبرني</button>
    </div>
  `;
  
  content.innerHTML = html;
  document.getElementById('main').scrollTop = 0;
  renderSidebar();
  
  // بناء الاختبارات بعد إدراج HTML
  lesson.slides.forEach((slide, i)=>{
    initSlideQuiz(id, i);
  });
  
  updateQuizProgressBar();
}

/* ==========================================================
   🎯 تهيئة اختبار الشريحة
   ========================================================== */
function initSlideQuiz(lessonId, slideIdx){
  const key = lessonId + '-' + slideIdx;
  const state = quizState[key] || {};
  const qDiv = document.getElementById('quiz-q-' + slideIdx);
  const optsDiv = document.getElementById('quiz-opts-' + slideIdx);
  const fbDiv = document.getElementById('quiz-fb-' + slideIdx);
  const card = document.getElementById('slide-' + slideIdx);
  
  if(!qDiv || !optsDiv) return;
  
  // إذا نجح سابقاً، اعرض رسالة نجاح
  if(state.passed){
    qDiv.textContent = '✅ لقد أتممت هذا الاختبار بنجاح';
    optsDiv.innerHTML = '';
    fbDiv.className = 'slide-quiz-feedback show success';
    fbDiv.textContent = '🎉 أحسنت! يمكنك الانتقال للشريحة التالية';
    if(card) card.classList.add('quiz-passed');
    return;
  }
  
  const question = getRandomQuestion(lessonId, slideIdx);
  if(!question){
    // لا يوجد أسئلة لهذه الشريحة - اسمح بالمرور
    qDiv.textContent = 'هذه الشريحة للمطالعة فقط';
    optsDiv.innerHTML = '';
    fbDiv.className = 'slide-quiz-feedback show success';
    fbDiv.textContent = '✨ يمكنك المتابعة';
    state.passed = true;
    quizState[key] = state;
    saveProgress();
    if(card) card.classList.add('quiz-passed');
    updateQuizProgressBar();
    return;
  }
  
  qDiv.textContent = question.q;
  optsDiv.innerHTML = '';
  
  question.options.forEach((opt, i)=>{
    const btn = document.createElement('button');
    btn.className = 'slide-quiz-option';
    btn.textContent = opt;
    btn.onclick = () => checkSlideAnswer(lessonId, slideIdx, i, question.correct, btn);
    optsDiv.appendChild(btn);
  });
}

function checkSlideAnswer(lessonId, slideIdx, selected, correct, btn){
  const key = lessonId + '-' + slideIdx;
  const optsDiv = document.getElementById('quiz-opts-' + slideIdx);
  const fbDiv = document.getElementById('quiz-fb-' + slideIdx);
  const card = document.getElementById('slide-' + slideIdx);
  const allOpts = optsDiv.querySelectorAll('.slide-quiz-option');
  
  allOpts.forEach(b => b.disabled = true);
  
  if(selected === correct){
    btn.classList.add('correct');
    fbDiv.className = 'slide-quiz-feedback show success';
    fbDiv.textContent = '🎉 إجابة صحيحة! أحسنت';
    const state = quizState[key] || {};
    state.passed = true;
    quizState[key] = state;
    saveProgress();
    if(card) card.classList.add('quiz-passed');
    updateQuizProgressBar();
    showToast('✅ إجابة صحيحة!');
  } else {
    btn.classList.add('wrong');
    allOpts[correct].classList.add('correct');
    fbDiv.className = 'slide-quiz-feedback show error';
    fbDiv.textContent = '❌ إجابة خاطئة. الإجابة الصحيحة بالأخضر. حاول مرة أخرى';
    showToast('❌ حاول مرة أخرى');
    
    // بعد 2.5 ثانية، أعد المحاولة بسؤال جديد
    setTimeout(() => {
      if(card) {
        card.classList.remove('quiz-passed');
      }
      initSlideQuiz(lessonId, slideIdx);
    }, 3000);
  }
}

function updateQuizProgressBar(){
  const dots = document.getElementById('quiz-progress-dots');
  if(!dots || !currentLesson) return;
  const lesson = curriculum.find(l => l.id === currentLesson);
  if(!lesson) return;
  
  dots.innerHTML = '';
  lesson.slides.forEach((_, i)=>{
    const key = currentLesson + '-' + i;
    const state = quizState[key] || {};
    const dot = document.createElement('div');
    dot.className = 'quiz-progress-dot' + (state.passed ? ' done' : '');
    dot.textContent = i + 1;
    dots.appendChild(dot);
  });
}

/* ==========================================================
   ✅ تحديد حالة الدرس (فهمت / راجع)
   ========================================================== */
function markStatus(status){
  if(!currentLesson){ showToast('اختر درساً أولاً! 📖'); return; }
  const lesson = curriculum.find(l=>l.id===currentLesson);
  lesson.status = (lesson.status === status) ? 'unread' : status;
  saveProgress();
  renderSidebar();
  const msgs = {understood:'✅ أحسنت!', review:'🔁 لا بأس، سنراجعها.', unread:'تم إلغاء التحديد'};
  showToast(msgs[lesson.status]);
}

function showToast(msg){
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(()=>t.remove(), 2500);
}

function scrollToTop(){
  document.getElementById('main').scrollTo({top:0, behavior:'smooth'});
}

/* ==========================================================
   🔊 الأصوات
   ========================================================== */
function loadVoices(){
  return new Promise((resolve)=>{
    if(!('speechSynthesis' in window)){ resolve([]); return; }
    let attempts = 0;
    function tryGet(){
      const voices = window.speechSynthesis.getVoices();
      if(voices && voices.length > 0){ resolve(voices); }
      else if(attempts < 20){ attempts++; setTimeout(tryGet, 150); }
      else { resolve([]); }
    }
    tryGet();
  });
}
function pickAutoVoice(voices){
  if(!voices || voices.length === 0) return null;
  const priorities = [
    v => v.lang === 'ar-EG', v => v.lang === 'ar_EG',
    v => v.lang.startsWith('ar-EG'), v => v.lang === 'ar-SA',
    v => v.lang.startsWith('ar-SA'), v => v.lang.startsWith('ar'),
  ];
  for(const test of priorities){
    const found = voices.find(test);
    if(found) return found;
  }
  return null;
}

/* ==========================================================
   🧹 دالة تنظيف النص - مسح كل الإيموجي
   ========================================================== */
function cleanSpeechText(value){
  let text = String(value || '');
  text = text.replace(/[\u{1F300}-\u{1F9FF}]/gu, ' ');
  text = text.replace(/[\u{1FA00}-\u{1FAFF}]/gu, ' ');
  text = text.replace(/[\u{2600}-\u{26FF}]/gu, ' ');
  text = text.replace(/[\u{2700}-\u{27BF}]/gu, ' ');
  text = text.replace(/[\u{2190}-\u{21FF}]/gu, ' ');
  text = text.replace(/[\u{2B00}-\u{2BFF}]/gu, ' ');
  text = text.replace(/[\u{1F000}-\u{1F02F}]/gu, ' ');
  text = text.replace(/[\u{1F0A0}-\u{1F0FF}]/gu, ' ');
  text = text.replace(/[\u{1F100}-\u{1F1FF}]/gu, ' ');
  text = text.replace(/[\u{1F200}-\u{1F2FF}]/gu, ' ');
  text = text.replace(/[\u{1F900}-\u{1F9FF}]/gu, ' ');
  text = text.replace(/[\u{1F680}-\u{1F6FF}]/gu, ' ');
  text = text.replace(/[\u{1F600}-\u{1F64F}]/gu, ' ');
  text = text.replace(/[\u{1F400}-\u{1F4FF}]/gu, ' ');
  text = text.replace(/[\u{1F500}-\u{1F5FF}]/gu, ' ');
  text = text.replace(/[\u{1F700}-\u{1F77F}]/gu, ' ');
  text = text.replace(/[\u{1F780}-\u{1F7FF}]/gu, ' ');
  text = text.replace(/[\u{1F800}-\u{1F8FF}]/gu, ' ');
  text = text.replace(/[\u{1FA70}-\u{1FAFF}]/gu, ' ');
  text = text.replace(/[\uFE00-\uFE0F]/g, '');
  text = text.replace(/\u200D/g, '');
  text = text.replace(/\u20E3/g, '');
  text = text.replace(/[\u{2022}\u{25CF}\u{25CB}\u{25A0}\u{25A1}\u{25C6}\u{25C7}]/gu, ' ');
  text = text.replace(/[•●○◦◆◇■□▪▫▲▼◄►★☆✓✔✗✘]/g, ' ');
  text = text.replace(/[☀☁☂☃☄★☆☎☏☑☒]/g, ' ');
  text = text.replace(/[✅❌❓❗⚠️]/g, ' ');
  text = text.replace(/مخطط\s*(?:بياني\s*)?(?:شريطي|بالأشرطة)\s*(?:للتعريف|للتوضيح)?/gi, ' ');
  text = text.replace(/وصف\s*(?:الرسم|المخطط)\s*(?:البياني)?/gi, ' ');
  text = text.replace(/[©®™℗℠℃℉℞℡]/g, ' ');
  text = text.replace(/[←→↑↓↔↕⇐⇒⇔]/g, ' ');
  text = text.replace(/\s+/g, ' ').trim();
  return text;
}

/* ==========================================================
   📝 استخراج نص الشريحة للقراءة
   ترتيب: narration → detail → teacher → content
   ========================================================== */
function getSlideText(index){
  const lesson = curriculum.find(l => l.id === currentLesson);
  if (!lesson || !lesson.slides[index]) return '';

  const slide = lesson.slides[index];
  
  // 1. النص المُشكَّل للقراءة الصحيحة (الأولوية)
  const narration = cleanSpeechText(slide.narration || '');
  // 2. الشرح التفصيلي الموسّع
  const detail = cleanSpeechText(slide.detail || '');
  // 3. الشرح المبسط (احتياطي)
  const teacher = cleanSpeechText(slide.teacher || '');
  
  // 4. المحتوى المرئي على الشريحة
  const parts = [];
  const source = document.createElement('div');
  source.innerHTML = slide.content || '';
  source.querySelectorAll(
    'svg, img, canvas, picture, video, audio, .slide-illustration, script, style, [role="img"], [aria-label]'
  ).forEach(el => el.remove());

  source.querySelectorAll('.definition-box, .slide-text').forEach(el => {
    const text = cleanSpeechText(el.innerText || el.textContent || '');
    if (text) parts.push(text);
  });

  source.querySelectorAll('.slide-list li').forEach(el => {
    const text = cleanSpeechText(el.innerText || el.textContent || '');
    if (text && !parts.includes(text)) parts.push(text);
  });

  const book = parts.join(' ').replace(/\s+/g, ' ').trim();
  
  const combined = [narration, detail, teacher, book].filter(t => t).join('. ');
  return cleanSpeechText(combined);
}

/* ==========================================================
   🎙️ القراءة المحلية (SpeechSynthesis)
   ========================================================== */
async function speakSlide(index){
  if(!currentLesson){ showToast('اختر درساً أولاً! 📖'); return; }
  if(isSpeaking){ stopSpeak(); }
  
  const text = getSlideText(index);
  if(!text){ showToast('لا يوجد نص'); return; }
  
  if(!selectedVoice){
    const voices = await loadVoices();
    const saved = loadSettings();
    if(saved.voiceName){
      const found = voices.find(v => v.name === saved.voiceName);
      if(found) selectedVoice = found;
    }
    if(!selectedVoice) selectedVoice = pickAutoVoice(voices);
  }
  
  currentSlideIndex = index;
  scrollToSlide(index);
  
  window.speechSynthesis.cancel();
  isSpeaking = true;
  document.getElementById('speak-btn').classList.add('speaking');
  showVoiceBadge(index, false);
  highlightSlide(index);
  
  const utter = new SpeechSynthesisUtterance(text);
  if(selectedVoice){ utter.voice = selectedVoice; utter.lang = selectedVoice.lang; }
  else { utter.lang = 'ar-EG'; }
  utter.rate = rate;
  utter.pitch = pitch;
  utter.onend = ()=>{
    hideVoiceBadge(index);
    unhighlightSlide(index);
    endSpeak();
    if(autoAdvance){
      const lesson = curriculum.find(l=>l.id===currentLesson);
      if(currentSlideIndex < lesson.slides.length - 1){
        setTimeout(()=>speakSlide(currentSlideIndex + 1), 500);
      }
    }
  };
  utter.onerror = ()=>{
    hideVoiceBadge(index);
    unhighlightSlide(index);
    endSpeak();
  };
  window.speechSynthesis.speak(utter);
}

async function toggleSpeak(){
  if(isSpeaking){ stopSpeak(); return; }
  if(!currentLesson){ showToast('اختر درساً أولاً! 📖'); return; }
  if(!('speechSynthesis' in window)){ showToast('❌ المتصفح لا يدعم الصوت'); return; }
  speakSlide(currentSlideIndex >= 0 ? currentSlideIndex : 0);
}

/* ==========================================================
   ☁️ القراءة السحابية (Google TTS)
   ========================================================== */
async function toggleCloudSpeak(){
  if(currentAudio && !currentAudio.paused){ stopSpeak(); return; }
  if(!currentLesson){ showToast('اختر درساً أولاً! 📖'); return; }
  if(!navigator.onLine){ showToast('⚠️ تحتاج اتصال بالإنترنت'); return; }
  speakSlideCloud(currentSlideIndex >= 0 ? currentSlideIndex : 0);
}

async function speakSlideCloud(index){
  const lesson = curriculum.find(l=>l.id===currentLesson);
  if(!lesson || !lesson.slides[index]) return;
  const text = getSlideText(index);
  if(!text){ showToast('لا يوجد نص'); return; }
  
  currentSlideIndex = index;
  scrollToSlide(index);
  
  const cloudBtn = document.getElementById('cloud-speak-btn');
  cloudBtn.classList.add('speaking-cloud');
  showVoiceBadge(index, true);
  highlightSlide(index);
  
  const chunks = splitTextIntoChunks(text, 180);
  
  try {
    for(let i = 0; i < chunks.length; i++){
      const url = 'https://translate.google.com/translate_tts?ie=UTF-8&q=' + encodeURIComponent(chunks[i]) + '&tl=ar&client=tw-ob';
      const audio = new Audio(url);
      currentAudio = audio;
      await new Promise((resolve, reject)=>{
        audio.onended = resolve;
        audio.onerror = () => reject(new Error('فشل تحميل الصوت'));
        audio.play().catch(reject);
      });
      if(!cloudBtn.classList.contains('speaking-cloud')) return;
    }
    hideVoiceBadge(index);
    unhighlightSlide(index);
    cloudBtn.classList.remove('speaking-cloud');
    currentAudio = null;
    if(autoAdvance && currentSlideIndex < lesson.slides.length - 1){
      setTimeout(()=>speakSlideCloud(currentSlideIndex + 1), 500);
    }
  } catch(err){
    hideVoiceBadge(index);
    unhighlightSlide(index);
    cloudBtn.classList.remove('speaking-cloud');
    currentAudio = null;
    showToast('❌ ' + (err.message || 'حدث خطأ'));
  }
}

function stopSpeak(){
  if('speechSynthesis' in window) window.speechSynthesis.cancel();
  if(currentAudio){ currentAudio.pause(); currentAudio = null; }
  endSpeak();
}
function endSpeak(){
  isSpeaking = false;
  document.getElementById('speak-btn').classList.remove('speaking');
  document.getElementById('cloud-speak-btn').classList.remove('speaking-cloud');
  document.querySelectorAll('.voice-badge').forEach(el => el.classList.remove('active', 'cloud'));
  document.querySelectorAll('.slide-card').forEach(el => el.classList.remove('active-voice'));
}
function showVoiceBadge(index, isCloud){
  const el = document.getElementById('voice-badge-' + index);
  if(el){ el.classList.add('active'); el.classList.toggle('cloud', isCloud); }
}
function hideVoiceBadge(index){
  const el = document.getElementById('voice-badge-' + index);
  if(el) el.classList.remove('active', 'cloud');
}
function highlightSlide(index){
  document.querySelectorAll('.slide-card').forEach(el => el.classList.remove('active-voice'));
  const el = document.getElementById('slide-' + index);
  if(el) el.classList.add('active-voice');
}
function unhighlightSlide(index){
  const el = document.getElementById('slide-' + index);
  if(el) el.classList.remove('active-voice');
}
function scrollToSlide(index){
  const el = document.getElementById('slide-' + index);
  if(el){ el.scrollIntoView({behavior:'smooth', block:'start'}); }
}
function splitTextIntoChunks(text, maxLen){
  const chunks = [];
  const sentences = text.split(/(?<=[.،؟!\n])\s*/);
  let current = '';
  for(const sentence of sentences){
    if((current + ' ' + sentence).length <= maxLen){
      current += (current ? ' ' : '') + sentence;
    } else {
      if(current) chunks.push(current.trim());
      if(sentence.length > maxLen){
        const words = sentence.split(' ');
        let part = '';
        for(const w of words){
          if((part + ' ' + w).length <= maxLen){ part += (part ? ' ' : '') + w; }
          else { if(part) chunks.push(part.trim()); part = w; }
        }
        if(part) current = part;
      } else { current = sentence; }
    }
  }
  if(current) chunks.push(current.trim());
  return chunks.filter(c => c.length > 0);
}

/* ==========================================================
   ⚙️ إعدادات الصوت
   ========================================================== */
function saveSettings(){
  try{
    localStorage.setItem('voiceSettingsV10', JSON.stringify({
      voiceName: selectedVoice ? selectedVoice.name : null,
      rate: rate, pitch: pitch
    }));
  }catch(e){}
}
function loadSettings(){
  try{
    const s = JSON.parse(localStorage.getItem('voiceSettingsV10') || '{}');
    if(s.rate) rate = s.rate;
    if(s.pitch) pitch = s.pitch;
    return s;
  }catch(e){ return {}; }
}
async function openVoicePanel(){
  document.getElementById('voice-panel').classList.add('active');
  const list = document.getElementById('voice-list');
  list.innerHTML = '<div style="text-align:center;padding:20px;color:#94a3b8">جاري التحميل...</div>';
  allVoices = await loadVoices();
  if(!selectedVoice && allVoices.length > 0){
    const saved = loadSettings();
    if(saved.voiceName){
      const found = allVoices.find(v => v.name === saved.voiceName);
      if(found) selectedVoice = found;
    }
    if(!selectedVoice) selectedVoice = pickAutoVoice(allVoices);
  }
  document.getElementById('rate-slider').value = rate;
  document.getElementById('rate-value').textContent = rate.toFixed(2);
  document.getElementById('pitch-slider').value = pitch;
  document.getElementById('pitch-value').textContent = pitch.toFixed(2);
  renderVoiceList();
}
function closeVoicePanel(){
  document.getElementById('voice-panel').classList.remove('active');
  if('speechSynthesis' in window) window.speechSynthesis.cancel();
}
function renderVoiceList(){
  const list = document.getElementById('voice-list');
  if(allVoices.length === 0){
    list.innerHTML = '<div style="text-align:center;padding:20px;color:#94a3b8">⚠️ لم يتم تحميل أي أصوات.</div>';
    return;
  }
  const arabicVoices = allVoices.filter(v => v.lang.toLowerCase().startsWith('ar'));
  const otherVoices = allVoices.filter(v => !v.lang.toLowerCase().startsWith('ar'));
  list.innerHTML = '';
  if(arabicVoices.length === 0){
    const warn = document.createElement('div');
    warn.style.cssText = 'background:#fef3c7;color:#92400e;padding:14px;border-radius:10px;text-align:right;line-height:1.8;font-size:12.5px';
    warn.innerHTML = '<b>⚠️ لا يوجد صوت عربي على جهازك!</b>';
    list.appendChild(warn);
  }
  arabicVoices.forEach(v => list.appendChild(createVoiceItem(v, true)));
  if(otherVoices.length > 0){
    const sep = document.createElement('div');
    sep.style.cssText = 'padding:8px 4px;font-size:11.5px;font-weight:700;color:#94a3b8;margin-top:8px';
    sep.textContent = '🔈 أصوات أخرى:';
    list.appendChild(sep);
    otherVoices.slice(0, 10).forEach(v => list.appendChild(createVoiceItem(v, false)));
  }
}
function createVoiceItem(voice, isArabic){
  const div = document.createElement('div');
  const isSelected = selectedVoice && selectedVoice.name === voice.name && selectedVoice.lang === voice.lang;
  div.className = 'voice-item' + (isSelected ? ' selected' : '');
  const nameDiv = document.createElement('div');
  nameDiv.className = 'voice-item-info';
  nameDiv.innerHTML = '<div class="voice-item-name">' + (isArabic ? '🇸🇦 ' : '') + voice.name + '</div>' +
    '<div class="voice-item-lang">' + voice.lang + '</div>';
  const actions = document.createElement('div');
  actions.className = 'voice-item-actions';
  const testBtn = document.createElement('button');
  testBtn.className = 'mini-btn gray';
  testBtn.textContent = '🔊';
  testBtn.onclick = (e)=>{ e.stopPropagation(); testSingleVoice(voice); };
  const selectBtn = document.createElement('button');
  selectBtn.className = 'mini-btn ' + (isSelected ? 'success' : 'purple');
  selectBtn.textContent = isSelected ? '✓' : 'اختر';
  selectBtn.onclick = (e)=>{
    e.stopPropagation();
    selectedVoice = voice;
    saveSettings();
    renderVoiceList();
    showToast('✅ تم اختيار: ' + voice.name);
  };
  actions.appendChild(testBtn);
  actions.appendChild(selectBtn);
  div.appendChild(nameDiv);
  div.appendChild(actions);
  div.onclick = ()=>{
    selectedVoice = voice;
    saveSettings();
    renderVoiceList();
    showToast('✅ تم اختيار: ' + voice.name);
  };
  return div;
}
function testSingleVoice(voice){
  if(!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance('مرحباً، هذا اختبار للصوت العربي.');
  utter.voice = voice;
  utter.lang = voice.lang;
  utter.rate = rate;
  utter.pitch = pitch;
  window.speechSynthesis.speak(utter);
}
function testVoice(){
  if(!selectedVoice){ showToast('⚠️ اختر صوتاً أولاً'); return; }
  testSingleVoice(selectedVoice);
}
function updateRate(val){
  rate = parseFloat(val);
  document.getElementById('rate-value').textContent = rate.toFixed(2);
  saveSettings();
}
function updatePitch(val){
  pitch = parseFloat(val);
  document.getElementById('pitch-value').textContent = pitch.toFixed(2);
  saveSettings();
}

/* ==========================================================
   👆 الضغط المطول للسؤال
   ========================================================== */
document.addEventListener('touchstart', (e) => {
  if(e.target.closest('#ask-modal') || e.target.closest('#voice-panel') || e.target.closest('#quiz-modal') || e.target.closest('#topbar') || e.target.closest('#sidebar') || e.target.closest('#floating-actions')) return;
  if(!e.target.closest('.slide-card')) return;
  const target = e.target;
  longPressTimer = setTimeout(()=>{
    const sel = window.getSelection();
    const text = sel.toString().trim();
    if(text.length > 4 && text.length < 500){ selectedText = text; openAskModal(); }
    else {
      const sentence = findSentenceAround(target);
      if(sentence){ selectedText = sentence; openAskModal(); }
      else { showToast('اضغط مطولاً على أي جملة 💡'); }
    }
  }, 700);
}, {passive:true});
document.addEventListener('touchend', ()=>{ if(longPressTimer){clearTimeout(longPressTimer);longPressTimer=null;} });
document.addEventListener('touchmove', ()=>{ if(longPressTimer){clearTimeout(longPressTimer);longPressTimer=null;} });

document.addEventListener('mouseup', (e) => {
  if(document.getElementById('ask-modal').classList.contains('active')) return;
  const sel = window.getSelection();
  const text = sel.toString().trim();
  if(text.length > 4 && text.length < 500){ selectedText = text; openAskModal(); }
});

function findSentenceAround(el){
  let text = '';
  let node = el;
  while(node && !text && node !== document.body){
    text = node.textContent || '';
    if(text.length > 30) break;
    node = node.parentElement;
  }
  if(!text) return '';
  const sentences = text.split(/[.،؟!\n]/).map(s=>s.trim()).filter(s=>s.length > 5);
  if(sentences.length === 0) return text.substring(0, 100);
  return sentences[0];
}

function openAskModal(){
  if(!selectedText){ showToast('اضغط مطولاً على جملة لتسأل 💡'); return; }
  document.getElementById('selected-text').textContent = '📌 النقطة: "' + selectedText + '"';
  document.getElementById('user-question').value = '';
  document.getElementById('answer-area').classList.remove('show');
  document.getElementById('answer-area').textContent = '';
  document.getElementById('loading').classList.remove('show');
  document.getElementById('ask-modal').classList.add('active');
}
function closeAskModal(){ document.getElementById('ask-modal').classList.remove('active'); }

/* ==========================================================
   👨‍🏫 سؤال المدرس (مع إصلاح مشكلة الاتصال)
   ========================================================== */
async function askTeacher(){
  const question = document.getElementById('user-question').value.trim();
  if(!selectedText && !question){ showToast('اكتب سؤالك أو حدد جملة'); return; }
  
  document.getElementById('loading').classList.add('show');
  document.getElementById('answer-area').classList.remove('show');
  
  const loadingEl = document.getElementById('loading');
  loadingEl.innerHTML = '<div class="loader"></div><div>المدرس يبحث عن الإجابة...</div>';
  
  try {
    let wikiInfo = '';
    const searchTerm = (selectedText || question).substring(0, 80);
    
    // محاولة جلب معلومات من ويكيبيديا مع timeout
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8000);
      const searchQ = encodeURIComponent(searchTerm);
      const wikiRes = await fetch(
        'https://ar.wikipedia.org/w/api.php?action=query&list=search&srsearch=' + searchQ + '&format=json&origin=*',
        { signal: controller.signal }
      );
      clearTimeout(timeoutId);
      const wikiData = await wikiRes.json();
      if(wikiData.query && wikiData.query.search && wikiData.query.search.length > 0){
        const title = wikiData.query.search[0].title;
        const controller2 = new AbortController();
        const timeoutId2 = setTimeout(() => controller2.abort(), 8000);
        const sumRes = await fetch(
          'https://ar.wikipedia.org/api/rest_v1/page/summary/' + encodeURIComponent(title),
          { signal: controller2.signal }
        );
        clearTimeout(timeoutId2);
        const sumData = await sumRes.json();
        if(sumData.extract) wikiInfo = sumData.extract;
      }
    } catch(wikiErr){ 
      console.log('Wikipedia fetch failed:', wikiErr); 
    }
    
    const prompt = 'أنت مدرس خبير في مادة تكنولوجيا المعلومات لطلاب الصف الأول الثانوي. اشرح باللغة العربية الفصحى المبسطة، وكن ودوداً ومشجعاً، واستخدم أمثلة من الحياة اليومية.\n\nالنقطة التي يريد الطالب فهمها: "' + selectedText + '"\n' + (question ? 'السؤال: ' + question : '') + '\n' + (wikiInfo ? 'معلومة إضافية: ' + wikiInfo.substring(0, 500) : '') + '\n\nاشرح بالعربية الفصحى بأسلوب واضح ومنظم.';
    
    let answer = '';
    let success = false;
    
    // محاولة 1: pollinations.ai
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 20000);
      const url = 'https://text.pollinations.ai/' + encodeURIComponent(prompt);
      const response = await fetch(url, { signal: controller.signal });
      clearTimeout(timeoutId);
      if(response.ok){
        answer = await response.text();
        if(answer && answer.length > 10) success = true;
      }
    } catch(e1){
      console.log('Pollinations attempt 1 failed:', e1);
    }
    
    // محاولة 2: pollinations مع نموذج مختلف
    if(!success){
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 20000);
        const url = 'https://text.pollinations.ai/' + encodeURIComponent(prompt) + '?model=openai';
        const response = await fetch(url, { signal: controller.signal });
        clearTimeout(timeoutId);
        if(response.ok){
          answer = await response.text();
          if(answer && answer.length > 10) success = true;
        }
      } catch(e2){
        console.log('Pollinations attempt 2 failed:', e2);
      }
    }
    
    // محاولة 3: استخدام ويكيبيديا فقط كحل احتياطي
    if(!success && wikiInfo){
      answer = 'بناءً على المعلومات المتاحة:\n\n' + wikiInfo;
      success = true;
    }
    
    document.getElementById('loading').classList.remove('show');
    const answerArea = document.getElementById('answer-area');
    
    if(success && answer){
      answerArea.textContent = answer;
      answerArea.classList.add('show');
    } else {
      answerArea.innerHTML = '<b>⚠️ عذراً،</b> حدثت مشكلة في الاتصال بالخادم. تأكد من:<br>• اتصالك بالإنترنت يعمل<br>• لم يتم حجب الموقع<br>• حاول مرة أخرى بعد قليل';
      answerArea.classList.add('show');
    }
  } catch(err){
    console.error('askTeacher error:', err);
    document.getElementById('loading').classList.remove('show');
    const answerArea = document.getElementById('answer-area');
    answerArea.innerHTML = '<b>⚠️ خطأ:</b> ' + (err.message || 'حدثت مشكلة غير متوقعة') + '<br><br>تأكد من اتصالك بالإنترنت وحاول مرة أخرى.';
    answerArea.classList.add('show');
  }
}

document.getElementById('user-question').addEventListener('keydown', (e)=>{
  if(e.key === 'Enter' && !e.shiftKey){ e.preventDefault(); askTeacher(); }
});

/* ==========================================================
   ❓ الاختبار العام (Modal)
   ========================================================== */
function startSingleQuiz(id){
  if(!id){ showToast('اختر درساً أولاً! 📖'); return; }
  currentQuizList = [id];
  currentQuizIdx = 0;
  openQuiz();
}
function startGlobalQuiz(){
  currentQuizList = curriculum.filter(l => l.status === 'review').map(l => l.id);
  if(currentQuizList.length === 0){ showToast('لا توجد دروس للمراجعة!'); return; }
  currentQuizIdx = 0;
  openQuiz();
}
function openQuiz(){
  if(currentQuizIdx >= currentQuizList.length){ showToast('🎉 انتهى الاختبار!'); closeQuiz(); return; }
  const lesson = curriculum.find(l => l.id === currentQuizList[currentQuizIdx]);
  document.getElementById('quiz-title').textContent = '🎯 ' + lesson.title;
  document.getElementById('quiz-question').textContent = lesson.question;
  const opts = document.getElementById('quiz-options');
  opts.innerHTML = '';
  document.getElementById('feedback').textContent = '';
  document.getElementById('next-q-btn').style.display = 'none';
  lesson.options.forEach((opt, i)=>{
    const b = document.createElement('button');
    b.className = 'option'; b.textContent = opt;
    b.onclick = ()=> checkAnswer(i, lesson.correct, b);
    opts.appendChild(b);
  });
  document.getElementById('quiz-modal').classList.add('active');
}
function checkAnswer(sel, corr, btn){
  const all = document.querySelectorAll('#quiz-options .option');
  all.forEach(b => b.disabled = true);
  const fb = document.getElementById('feedback');
  if(sel === corr){
    btn.classList.add('correct');
    fb.textContent = '🎉 إجابة صحيحة!';
    fb.style.color = '#10b981';
  } else {
    btn.classList.add('wrong');
    all[corr].classList.add('correct');
    fb.textContent = '❌ إجابة خاطئة. الإجابة الصحيحة بالأخضر.';
    fb.style.color = '#ef4444';
  }
  document.getElementById('next-q-btn').style.display = 'inline-flex';
}
function nextQuestion(){
  currentQuizIdx++;
  if(currentQuizIdx < currentQuizList.length) openQuiz();
  else { showToast('🎉 انتهت الأسئلة!'); closeQuiz(); }
}
function closeQuiz(){ document.getElementById('quiz-modal').classList.remove('active'); }

/* ==========================================================
   🚀 التشغيل
   ========================================================== */
loadProgress();
loadSettings();
renderSidebar();

if('speechSynthesis' in window){
  const initV = ()=>{
    loadVoices().then(voices => {
      allVoices = voices;
      const saved = loadSettings();
      if(saved.voiceName){
        const found = voices.find(v => v.name === saved.voiceName);
        if(found) selectedVoice = found;
      }
      if(!selectedVoice) selectedVoice = pickAutoVoice(voices);
    });
  };
  window.speechSynthesis.onvoiceschanged = initV;
  initV();
  document.addEventListener('touchstart', function once(){
    initV();
    document.removeEventListener('touchstart', once);
  }, {once:true});
}

console.log('✅ المدرس الشخصي جاهز - الإصدار 10');
console.log('📚 عدد الدروس:', curriculum.length);
console.log('🎯 بنك الأسئلة:', Object.keys(slideQuizzes).length, 'شريحة');