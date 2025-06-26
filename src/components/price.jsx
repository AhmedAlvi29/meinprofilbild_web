import React from "react";

const plans = [
  {
    title: "standard",
    price: "€ 24.90",
    features: [
      "10 application photos",
      "2 different backgrounds + styles",
      "Ready in 90 minutes",
    ],
    buttonStyle: "bg-blue-700 text-white",
    popular: false,
  },
  {
    title: "professional",
    price: "€ 39.90",
    features: [
      "20 application photos",
      "3 different backgrounds + styles",
      "Ready in 90 minutes",
    ],
    buttonStyle: "bg-blue-700 text-white",
    popular: true,
  },
  {
    title: "Premium",
    price: "€ 59.90",
    features: [
      "30 application photos",
      "4 different backgrounds + styles",
      "Ready in 60 minutes",
    ],
    buttonStyle: "bg-blue-700 text-white",
    popular: false,
  },
];

const Price = () => {
  return (
    <div id="price" className="min-h-screen bg-blue-50 text-blue-900 flex flex-col items-center py-16 px-4">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        Prices
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`bg-white rounded-xl shadow-md p-6 flex flex-col justify-between border ${
              plan.popular ? "border-blue-900 shadow-xl" : ""
            }`}
          >
            {plan.popular && (
              <div className="bg-blue-900 text-white text-xs px-3 py-1 rounded-full inline-block mb-2">
                Most popular
              </div>
            )}
            <h2 className="capitalize text-blue-700 font-semibold text-lg mb-2">
              {plan.title}
            </h2>
            <div className="text-3xl font-bold text-blue-800 mb-1">
              {plan.price}
            </div>
            <p className="text-sm text-blue-700 mb-4">/Per person</p>
            <ul className="text-sm text-green-700 space-y-1 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i}>✅ {feature}</li>
              ))}
            </ul>
            <button
              className={`rounded-full py-2 px-4 font-semibold transition ${
                plan.buttonStyle
              } hover:opacity-90`}
            >
              Start now →
            </button>
          </div>
        ))}
      </div>
      <div className="mt-16 text-center">
        <div className="flex justify-center mb-4">
          <img
            src="https://dummyimage.com/150x30/ddd/000&text=★★★★★"
            alt="Stars"
            className="h-6"
          />
        </div>
        <p className="text-sm text-blue-700 mb-4">
          Join tens of thousands of satisfied customers and take your career to the next
          level today.
        </p>
        <div className="flex flex-wrap justify-center gap-6 mt-4">
          {["StepStone", "facebook", "LinkedIn", "XING", "indeed"].map((logo, idx) => (
            <span
              key={idx}
              className="text-blue-800 font-semibold text-lg"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Price;
