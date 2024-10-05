import useGetQuotesViewModel from "../../lib/viewmodels/get-quotes.viewmodels";
import EmptyQuotesHistory from "./EmptyQuotesHistory";

import QuoteHistoryCard from "./QuoteHistoryCard";

const QuotesHistory = () => {
  const { quotes, status } = useGetQuotesViewModel();

  return (
    <div className="container max-w-3xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6 dark:text-white">
        Your Quote History
      </h2>

      <div className="flex flex-wrap gap-6 items-center">
        {quotes?.map((quote) => (
          <QuoteHistoryCard key={quote.response} quote={quote} />
        ))}
      </div>

      {(!quotes || quotes?.length < 1) && <EmptyQuotesHistory />}
    </div>
  );
};

export default QuotesHistory;
