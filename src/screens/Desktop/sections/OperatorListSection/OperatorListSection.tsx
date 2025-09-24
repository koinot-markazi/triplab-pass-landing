import React from "react";
import { useLanguage } from "../../../../contexts/LanguageContext";
import { Separator } from "../../../../components/ui/separator";

export const OperatorListSection = (): JSX.Element => {
  const { t } = useLanguage();

  const navigationItems = [
    t('nav.main'),
    t('nav.howItWorks'),
    t('nav.pricing'),
    t('nav.calculator'),
    t('nav.faq'),
    t('nav.contacts'),
    t('nav.partners'),
  ];

  const footerLinks = [
    t('footer.license'),
    t('footer.certificate'),
    t('footer.telegram'),
    t('footer.instagram'),
  ];

  return (
    <section className="w-full flex flex-col items-center">
      <div className="flex h-auto lg:h-[480px] w-full relative flex-col items-center gap-6 px-4 lg:px-[220px] py-16 lg:py-20">
        <h2 className="w-full max-w-[1000px] text-[#212121] text-4xl lg:text-[64px] leading-tight lg:leading-[64px] relative mt-[-1.00px] [font-family:'SF_Pro-Bold',Helvetica] font-bold text-center tracking-[0]">
          {t('operators.title')}
        </h2>

        <img
          className="relative w-full max-w-[1000px] flex-[0_0_auto]"
          alt="Frame"
          src="/frame-1000003292.svg"
        />
      </div>

      <footer className="flex h-auto lg:h-[383px] w-full relative flex-col items-center gap-12 lg:gap-20 px-4 lg:px-[220px] py-16 lg:py-20">
        <div className="flex-col w-full max-w-[1000px] items-center gap-8 flex relative flex-[0_0_auto]">
          <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
            <div className="relative w-[84px] h-9">
              <img
                className="absolute w-[74.01%] h-[66.68%] top-0 left-0"
                alt="Triplab"
                src="/triplab.png"
              />

              <img
                className="absolute w-[71.76%] h-[81.81%] top-[18.19%] left-[28.24%]"
                alt="Black"
                src="/black.png"
              />
            </div>
          </div>

          <nav className="hidden lg:inline-flex items-start justify-center gap-8 relative flex-[0_0_auto]">
            {navigationItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="relative w-fit mt-[-1.00px] [font-family:'SF_Pro-Semibold',Helvetica] font-normal text-white text-sm tracking-[0] leading-[21px] whitespace-nowrap hover:opacity-80 transition-opacity"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col items-center gap-8 relative self-stretch w-full flex-[0_0_auto]">
          <Separator className="relative self-stretch w-full h-px bg-[#f0f0f0]" />

          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-4 lg:gap-0 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#ffffff8f] text-sm tracking-[0] leading-[21px] whitespace-nowrap">
              {t('footer.copyright')}
            </div>

            <div className="inline-flex items-start gap-4 lg:gap-6 relative flex-[0_0_auto]">
              {footerLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="relative w-fit mt-[-1.00px] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-white text-sm tracking-[0] leading-[21px] whitespace-nowrap hover:opacity-80 transition-opacity"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};
