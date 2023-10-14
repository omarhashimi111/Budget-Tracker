import React,{ useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import History from './components/history/History'
import Tracker from './components/Tracker/Tracker'
import { Provider } from './components/context/Context'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider>
     <div className="app">

      <Header />
      <History />
      <Tracker />

     </div>
    </Provider>
  )
}

export default App
