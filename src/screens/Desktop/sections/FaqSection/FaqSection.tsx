import React from "react";
import { useLanguage } from "../../../../contexts/LanguageContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Button } from "../../../../components/ui/button";

export const FaqSection = (): JSX.Element => {
  const { t } = useLanguage();

  const faqData = [
    {
      id: "item-1",
      question: "Obunani qanday sotib olsam bo'ladi?",
      answer:
        "Bizning Telegram-botimizdan ro'yxatdan o'ting, va o'zingizga qulay tarifni tanlang. Hisobni Click, Payme va Uzum ilovalaridan to'lashingiz mumkin.",
      hasButton: true,
      buttonText: t('faq.telegramBot'),
    },
    {
      id: "item-2",
      question: "Obunani sotib olsam, qanday ishlaydi?",
      answer:
        "Siz yiliga bir marta belgilangan summani (80$, 120$ yoki 290$) to'laysiz va butun yil davomida turlarni turoperator narxida, hech qanday qo'shimcha to'lovsiz bron qilasiz.",
      hasButton: false,
    },
    {
      id: "item-3",
      question:
        "Boshqa tur firmada ko'rgan tur paketni sizlardan o'z narxida olish mumkinmi?",
      answer:
        "Albatta, barcha tur firmalar sanoqli tur operatorlardan tur paketlarni sotishadi. Bizga turni sanasi va mehmonxonani tanlab yuborsangiz, siz ko'rgan tur paketni topib beramiz va o'z narxini chiqazib beramiz.",
      hasButton: false,
    },
    {
      id: "item-4",
      question: "Agar yil davomida sayohat qilmasam-chi?",
      answer:
        "Obuna 12 oy amal qiladi. Agar ko'p sayohat qilmasangiz, obuna o'zini kamroq oqlaydi. Ammo bir yoki ikki marta safarga chiqishning o'zi katta tejash beradi.",
      hasButton: false,
    },
    {
      id: "item-5",
      question: "Obunani boshqa odam bilan bo'lishsam bo'ladimi?",
      answer:
        "Obunani siz va siz xohlagan odam bilan bo'lishshingiz mumkin. Lekin siz bo'lishingiz lozim.",
      hasButton: false,
    },
    {
      id: "item-6",
      question: "Tur paketni o'z narxini qanday bilaman?",
      answer:
        "Siz tur sotib olishga kelganingizda sizga tur paket narxi va komissiya narxini ko'rsatib o'tamiz.",
      hasButton: false,
    },
    {
      id: "item-7",
      question: "Obunani bekor qilish mumkinmi?",
      answer:
        "Afsuski yo'q. Obuna sizning birinchi sotib olgan tur paket harajatlarini qoplaydi. Qolgan tur paketlar sizning foydangiz.",
      hasButton: false,
    },
    {
      id: "item-8",
      question: "Obuna planini o'zgartirsa bo'ladimi?",
      answer:
        "Albatta, faqat arzon plandan qimmatiga o'tish ilojisi bor. Siz faqat obuna narxidagi farqini to'lasangiz bo'ldi.",
      hasButton: false,
    },
  ];

  return (
    <section className="flex flex-col w-full items-center gap-20 px-4 lg:px-16 py-16 lg:py-28 bg-white">
      <div className="flex flex-col w-full max-w-[768px] items-center gap-20 relative">
        <header className="flex flex-col items-center gap-6 relative w-full">
          <h1 className="w-full text-[#212121] text-4xl lg:text-[64px] leading-tight lg:leading-[64px] [font-family:'SF_Pro-Bold',Helvetica] font-bold text-center tracking-[0]">
            {t('faq.title')}
          </h1>

          <p className="[font-family:'SF_Pro-Regular',Helvetica] text-black text-base lg:text-lg text-center leading-[27px] w-full font-normal tracking-[0]">
            {t('faq.subtitle')}
          </p>
        </header>

        <div className="flex flex-col items-start gap-12 relative w-full">
          <Accordion type="single" collapsible className="w-full space-y-12">
            {faqData.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border-none"
              >
                <div className="flex flex-col items-start gap-4 w-full">
                  <AccordionTrigger className="text-left p-0 hover:no-underline [&[data-state=open]>svg]:rotate-180">
                    <h3 className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-black text-lg tracking-[0] leading-[27px] text-left">
                      {faq.question}
                    </h3>
                  </AccordionTrigger>

                  <AccordionContent className="pb-0">
                    <div className="flex flex-col gap-4">
                      <p className="[font-family:'SF_Pro-Regular',Helvetica] text-[#000000cc] text-base leading-6 font-normal tracking-[0]">
                        {faq.answer}
                      </p>

                      {faq.hasButton && (
                        <Button className="inline-flex items-center justify-center gap-2.5 px-4 py-3 h-auto bg-[#91d8fc] rounded-[46px] shadow-medium hover:bg-[#7bc9f0] w-fit">
                          <span className="[font-family:'SF_Pro-Medium',Helvetica] font-medium text-[#212121] text-sm text-center tracking-[0] leading-[14px] whitespace-nowrap">
                            {faq.buttonText}
                          </span>
                        </Button>
                      )}
                    </div>
                  </AccordionContent>
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="flex flex-col w-full max-w-[560px] items-center gap-6 relative">
          <div className="flex flex-col items-center gap-4 w-full">
            <h2 className="w-full text-black text-2xl lg:text-[32px] leading-tight lg:leading-[41.6px] [font-family:'SF_Pro-Bold',Helvetica] font-bold text-center tracking-[0]">
              {t('faq.moreQuestions.title')}
            </h2>

            <p className="[font-family:'SF_Pro-Regular',Helvetica] text-black text-base lg:text-lg text-center leading-[27px] w-full font-normal tracking-[0]">
              {t('faq.moreQuestions.subtitle')}
            </p>
          </div>

          <Button className="inline-flex items-center justify-center gap-2.5 px-4 py-3 h-auto bg-[#91d8fc] rounded-[46px] shadow-medium hover:bg-[#7bc9f0]">
            <span className="[font-family:'SF_Pro-Medium',Helvetica] font-medium text-[#212121] text-sm text-center tracking-[0] leading-[14px] whitespace-nowrap">
              {t('faq.contact')}
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};
