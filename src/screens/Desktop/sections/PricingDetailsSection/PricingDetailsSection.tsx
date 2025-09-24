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


  // Цены вынесены отдельно для вычислений
  const pricingData = [
    {
      plan: `${t('pricing.solo.title')} / $80`,
      planPrice: 80,
      tourCompanyPrice: 1000,
      tourOperatorPrice: 930,
      bgColor: "bg-white",
      people: 1,
    },
    {
      plan: `${t('pricing.duo.title')} / $120`,
      planPrice: 120,
      tourCompanyPrice: 2000,
      tourOperatorPrice: 1860,
      bgColor: "bg-[#91d8fc1a]",
      people: 2,
    },
    {
      plan: `${t('pricing.group.title')} / $290`,
      planPrice: 290,
      tourCompanyPrice: 4500,
      tourOperatorPrice: 4185,
      bgColor: "bg-white",
      people: 5,
    },
  ];

  // Функция вычисления Savings
  const calculateSavings = (row: typeof pricingData[0]) => {
    const trips = selectedTrips;
    // Savings считается для каждого путешествия
    const savings = (row.tourCompanyPrice * trips - row.tourOperatorPrice * trips) - row.planPrice;
    // Если trips < row.people, Savings = 0
    // if (trips < row.people) return 0;
    return savings > 0 ? savings : 0;
  };

  const handleSliderClick = (value: number) => {
    setSelectedTrips(value);
  };

  const getSliderPosition = () => {
    return ((selectedTrips - 1) / 11) * 100;
  };

  return (
    <Card className="w-full max-w-[1000px] mx-auto bg-[#f8f8f8] rounded-[32px] overflow-hidden">
      <CardContent className="p-6">
        <h2 className="h-auto lg:h-8 w-full text-center mt-0 [font-family:'SF_Pro-Bold',Helvetica] font-bold text-[#212121] text-2xl lg:text-[32px] tracking-[0] leading-tight lg:leading-8">
          {t('calculator.title')}
        </h2>

        <p className="w-full text-center mt-2 [font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#212121cc] text-sm lg:text-base tracking-[0] leading-6">
          {t('calculator.subtitle')}
        </p>

        <div className="flex items-center gap-1.5 mt-[53px] ml-8">
          <div className="[font-family:'SF_Pro-Bold',Helvetica] font-bold text-[#212121] text-xs tracking-[0] leading-[18px] whitespace-nowrap">
            {t('calculator.tripsLabel')}
          </div>
          <div className="opacity-[0.56] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#212121] text-xs tracking-[0] leading-[18px] whitespace-nowrap">
            {t('calculator.tripsUnit')}
          </div>
        </div>

        <div className="relative w-full max-w-[936px] mx-auto mt-4">
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

        <div className="flex justify-between items-center w-full max-w-[100%] mx-auto mt-2.5 px-[0]">
          {sliderNumbers.map((number) => (
            <button
              key={number.value}
              onClick={() => handleSliderClick(number.value)}
              className={`w-6 text-center [font-family:'SF_Pro-Regular',Helvetica] font-normal text-base tracking-[0] leading-6 cursor-pointer ${
                number.active ? "text-[#212121]" : "text-[#212121cc]"
              }`}
            >
              {number.value}
            </button>
          ))}
        </div>

        <div className="w-full max-w-[956px] mx-auto mt-[21px] rounded-2xl overflow-hidden overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#91d8fc] hover:bg-[#91d8fc]">
                <TableHead className="px-2 lg:px-4 py-2.5 [font-family:'SF_Pro-Bold',Helvetica] font-bold text-[#212121] text-xs tracking-[0] leading-[18px] whitespace-nowrap">
                  {t('calculator.table.subscription')}
                </TableHead>
                <TableHead className="px-2 lg:px-4 py-2.5 [font-family:'SF_Pro-Bold',Helvetica] font-bold text-[#212121] text-xs tracking-[0] leading-[18px] whitespace-nowrap">
                  {t('calculator.table.tourCompany')}{" "}
                  <span className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#212121cc]">
                    {t('calculator.table.average')}
                  </span>
                </TableHead>
                <TableHead className="px-2 lg:px-4 py-2.5 [font-family:'SF_Pro-Bold',Helvetica] font-bold text-[#212121] text-xs tracking-[0] leading-[18px] whitespace-nowrap">
                  {t('calculator.table.tourOperator')}{" "}
                  <span className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#212121cc]">
                    {t('calculator.table.average')}
                  </span>
                </TableHead>
                <TableHead className="px-2 lg:px-4 py-2.5 text-right [font-family:'SF_Pro-Bold',Helvetica] font-bold text-[#212121] text-xs tracking-[0] leading-[18px] whitespace-nowrap">
                  {t('calculator.table.savings')}{" "}
                  <span className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#212121cc]">
                    {t('calculator.table.average')}
                  </span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pricingData.map((row, index) => (
                <TableRow
                  key={index}
                  className={`${row.bgColor} hover:${row.bgColor}`}
                >
                  <TableCell className="px-2 lg:px-4 py-2.5 [font-family:'SF_Pro-Semibold',Helvetica] font-normal text-[#212121] text-xs tracking-[0] leading-[18px] whitespace-nowrap">
                    {row.plan}
                  </TableCell>
                  <TableCell className="px-2 lg:px-4 py-2.5">
                    <span className="[font-family:'SF_Pro-Semibold',Helvetica] font-normal text-[#212121] text-xs tracking-[0] leading-[18px]">
                      ${row.tourCompanyPrice}
                      {row.people > 1 && (
                        <span className="text-[#212121cc]"> / {row.people} kishiga</span>
                      )}
                    </span>
                  </TableCell>
                  <TableCell className="px-2 lg:px-4 py-2.5">
                    <span className="[font-family:'SF_Pro-Semibold',Helvetica] font-normal text-[#212121] text-xs tracking-[0] leading-[18px]">
                      ${row.tourOperatorPrice}
                      {row.people > 1 && (
                        <span className="text-[#212121cc]"> / {row.people} kishiga</span>
                      )}
                    </span>
                  </TableCell>
                  <TableCell className="px-2 lg:px-4 py-2.5 text-right [font-family:'SF_Pro-Semibold',Helvetica] font-normal text-[#51b702] text-xs tracking-[0] leading-[18px] whitespace-nowrap">
                    {calculateSavings(row) > 0 ? `+ $${calculateSavings(row)}` : "$0"}
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
