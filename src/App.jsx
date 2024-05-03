/* eslint-disable no-unused-vars */
import React, {useState} from "react"
import Header from "./Components/Header"
import Search from "./Components/Search"
import Form from "./Components/TransactionForm"
import Table from "./Components/Transactions"


function App() {
  const [transactions, setTransactions] = useState([
    { date: '2019-12-01', description: "Paycheck from Bob's Burger", category: 'Income', amount: 1000 },
    { date: '2019-12-01', description: 'South bySouthwest Quinoa Bowl at Fresh and Go', category: 'Food', amount: -10.55 },
    { date: '2019-12-02', description: 'South bySouthwest Quinoa Bowl at Fresh and Go', category: 'Food', amount: -10.55 },
    { date: '2019-12-04', description: 'Sunglasses, Urban Outfitters', category: 'Fashion', amount: -24.99 },
    { date: '2019-12-06', description: 'Venmo,Alice Pays you for Burrito', category: 'Food', amount: 8.75 },
    { date: '2019-12-06', description: 'Chipotle', category: 'Food', amount: -17.59 }
  ])
  const [searchTerm, setSearchTerm] = useState("")

  function handleSearch(e) {
    setSearchTerm(e.target.value);
  }

  const filteredTransactions = transactions.filter((transaction) =>transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  function addTransaction(newTransaction) {
    setTransactions([...transactions, newTransaction])
  }


  return(
    <div>
      <Header/>
      <br />
      <Search handleSearch={handleSearch} />
      <br />
      <Form  addTransaction={addTransaction}/>
      <br />
      <Table transactions={filteredTransactions}  />
    </div>
  )
}

export default App
