import React, { useContext } from 'react'
import "../../App.css"
import { globalContext } from '../context/Context'

function Header() {
  const {transaction} = useContext(globalContext)

  const total = transaction.map(item => item.amount).reduce((prev,current)=>{
    return prev + parseFloat(current)
  },0)


  return (
    <div className='header'>
        <h1 className='title'>Budget Tracker</h1>
        <div className="amount-container">
          <h4>Total Amount</h4>
          <h4 className='amount'>${total}</h4>
        </div>
    </div>
  )
}

export default Header
