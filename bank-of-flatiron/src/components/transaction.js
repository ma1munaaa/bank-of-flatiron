import React, { useState, useEffect } from 'react';
import Filter from './filter';
import Form from './form';

function Trans() {
  const [transactions, setTransactions] = useState([]);
  

  useEffect(() => {
    fetch("https://api.npoint.io/b40674980bba1f5ee977") 
      .then((res) => res.json())
      .then((data) => {
        setTransactions(data.transactions);
        
      });
  }, []);

  const handleNewTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const handleDeleteTransaction = (id) => {
    const newTransactions = transactions.filter((transaction) => transaction.id !== id);
    setTransactions(newTransactions);
  };

  return (
    <div className="transactions-container">
      <Form onSubmit={handleNewTransaction} />
      <Filter transactions={transactions} onDelete={handleDeleteTransaction} />
    </div>
  );
}

export default Trans;
