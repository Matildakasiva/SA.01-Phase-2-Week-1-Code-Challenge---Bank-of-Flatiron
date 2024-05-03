/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, {useState} from "react"

function Form({addTransaction}){
    const [date, setDate] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [amount, setAmount] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        
        const newTransaction = {
            date,
            description,
            category,
            amount
        }
        addTransaction(newTransaction)
        setDate('')
        setDescription('')
        setCategory('')
        setAmount('')
    }
    return(
        <div>
        <form onSubmit={handleSubmit}>
            <label > Date: 
                 <input type="text"
                  value={date} 
                  placeholder="mm/dd/yyyy" 
                  onChange={(e) => setDate(e.target.value)}/>
            </label>
            <input type="text" 
            value={description}
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)} />

            <input type="text" 
            value={category}
            placeholder="Category"
            onChange={(e) => setCategory(e.target.value)} />
            <input type="number" placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)} />
            
            <br />
            <button >
                <input type="button" 
                value={'Add Transaction'}/>
            </button>
            
        </form>
    </div>
     
    )
    
}

export default Form