const QuoteHistoryCard = ({ quote }) => {
  return (
    <div className="bg-white p-6 w-[300px] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Question:</h3>
      <p className="text-gray-600 mb-4">{quote.question}</p>

      <h3 className="text-lg font-bold text-gray-800 mb-2">Response: ✨</h3>
      <p className="text-gray-600 mb-4">{quote.response}</p>

      <h3 className="text-lg font-bold text-gray-800 mb-2">Author: ✍️</h3>
      <p className="text-gray-600 mb-4">{quote.author}</p>

      <div className="flex flex-col text-sm text-gray-500 mt-4 border-t pt-2">
        <span>Date: {quote.date}</span>
        <span>Category: {quote.category}</span>
      </div>
    </div>
  );
};

export default QuoteHistoryCard;
