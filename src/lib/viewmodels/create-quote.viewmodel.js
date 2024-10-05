/* eslint-disable func-names */
import { useContext, useState } from "react";
import { quotesRepo } from "../repositories/quotes.repo";
import { QuotesContext } from "../../contexts/QuotesContext";

export default function useCreateQuotesViewModel() {
  const [status, setStatus] = useState({
    loading: false,
    success: "",
    error: "",
  });

  const context = useContext(QuotesContext);

  const handleQuoteCreation = async (question, quote) => {
    setStatus({ loading: true, success: "", error: "" });

    try {
      const quoteToBeInserted = {
        question,
        response: quote.response,
        category: quote.category,
        date: new Date(),
      };

      const res = await quotesRepo.createQuote(quoteToBeInserted);

      if (res) {
        setStatus({
          loading: false,
          success: "Quote Created Successfully",
          error: "",
        });

        console.log(context);
        
        context?.setQuotes((prev) => [...prev, res]);
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
