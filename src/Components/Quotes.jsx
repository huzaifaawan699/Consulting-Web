import React, { useState, useEffect } from 'react';

const Quotes = () => {
  const quotesData = [
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      text: "Success is not the key to happiness. Happiness is the key to success.",
      author: "Albert Schweitzer"
    },
    {
      text: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius"
    },
    {
      text: "The best time to plant a tree was 20 years ago. The second best time is now.",
      author: "Chinese Proverb"
    },
    {
      text: "Your time is limited, don't waste it living someone else's life.",
      author: "Steve Jobs"
    },
    {
      text: "You miss 100% of the shots you don't take.",
      author: "Wayne Gretzky"
    },
    {
      text: "Whether you think you can or you think you can't, you're right.",
      author: "Henry Ford"
    },
    {
      text: "The only limit to our realization of tomorrow is our doubts of today.",
      author: "Franklin D. Roosevelt"
    }
    // Add more quotes as needed
  ];

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotesData.length);
    return quotesData[randomIndex];
  };

  const [quote, setQuote] = useState(getRandomQuote);

  useEffect(() => {
    setQuote(getRandomQuote());
  }, []);

  return (
    <div className="bg-black py-8 px-4 md:px-8 text-center rounded-lg shadow-lg text-white">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">Quote of the Moment</h2>
      <p className="text-lg md:text-xl italic mb-2">"{quote.text}"</p>
      <p className="text-md md:text-lg">- {quote.author}</p>
    </div>
  );
};

export default Quotes;
