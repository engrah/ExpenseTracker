/* eslint-disable react/prop-types */

import { useState } from "react";

const AddExpense = ({ addExpense }) => {
  const [amount, setAmount] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !title || !date) return;

    addExpense({
      amount: parseFloat(amount),
      title,
      date,
    });

    setAmount("");
    setTitle("");
    setDate("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-blue-50 p-4 rounded border border-gray-300 mb-4"
    >
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Add Expense</h2>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="mb-2 w-full p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="mb-2 w-full p-2 border rounded"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="mb-2 w-full p-2 border rounded"
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded"
      >
        Add Expense
      </button>
    </form>
  );
};

export default AddExpense;
