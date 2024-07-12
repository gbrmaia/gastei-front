import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';

//define a interface para o contexto do provider
interface SaldoContextData {
  saldo: number | null;
  loading: boolean;
}

//cria o contexto do provider
const SaldoContext = createContext<SaldoContextData | undefined>(undefined);

// cria hook para usar o contexto
export const useSaldo = () => {
  const contexto = useContext(SaldoContext);
  if (contexto === undefined) {
    throw new Error('useSaldo só pode ser usado dentro de um SaldoProvider');
  }
  return contexto;
};

// cria o provider saldoProvider
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
