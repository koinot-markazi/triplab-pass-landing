import React from "react";
import { LanguageProvider } from "../../contexts/LanguageContext";
import { ContactSection } from "./sections/ContactSection/ContactSection";
import { FaqSection } from "./sections/FaqSection/FaqSection";
import { InformationSection } from "./sections/InformationSection/InformationSection";
import { OperatorListSection } from "./sections/OperatorListSection/OperatorListSection";
import { PricingDetailsSection } from "./sections/PricingDetailsSection/PricingDetailsSection";
import { ServiceOverviewSection } from "./sections/ServiceOverviewSection/ServiceOverviewSection";
import { TripPassSummarySection } from "./sections/TripPassSummarySection/TripPassSummarySection";

export const Desktop = (): JSX.Element => {
  return (
    <LanguageProvider>
      <div className="bg-white w-full lg:min-w-[1440px] relative">
      <img
        className="absolute left-0 bottom-0 w-[100vw] lg:w-[100%] h-[1420px] object-cover"
        alt="Image"
        src="/image-1.png"
      />

      <main className="flex flex-col w-full relative z-10">
        <InformationSection />
        <div className="flex flex-col items-center w-full">
          <ServiceOverviewSection />
          <TripPassSummarySection />
          <PricingDetailsSection />
        </div>
        <FaqSection />
        <ContactSection />
        <OperatorListSection />
      </main>
    </div>
    </LanguageProvider>
  );
};
