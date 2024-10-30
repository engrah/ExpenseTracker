/* eslint-disable react/prop-types */
import { useState } from "react";

const AddIncome = ({ addIncome }) => {
  const [amount, setAmount] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount && title) {
      const income = {
        amount: parseFloat(amount),
        title,
        date: new Date().toISOString().split("T")[0], // Current date
      };
      addIncome(income);
      setAmount("");
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <h2 className="text-lg font-semibold text-gray-700 mb-2">Add Income</h2>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full p-2 border rounded mb-2"
        required
      />
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 border rounded mb-4"
        required
      />
      <button
        type="submit"
        className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
      >
        Add Income
      </button>
    </form>
  );
};

export default AddIncome;
