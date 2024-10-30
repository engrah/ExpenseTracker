/* eslint-disable react/prop-types */

const Balance = ({ balance }) => (
  <div className="w-full bg-blue-50 py-4 text-center rounded border border-gray-300 mb-4">
    <h1 className="text-2xl font-semibold text-gray-800">Your Balance</h1>
    <p className="text-3xl font-bold text-green-600">
      BDT {balance.toFixed(2)}
    </p>
  </div>
);

export default Balance;
