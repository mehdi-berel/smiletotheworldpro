'use client';

import { ArrowUp, ArrowDown, DollarSign, TrendingUp } from 'lucide-react';

const transactions = [
  {
    id: 1,
    type: 'sale',
    amount: 2999.99,
    product: 'Dental Chair Pro X3000',
    date: '2024-02-15',
    status: 'completed',
  },
  {
    id: 2,
    type: 'sale',
    amount: 1499.99,
    product: 'Sterilization Unit V2',
    date: '2024-02-10',
    status: 'pending',
  },
  // Add more dummy transactions as needed
];

export default function EarningsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">My Earnings</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Earnings</p>
            <DollarSign className="w-5 h-5 text-primary" />
          </div>
          <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">$4,499.98</p>
          <div className="mt-2 flex items-center text-sm text-green-600 dark:text-green-400">
            <ArrowUp className="w-4 h-4 mr-1" />
            <span>12% from last month</span>
          </div>
        </div>

        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Pending Earnings</p>
            <TrendingUp className="w-5 h-5 text-yellow-500" />
          </div>
          <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">$1,499.99</p>
          <div className="mt-2 flex items-center text-sm text-yellow-600 dark:text-yellow-400">
            <span>2 pending transactions</span>
          </div>
        </div>

        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Available for Withdrawal</p>
            <DollarSign className="w-5 h-5 text-green-500" />
          </div>
          <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">$2,999.99</p>
          <button className="mt-2 text-sm text-primary hover:text-primary/80">
            Withdraw Funds
          </button>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white">Recent Transactions</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    {transaction.product}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                    ${transaction.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {new Date(transaction.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      transaction.status === 'completed'
                        ? 'bg-green-100 text-green-700 dark:bg-green-700/20 dark:text-green-400'
                        : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-700/20 dark:text-yellow-400'
                    }`}>
                      {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
