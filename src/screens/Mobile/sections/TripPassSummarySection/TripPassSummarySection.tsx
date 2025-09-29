import React from "react";
import { useLanguage } from "../../../../contexts/LanguageContext";

export const TripPassSummarySection = (): JSX.Element => {
  const { t } = useLanguage();

  return (
    <div className="w-full relative my-[20px] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-lg tracking-[0] leading-tight px-4">
      <div className="text-center">
        <span className="text-[#212121]">
          {t('tripPass.text').split('5% - 10%GACHA')[0]}
        </span>
        <span className="text-[#ffda33]">5% - 10%GACHA</span>
        <span className="text-[#212121]">
          {t('tripPass.text').split('5% - 10%GACHA')[1]}
        </span>
      </div>
    </div>
  );
};