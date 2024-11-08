import { API_ROUTES } from "../../api";
import db from "../../db/db";

import axios from "axios";

class QuotesRepo {
  constructor(client) {
    this.client = client;
  }

  async getQuotes() {
    try {
      const allQuotes = await this.client.quotes.toArray();

      return allQuotes;
    } catch (error) {
      console.log("error fetching quotes,", error);

      return [];
    }
  }

  async createQuote(quote) {
    try {
      const id = await db.quotes.add(quote);

      return { ...quote, id };
    } catch (error) {
      console.log("error inserting quotes,", error);

      return null;
    }
  }

  async findQuotesBasedOnPrompt(prompt) {
    // call API
    try {
      const response = await axios.post(API_ROUTES.FIND_SIMILAR_QUOTES_ENHANCED, {
        prompt,
      });

      return response.data.similar_quotes;
    } catch (error) {
      console.error(
        "Error fetching similar prompts:",
        error.response || error.message
      );
      return [];
    }
  }
}

export const quotesRepo = new QuotesRepo(db);
