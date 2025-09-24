import React from "react";
import { useLanguage } from "../../../../contexts/LanguageContext";
import { Separator } from "../../../../components/ui/separator";

export const OperatorListSection = (): JSX.Element => {
  const { t } = useLanguage();

  const footerLinks = [
    t('footer.license'),
    t('footer.certificate'),
    t('footer.telegram'),
    t('footer.instagram'),
  ];

  return (
    <section className="w-full flex flex-col items-center">
      <div className="flex h-auto w-full relative flex-col items-center gap-6 px-4 py-16">
        <h2 className="w-full text-[#212121] text-3xl leading-tight relative mt-[-1.00px] [font-family:'SF_Pro-Bold',Helvetica] font-bold text-center tracking-[0]">
          {t('operators.title')}
        </h2>

        <img
          className="relative w-full flex-[0_0_auto]"
          alt="Frame"
          src="/frame-1000003292.svg"
        />
      </div>

      <footer className="flex h-auto w-full relative flex-col items-center gap-12 px-4 py-16">
        <div className="flex-col w-full items-center gap-8 flex relative flex-[0_0_auto]">
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
        </div>

        <div className="flex flex-col items-center gap-8 relative self-stretch w-full flex-[0_0_auto]">
          <Separator className="relative self-stretch w-full h-px bg-[#f0f0f0]" />

          <div className="flex flex-col items-center justify-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#ffffff8f] text-sm tracking-[0] leading-[21px] text-center">
              {t('footer.copyright')}
            </div>

            <div className="inline-flex items-start gap-4 relative flex-[0_0_auto] flex-wrap justify-center">
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