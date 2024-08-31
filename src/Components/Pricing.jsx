import React from 'react';

const pricingData = [
  {
    name: "Lite Package",
    description: "A basic package to get you started.",
    price: "$19.99",
    features: [
      "30-minute initial consultation",
      "Email support",
      "Monthly progress report"
    ],
    consultation: "Schedule a Consultation"
  },
  {
    name: "Pro Package",
    description: "A more advanced package with extra benefits.",
    price: "$49.99",
    features: [
      "1-hour consultation",
      "Priority email support",
      "Bi-weekly progress report",
      "Access to premium resources"
    ],
    consultation: "Book a Consultation"
  },
  {
    name: "Ultimate Package",
    description: "The premium package with all features included.",
    price: "$99.99",
    features: [
      "2-hour in-depth consultation",
      "24/7 phone support",
      "Weekly progress report",
      "Access to all resources",
      "Personalized strategy plan"
    ],
    consultation: "Get a Free Consultation"
  }
];

const Pricing = () => {
  return (
    <div className="p-8 bg-white" id="pricing">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-black">Consulting Plans</h1>
        <p className="text-lg text-black mt-2">Choose the best package that suits your consulting needs.</p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        {pricingData.map((plan, index) => (
          <div
            key={index}
            className={`w-full md:w-1/3 flex flex-col items-center rounded-lg shadow-lg overflow-hidden p-6 transition-transform duration-300 ease-in-out transform hover:scale-105 bg-white text-black hover:bg-black hover:text-white`}
          >
            <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
            <p className="text-sm mb-4">{plan.description}</p>
            <div className="text-2xl font-bold mb-4">{plan.price}</div>
            <hr className="w-full border-black mb-4" />
            <ul className="list-disc list-inside mb-4">
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button
              className="px-4 py-2 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-white hover:text-black transition-colors duration-300 mb-4"
            >
              Purchase Now
            </button>
            <button
              className="px-4 py-2 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-white   hover:text-black transition-colors duration-300"
            >
              {plan.consultation}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
