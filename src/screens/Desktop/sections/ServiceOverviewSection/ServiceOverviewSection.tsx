import React from "react";
import { useLanguage } from "../../../../contexts/LanguageContext";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const ServiceOverviewSection = (): JSX.Element => {
  const { t } = useLanguage();

  const pricingPlans = [
    {
      icon: "/user.svg",
      title: t('pricing.solo.title'),
      description: t('pricing.solo.description'),
      price: "$80",
      period: t('pricing.period'),
      buttonText: t('pricing.cta'),
      buttonColor: "bg-[#91d8fc]",
    },
    {
      icon: "/users.svg",
      title: t('pricing.duo.title'),
      description: t('pricing.duo.description'),
      price: "$140",
      period: t('pricing.period'),
      buttonText: t('pricing.cta'),
      buttonColor: "bg-[#cdadfe]",
    },
    {
      icon: "/users-three.svg",
      title: t('pricing.group.title'),
      description: t('pricing.group.description'),
      price: "$290",
      period: t('pricing.period'),
      buttonText: t('pricing.cta'),
      buttonColor: "bg-[#ffe77a]",
    },
  ];

  return (
    <section className="flex flex-col w-full items-center gap-10 px-4 lg:px-0">
      <div className="flex flex-col items-start gap-4 w-full max-w-[1000px]">
        <h2 className="w-full [font-family:'SF_Pro-Bold',Helvetica] font-bold text-[#212121] text-4xl lg:text-[64px] text-center tracking-[0] leading-tight lg:leading-[64px]">
          {t('pricing.title')}
        </h2>

        <p className="w-full [font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#212121cc] text-lg lg:text-2xl text-center tracking-[0] leading-relaxed lg:leading-9">
          {t('pricing.subtitle')}
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-5 w-full max-w-[1000px]">
        {pricingPlans.map((plan, index) => (
          <Card
            key={index}
            className="w-full lg:w-80 h-auto lg:h-[312px] bg-[#f8f8f8] rounded-[32px] overflow-hidden border-0 relative"
          >
            <CardContent className="p-6 h-full flex flex-col">
              <div className="flex flex-col items-start gap-3 mb-auto">
                <img className="w-12 h-12" alt={plan.title} src={plan.icon} />

                <h3 className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-[#212121] text-[32px] tracking-[0] leading-[35.2px]">
                  {plan.title}
                </h3>

                <p className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#212121cc] text-sm lg:text-base tracking-[0] leading-[22.4px]">
                  {plan.description}
                </p>
              </div>

              <div className="flex items-center gap-2.5 mb-6">
                <span className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-[#212121] text-[32px] tracking-[0] leading-[35.2px]">
                  {plan.price}
                </span>
                <span className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#212121] text-base tracking-[0] leading-[22.4px]">
                  {plan.period}
                </span>
              </div>

              <Button
                className={`w-full h-auto ${plan.buttonColor} hover:opacity-90 text-[#212121] rounded-[46px] px-4 py-3`}
                variant="ghost"
                onClick={() => window.open('https://t.me/triplab_bot', '_blank')}
              >
                <span className="[font-family:'SF_Pro-Medium',Helvetica] font-medium text-sm text-center tracking-[0] leading-[14px]">
                  {plan.buttonText}
                </span>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
