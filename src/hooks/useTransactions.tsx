import { createContext, useEffect, useState, ReactNode, useContext } from "react";
import { api } from "../services/api";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

/*interface TransactionInput { // modo antigo
  title: string;
  amount: number;
  type: string;
  category: string;
} */

type TransactionInput = Omit<Transaction, 'id'| 'createdAt'>; //novo modo 
// Cria TransactionInput como base Transaction, omitindo id e created At 

// também pode ser: 
//type TransactionInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'category'>
// cria utilizando somente title, amount, type e category.

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData { 
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  //useState<Transaction[]> - informa que o State vai usar um array de Transaction

  useEffect(() => {
    api.get('transactions')
    .then(response => setTransactions(response.data.transactions))
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
   const response = await api.post('/transactions', {
     ...transactionInput,
     createdAt: new Date(),
   })
   const { transaction } = response.data;

   setTransactions([ // cria um novo vetor de transações
     ...transactions, // copia os valores anteriores de transactions
     transaction, // e adiciona o valor de transaction
   ])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
}