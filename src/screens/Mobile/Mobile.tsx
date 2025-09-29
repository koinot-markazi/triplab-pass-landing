import React from "react";
import {LanguageProvider} from "../../contexts/LanguageContext";
import {ContactSection} from "./sections/ContactSection/ContactSection";
import {FaqSection} from "./sections/FaqSection/FaqSection";
import {InformationSection} from "./sections/InformationSection/InformationSection";
import {OperatorListSection} from "./sections/OperatorListSection/OperatorListSection";
import {PricingDetailsSection} from "./sections/PricingDetailsSection/PricingDetailsSection";
import {ServiceOverviewSection} from "./sections/ServiceOverviewSection/ServiceOverviewSection";
import {TripPassSummarySection} from "./sections/TripPassSummarySection/TripPassSummarySection";

export const Mobile = (): JSX.Element => {
    return (
        <LanguageProvider>
            <div className="bg-white w-full relative">
                <img
                    className="absolute left-0 bottom-0 w-full h-[1420px] object-cover"
                    alt="Image"
                    src="/image-1.png"
                />

                <main className="flex flex-col w-full relative z-10">
                    <section id="main">
                        <InformationSection/>
                    </section>
                    <div className="flex flex-col items-center w-full">
                        <section id="howItWorks">
                            <ServiceOverviewSection/>
                        </section>
                        <section id="tripPass">
                            <TripPassSummarySection/>
                        </section>
                        <section id="pricing">
                            <div className="px-4">
                                <PricingDetailsSection/>
                            </div>
                        </section>
                    </div>
                    <img
                        className="w-[200px] h-[9px] mx-auto"
                        alt="Vector"
                        src="/vector-2-1.svg"
                    />
                    <section id="faq">
                        <FaqSection/>
                    </section>
                    <section id="contacts">
                        <ContactSection/>
                    </section>
                    <section id="partners">
                        <div className="pb-[30px]">
                            <OperatorListSection/>
                        </div>
                    </section>
                </main>
            </div>
        </LanguageProvider>
    );
};