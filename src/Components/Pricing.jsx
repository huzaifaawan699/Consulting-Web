import React from 'react';

const pricingData = [
  {
    name: "Lite Package",
    description: "A basic package to get you started.",
    price: "$19.99",
    features: [
      "Feature 1",
      "Feature 2",
      "Feature 3"
    ]
  },
  {
    name: "Pro Package",
    description: "A more advanced package with extra benefits.",
    price: "$49.99",
    features: [
      "Feature 1",
      "Feature 2",
      "Feature 3",
      "Feature 4"
    ]
  },
  {
    name: "Ultimate Package",
    description: "The premium package with all features included.",
    price: "$99.99",
    features: [
      "Feature 1",
      "Feature 2",
      "Feature 3",
      "Feature 4",
      "Feature 5"
    ]
  }
];

const Pricing = () => {
  return (
    <div className="p-8 bg-teal-200" id="pricing">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Pricing Plans</h1>
        <p className="text-lg text-gray-600 mt-2">Choose the best package that suits your needs.</p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        {pricingData.map((plan, index) => (
          <div
            key={index}
            className={`w-full md:w-1/3 flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden p-6 card fade-up delay-${index * 100}`}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h2>
            <p className="text-sm text-gray-600 mb-4">{plan.description}</p>
            <div className="text-2xl font-bold text-gray-800 mb-4">{plan.price}</div>
            <hr className="w-full border-gray-300 mb-4" />
            <ul className="list-disc list-inside mb-4 text-gray-600">
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button
              className="purchase-button px-4 py-2 bg-teal-500 text-white font-semibold rounded-lg shadow-md"
            >
              Purchase Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
