import React, {useState} from "react";
import {useLanguage} from "../../../../contexts/LanguageContext";
import {Card, CardContent} from "../../../../components/ui/card";

export const PricingDetailsSection = (): JSX.Element => {
    const {t} = useLanguage();
    const [selectedTrips, setSelectedTrips] = useState(2);

    const pricingData = [
        {
            plan: t('pricing.solo.title'),
            price: "$80",
            planPrice: 80,
            tourCompanyPrice: 1000,
            tourOperatorPrice: 930,
            bgColor: "bg-white",
            people: 1,
        },
        {
            plan: t('pricing.duo.title'),
            price: "$120",
            planPrice: 120,
            tourCompanyPrice: 2000,
            tourOperatorPrice: 1860,
            bgColor: "bg-[#91d8fc1a]",
            people: 2,
        },
        {
            plan: t('pricing.group.title'),
            price: "$290",
            planPrice: 290,
            tourCompanyPrice: 4500,
            tourOperatorPrice: 4185,
            bgColor: "bg-white",
            people: 5,
        },
    ];

    // Function to calculate savings (same as desktop version)
    const calculateSavings = (row: typeof pricingData[0]) => {
        const trips = selectedTrips;
        // Savings calculated for each trip
        const savings = (row.tourCompanyPrice * trips - row.tourOperatorPrice * trips) - row.planPrice;
        return savings > 0 ? savings : 0;
    };

    const handleIncrement = () => {
        if (selectedTrips < 12) {
            setSelectedTrips(selectedTrips + 1);
        }
    };

    const handleDecrement = () => {
        if (selectedTrips > 1) {
            setSelectedTrips(selectedTrips - 1);
        }
    };

    return (
        <div className="w-full max-w-md mx-auto px-4">
            <Card className="bg-[#f8f8f8] rounded-[24px] overflow-hidden shadow-sm">
                <CardContent className="p-6">
                    {/* Header */}
                    <div className="text-center mb-6">
                        <h2 className="text-xl font-bold text-[#212121] mb-2 [font-family:'SF_Pro-Bold',Helvetica]">
                            {t('calculator.title')}
                        </h2>
                        <p className="text-sm text-[#212121cc] [font-family:'SF_Pro-Regular',Helvetica]">
                            {t('calculator.subtitle')}
                        </p>
                    </div>

                    {/* Trip Counter */}
                    <div className="text-center mb-8">
                        <div className="text-sm font-medium text-[#212121] mb-1 [font-family:'SF_Pro-Bold',Helvetica]">
                            {t('calculator.tripsLabel')}
                        </div>
                        <div
                            className="text-xs text-[#212121cc] mb-4 opacity-60 [font-family:'SF_Pro-Regular',Helvetica]">
                            {t('calculator.tripsUnit')}
                        </div>

                        <div className="flex items-center justify-center gap-8">
                            <button
                                onClick={handleDecrement}
                                disabled={selectedTrips <= 1}
                                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-lg font-bold text-[#212121] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                            >
                                −
                            </button>

                            <div
                                className="text-3xl font-bold text-[#212121] min-w-[60px] text-center [font-family:'SF_Pro-Bold',Helvetica]">
                                {selectedTrips}
                            </div>

                            <button
                                onClick={handleIncrement}
                                disabled={selectedTrips >= 12}
                                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-lg font-bold text-[#212121] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                            >
                                +
                            </button>
                        </div>
                    </div>

                    {/* Pricing Cards */}
                    <div className="space-y-3">
                        {pricingData.map((item, index) => (
                            <Card key={index} className={`${item.bgColor} border-0 shadow-sm`}>
                                <CardContent className="p-4">
                                    {/* Plan Header */}
                                    <div className="flex justify-between items-center mb-3">
                                        <h3 className="text-base font-semibold text-[#212121] [font-family:'SF_Pro-Semibold',Helvetica]">
                                            {item.plan}
                                        </h3>
                                        <span
                                            className="text-base font-bold text-[#212121] [font-family:'SF_Pro-Bold',Helvetica]">
                      {item.price}
                    </span>
                                    </div>

                                    {/* Pricing Details */}
                                    <div className="space-y-2">
                                        <div className="flex justify-between items-center">
                      <span className="text-xs text-[#212121] [font-family:'SF_Pro-Regular',Helvetica]">
                        {t('calculator.table.tourCompany')}
                      </span>
                                            <span
                                                className="text-xs font-medium text-[#212121] [font-family:'SF_Pro-Semibold',Helvetica]">
                        ${item.tourCompanyPrice}
                        {item.people > 1 && (
                            <span className="text-[#212121cc]"> / {item.people} kishiga</span>
                        )}
                      </span>
                                        </div>

                                        <div className="flex justify-between items-center">
                      <span className="text-xs text-[#212121] [font-family:'SF_Pro-Regular',Helvetica]">
                        {t('calculator.table.tourOperator')}
                      </span>
                                            <span
                                                className="text-xs font-medium text-[#212121] [font-family:'SF_Pro-Semibold',Helvetica]">
                        ${item.tourOperatorPrice}
                        {item.people > 1 && (
                            <span className="text-[#212121cc]"> / {item.people} kishiga</span>
                        )}
                      </span>
                                        </div>

                                        <div
                                            className="flex justify-between items-center pt-1 border-t border-gray-200">
                      <span className="text-xs font-medium text-[#212121] [font-family:'SF_Pro-Semibold',Helvetica]">
                        {t('calculator.table.savings')}
                      </span>
                                            <span
                                                className="text-xs font-bold text-[#51b702] [font-family:'SF_Pro-Bold',Helvetica]">
                        {calculateSavings(item) > 0 ? `+ $${calculateSavings(item)}` : "$0"}
                      </span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};