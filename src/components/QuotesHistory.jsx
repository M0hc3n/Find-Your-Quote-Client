import React from "react";
import useGetQuotesViewModel from "../lib/viewmodels/get-quotes.viewmodels";

import {
  Card,
  CardBody,
} from "@nextui-org/react";

const QuotesHistory = () => {
  const { quotes, status } = useGetQuotesViewModel();

  console.log(quotes);
  console.log(status);

  return (
    <div className="container max-w-3xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6 dark:text-white">
        Your Quote History
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {quotes?.map((quote) => (
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Question:
            </h3>
            <p className="text-gray-600 mb-4">{quote.question}</p>

            <h3 className="text-lg font-bold text-gray-800 mb-2">
              Response: ✨
            </h3>
            <p className="text-gray-600 mb-4">{quote.response}</p>

            <div className="text-sm text-gray-500 mt-4 border-t pt-2">
              <span>Date: {quote.date}</span> |{" "}
              <span>Category: {quote.category}</span>
            </div>
          </div>
        ))}
      </div>

      {(!quotes || quotes?.length < 1) && (
        <Card className="">
          <CardBody className="text-center">
            <img
              src="/assets/think.svg"
              alt="Ghost reading a book"
              className="mx-auto mb-4 w-24 h-24"
            />
            <h2 className="text-xl font-semibold mb-2 dark:text-white">
              Ready to Create?
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              No quotes to show yet. Attach sources and click generate to get
              started.
            </p>
          </CardBody>
        </Card>
      )}
    </div>
  );
};

export default QuotesHistory;
