import {
  ChevronRightIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
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
  ];

  return (
    <section className="w-full gap-20 px-4 lg:px-[220px] py-16 lg:py-28 flex flex-col items-start">
      <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex-col items-start gap-6 self-stretch w-full flex relative flex-[0_0_auto]">
          <h2 className="self-stretch text-[#212121] text-4xl lg:text-[64px] leading-tight lg:leading-[64px] relative mt-[-1.00px] [font-family:'SF_Pro-Bold',Helvetica] font-bold text-center tracking-[0]">
            {t('contact.title')}
          </h2>
        </div>
      </div>

      <div className="items-start gap-6 self-stretch w-full flex flex-col lg:flex-row relative flex-[0_0_auto]">
        <div className="flex flex-col w-full lg:w-[400px] items-start gap-10 relative">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="flex-col items-start gap-4 self-stretch w-full flex relative flex-[0_0_auto]"
            >
              <item.icon className="relative w-8 h-8" />

              <div className="gap-4 relative self-stretch w-full flex-[0_0_auto] flex flex-col items-start">
                <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative self-stretch mt-[-1.00px] [font-family:'Roboto',Helvetica] font-bold text-black text-xl tracking-[0] leading-7">
                    {item.title}
                  </div>

                  <div className="[font-family:'Roboto',Helvetica] text-black text-base leading-6 relative self-stretch font-normal tracking-[0]">
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
                      <div className="relative w-fit [font-family:'Roboto',Helvetica] font-normal text-black text-base tracking-[0] leading-6 underline">
                        {item.linkText}
                      </div>
                      <ChevronRightIcon className="relative w-6 h-6" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <iframe
          className="relative flex-1 grow h-64 lg:h-[516px] rounded-[32px] object-cover"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d525.3537924044163!2d69.18147910119814!3d41.28993076224207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1758704343244!5m2!1sru!2s"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        />
      </div>
    </section>
  );
};
