/* eslint-disable func-names */
import { useState } from "react";
import { quotesRepo } from "../repositories/quotes.repo";
import { quotes } from "../../contexts/quotes";
import { getCurrentDate } from "../../utils";

export default function useCreateQuotesViewModel() {
  const [status, setStatus] = useState({
    loading: false,
    success: "",
    error: "",
  });

  const handleQuoteCreation = async (question, quote) => {
    setStatus({ loading: true, success: "", error: "" });

    try {
      const quoteToBeInserted = {
        question,
        response: quote.response,
        author: quote.author,
        category: quote.category[0],
        date: getCurrentDate(),
      };

      const res = await quotesRepo.createQuote(quoteToBeInserted);

      if (res) {
        setStatus({
          loading: false,
          success: "Quote Created Successfully",
          error: "",
        });

        const currentQuotes = quotes.get();
        quotes.set([...currentQuotes, res]);
      } else {
        setStatus({
          loading: false,
          success: "",
          error: "Quote Failed To Be Created",
        });
      }
    } catch (e) {
      console.log(e);
      setStatus({
        loading: false,
        success: "",
        error: "Failed to create quote",
      });
    }
  };

  return {
    status,
    handleQuoteCreation,
  };
}
