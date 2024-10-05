/* eslint-disable func-names */
import { useEffect, useState } from "react";
import { quotesRepo } from "../repositories/quotes.repo";
import { quotes } from "../../contexts/quotes";
import { useStore } from "@nanostores/react";

export default function useGetQuotesViewModel() {
  const [status, setStatus] = useState({
    loading: false,
    success: "",
    error: "",
  });

  const $quotes = useStore(quotes);

  useEffect(() => {
    void (async function () {
      try {
        setStatus({ loading: true, success: "", error: "" });

        const res = await quotesRepo.getQuotes();

        quotes.set(res);

        setStatus({
          loading: false,
          success: "Quotes Fetched Successfully",
          error: "",
        });
      } catch (e) {
        console.log(e);

        quotes.set([]);
        setStatus({ loading: false, success: "", error: e });
      }
    })();
  }, []);

  return {
    status,
    quotes: $quotes,
  };
}
