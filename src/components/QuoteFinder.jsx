import React, { useState } from "react";
import { Textarea, Button } from "@nextui-org/react";
import useFindQuotesViewModel from "../lib/viewmodels/find-quote.viewmodel";
import Loading from "react-loading-components";
import TickIcon from "../icons/TickIcon";
import useCreateQuotesViewModel from "../lib/viewmodels/create-quote.viewmodel";

export default function QuoteFinder() {
  const { foundQuotes, status, handleQuoteFinding } = useFindQuotesViewModel();
  const { handleQuoteCreation, status: statusQuoteCreation } =
    useCreateQuotesViewModel();

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
            <div
              key={quote.response}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-between">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Response: ✨
                </h3>

                <Button
                  isIconOnly
                  onClick={() => {
                    handleQuoteCreation(quoteInfo, quote);
                  }}
                  className="bg-transparent"
                  // isLoading={statusQuoteCreation.loading}
                  aria-label="mark as success"
                >
                  <TickIcon />
                </Button>
              </div>

              <p className="text-gray-600 mb-4">{quote.response}</p>

              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Author:
              </h3>
              <p className="text-gray-600 mb-4">{quote.author}</p>

              <div className="text-sm text-gray-500 mt-4 border-t pt-2">
                {/* <span>Date: {quote.date}</span> |{" "} */}
                <span>Category: {quote.category[0]}</span>
              </div>
            </div>
          ))}
      </form>
    </div>
  );
}
