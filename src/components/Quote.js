import React, { useState, useEffect } from "react";

const quotes = [
  "The only way to do great work is to love what you do.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "Your time is limited, don't waste it living someone else's life.",
  "You miss 100% of the shots you don't take.",
];

const Quote = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

  useEffect(() => {
    const currentQuote = quotes[currentQuoteIndex];
    const quoteLength = currentQuote.length;

    const timer = setTimeout(() => {
      setCurrentLetterIndex((prevIndex) => (prevIndex + 1) % (quoteLength + 1));
    }, 100); // Adjust the speed (100ms for each letter)

    if (currentLetterIndex === quoteLength) {
      // Quote is complete, move to the next quote
      setCurrentLetterIndex(0); // Reset to start the new quote from the beginning
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }

    return () => clearTimeout(timer);
  }, [currentQuoteIndex, currentLetterIndex]);

  const currentQuote = quotes[currentQuoteIndex];

  return (
    <div className="quote">
      <h1>"{currentQuote.substring(0, currentLetterIndex)}"</h1>
    </div>
  );
};

export default Quote;
