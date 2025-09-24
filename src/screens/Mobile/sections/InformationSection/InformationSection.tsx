import { ChevronDownIcon, GlobeIcon, MenuIcon } from "lucide-react";
import React, { useState } from "react";
import { useLanguage } from "../../../../contexts/LanguageContext";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const InformationSection = (): JSX.Element => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    t('nav.main'),
    t('nav.howItWorks'),
    t('nav.pricing'),
    t('nav.calculator'),
    t('nav.faq'),
    t('nav.contacts'),
    t('nav.partners'),
  ];

  const infoCards = [
    {
      id: 1,
      bgColor: "bg-[#afe4ff]",
      icon: "/airplane-tilt.svg",
      title: t('infoCard1.title'),
      content: t('infoCard1.content'),
    },
    {
      id: 2,
      bgColor: "bg-[#f4e7fe]",
      icon: "/ticket.svg",
      title: t('infoCard2.title'),
      content: t('infoCard2.content'),
    },
    {
      id: 3,
      bgColor: "bg-[#ffe77a]",
      icon: "/seal-percent.svg",
      title: t('infoCard3.title'),
      content: t('infoCard3.content'),
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-[url(/image-2.png)] bg-cover bg-center">
      <div className="container mx-auto px-4">
        {/* Mobile Header */}
        <div className="flex justify-between items-center pt-4 pb-4">
          <img className="w-[94px] h-[38px]" alt="Group" src="/group-2.png" />
          
          <div className="flex items-center gap-3">
            <div 
              className="flex items-center gap-1 p-2 bg-[#ffffff4a] rounded-[46px] backdrop-blur-[51.2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(51.2px)_brightness(100%)] cursor-pointer"
              onClick={() => setLanguage(language === 'uz' ? 'ru' : 'uz')}
            >
              <GlobeIcon className="w-3 h-3 text-white" />
              <div className="[font-family:'SF_Pro-Medium',Helvetica] font-medium text-white text-xs text-center tracking-[0] leading-3 whitespace-nowrap">
                {language === 'uz' ? 'O\'zbek' : 'Русский'}
              </div>
              <ChevronDownIcon className="w-3 h-3 text-white" />
            </div>
            
            <button 
              className="p-2 bg-[#ffffff4a] rounded-[46px] backdrop-blur-[51.2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(51.2px)_brightness(100%)]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <MenuIcon className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-20 left-4 right-4 bg-white rounded-2xl shadow-lg p-4 z-50">
            <nav className="flex flex-col gap-4">
              {navigationItems.map((item, index) => (
                <div
                  key={index}
                  className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-black text-sm tracking-[0] leading-[18px] cursor-pointer hover:opacity-80 transition-opacity py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </div>
              ))}
            </nav>
          </div>
        )}

        {/* Hero Section */}
        <div className="flex flex-col items-center text-center mb-12 mt-8">
          <Badge className="inline-flex items-center justify-center gap-[10.01px] px-[16.02px] py-[12.01px] bg-[#e9ff43] rounded-[46.05px] rotate-[-3.99deg] mb-6 h-auto">
            <div className="[font-family:'Inter',Helvetica] font-bold text-[#212121] text-lg text-center tracking-[0] leading-[20px] whitespace-nowrap">
              {t('hero.badge')}
            </div>
          </Badge>

          <div className="max-w-full mb-6">
            <h1 className="[text-shadow:0px_1px_0px_#00000026] [font-family:'SF_Pro-Bold',Helvetica] font-bold text-white text-4xl text-center tracking-[0] leading-tight mb-4">
              {t('hero.title')}
            </h1>

            <div className="max-w-full mx-auto [font-family:'SF_Pro-Regular',Helvetica] font-normal text-transparent text-base text-center tracking-[0] leading-relaxed">
              <span className="text-[#212121cc]">
                {t('hero.subtitle')}{" "}
              </span>
              <span className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-[#212121cc]">
                {t('hero.savings')}
              </span>
            </div>
          </div>

          <Button className="inline-flex bg-white shadow-medium items-center justify-center gap-2.5 px-6 py-3 rounded-[46px] h-auto hover:bg-gray-50 transition-colors">
            <div className="[font-family:'SF_Pro-Medium',Helvetica] font-medium text-[#212121] text-sm text-center tracking-[0] leading-[14px] whitespace-nowrap">
              {t('hero.cta')}
            </div>
          </Button>
        </div>

        {/* How it works section */}
        <div className="text-center mb-12">
          <h2 className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-[#212121] text-3xl text-center tracking-[0] leading-tight mb-4">
            {t('howItWorks.title')}
          </h2>

          <div className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-transparent text-base text-center tracking-[0] leading-relaxed">
            <span className="text-[#212121cc]">{t('howItWorks.subtitle')} </span>
            <span className="text-[#212121]">{t('howItWorks.subtitleBold')}</span>
            <span className="text-[#212121cc]">
              {" "}{t('howItWorks.subtitleEnd')}
            </span>
          </div>
        </div>

        {/* Info Cards */}
        <div className="flex flex-col gap-6 pb-12">
          {infoCards.map((card) => (
            <Card
              key={card.id}
              className={`w-full h-auto ${card.bgColor} rounded-[24px] overflow-hidden border-0`}
            >
              <CardContent className="p-6 relative h-full">
                <div className="flex flex-col items-start gap-4 relative z-10">
                  <img className="w-10 h-10" alt={card.title} src={card.icon} />

                  <h3 className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-[#212121] text-xl tracking-[0] leading-tight">
                    {card.title}
                  </h3>

                  <div className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#212121] text-sm tracking-[0] leading-relaxed">
                    {card.content}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};