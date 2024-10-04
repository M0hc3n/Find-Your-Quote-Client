import React from "react";

const QuotesHistory = () => {
  const quotes = [
    {
      question: "What is a good quote on perseverance?",
      response:
        "Perseverance is not a long race; it is many short races one after the other. — Walter Elliot",
      date: "2024-10-03",
      category: "Inspiration",
    },
    {
      question: "Can you find a quote about leadership?",
      response:
        "The function of leadership is to produce more leaders, not more followers. — Ralph Nader",
      date: "2024-10-02",
      category: "Leadership",
    },
    // Add more quotes as needed
  ];

  return (
    <div className="container max-w-3xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6 dark:text-white">Your Quote History</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {quotes.map((quote) => (
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Question:</h3>
            <p className="text-gray-600 mb-4">{quote.question}</p>

            <h3 className="text-lg font-bold text-gray-800 mb-2">Response: ✨</h3>
            <p className="text-gray-600 mb-4">{quote.response}</p>

            <div className="text-sm text-gray-500 mt-4 border-t pt-2">
              <span>Date: {quote.date}</span> |{" "}
              <span>Category: {quote.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuotesHistory;
