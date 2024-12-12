import TransactionsTable from "./components/TransactionsTable";

const TransactionsList = () => {
  return (
    <div className="mx-auto p-8">
      <h1 className="text-9xl mb-8 font-bold">Transactions List</h1>
      <TransactionsTable />
    </div>
  );
};

export default TransactionsList;
