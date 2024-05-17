import React from "react"
import logo from "../../logo.svg"
import { Link } from "react-router-dom"

import "./App.css"
import SimpleWithParam from "../../components/SimpleWithParam"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <Link className="App-link" to={`NewPage`}>
          New Page
        </Link>
        <SimpleWithParam name="Quero Café" age={10} />
        <SimpleWithParam name="Quero Café" age={30} />

        
      </header>
    </div>
  )
}

export default App
