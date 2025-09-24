import React, { useState } from "react";
import { useLanguage } from "../../../../contexts/LanguageContext";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";

export const PricingDetailsSection = (): JSX.Element => {
  const { t } = useLanguage();
  const [selectedTrips, setSelectedTrips] = useState(2);

  const sliderNumbers = [
    { value: 1, active: selectedTrips >= 1 },
    { value: 2, active: selectedTrips >= 2 },
    { value: 3, active: selectedTrips >= 3 },
    { value: 4, active: selectedTrips >= 4 },
    { value: 5, active: selectedTrips >= 5 },
    { value: 6, active: selectedTrips >= 6 },
    { value: 7, active: selectedTrips >= 7 },
    { value: 8, active: selectedTrips >= 8 },
    { value: 9, active: selectedTrips >= 9 },
    { value: 10, active: selectedTrips >= 10 },
    { value: 11, active: selectedTrips >= 11 },
    { value: 12, active: selectedTrips >= 12 },
  ];

  const pricingData = [
    {
      plan: `${t('pricing.solo.title')} / $80`,
      tourCompanyPrice: "$1000",
      tourOperatorPrice: "$930",
      savings: "+ $60",
      bgColor: "bg-white",
    },
    {
      plan: `${t('pricing.duo.title')} / $120`,
      tourCompanyPrice: "$2000 / 2 kishiga",
      tourOperatorPrice: "$1860 / 2 kishiga",
      savings: "+ $160",
      bgColor: "bg-[#91d8fc1a]",
    },
    {
      plan: `${t('pricing.group.title')} / $290`,
      tourCompanyPrice: "$4500 / 5 kishiga",
      tourOperatorPrice: "$4185 / 5 kishiga",
      savings: "+ $340",
      bgColor: "bg-white",
    },
  ];

  const handleSliderClick = (value: number) => {
    setSelectedTrips(value);
  };

  const getSliderPosition = () => {
    return ((selectedTrips - 1) / 11) * 100;
  };

  return (
    <Card className="w-full mx-4 bg-[#f8f8f8] rounded-[24px] overflow-hidden">
      <CardContent className="p-4">
        <h2 className="h-auto w-full text-center mt-0 [font-family:'SF_Pro-Bold',Helvetica] font-bold text-[#212121] text-2xl tracking-[0] leading-tight">
          {t('calculator.title')}
        </h2>

        <p className="w-full text-center mt-2 [font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#212121cc] text-sm tracking-[0] leading-relaxed">
          {t('calculator.subtitle')}
        </p>

        <div className="flex flex-col gap-1 mt-8">
          <div className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-[#212121] text-xs tracking-[0] leading-[18px]">
            {t('calculator.tripsLabel')}
          </div>
          <div className="opacity-[0.56] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#212121] text-xs tracking-[0] leading-[18px]">
            {t('calculator.tripsUnit')}
          </div>
        </div>

        <div className="relative w-full mt-4">
          <div className="h-2.5 w-full bg-white rounded-[30px] relative">
            <div
              className="absolute top-0 left-0 h-2.5 bg-[#91d8fc] rounded-[30px] transition-all duration-200"
              style={{ width: `${getSliderPosition()}%` }}
            />
            <button
              className="absolute top-[-7px] w-6 h-6 bg-[#91d8fc] rounded-xl border-2 border-solid border-white cursor-pointer transition-all duration-200"
              style={{ left: `calc(${getSliderPosition()}% - 12px)` }}
              onClick={() => {}}
            />
          </div>
        </div>

        <div className="flex justify-between items-center w-full mt-2 px-2">
          {sliderNumbers.filter((_, index) => index % 2 === 0).map((number) => (
            <button
              key={number.value}
              onClick={() => handleSliderClick(number.value)}
              className={`text-center [font-family:'SF_Pro-Regular',Helvetica] font-normal text-xs tracking-[0] leading-4 cursor-pointer ${
                number.active ? "text-[#212121]" : "text-[#212121cc]"
              }`}
            >
              {number.value}
            </button>
          ))}
        </div>

        <div className="w-full mt-6 rounded-2xl overflow-hidden overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#91d8fc] hover:bg-[#91d8fc]">
                <TableHead className="px-2 py-2 [font-family:'SF_Pro-Bold',Helvetica] font-bold text-[#212121] text-xs tracking-[0] leading-[18px] whitespace-nowrap">
                  {t('calculator.table.subscription')}
                </TableHead>
                <TableHead className="px-2 py-2 [font-family:'SF_Pro-Bold',Helvetica] font-bold text-[#212121] text-xs tracking-[0] leading-[18px] whitespace-nowrap">
                  {t('calculator.table.tourCompany')}
                </TableHead>
                <TableHead className="px-2 py-2 [font-family:'SF_Pro-Bold',Helvetica] font-bold text-[#212121] text-xs tracking-[0] leading-[18px] whitespace-nowrap">
                  {t('calculator.table.tourOperator')}
                </TableHead>
                <TableHead className="px-2 py-2 text-right [font-family:'SF_Pro-Bold',Helvetica] font-bold text-[#212121] text-xs tracking-[0] leading-[18px] whitespace-nowrap">
                  {t('calculator.table.savings')}
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pricingData.map((row, index) => (
                <TableRow
                  key={index}
                  className={`${row.bgColor} hover:${row.bgColor}`}
                >
                  <TableCell className="px-2 py-2 [font-family:'SF_Pro-Semibold',Helvetica] font-normal text-[#212121] text-xs tracking-[0] leading-[18px] whitespace-nowrap">
                    {row.plan}
                  </TableCell>
                  <TableCell className="px-2 py-2">
                    <span className="[font-family:'SF_Pro-Semibold',Helvetica] font-normal text-[#212121] text-xs tracking-[0] leading-[18px]">
                      {row.tourCompanyPrice}
                    </span>
                  </TableCell>
                  <TableCell className="px-2 py-2">
                    <span className="[font-family:'SF_Pro-Semibold',Helvetica] font-normal text-[#212121] text-xs tracking-[0] leading-[18px]">
                      {row.tourOperatorPrice}
                    </span>
                  </TableCell>
                  <TableCell className="px-2 py-2 text-right [font-family:'SF_Pro-Semibold',Helvetica] font-normal text-[#51b702] text-xs tracking-[0] leading-[18px] whitespace-nowrap">
                    {row.savings}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};