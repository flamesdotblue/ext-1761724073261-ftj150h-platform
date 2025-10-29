import { useState } from 'react';
import { Plus } from 'lucide-react';

const categories = [
  'General',
  'Food & Drink',
  'Groceries',
  'Transport',
  'Shopping',
  'Bills',
  'Health',
  'Entertainment',
  'Salary',
  'Investments',
];

export default function AddTransactionForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('expense');
  const [category, setCategory] = useState('General');
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10));

  const handleSubmit = (e) => {
    e.preventDefault();
    const num = parseFloat(amount);
    if (!title || !amount || Number.isNaN(num) || num <= 0) return;

    onAdd({
      title: title.trim(),
      amount: num,
      type,
      category,
      date: new Date(date).toISOString(),
    });

    setTitle('');
    setAmount('');
    setType('expense');
    setCategory('General');
    setDate(new Date().toISOString().slice(0, 10));
  };

  return (
    <form onSubmit={handleSubmit} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4">
      <div className="grid grid-cols-2 gap-3">
        <div className="col-span-2">
          <label className="block text-xs text-neutral-400 mb-1">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g., Lunch, Freelance"
            className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-700"
          />
        </div>
        <div>
          <label className="block text-xs text-neutral-400 mb-1">Amount</label>
          <input
            type="number"
            inputMode="decimal"
            step="0.01"
            min="0"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00"
            className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-700"
          />
        </div>
        <div>
          <label className="block text-xs text-neutral-400 mb-1">Type</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-700"
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
        </div>
        <div>
          <label className="block text-xs text-neutral-400 mb-1">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-700"
          >
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs text-neutral-400 mb-1">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-700"
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-white text-black rounded-xl py-2.5 text-sm font-medium active:scale-[.99] transition"
      >
        <Plus className="w-4 h-4" />
        Add Transaction
      </button>
    </form>
  );
}
