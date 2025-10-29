import { Trash2, Calendar } from 'lucide-react';

export default function TransactionList({ transactions, onDelete }) {
  const fmt = (n) => n.toLocaleString(undefined, { style: 'currency', currency: 'USD', maximumFractionDigits: 2 });
  const formatDate = (iso) => new Date(iso).toLocaleDateString(undefined, { month: 'short', day: 'numeric' });

  if (!transactions.length) {
    return (
      <div className="text-center text-neutral-400 text-sm py-8 border border-dashed border-neutral-800 rounded-2xl">
        No transactions yet. Add your first one above.
      </div>
    );
  }

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl divide-y divide-neutral-800 overflow-hidden">
      {transactions.map((t) => (
        <div key={t.id} className="flex items-center gap-3 p-4">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${t.type === 'income' ? 'bg-emerald-500/10 text-emerald-300' : 'bg-rose-500/10 text-rose-300'}`}>
            {t.type === 'income' ? '+' : '-'}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <p className="font-medium truncate">{t.title}</p>
              <p className={`${t.type === 'income' ? 'text-emerald-400' : 'text-rose-400'} font-medium`}>{t.type === 'income' ? '+' : '-'}{fmt(t.amount)}</p>
            </div>
            <div className="flex items-center gap-3 text-xs text-neutral-400 mt-0.5">
              <span className="truncate">{t.category}</span>
              <span className="inline-flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {formatDate(t.date)}</span>
            </div>
          </div>
          <button
            aria-label="Delete transaction"
            onClick={() => onDelete(t.id)}
            className="shrink-0 text-neutral-400 hover:text-white p-2 rounded-lg hover:bg-neutral-800"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
}
