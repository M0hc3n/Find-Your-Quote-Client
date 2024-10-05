/* eslint-disable func-names */
import { useContext, useEffect, useState } from "react";
import { QuotesContext } from "../../contexts/QuotesContext";
import { quotesRepo } from "../repositories/quotes.repo";

export default function useGetQuotesViewModel() {
  const [status, setStatus] = useState({
    loading: false,
    success: "",
    error: "",
  });

  const context = useContext(QuotesContext);

  useEffect(() => {
    void (async function () {
      try {
        setStatus({ loading: true, success: "", error: "" });

        const res = await quotesRepo.getQuotes();

        context?.setQuotes(res);

        setStatus({
          loading: false,
          success: "Quotes Fetched Successfully",
          error: "",
        });
      } catch (e) {
        console.log(e);

        context?.setQuotes([]);
        setStatus({ loading: false, success: "", error: e });
      }
    })();
  }, []);

  return {
    status,
    quotes: context?.quotes,
  };
}
