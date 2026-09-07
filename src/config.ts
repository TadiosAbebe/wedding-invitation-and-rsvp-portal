export interface MultilingualLanguage {
  code: string;
  label: string;
}

export interface ConfigType {
  groomName: Record<string, string>;
  brideName: Record<string, string>;
  monagramInitials: string;
  countdownTarget: string;
  weddingDate: Record<string, string>;
  weddingDateFormatted: Record<string, string>;
  weddingTime: Record<string, string>;
  venueName: Record<string, string>;
  venueLocation: Record<string, string>;
  venueDescription: Record<string, string>;
  addressQuery: string;
  formspreeId: string;
  googleSheetsRsvpUrl: string;
  backgroundMusicUrl: string;
  youtubeVideoId: string;
  telegramUrl: string;
  googleAnalyticsId?: string;
  sections: {
    audioPlayer: boolean;
    story: boolean;
    countdown: boolean;
    videoPreview: boolean;
    saveTheDate: boolean;
    timeline: boolean;
    gallery: boolean;
    location: boolean;
    memoryShare: boolean;
    guestbook: boolean;
    rsvpForm: boolean;
  };
  sectionOrder: string[];
  sectionConfigs: Record<string, {
    title: Record<string, string>;
    subtitle: Record<string, string>;
    showInNavBar?: boolean;
  }>;
  multilingual: {
    enabled: boolean;
    defaultLanguage: string;
    languages: MultilingualLanguage[];
  };
  timelineImages: Record<string, string[]>;
  heroImages: string[];
  introImages: {
    engagement: string;
    adventure: string;
  };
  galleryImages: Array<{
    id: string;
    url: string;
    category: string;
    title?: Record<string, string>;
    description?: Record<string, string>;
    badge?: Record<string, string>;
  }>;
  familyRegistryNotes: Array<{
    id: string;
    author: Record<string, string>;
    text: Record<string, string>;
    role: Record<string, string>;
  }>;
  translations: Record<string, any>;
  theme?: {
    primaryColor?: string;
    accentColor?: string;
    goldColor?: string;
    creamColor?: string;
    creamDarkColor?: string;
    sageColor?: string;
    sageLightColor?: string;
    primaryFont?: string;
    secondaryFont?: string;
    bodyFont?: string;
  };
}

