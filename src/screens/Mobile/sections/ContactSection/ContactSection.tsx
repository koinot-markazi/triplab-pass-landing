import {
  ChevronRightIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  MessageCircleIcon,
} from "lucide-react";
import React from "react";
import { useLanguage } from "../../../../contexts/LanguageContext";

export const ContactSection = (): JSX.Element => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: PhoneIcon,
      title: t('contact.phone'),
      content: "+998 90 934 46 57",
      hasLink: false,
    },
    {
      icon: MapPinIcon,
      title: t('contact.address'),
      content:
        "Toshkent, Uchtepa tumani, Farhod ko'chasi 23 kvartal 1B uy. (Saroy restorani yonida)",
      hasLink: true,
      linkText: t('contact.googleMaps'),
      linkUrl: "https://maps.app.goo.gl/9mpTaomPBvx7xKPL7",
    },
    {
      icon: MailIcon,
      title: t('contact.email'),
      content: "triplabtour@gmail.com",
      hasLink: false,
    },
    {
      icon: MessageCircleIcon,
      title: "Telegram Bot",
      content: "Sayohatlaringizdan tejash uchun bot",
      hasLink: true,
      linkText: "Telegram-botga o'tish",
      linkUrl: "https://t.me/triplab_bot",
    },
  ];

  return (
    <section className="w-full gap-12 px-4 py-16 flex flex-col items-start">
      <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex-col items-start gap-6 self-stretch w-full flex relative flex-[0_0_auto]">
          <h2 className="self-stretch text-[#212121] text-3xl leading-tight relative mt-[-1.00px] [font-family:'SF_Pro-Bold',Helvetica] font-bold text-center tracking-[0]">
            {t('contact.title')}
          </h2>
        </div>
      </div>

      <div className="items-start gap-6 self-stretch w-full flex flex-col relative flex-[0_0_auto]">
        <div className="flex flex-col w-full items-start gap-8 relative">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="flex-col items-start gap-4 self-stretch w-full flex relative flex-[0_0_auto]"
            >
              <item.icon className="relative w-6 h-6" />

              <div className="gap-4 relative self-stretch w-full flex-[0_0_auto] flex flex-col items-start">
                <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-bold text-black text-lg tracking-[0] leading-6">
                    {item.title}
                  </div>

                  <div className="[font-family:'Roboto',Helvetica] text-black text-sm leading-relaxed relative self-stretch font-normal tracking-[0]">
                    {item.content}
                  </div>
                </div>

                {item.hasLink && item.linkUrl && (
                  <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
                    <a
                      href={item.linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 relative flex-[0_0_auto] cursor-pointer"
                    >
                      <div className="relative w-fit [font-family:'Roboto',Helvetica] font-normal text-black text-sm tracking-[0] leading-relaxed underline">
                        {item.linkText}
                      </div>
                      <ChevronRightIcon className="relative w-5 h-5" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <img
          className="relative w-full h-64 rounded-[24px] object-cover"
          alt="Placeholder image"
          src="/placeholder-image.png"
        />
      </div>
    </section>
  );
};