import React from 'react'
import Home from './Home'
import Header from './Header'

function App() {
  return (
    <div className="flex flex-col items-center h-auto  bg-white text-center">
        <Header />
        <Home />
    </div>
  )
}

export default App