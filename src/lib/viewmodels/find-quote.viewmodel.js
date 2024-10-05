/* eslint-disable func-names */
import { useState } from "react";
import { quotesRepo } from "../repositories/quotes.repo";

export default function useFindQuotesViewModel() {
  const [foundQuotes, setFoundQuotes] = useState([]);

  const [status, setStatus] = useState({
    loading: false,
    success: "",
    error: "",
  });

  const handleQuoteFinding = async (prompt) => {
    setStatus({ loading: true, success: "", error: "" });

    try {
      const apiRes = await quotesRepo.findQuotesBasedOnPrompt(prompt);

      setFoundQuotes(apiRes);

      setStatus({
        loading: false,
        success: "Found Quotes Successfully",
        error: "",
      });
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
    foundQuotes,
    handleQuoteFinding,
  };
}