export const DEFAULT_CONFIG: ConfigType = {
  groomName: { en: "Groom", am: "ሙሽራ" },
  brideName: { en: "Bride", am: "ሙሽሪት" },
  monagramInitials: "G&B",
  countdownTarget: "2027-09-20T16:00:00Z",
  weddingDate: { en: "September 20, 2027", am: "መስከረም 10 ቀን 2020 ዓ.ም" },
  weddingDateFormatted: { en: "Monday, Sept 20, 2027", am: "ሰኞ፣ መስከረም 10 ቀን 2020" },
  weddingTime: { en: "4:00 PM UTC", am: "ከምሽቱ 12:00 ሰዓት ጀምሮ" },
  venueName: { en: "Skylight Hotel Grand Ballroom", am: "የስካይላይት ሆቴል ታላቁ አዳራሽ (Grand Ballroom)" },
  venueLocation: { en: "Bole Skylight Hotel", am: "ቦሌ ስካይላይት ሆቴል" },
  venueDescription: {
    en: "Our wedding ceremony and reception is hosted at the magnificent Skylight Hotel.",
    am: "የሰርግ ስነ-ስርዓታችን እና የእራት ግብዣችን በታላቁና ውብ በሆነው የቦሌ ስካይላይት ሆቴል ይከናወናል።"
  },
  addressQuery: "SKYLIGHT HOTEL GRAND BALLROOM",
  formspreeId: "xxxxxxxxx",
  googleSheetsRsvpUrl: "https://script.google.com/macros/s/AKffcfzfuUANOoVp_nqhz1aACI0S1Y717gFpPsWqgKrib-xviJtpfa6aq2RCFezD2uT-0NCT/exec",
  backgroundMusicUrl: "https://github.com/TadiosAbebe/wedding-invitation-and-rsvp-portal/raw/refs/heads/main/public/music/abinet-agonafir-yewune.mp3",
  youtubeVideoId: "kebq86BTZFA",
  telegramUrl: "https://t.me/GroomAndBrideWeddingMemories",
  googleAnalyticsId: "",
  sections: {
    audioPlayer: true,
    story: true,
    countdown: true,
    videoPreview: true,
    saveTheDate: true,
    timeline: true,
    gallery: true,
    location: true,
    memoryShare: true,
    guestbook: true,
    rsvpForm: true
  },
  sectionOrder: [
    "countdown",
    "videopreview",
    "savethedate",
    "location",
    "timeline",
    "gallery",
    "memoryshare",
    "guestbook",
    "rsvpform"
  ],
  sectionConfigs: {
    story: {
      title: { en: "Our Story", am: "የፍቅር ታሪካችን" },
      subtitle: { en: "How we began", am: "ጅማሬያችን" },
      showInNavBar: true
    },
    countdown: {
      title: { en: "The Countdown", am: "የቀናት ቆጠራ" },
      subtitle: { en: "Until We say 'I do'", am: "“ቃልኪዳን” እስክንገባ ድረስ" },
      showInNavBar: false
    },
    videopreview: {
      title: { en: "Pre-wedding Moments", am: "የፍቅር ታሪካችን በከፊል" },
      subtitle: { en: "Our Love Story Captured", am: "የቅድመ-ሰርግ ልዩ ትዝታዎች" },
      showInNavBar: false
    },
    savethedate: {
      title: { en: "The Date", am: "የግብዣ ወረቀት" },
      subtitle: { en: "Reserve the Twentieth of September", am: "መስከረም አስርን ያስውቡልን" },
      showInNavBar: true
    },
    timeline: {
      title: { en: "The Wedding Day", am: "የሰርጉ እለት" },
      subtitle: { en: "Schedule of Events", am: "የመርሐግብር ሰሌዳ" },
      showInNavBar: true
    },
    gallery: {
      title: { en: "Our Memory Bank", am: "የማይረሱ ትዝታዎች" },
      subtitle: { en: "Captured Moments", am: "የእኛ ውብ ትዝታዎች" },
      showInNavBar: true
    },
    location: {
      title: { en: "Location", am: "ስነ-ስፍራ" },
      subtitle: { en: "Skylight Hotel Grand Ballroom", am: "የስካይላይት ሆቴል ታላቁ አዳራሽ" },
      showInNavBar: true
    },
    memoryshare: {
      title: { en: "Share your Memories", am: "ትዝታዎን ያጋሩ" },
      subtitle: { en: "Telegram Group Invitation", am: "የቴሌግራም የቀጥታ ትዝታ ማዕከል" },
      showInNavBar: false
    },
    guestbook: {
      title: { en: "Leave a Wish", am: "ምኞትዎን ይጻፉ" },
      subtitle: { en: "Signing the Guestbook", am: "የእንግዳ ማስታወሻ መጻፊያ" },
      showInNavBar: false
    },
    rsvpform: {
      title: { en: "The Invitation", am: "የግብዣ መቀበያ" },
      subtitle: { en: "Kindly Respond", am: "እባክዎን ይመዝገቡ" },
      showInNavBar: true
    }
  },
  multilingual: {
    enabled: true,
    defaultLanguage: "en",
    languages: [
      { code: "en", label: "EN" },
      { code: "am", label: "አማ" }
    ]
  },
  timelineImages: {
    t1: ["/images/timeline01.jpg"],
    t2: ["/images/timeline02.jpg"],
    t3: ["/images/timeline03.jpg"],
    t4: ["/images/timeline04.jpg"]
  },
  heroImages: [
    "/images/hero06.jpg",
    "/images/hero05.jpg",
    "/images/hero07.jpg",
    "/images/hero02.jpg"
  ],
  introImages: {
    engagement: "/images/groom04.jpg",
    adventure: "/images/bride04.jpg"
  },
  galleryImages: [
    { 
      id: "gal-1", 
      url: "/images/gallery01.jpg", 
      category: "moments",
      title: { en: "Warm Sunlit Smiles", am: "ጣፋጭ ፈገግታዎች" },
      description: { en: "Captured in Addis Ababa, 2025", am: "አዲስ አበባ፣ ፳፻፲፯ ዓ.ም የተቀረጸ" },
      badge: { en: "MOMENTS", am: "ትዝታዎች" }
    },
    { 
      id: "gal-2", 
      url: "/images/gallery02.jpg", 
      category: "adventure",
      title: { en: "Spontaneous Adventures", am: "የጉዞዎቻችን ትዝታ" },
      description: { en: "Our favorite road trips", am: "ልዩ የጉዞ ትዝታዎቻችን" },
      badge: { en: "ADVENTURE", am: "ጉዞዎች" }
    },
    { 
      id: "gal-3", 
      url: "/images/gallery03.jpg", 
      category: "engagement",
      title: { en: "A Golden Promise We Made", am: "የእጮኝነት የተቀደሰ ኪዳን" },
      description: { en: "The sunset of our love", am: "ከአድማስ ባሻገር" },
      badge: { en: "ENGAGEMENT", am: "የእጮኝነት ጊዜ" }
    },
    { 
      id: "gal-4", 
      url: "/images/gallery04.jpg", 
      category: "adventure",
      title: { en: "Exploring Scenic Horizons Together", am: "በጋራ ህይወትን ስንቃኝ" },
      description: { en: "Nature escape", am: "የተፈጥሮ ውበት" },
      badge: { en: "ADVENTURE", am: "ጉዞዎች" }
    },
    { 
      id: "gal-5", 
      url: "/images/gallery05.jpg", 
      category: "moments",
      title: { en: "Gazing Into Our Beautiful Future", am: "ወደ ብሩህ ተስፋችን ስንመለከት" },
      description: { en: "Forever in your eyes", am: "ከአይንህ ስር" },
      badge: { en: "MOMENTS", am: "ትዝታዎች" }
    },
    { 
      id: "gal-6", 
      url: "/images/gallery06.jpg", 
      category: "engagement",
      title: { en: "Everlasting Devotion & Faith", am: "ዘላለማዊ ፍቅርና እምነት" },
      description: { en: "The ring of promise", am: "የቃልኪዳኑ ቀለበት" },
      badge: { en: "ENGAGEMENT", am: "እጮኝነት" }
    },
    { 
      id: "gal-7", 
      url: "/images/gallery07.jpg", 
      category: "moments",
      title: { en: "Everyday Laughter & Coffee", am: "የዕለት ተዕለት ጣፋጭ ጨዋታ" },
      description: { en: "Coffee date morning", am: "የጠዋት ፈገግታ" },
      badge: { en: "MOMENTS", am: "ትዝታዎች" }
    },
    { 
      id: "gal-8", 
      url: "/images/gallery08.jpg", 
      category: "adventure",
      title: { en: "Golden Hour Mountain Escapes", am: "በተራሮች ላይ መሳቅና መጫወት" },
      description: { en: "Mount Entoto hills", am: "በእንጦጦ ኮረብቶች ላይ" },
      badge: { en: "ADVENTURE", am: "ጉዞዎች" }
    }
  ],
  familyRegistryNotes: [
    {
      id: "parent-1",
      author: { en: "Groom's Father Blessing", am: "የሙሽራው አባት ምርቃት" },
      text: { en: "We are overjoyed to welcome the bride into our family. May your love be a shining testament of commitment, mutual respect, and infinite blessings.", am: "ሙሽሪትን ወደ ቤተሰባችን በመቀበላችን ታላቅ ደስታ ይሰማናል። ፍቅራችሁ የጽናት፣ የመከባበር እና የዘላቂ በረከት ማረጋገጫ ይሁን።" },
      role: { en: "Groom's Father", am: "የሙሽራው አባት" }
    },
    {
      id: "parent-2",
      author: { en: "Groom's Mother Blessing", am: "የሙሽራው እናት ምርቃት" },
      text: { en: "May the Almighty bless your home with peace, endless laughter, and understanding. Keep your hearts unified as one, and build a household on sincerity and grace.", am: "ፈጣሪ ቤታችሁን በሰላም፣ በሳቅ እና በምክክር ይባርከው። ልባችሁን በአንድነት አጽኑ፤ ትዳራችሁን በቅንነት እና በሞገስ ገንቡ።" },
      role: { en: "Groom's Mother", am: "የሙሽራው እናት" }
    },
    {
      id: "parent-3",
      author: { en: "Bride's Mother Blessing", am: "የሙሽሪት እናት ምርቃት" },
      text: { en: "My heart overflows with love seeing my beautiful daughter and the groom step into this lifetime covenant. May you stand strong together, looking out for each other every single day.", am: "ልጄ እና ሙሽራው ይህንን የተቀደሰ የህይወት ቃልኪዳን ሲገቡ በማየቴ ልቤ በደስታ ይፈሳል። ሁልጊዜም እርስ በርስ እየተከባበራችሁና እየተደጋገፋችሁ በጽናት ቁሙ።" },
      role: { en: "Bride's Mother", am: "የሙሽሪት እናት" }
    },
    {
      id: "parent-4",
      author: { en: "Bride's Father Blessing", am: "የሙሽሪት አባት ምርቃት" },
      text: { en: "May the next phase of your life be filled with joy and blessing.", am: "ቀጣዩ የህይወት ምዕራፋችሁ በደስታና በበረከት የተሞላ ይሁን።" },
      role: { en: "Bride's Father", am: "የሙሽሪት አባት" }
    }
  ],
  translations: {
    common: {
      and: { en: "and", am: "እና" },
      saveTheDate: { en: "Save the Date", am: "ቀኑን ያስቀምጡ" },
      areGettingMarried: { en: "Are Getting Married", am: "የጋብቻ ስነ-ስርዓት" },
      rsvpBtn: { en: "RSVP NOW", am: "ግብዣውን ይቀበሉ" },
      viewMap: { en: "View Coordinates Map", am: "ካርታ ተመልከት" },
      days: { en: "Days", am: "ቀናት" },
      hours: { en: "Hours", am: "ሰዓታት" },
      minutes: { en: "Minutes", am: "ደቂቃዎች" },
      seconds: { en: "Seconds", am: "ሰከንዶች" },
      languageSelected: { en: "English", am: "አማርኛ" }
    },
    hero: {
      storyScroll: { en: "Our Story", am: "ስለ እኛ" },
      saveDate: { en: "Save the Date", am: "እባኮትን ይህንን እለት ያውቁልን" }
    },
    nav: {
      story: { en: "Our Story", am: "የእኛ ታሪክ" },
      calendar: { en: "Calendar", am: "ቀን መቁጠሪያ" },
      timeline: { en: "Timeline", am: "መርሐግብር" },
      gallery: { en: "Gallery", am: "የፎቶ ማዕከለ-ስዕላት" },
      location: { en: "Location", am: "ስፍራ" },
      guestbook: { en: "Guestbook", am: "ትዝታዎች" },
      rsvp: { en: "RSVP", am: "ግብዣ መቀበያ" },
      rsvpQuick: { en: "RSVP Now", am: "አሁኑኑ ይመዝገቡ" }
    },
    intro: {
      title: { en: "A Celebration of Love", am: "በፍቅር የታጀበ አሸንዳ" },
      quote: { en: '"Once in a while, right in the middle of an ordinary life, love gives us a fairy tale."', am: '“አልፎ አልፎ፣ ከተለመደው የኑሮ መስመር መካከል፣ እውነተኛ ፍቅር ህይወትን የተዋበ ተረት ያደርገዋል።”' },
      para1: { en: "We invite you to join us, our most cherished family and friends, as we exchange vows and begin our lifelong journey with one another. Your presence is the greatest gift of all as we embark on this beautiful new chapter together.", am: "እጅግ የምንወዳችሁና የምናከብራችሁ ቤተሰቦቻችንና ወዳጆቻችን፣ የዘላለም ቃልኪዳናችንን ስንፈጽም አብራችሁን እንድትሰነብቱ በታላቅ አክብሮት እንጋብዛለን። አዲሱን የህይወት ምዕራፋችንን ስንጀምር መገኘታችሁ ትልቅ ደስታ ይሆንልናል።" },
      readBtn: { en: "Read Our Story", am: "የእኛን ታሪክ ያንብቡ" },
      closeBtn: { en: "Close Story", am: "ታሪኩን ዝጋ" },
      photo1Caption: { en: "The moment she said yes", am: "እሺ ያለችበት ያ ውብ ቅጽበት" },
      photo2Caption: { en: "Laughter in the countryside", am: "አስደሳች ጉዞ" },
      modalTitle: { en: "How We Met & Got Engaged", am: "የመጀመሪያው መገናኛ እና የጥያቄው ሰዓት" },
      modalBody1: { en: "<strong>How We Met:</strong> Our paths first crossed in a crowded corner café in Bath. A brief and laughing realization became the foundation of our lifetime.", am: "<strong>እንዴት እንደተገናኘን፦</strong> በአንድ በተጨናነቀ የቡና መሸጫ ካፌ ውስጥ ነበር ለመጀመሪያ ጊዜ የተያየነው። ስህተቱን በሳቅና በቀልድ ከተረዳን በኋላ በዚያኑ እለት ለሰዓታት አውግተናል። ያቺ የሻይና ቡና መደባለቅ የህይወታችን መጀመሪያ ሆነች።" },
      modalBody2: { en: "<strong>The Proposal:</strong> As the setting sun painted the sky in magnificent hues of salmon and soft violet. Under the shadow of an ancient stone archway, he pulled out a ring and asked her to spend the rest of her life with him. She said, 'A thousand times yes!'", am: "<strong>የጋብቻ ጥያቄ፦</strong> ጀንበር ሰማዩን ውብ በሆኑ ህብረ ቀለማት ስታስውበው፣ ተንበርክኮ የሚያምረውን ቀለበት አውጥቶ የህይወቷ አጋር እንድትሆን ጠየቃት። እሷም በደስታና በእንባ ታጅባ “መቶ ሺህ ጊዜ እሺ!” አለችው።" },
      modalFooter: { en: '"And so the journey of a lifetime begins."', am: "“እንግዲህ የህይወት ዘመን ጉዞ በይፋ ተጀመረ።”" },
      proposalSubtitle: { en: "THE PROPOSAL // 01", am: "የጥያቄው ሰዓት // 01" },
      adventureSubtitle: { en: "THE ADVENTURE // 02", am: "ልዩ ጉዞ // 02" },
      memoriesBadge: { en: "MEMORIES", am: "ትዝታዎች" },
      engagementTitle: { en: "The Engagement", am: "የእጮኝነት ጊዜ" },
      adventureTitle: { en: "The Adventure", am: "የእግር ጉዞ" }
    },
    countdown: {
      heading: { en: 'Until We Say "I Do"', am: "“ቃልኪዳን” እስክንገባ ድረስ" },
      headingHappilyMarried: { en: "Happily Married For", am: "በጋብቻ የታጀበ ጣፋጭ ፍቅር ለ" },
      label: { en: "The Countdown", am: "የቀናት ቆጠራ" },
      days: { en: "Days", am: "ቀናት" },
      hours: { en: "Hours", am: "ሰዓታት" },
      minutes: { en: "Minutes", am: "ደቂቃዎች" },
      seconds: { en: "Seconds", am: "ሰከንዶች" }
    },
    videoPreview: {
      label: { en: "Our Love Story Captured", am: "የፍቅር ጉዟችን በከፊል" },
      title: { en: "Pre-Wedding Moments", am: "የቅድመ-ሰርግ ልዩ ትዝታዎች" },
      tagline: { en: "A cinematic look into our journey of friendship, adventure, and mutual devotion.", am: "የፍቅር፣ የጓደኝነት እና የአንድነታችንን ጉዞ የሚያሳይ አጭር የቪዲዮ ትዝታ።" }
    },
    calendar: {
      title: { en: "The Invitation", am: "የግብዣ ወረቀት" },
      heading: { en: "Kindly Respond", am: "እባክዎን ይመዝገቡ" },
      sub: { en: "Please respond to help us plan coordinates beautifully.", am: "ዝገጅቱን በሚገባ እንድናስተካክል እባክዎን ምላሽዎን ያሳውቁን።" },
      monthsEth: {
        en: "Meskerem,Tikimt,Hidar,Tahsas,Tir,Yekatit,Megabit,Miazia,Ginbot,Sene,Hamle,Nehase,Pagume",
        am: "መስከረም,ጥቅምት,ኅዳር,ታኅሣሥ,ጥር,የካቲት,መጋቢት,ሚያዝያ,ግንቦት,ሰኔ,ሐምሌ,ነሐሴ,ጳጉሜ"
      },
      weekdays: {
        en: "Su,Mo,Tu,We,Th,Fr,Sa",
        am: "እሑ,ሰኞ,ማክ,ረቡ,ሐሙ,ዓር,ቅዳ"
      },
      addedSuccess: { en: "Added successfully!", am: "ተጨምሯል!" },
      addToCalendar: { en: "Add to Calendar", am: "ቀጠሮ ያዙ" },
      downloadIcsTip: { en: "• Downloads .ics file", am: "• የካላንደር ፋይል ያውርዱ" },
      weddingOf: { en: "Wedding", am: "የሰርግ ክብረ በዓል" },
      sundayCelebration: { en: "Sunday—The celebration begins.", am: "እሑድ—ክብረ በዓሉ ይጀምራል።" },
      defaultSubtitle: { en: "Reserve the Twentieth\nof September", am: "ይህን እለት ያስቀምጡልን" }
    },
    timeline: {
      label: { en: "The Wedding Day", am: "የሰርጉ እለት" },
      title: { en: "Schedule of Events", am: "የመርሐግብር ሰሌዳ" },
      events: [
        {
          id: "t1",
          time: { en: "1:00 PM", am: "ከሰዓት 7:00 ሰዓት" },
          title: { en: "Wedding Vows & Ceremony", am: "የቃልኪዳን መለዋወጥ ስነ-ስርዓት" },
          description: { en: "The sacred marriage exchange and ring ceremony.", am: "ቀለበት በማጥለቅ የሚፈጸም ቅዱስ ስነ-ስርዓት።" },
          iconName: "Heart"
        },
        {
          id: "t2",
          time: { en: "3:00 PM", am: "ከሰዓት 9:00 ሰዓት" },
          title: { en: "Cocktail Reception & Photos", am: "የመስተንግዶ እና የፎቶ ሰዓት" },
          description: { en: "Signature drinks and artisan canapés served fresh upon the lawns.", am: "ልዩ መጠጦች እና መክሰሶች የሚቀርቡበት ወቅት።" },
          iconName: "Wine"
        },
        {
          id: "t3",
          time: { en: "5:30 PM", am: "ከምሽቱ 11:30 ሰዓት" },
          title: { en: "Grand Dinner & Toasting", am: "የራት ግብዣ እና የምርቃት ስነ-ስርዓት" },
          description: { en: "A beautifully curated three-course harvest banquet, accompanied by parental toast.", am: "የሚያምር የራት ግብዣ እና የወላጆች የምርቃት ንግግር።" },
          iconName: "Utensils"
        },
        {
          id: "t4",
          time: { en: "8:00 PM", am: "ከምሽቱ 2:00 ሰዓት" },
          title: { en: "First Dance & Celebration", am: "የመጀመሪያ ዳንስ እና ጭፈራ" },
          description: { en: "The newlyweds open the floor! Followed by pop dance numbers.", am: "ሙሽሮቹ የዳንስ መድረኩን ከፈቱ! አስደሳች ምሽት።" },
          iconName: "Music"
        }
      ]
    },
    gallery: {
      label: { en: "The Gallery", am: "የፎቶ ማዕከለ-ስዕላት" },
      title: { en: "Our Moments", am: "የእኛ ውብ ትዝታዎች" },
      all: { en: "View All", am: "ሁሉንም አሳይ" },
      engagement: { en: "Engagement", am: "የማጨጫ ፎቶዎች" },
      adventure: { en: "Adventure", am: "የእግር ጉዞ" },
      moments: { en: "Wedding Moments", am: "አስደሳች ጊዜያት" },
      of: { en: "of", am: "ከ" }
    },
    location: {
      label: { en: "The Location", am: "ስነ-ስፍራ" },
      title: { en: "Feleke Teka Wedding Hall", am: "ፈለቀ ተካ የሰርግ አዳራሽ (Feleke Teka Wedding Hall)" },
      pinLabel: { en: "The Venue Location", am: "የክብረ በዓሉ አድራሻ" },
      byCarLabel: { en: "Travel By Vehicle", am: "በመኪና ለሚመጡ" },
      byCarText: { en: "Secure parking is provided inside the north gates starting at 12:00 PM.", am: "ደህንነቱ የተጠበቀ የመኪና ማቆሚያ በውብ አዳራሽ ግቢ ተዘጋጅቷል።" },
      addressLabel: { en: "Address", am: "አድራሻ" },
      interactiveMap: { en: "Interactive Map", am: "ካርታ" },
      clickToLoad: { en: "Click below to load the interactive venue map on this page", am: "ከተማ ማሳያ ካርታውን ለመጫን ከታች ይጫኑ" },
      showMapBtn: { en: "View Map", am: "ካርታ አሳይ" }
    },
    memoryShare: {
      label: { en: "Share Your Memories", am: "ትዝታዎን ያጋሩ" },
      title: { en: "Telegram Live Memory Box", am: "የቴሌግራም የቀጥታ ትዝታ ማዕከል" },
      desc: { en: "Please share all snapshots you capture during our wedding program to our combined Telegram live channel!", am: "እባክዎን በሰርጋችን ቀን የሚያነሱትን ማንኛውንም ድንቅ ፎቶግራፍ በቴሌግራም ግሩፓችን ያጋሩን!" },
      btnText: { en: "Join Memory Box Group", am: "የቴሌግራም ግሩፑን ይቀላቀሉ" },
      familyLabel: { en: "Family Registry", am: "የቤተሰብ መዝገብ" },
      familyTitle: { en: "Family Blessing Notes", am: "የወላጆች የምርቃት ማስታወሻዎች" },
      familyDesc: { en: "Blessings and wisdom conveyed by our loving parents, preserving generations of love.", am: "በተወዳጅ ወላጆቻችን የተላለፉ ውድ የምርቃት፣ የጥበብ እና የትዳር ምክሮች ስብስብ።" },
      wishLabel: { en: "Leave a Wish", am: "ምኞትዎን ይጻፉ" },
      wishTitle: { en: "Signing the Guestbook", am: "የእንግዳ ማስታወሻ መጻፊያ" },
      wishDesc: { en: "Write your congratulations note below to send your blessing directly to our live inbox.", am: "መልካም ምኞትዎን ከታች ባለው ቅጽ ይጻፉልን። ምክርዎ እና በረከትዎ ለኛ ትልቅ ዋጋ አለው!" },
      inputName: { en: "Your Name", am: "የእርስዎ ስም" },
      inputEmail: { en: "Your Email Address", am: "የእርስዎ የኢሜል አድራሻ" },
      inputWish: { en: "Congratulatory Wish", am: "የእንኳን ደስ አላችሁ መልክት" },
      placeholderName: { en: "e.g. Grandma Helen", am: "ለምሳሌ፦ እማሆይ ዘውዲቱ" },
      placeholderEmail: { en: "e.g. helen@example.com", am: "ለምሳሌ፦ client@domain.com" },
      placeholderWish: { en: "Writing your warm words here...", am: "የመመረቂያ ፍቅሮን እዚህ ይጻፉ..." },
      btnSend: { en: "Send Love & Wish", am: "ምኞቴን ላክ" },
      success: { en: "Wish posted successfully! Thank you for the blessings.", am: "መልካም ምኞትዎ በተሳካ ሁኔታ ተልኳል! ስላደረጉልን ምርቃት እናመሰግናለን።" },
      sending: { en: "Sending Wish...", am: "በመላክ ላይ..." },
      errorGeneric: { en: "A network error occurred. Please try again.", am: "የመረብ ስህተት አጋጥሟል። እባክዎ እንደገና ይሞክሩ።" }
    },
    rsvpForm: {
      fullName: { en: "Full Name", am: "ሙሉ ስም" },
      fullNamePl: { en: "e.g. Catherine Evans", am: "ለምሳሌ፦ ካትሪን ኢቫንስ" },
      email: { en: "Email Address", am: "የኢሜል አድራሻ" },
      attendingLabel: { en: "Will You Attend?", am: "በክብረ በዓሉ ላይ ይገኛሉ?" },
      attendingYes: { en: "Gladly Accepts", am: "በደስታ እገኛለሁ" },
      attendingNo: { en: "Regretfully Declines", am: "በማክበር እቀራለሁ" },
      bringingGuest: { en: "Bringing a Guest?", am: "ከእርስዎ ጋር እንግዳ ያመጣሉ?" },
      withGuest: { en: "Guest Included", am: "አዎ፣ ከአንድ አጃቢ ጋር" },
      noGuest: { en: "No Plus One", am: "ብቻዬን እመጣለሁ" },
      partySize: { en: "Total Party Size", am: "አጠቃላይ የሰዎች ብዛት" },
      dietary: { en: "Dietary Options", am: "የምግብ ፍላጎት ምርጫ" },
      dietaryPl: { en: "e.g. Vegetarian, Gluten-Free", am: "ለምሳሌ፦ የእፅዋት ተመጋቢ" },
      song: { en: "Dance-floor Song Request", am: "ለዳንስ ሙዚቃ ምርጫ" },
      songPl: { en: "Song Title & Artist", am: "የሙዚቃው ርዕስ እና ድምጻዊ" },
      submit: { en: "Submit RSVP Details", am: "የምዝገባ ቅጹን ላክ" },
      successHeading: { en: "Thank You, {name}!", am: "እናመሰግናለን፣ {name}!" },
      successSub: { en: "Your response is safely recorded", am: "ምላሽዎ በተሳካ ሁኔታ ተመዝግቧል" },
      digitalPass: { en: "DIGITAL RSVP PASS", am: "የዲጂታል መለያ መግቢያ" },
      digitalPassLabel: { en: "ATTENDEE", am: "ተሳታፊ" },
      partyLabel: { en: "PARTY SIZE", am: "የሰው ብዛት" },
      dietaryLabel: { en: "DIETARY REQUEST", am: "የምግብ ፍላጎት" },
      songLabel: { en: "SONG REQUESTED", am: "የተመረጠ ሙዚቃ" },
      editBtn: { en: "Edit Response", am: "መረጃ አስተካክል" },
      saving: { en: "Submitting RSVP...", am: "በመመዝገብ ላይ..." },
      sheetStored: { en: "Sent to the organizers", am: "ለጉግል ስፕረድሽት ተልኳል" },
      localStored: { en: "Saved Offline (Demo Mode)", am: "በስልክዎ ላይ ተቀምጧል" }
    }
  },
  theme: {
    primaryColor: "#2f4237",
    accentColor: "#C5A059",
    goldColor: "#C5A059",
    creamColor: "#FAF9F6",
    creamDarkColor: "#EAE7DF",
    sageColor: "#9A9587",
    sageLightColor: "#EAE7DF",
    primaryFont: "Playfair Display",
    secondaryFont: "Montserrat",
    bodyFont: "Source Serif 4"
  }
};

// Legacy support reference for unchanged components
export const CONFIG = DEFAULT_CONFIG;
