import React, { useState } from 'react';
import { Input, Textarea, Select, SelectItem, Button, Card, CardBody } from "@nextui-org/react";

export default function QuoteFinder() {
  const [quoteInfo, setQuoteInfo] = useState('');
  const [argument, setArgument] = useState('');
  const [source, setSource] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted', { quoteInfo, argument, source });
    // Implement your form submission logic here
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-2 dark:text-white">Quote Finder</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-6">Find quotes from a source that you can use in your writing.</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Textarea
          label="Information or Description of Quote"
          placeholder="Enter the Half-Remembered Quotes, and leave it to the AI to find out the quote you meant!"
          value={quoteInfo}
          onChange={(e) => setQuoteInfo(e.target.value)}
          maxLength={500}
          variant='faded'
          minRows={3}
        />
        <p className="text-right text-sm text-gray-500 dark:text-gray-400">{quoteInfo.length}/500</p>

        <Button color="primary" type="submit" className="w-full">
          Generate Quote
        </Button>
      </form>

      <Card className="mt-10">
        <CardBody className="text-center">
          <img src="/assets/think.svg" alt="Ghost reading a book" className="mx-auto mb-4 w-24 h-24" />
          <h2 className="text-xl font-semibold mb-2 dark:text-white">Ready to Create?</h2>
          <p className="text-gray-600 dark:text-gray-300">No quotes to show yet. Attach sources and click generate to get started.</p>
        </CardBody>
      </Card>
    </div>
  );
}