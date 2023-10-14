import React, { useContext, useState } from 'react'
import "./tracker.css"
import { globalContext } from '../context/Context'

function Tracker() {
  const [dis , setDis] = useState("")
  const [amount , setAmount] = useState("")
  const {add} = useContext(globalContext)


  function adding(e) {
    e.preventDefault()
    let random = Math.floor(Math.random() * 10000000)
    if(dis == ""){
      return alert("Please Enter Discription")
    }else if(amount == ""){
      return alert("Please Enter The Amount")
    }
    else{
      add(dis,amount,random)
      setDis("")
      setAmount("")
    }
  }

  return (
    <div className='tracker'>
      <div className="tracker-container">
        <h3>Track Cash Flow</h3>
        <p>Negative Number Will Count As Expense</p>
        <form>
            <div className='form'>
                <label>Description</label>
                <input type="text" value={dis} onChange={(e)=> setDis(e.target.value)} />
            </div>
            <div className='form'>
                <label>Amount</label>
                <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} />
            </div>
            <div className="button">
                <button onClick={adding}>Add</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Tracker
