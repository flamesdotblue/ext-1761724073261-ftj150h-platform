export default function BalanceCard({ balance, income, expenses }) {
  const fmt = (n) => n.toLocaleString(undefined, { style: 'currency', currency: 'USD', maximumFractionDigits: 2 });
  const positive = balance >= 0;

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 shadow-lg shadow-black/20">
      <div className="flex items-baseline justify-between">
        <div>
          <p className="text-neutral-400 text-sm">Current Balance</p>
          <p className={`text-3xl font-semibold ${positive ? 'text-emerald-400' : 'text-rose-400'}`}>{fmt(balance)}</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-neutral-400">Income</p>
          <p className="text-emerald-400 font-medium">{fmt(income)}</p>
          <p className="text-xs text-neutral-400 mt-2">Expenses</p>
          <p className="text-rose-400 font-medium">{fmt(expenses)}</p>
        </div>
      </div>
    </div>
  );
}
