import { useState } from "react";
import { Textarea, Button } from "@nextui-org/react";
import useFindQuotesViewModel from "../../lib/viewmodels/find-quote.viewmodel";
import Loading from "react-loading-components";
import FoundQuoteCard from "./FoundQuoteCard";
import { uid } from "uid";

export default function QuoteFinder() {
  const { foundQuotes, status, handleQuoteFinding } = useFindQuotesViewModel();

  const [quoteInfo, setQuoteInfo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    handleQuoteFinding(quoteInfo);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-2 dark:text-white">Quote Finder</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Find quotes from a source that you can use in your writing.
      </p>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 flex flex-col justify-center"
      >
        <Textarea
          label="Information or Description of Quote"
          placeholder="Enter the Half-Remembered Quotes, and leave it to the AI to find out the quote you meant!"
          value={quoteInfo}
          onChange={(e) => setQuoteInfo(e.target.value)}
          maxLength={500}
          variant="faded"
          minRows={3}
        />
        <p className="text-right text-sm text-gray-500 dark:text-gray-400">
          {quoteInfo.length}/500
        </p>

        <Button
          disabled={status.loading}
          color="primary"
          type="submit"
          className="w-full"
        >
          Generate Quote
        </Button>
        {status.loading && (
          <div className="mx-auto">
            <Loading type="oval" width={40} height={40} fill="#92E3A9" />
          </div>
        )}

        {foundQuotes &&
          foundQuotes.map((quote) => (
            <FoundQuoteCard
              key={quote.author + uid()}
              quote={quote}
              quoteInfo={quoteInfo}
            />
          ))}
      </form>
    </div>
  );
}
