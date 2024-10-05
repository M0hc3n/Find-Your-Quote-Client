import { Card, CardBody } from "@nextui-org/react";

const EmptyQuotesHistory = () => {
  return (
    <Card>
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
  );
};

export default EmptyQuotesHistory;
