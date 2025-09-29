import {ChevronDownIcon, GlobeIcon} from "lucide-react";
import React from "react";
import {useLanguage} from "../../../../contexts/LanguageContext";
import {Badge} from "../../../../components/ui/badge";
import {Button} from "../../../../components/ui/button";
import {Card, CardContent} from "../../../../components/ui/card";

export const InformationSection = (): JSX.Element => {
    const {language, setLanguage, t} = useLanguage();

    const navigationItems = [
        { label: t('nav.main'), id: 'main' },
        { label: t('nav.howItWorks'), id: 'howItWorks' },
        { label: t('nav.pricing'), id: 'pricing' },
        { label: t('nav.calculator'), id: 'pricing' }, // Calculator is part of pricing section
        { label: t('nav.faq'), id: 'faq' },
        { label: t('nav.contacts'), id: 'contacts' },
        { label: t('nav.partners'), id: 'partners' },
    ];

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    const infoCards = [
        {
            id: 1,
            bgColor: "bg-[#afe4ff]",
            icon: "/airplane-tilt.svg",
            title: t('infoCard1.title'),
            content: t('infoCard1.content'),
            backgroundElements: (
                <div
                    className="absolute top-[calc(50.00%_-_670px)] left-[calc(50.00%_-_499px)] w-[474px] h-[474px] rotate-[30deg]">
                    <div className="absolute top-0 left-0 w-[474px] h-[474px] overflow-hidden opacity-40">
                        <img
                            className="absolute w-[136.60%] h-[136.60%] top-[185.32%] left-[-553.26%] rotate-[-30deg]"
                            alt="Vector"
                        />
                        <img
                            className="absolute w-[109.39%] h-[108.26%] top-[-5.70%] left-[-4.71%] rotate-[-30deg]"
                            alt="Vector"
                            src="/vector-1.svg"
                        />
                    </div>
                    <div className="top-[57px] left-[57px] w-[360px] h-[360px] absolute overflow-hidden opacity-40">
                        <img
                            className="absolute w-[136.60%] h-[136.60%] top-[238.49%] left-[-751.12%] rotate-[-30.00deg]"
                            alt="Vector"
                        />
                        <img
                            className="absolute w-[109.39%] h-[108.26%] top-[-5.70%] left-[-4.71%] rotate-[-30.00deg]"
                            alt="Vector"
                            src="/vector-1.svg"
                        />
                    </div>
                    <div className="top-[106px] left-[106px] w-[263px] h-[263px] absolute overflow-hidden opacity-40">
                        <img
                            className="absolute w-[136.60%] h-[136.60%] top-[319.97%] left-[-1054.35%] rotate-[-30.00deg]"
                            alt="Vector"
                        />
                        <img
                            className="absolute w-[109.39%] h-[108.26%] top-[-5.70%] left-[-4.71%] rotate-[-30.00deg]"
                            alt="Vector"
                            src="/vector-1.svg"
                        />
                    </div>
                </div>
            ),
        },
        {
            id: 2,
            bgColor: "bg-[#f4e7fe]",
            icon: "/ticket.svg",
            title: t('infoCard2.title'),
            content: t('infoCard2.content'),
            backgroundElements: (
                <div className="absolute top-[106px] left-[calc(50.00%_-_410px)] w-[820px] h-[820px]">
                    <div className="absolute top-0 left-0 w-[820px] h-[820px] opacity-40 bg-[100%_100%]">
                        <img
                            className="absolute w-[81.25%] h-[68.75%] top-[18.75%] left-[9.38%]"
                            alt="Vector"
                            src="/vector-5.svg"
                        />
                    </div>
                    <div className="top-[99px] left-[99px] w-[622px] h-[622px] absolute opacity-40 bg-[100%_100%]">
                        <img
                            className="absolute w-[81.25%] h-[68.75%] top-[18.75%] left-[9.38%]"
                            alt="Vector"
                            src="/vector.svg"
                        />
                    </div>
                    <div className="top-[183px] left-[183px] w-[454px] h-[454px] absolute opacity-40 bg-[100%_100%]">
                        <img
                            className="absolute w-[81.25%] h-[68.75%] top-[18.75%] left-[9.38%]"
                            alt="Vector"
                            src="/vector.svg"
                        />
                    </div>
                </div>
            ),
        },
        {
            id: 3,
            bgColor: "bg-[#ffe77a]",
            icon: "/seal-percent.svg",
            title: t('infoCard3.title'),
            content: t('infoCard3.content'),
            backgroundElements: null,
        },
    ];

    return (
        <section className="relative w-full min-h-screen bg-[url(/image-2.png)] bg-cover bg-bottom">
            <div className="container mx-auto px-4 pt-7 lg:px-0">
                <div className="flex  justify-between items-start mb-8 pt-4 lg:pt-0">
                    <img className="w-[94px] h-[38px]" alt="Group" src="/group-2.png"/>
                    <nav className="hidden lg:flex items-center justify-center gap-6 pb-4">
                        {navigationItems.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => scrollToSection(item.id)}
                                className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-white text-xs tracking-[0] leading-[18px] whitespace-nowrap cursor-pointer hover:opacity-80 transition-opacity"
                            >
                                {item.label}
                            </button>
                        ))}
                    </nav>
                    <div
                        className="flex items-center gap-1 p-2 bg-[#ffffff4a] rounded-[46px] backdrop-blur-[51.2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(51.2px)_brightness(100%)] cursor-pointer"
                        onClick={() => setLanguage(language === 'uz' ? 'ru' : 'uz')}
                    >
                        <GlobeIcon className="w-3 h-3 text-white"/>
                        <div
                            className="[font-family:'SF_Pro-Medium',Helvetica] font-medium text-white text-xs text-center tracking-[0] leading-3 whitespace-nowrap">
                            {language === 'uz' ? 'O\'zbek' : 'Русский'}
                        </div>
                        <ChevronDownIcon className="w-3 h-3 text-white"/>
                    </div>
                </div>

                <div className="flex flex-col items-center text-center mb-16">


                    <div className="max-w-[762px] mb-8 relative">
                        <h1 className="[text-shadow:0px_1px_0px_#00000026] [font-family:'SF_Pro-Bold',Helvetica] font-bold text-white text-8xl text-center tracking-[0] leading-[96px] mb-4">
                            {t('hero.title')}
                        </h1>
                        <div
                            className="py-[5px] px-[16px] bg-[#E9FF43] top-[75px] rotate-[-8deg] text-[#212121] text-[22px] max-w-[176px] absolute font-bold rounded-[46px] ">
                            {t('hero.badge')}
                        </div>
                        <div
                            className="max-w-[490px] mx-auto [font-family:'SF_Pro-Regular',Helvetica] font-normal text-transparent text-2xl text-center tracking-[0] leading-[28.8px]">
              <span className="text-[#212121cc]">
                {t('hero.subtitle')}{" "}
              </span>
                            <span className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-[#212121cc]">
                {t('hero.savings')}
              </span>
                        </div>
                    </div>

                    <Button
                        className={"inline-flex bg-white shadow-medium items-center justify-center gap-2.5 px-4 py-3 rounded-[46px] h-auto hover:bg-gray-50 transition-colors"}
                        onClick={() => window.open('https://t.me/triplab_bot', '_blank')}
                        >
                        <div
                            className="[font-family:'SF_Pro-Medium',Helvetica] font-medium text-[#212121] text-sm text-center tracking-[0] leading-[14px] whitespace-nowrap">
                            {t('hero.cta')}
                        </div>
                    </Button>
                </div>

                <div className="text-center mb-16">
                    <h2 className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-[#212121] text-[64px] text-center tracking-[0] leading-[64px] mb-4">
                        {t('howItWorks.title')}
                    </h2>

                    <div
                        className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-transparent text-2xl text-center tracking-[0] leading-9">
                        <span className="text-[#212121cc]">Va nima uchun </span>
                        <span className="text-[#212121]">{t('howItWorks.subtitleBold')}</span>
                        <span className="text-[#212121cc]">
              {" "}{t('howItWorks.subtitleEnd')}
            </span>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row lg:flex-wrap justify-center gap-[22px] pb-16">
                    {infoCards.map((card) => (
                        <Card
                            key={card.id}
                            className={`w-80 h-[400px] ${card.bgColor} rounded-[32px] overflow-hidden border-0`}
                        >
                            <CardContent className="p-0 relative h-full">
                                {card.backgroundElements}

                                <div className="flex flex-col w-[272px] items-start gap-3.5 relative top-6 left-6 z-10">
                                    <img className="w-12 h-12" alt={card.title} src={card.icon}/>

                                    <h3 className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-[#212121] text-[32px] tracking-[0] leading-[35.2px]">
                                        {card.title}
                                    </h3>

                                    <div
                                        className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#212121] text-base tracking-[0] leading-[22.4px]">
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
