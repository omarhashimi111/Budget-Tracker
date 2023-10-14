import React, { useContext } from 'react'
import "./history.css"
import { globalContext } from '../context/Context'
import HistoryList from './HistoryList'

function History() {

  const { transaction } = useContext(globalContext)

  const expenses = transaction.map(item => item.amount)
  .filter(item => item < 0).reduce((prev,current)=> prev + parseFloat(current),0)
  const income = transaction.map(item => item.amount)
  .filter(item => item > 0).reduce((prev,current)=> prev + parseFloat(current),0)

  const lis = transaction.map((item) => <HistoryList id={item.id} key={item.id} dis={item.discription} amount={item.amount}/>)

  return (
    <div className='history'>
      <div className="container">
        <div className="income-container">
          <div className="income">
            <h4>Income</h4>
            <h3>${income}</h3>
          </div>
          <div className="expenses">
            <h4>Expenses</h4>
            <h3>${expenses}</h3>
          </div>
        </div>
        <div className="history-title">History</div>
        <hr/>
        <div className="history-list">
          {lis.length == 0 ? <p className='empty'>No History Recorded</p> : lis}
        </div>
      </div>
    </div>
  )
}

export default History
