/* eslint-disable react/prop-types */

const ExpenseHistory = ({ expenses, deleteExpense }) => (
  <div className="bg-blue-50 p-4 rounded border border-gray-300">
    <h2 className="text-xl font-semibold text-gray-700 mb-2">
      Expense History
    </h2>
    {expenses.length > 0 ? (
      expenses.map((expense, index) => (
        <div
          key={index}
          className="flex justify-between items-center border-b p-2"
        >
          <div className="flex-1">
            <span className="block">{expense.title}</span>
            <span className="text-sm text-gray-600">
              BDT {expense.amount.toFixed(2)}
            </span>
          </div>
          <span className="text-sm text-gray-500">{expense.date}</span>
          <button
            onClick={() => deleteExpense(index)}
            className="text-red-500 hover:text-red-700 ml-4"
          >
            Delete
          </button>
        </div>
      ))
    ) : (
      <p className="text-gray-500">No expenses recorded.</p>
    )}
  </div>
);

export default ExpenseHistory;
