import React from "react";
import { useLanguage } from "../../../../contexts/LanguageContext";

export const TripPassSummarySection = (): JSX.Element => {
  const { t } = useLanguage();

  return (
    <div className="w-full max-w-[1000px] relative [font-family:'SF_Pro-Regular',Helvetica] my-[128px] font-normal text-lg lg:text-[43px] tracking-[0] leading-tight lg:leading-[43px] px-4 lg:px-0">
      <div className="text-center">
        <span className="text-[#212121] lg:leading-[60.2px]">
          {t('tripPass.text').split('5% - 10%GACHA')[0]}
        </span>
        <span className="text-[#ffda33] lg:leading-[60.2px]">5% - 10%GACHA</span>
        <span className="text-[#212121] lg:leading-[0.1px]">
          {t('tripPass.text').split('5% - 10%GACHA')[1]}
        </span>
      </div>
        <img
          className="w-[200px] lg:w-[340px] h-[9px] mx-auto"
          alt="Vector"
          src="/vector-2-1.svg"
        />
    </div>
  );
};
