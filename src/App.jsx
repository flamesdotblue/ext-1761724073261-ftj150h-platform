import { useMemo, useState } from 'react';
import HeroSection from './components/HeroSection';
import BalanceCard from './components/BalanceCard';
import AddTransactionForm from './components/AddTransactionForm';
import TransactionList from './components/TransactionList';

function App() {
  const [transactions, setTransactions] = useState([
    { id: 't1', title: 'Coffee', amount: 4.5, type: 'expense', category: 'Food & Drink', date: new Date().toISOString() },
    { id: 't2', title: 'Salary', amount: 1800, type: 'income', category: 'Salary', date: new Date().toISOString() },
    { id: 't3', title: 'Groceries', amount: 52.2, type: 'expense', category: 'Groceries', date: new Date().toISOString() },
  ]);

  const totals = useMemo(() => {
    const income = transactions.filter(t => t.type === 'income').reduce((sum, t) => sum + Number(t.amount || 0), 0);
    const expenses = transactions.filter(t => t.type === 'expense').reduce((sum, t) => sum + Number(t.amount || 0), 0);
    const balance = income - expenses;
    return { income, expenses, balance };
  }, [transactions]);

  const addTransaction = (tx) => {
    setTransactions(prev => [{ id: crypto.randomUUID(), ...tx }, ...prev]);
  };

  const deleteTransaction = (id) => {
    setTransactions(prev => prev.filter(t => t.id !== id));
  };

  return (
    <div className="min-h-screen w-full bg-neutral-950 text-white">
      <HeroSection />

      <main className="mx-auto max-w-md px-4 pb-28 -mt-24 relative z-10">
        <BalanceCard balance={totals.balance} income={totals.income} expenses={totals.expenses} />

        <section className="mt-6">
          <AddTransactionForm onAdd={addTransaction} />
        </section>

        <section className="mt-6">
          <TransactionList transactions={transactions} onDelete={deleteTransaction} />
        </section>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 bg-neutral-900/70 backdrop-blur border-t border-neutral-800">
        <div className="mx-auto max-w-md px-6 py-3 flex items-center justify-between text-neutral-300 text-sm">
          <span className="font-medium">FinTrack</span>
          <span className="opacity-80">Daily tracker • {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
