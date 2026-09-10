// let themButtonContent = 'Dark Mode<i class="fa fa-moon-o buttonToggleIcon"></i>';
// const body = document.body;

// if (body.classList.contains('darkMode')) {
//     themButtonContent = 'Light Mode<i class="fa fa-sun-o buttonToggleIcon"></i>';
// } else {
//     themButtonContent = 'Dark Mode<i class="fa fa-moon-o buttonToggleIcon"></i>';
// }

const translations = {
    en: {
        // themeSwitchButton: "",
        // expandCollapseButton: 'Expand All<i class="fa fa-plus-square buttonToggleIcon"></i>',
        languageSwitchButton: 'Arabic<i class="fa fa-hand-o-left buttonToggleIcon"></i>',
        nameBig: "ABDULLA ABDULRAHIM",
        
        feedbackTitle: "Your feedback on this website",
        feedbackDescription: "It's completely optional, however, I'd appreciate it if you take some time to share with me what can I do to improve this website!",
        feedbackLink: 'CLICK HERE TO SHARE<i class="fa fa-external-link-square buttonToggleIcon"></i>',
        
        languagesHeader: 'Languages <span class="toggleIcon">(+)</span>',
        languagesArabic: '📜 Arabic<span>(Native)</span>',
        languagesEnglish: '📜 English<span>(IELTS UKVI 7.5)</span>',
        
        skillsHeader: 'Skills <span class="toggleIcon">(+)</span>',
        softSkills: "Soft Skills",
        technicalSkills: "Technical Skills",
        toolsUsed: "Tools Used",
        
        educationHeader: 'Education <span class="toggleIcon">(+)</span>',
        iknsEDU: '📍🏫 Ibn Khuldoon National School<span>2012 - 2024</span>',
        strathEDU: '📍🏫 University of Strathclyde Bahrain<span>2024 - Ongoing</span>',

        workExperienceHeader: 'Work Experience <span class="toggleIcon">(+)</span>',
        
        programsHeader: 'Programs <span class="toggleIcon">(+)</span>',
        
        projectsHeader: 'Projects <span class="toggleIcon">(+)</span>',
        
        certificationsHeader: 'Certifications <span class="toggleIcon">(+)</span>'
    }
    ,
    ar: {
        // themeSwitchButton: "",
        // expandCollapseButton: 'توسيع الكل<i class="fa fa-plus-square buttonToggleIcon"></i>',
        languageSwitchButton: 'English<i class="fa fa-hand-o-right buttonToggleIcon"></i>',
        nameBig: "عبدالله عبدالرحيم",
        feedbackTitle: "رأيكم نحو هذا الموقع",

        feedbackDescription: "الأمر اختياري تماماً، ومع ذلك، سأكون ممتناً لو خصصتم بعض الوقت لمشاركة أفكاركم معي حول ما يمكنني فعله لتحسين هذا الموقع!",
        feedbackLink: 'انقر هنا للمشاركة<i class="fa fa-external-link-square buttonToggleIcon"></i>',
        
        languagesHeader: 'اللغات <span class="toggleIcon">(+)</span>',
        languagesArabic: '📜 العربية<span>(اللغة الأم)</span>',
        languagesEnglish: '📜 الإنجليزية<span>(7.5 في امتحان الآيلتس)</span>',
        
        skillsHeader: 'المهارات <span class="toggleIcon">(+)</span>',
        softSkills: "المهارات الشخصية",
        technicalSkills: "المهارات التقنية",
        toolsUsed: "الأدوات المستخدمة",

        educationHeader: 'التعليم <span class="toggleIcon">(+)</span>',
        iknsEDU: '📍🏫 مدرسة ابن خلدون الوطنية <span>2012 - 2024</span>',
        strathEDU: '📍🏫 جامعة ستراثكلايد البحرين <span>2024 - مستمر</span>',

        workExperienceHeader: 'الخبرة العملية <span class="toggleIcon">(+)</span>',
        
        programsHeader: 'البرامج التعليمية <span class="toggleIcon">(+)</span>',
        
        projectsHeader: 'المشاريع <span class="toggleIcon">(+)</span>',
        
        certificationsHeader: 'الشهادات <span class="toggleIcon">(+)</span>'
    }
};

let currentLang = "en";

document.getElementById("languageSwitchButton").addEventListener("click", () => {
  // Toggle language
  currentLang = currentLang === "en" ? "ar" : "en";

  // Update <html> attributes
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";

  // Loop through translations and update elements
  for (const [id, value] of Object.entries(translations[currentLang])) {
    const elem = document.getElementById(id);
    if (elem) {
      elem.innerHTML = value; // use innerHTML so icons and markup render
    }
  }
});