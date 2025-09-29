import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'uz' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  uz: {
    // Navigation
    'nav.main': 'Asosiy',
    'nav.howItWorks': 'Bu qanday ishlaydi',
    'nav.pricing': 'Narxlar',
    'nav.calculator': 'Kalkulyator',
    'nav.faq': 'Savollar',
    'nav.contacts': 'Kontaktlar',
    'nav.partners': 'Hamkorlar',
    
    // Hero section
    'hero.badge': 'Triplab Pass',
    'hero.title': 'Arzon narxlarda sayohat qiling',
    'hero.subtitle': 'Bizning obunalar bilan xar sayohatingizdan yiliga',
    'hero.savings': '$60dan +$1000gacha tejab qoling',
    'hero.cta': 'Obunani ulash',
    
    // How it works section
    'howItWorks.title': 'Bu qanday ishlaydi?',
    'howItWorks.subtitle': 'Va nima uchun',
    'howItWorks.subtitleBold': 'Triplab Pass',
    'howItWorks.subtitleEnd': 'bilan siz foydada bo\'lasiz',
    
    // Info cards
    'infoCard1.title': 'Tur firmalari qanday ishlaydi',
    'infoCard1.content': 'Odatda agentliklar turoperator narxiga 5–10% komissiya qo\'shadi. Natijada siz har safar asl narxidan qimmatroq to\'laysiz.',
    'infoCard2.title': 'Obuna qanday ishlaydi',
    'infoCard2.content': 'Siz yiliga bir marta belgilangan summani (80$ dan boshlab) to\'laysiz va turlarni asl narxda — hech qanday qo\'shimcha va yashirin komissiyasiz bron qilasiz.',
    'infoCard3.title': 'Yiliga qancha tejashingiz mumkin',
    'infoCard3.content': 'Agar yiliga kamida ikki marta sayohat qilsangiz, obuna o\'zini to\'liq oqlaydi. Juftliklar yiliga 300$ gacha, oilalar (5 kishilik) esa 600$ va undan ko\'proq mablag\'ni tejashlari mumkin.',
    
    // Pricing section
    'pricing.title': 'Qulay narxlar',
    'pricing.subtitle': 'O\'zingiz uchun qulay narxlarni toping',
    'pricing.solo.title': 'Solo',
    'pricing.solo.description': 'Bir o\'zingiz sayohatchi bo\'lsangiz siz uchun ideal tanlo\'v',
    'pricing.duo.title': 'Duo',
    'pricing.duo.description': 'Ikki kishi uchun mos keladigan obuna turi',
    'pricing.group.title': 'Group',
    'pricing.group.description': '3-5 kishilik oilalar va do\'stlar uchun mos tanlo\'v',
    'pricing.cta': 'Obunani ulash',
    'pricing.period': '/ yiliga',
    
    // Trip pass summary
    'tripPass.text': 'TRIPLAB PASS BILAN SIZ XAR BIR TUR PAKETDAN O\'RTACHA 5% - 10%GACHA TEJASHINGIZ MUMKIN',
    
    // Calculator section
    'calculator.title': 'Qancha tejashingiz mumkin',
    'calculator.subtitle': 'Kalkulyatorimiz orqali bir yilda qancha tejashingizni ko\'ring',
    'calculator.tripsLabel': 'Sayohatlar sonini tanlang',
    'calculator.tripsUnit': '/ yiliga',
    'calculator.table.subscription': 'Obuna nomi / narxi',
    'calculator.table.tourCompany': 'Tur firma narxi',
    'calculator.table.tourOperator': 'Tur operator narxi',
    'calculator.table.savings': 'Tejalgan summa',
    'calculator.table.average': '(o\'rtacha)',
    
    // FAQ section
    'faq.title': 'Savollarga javoblar',
    'faq.subtitle': 'Ko\'p so\'raladigan savollar va javoblar',
    'faq.moreQuestions.title': 'Yana savollar bormi?',
    'faq.moreQuestions.subtitle': 'Biz bilan bog\'laning va biz sizga batafsil ma\'lumot beramiz',
    'faq.contact': 'Bog\'lanish',
    'faq.telegramBot': 'Telegram-botga o\'tish',
    
    // Contact section
    'contact.title': 'Biz bilan bog\'laning',
    'contact.phone': 'Telefon',
    'contact.address': 'Manzil',
    'contact.email': 'Email',
    'contact.googleMaps': 'Google Maps',
    
    // Operators section
    'operators.title': 'Bizda mavjud bo\'lgan tur operatorlar',
    
    // Footer
    'footer.copyright': '© 2025 Triplab tour MChJ',
    'footer.license': 'Ruxsatnoma',
    'footer.certificate': 'Guvohnoma',
    'footer.telegram': 'Telegram',
    'footer.instagram': 'Instagram',
  },
  ru: {
    // Navigation
    'nav.main': 'Главная',
    'nav.howItWorks': 'Как это работает',
    'nav.pricing': 'Цены',
    'nav.calculator': 'Калькулятор',
    'nav.faq': 'Вопросы',
    'nav.contacts': 'Контакты',
    'nav.partners': 'Партнеры',
    
    // Hero section
    'hero.badge': 'Triplab Pass',
    'hero.title': 'Путешествуйте по доступным ценам',
    'hero.subtitle': 'С нашими подписками экономьте на каждом путешествии в год',
    'hero.savings': 'от $60 до +$1000',
    'hero.cta': 'Подключить подписку',
    
    // How it works section
    'howItWorks.title': 'Как это работает?',
    'howItWorks.subtitle': 'И почему с',
    'howItWorks.subtitleBold': 'Triplab Pass',
    'howItWorks.subtitleEnd': 'вы будете в выигрыше',
    
    // Info cards
    'infoCard1.title': 'Как работают турфирмы',
    'infoCard1.content': 'Обычно агентства добавляют 5–10% комиссии к цене туроператора. В результате вы каждый раз платите дороже реальной цены.',
    'infoCard2.title': 'Как работает подписка',
    'infoCard2.content': 'Вы платите один раз в год определенную сумму (от $80) и бронируете туры по реальной цене — без дополнительных и скрытых комиссий.',
    'infoCard3.title': 'Сколько можете сэкономить в год',
    'infoCard3.content': 'Если путешествуете минимум два раза в год, подписка полностью окупается. Пары могут сэкономить до $300 в год, семьи (5 человек) — $600 и более.',
    
    // Pricing section
    'pricing.title': 'Удобные цены',
    'pricing.subtitle': 'Найдите удобные для себя цены',
    'pricing.solo.title': 'Solo',
    'pricing.solo.description': 'Идеальный выбор, если вы путешествуете один',
    'pricing.duo.title': 'Duo',
    'pricing.duo.description': 'Подходящий тип подписки для двоих',
    'pricing.group.title': 'Group',
    'pricing.group.description': 'Подходящий выбор для семей и друзей 3-5 человек',
    'pricing.cta': 'Подключить подписку',
    'pricing.period': '/ в год',
    
    // Trip pass summary
    'tripPass.text': 'С TRIPLAB PASS ВЫ МОЖЕТЕ СЭКОНОМИТЬ В СРЕДНЕМ 5% - 10% С КАЖДОГО ТУРПАКЕТА',
    
    // Calculator section
    'calculator.title': 'Сколько можете сэкономить',
    'calculator.subtitle': 'Посмотрите через наш калькулятор, сколько сэкономите за год',
    'calculator.tripsLabel': 'Выберите количество поездок',
    'calculator.tripsUnit': '/ в год',
    'calculator.table.subscription': 'Название подписки / цена',
    'calculator.table.tourCompany': 'Цена турфирмы',
    'calculator.table.tourOperator': 'Цена туроператора',
    'calculator.table.savings': 'Сэкономленная сумма',
    'calculator.table.average': '(в среднем)',
    
    // FAQ section
    'faq.title': 'Ответы на вопросы',
    'faq.subtitle': 'Часто задаваемые вопросы и ответы',
    'faq.moreQuestions.title': 'Есть еще вопросы?',
    'faq.moreQuestions.subtitle': 'Свяжитесь с нами, и мы предоставим подробную информацию',
    'faq.contact': 'Связаться',
    'faq.telegramBot': 'Перейти в Telegram-бот',
    
    // Contact section
    'contact.title': 'Свяжитесь с нами',
    'contact.phone': 'Телефон',
    'contact.address': 'Адрес',
    'contact.email': 'Email',
    'contact.googleMaps': 'Google Maps',
    
    // Operators section
    'operators.title': 'Доступные у нас туроператоры',
    
    // Footer
    'footer.copyright': '© 2025 Triplab tour ООО',
    'footer.license': 'Лицензия',
    'footer.certificate': 'Сертификат',
    'footer.telegram': 'Telegram',
    'footer.instagram': 'Instagram',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('uz');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};