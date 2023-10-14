import React, {useContext} from 'react'
import "./history.css"
import { globalContext } from '../context/Context'

function HistoryList({id,dis, amount}) {
    const {remove} = useContext(globalContext)



    const condition = amount > 0 ? "plus" : "mins"
  return (
    <div className={`track ${condition}`}>
        <li>{dis}</li>
        <p>${amount}</p>
        <button onClick={()=>remove(id)}>x</button>
    </div>
  )
}

export default HistoryList
