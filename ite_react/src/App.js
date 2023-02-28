import './App.css'
import React from 'react'
import LeftTabs from './component/LeftTabs'
import LayoutTop from './component/Layout'
function App() {
  return (
    <div className="App">
      <LayoutTop></LayoutTop>
      <LeftTabs></LeftTabs>
    </div>
  )
}

export default App
