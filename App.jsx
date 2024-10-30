// src/App.jsx
import { useState, useEffect } from "react";
import Balance from "./components/Balance";
import AddExpense from "./components/AddExpense";
import AddIncome from "./components/AddIncome";
import ExpenseHistory from "./components/ExpenseHistory";
import FilterExpenses from "./components/FilterExpenses";

function App() {
  const [balance, setBalance] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
    setExpenses(savedExpenses);
    setBalance(savedExpenses.reduce((acc, expense) => acc - expense.amount, 0));
  }, []);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
    setBalance((prevBalance) => prevBalance - expense.amount);
  };

  const addIncome = (income) => {
    setBalance((prevBalance) => prevBalance + income.amount);
    // Optionally, save income history if needed
  };

  const deleteExpense = (index) => {
    const deletedExpense = expenses[index];
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
    setBalance((prevBalance) => prevBalance + deletedExpense.amount);
  };

  const filteredExpenses = expenses.filter((expense) => {
    const expenseDate = new Date(expense.date);
    const start = startDate ? new Date(startDate) : null;
    const end = endDate ? new Date(endDate) : null;
    return (!start || expenseDate >= start) && (!end || expenseDate <= end);
  });

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white border-2 border-gray-300 rounded-lg p-6 w-full max-w-md shadow-md">
        <Balance balance={balance} />

        {/* Container for Add Income and Add Expense with Filter */}
        <div className="bg-gray-50 p-4 mt-4 rounded-lg border border-gray-300">
          <AddIncome addIncome={addIncome} />
          <AddExpense addExpense={addExpense} />
          <FilterExpenses
            startDate={startDate}
            endDate={endDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
          />
        </div>

        <ExpenseHistory
          expenses={filteredExpenses}
          deleteExpense={deleteExpense}
        />
      </div>
    </div>
  );
}

export default App;
