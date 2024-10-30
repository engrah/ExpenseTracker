/* eslint-disable react/prop-types */

const FilterExpenses = ({ startDate, endDate, setStartDate, setEndDate }) => {
  const clearFilter = () => {
    setStartDate("");
    setEndDate("");
  };

  return (
    <div className="bg-blue-50 p-4 rounded border border-gray-300 mb-4">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        Filter Expenses by Date
      </h2>
      <label className="block mb-2">
        Start Date:
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="w-full p-2 border rounded mt-1"
        />
      </label>
      <label className="block mb-2">
        End Date:
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="w-full p-2 border rounded mt-1"
        />
      </label>
      <button
        onClick={clearFilter}
        className="mt-4 bg-red-500 text-white p-2 rounded w-full hover:bg-red-600"
      >
        Clear Filter
      </button>
    </div>
  );
};

export default FilterExpenses;
