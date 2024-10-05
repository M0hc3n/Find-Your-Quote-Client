import { Button } from "@nextui-org/react";
import TickIcon from "../../icons/TickIcon";
import useCreateQuotesViewModel from "../../lib/viewmodels/create-quote.viewmodel";

const FoundQuoteCard = ({ quote, quoteInfo }) => {
  const { handleQuoteCreation, status } = useCreateQuotesViewModel();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex justify-between">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Response: ✨</h3>

        <Button
          isIconOnly
          onClick={() => {
            handleQuoteCreation(quoteInfo, quote);
          }}
          className="bg-transparent"
          aria-label="mark as success"
        >
          <TickIcon />
        </Button>
      </div>

      <p className="text-gray-600 mb-4">{quote.response}</p>

      <h3 className="text-lg font-semibold text-gray-800 mb-2">Author:</h3>
      <p className="text-gray-600 mb-4">{quote.author}</p>

      <div className="text-sm text-gray-500 mt-4 border-t pt-2">
        <span>Category: {quote.category[0]}</span>
      </div>
    </div>
  );
};

export default FoundQuoteCard;
