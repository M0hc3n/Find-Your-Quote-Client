import { createContext, useState } from "react";

export const QuotesContext = createContext({
  quotes: [],
  setQuotes: () => {},
});

export const QuotesProvider = ({ children }) => {
  const [quotes, setQuotes] = useState([]);

  return (
    <QuotesContext.Provider
      value={{
        quotes,
        setQuotes,
      }}
    >
      {children}
    </QuotesContext.Provider>
  );
};

export const QuotesConsumer = QuotesContext.Consumer;
