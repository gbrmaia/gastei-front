import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';

// Defina a interface para o contexto
interface SaldoContextData {
  saldo: number | null;
  loading: boolean;
}

// Crie o contexto
const SaldoContext = createContext<SaldoContextData | undefined>(undefined);

// Crie um hook para usar o contexto
export const useSaldo = () => {
  const context = useContext(SaldoContext);
  if (context === undefined) {
    throw new Error('useSaldo must be used within a SaldoProvider');
  }
  return context;
};

// Crie o provedor do contexto
export const SaldoProvider = ({ children }: { children: ReactNode }) => {
  const [saldo, setSaldo] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSaldo = async () => {
      try {
        const response = await axios.get('http://localhost:4000/balance/123');
        setSaldo(response.data.amount);
      } catch (error) {
        console.error('Erro ao buscar saldo: ', error);
      } finally {
        setLoading(false);
      }
    };
    fetchSaldo();
  }, []);

  return (
    <SaldoContext.Provider value={{ saldo, loading }}>
      {children}
    </SaldoContext.Provider>
  );
};
