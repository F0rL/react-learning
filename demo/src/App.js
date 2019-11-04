import React from 'react'
import './App.css'
import Counter from './components/Counter'
import Theme from './components/Theme'
import Rcounter from './components/Rcounter'
import RefInput from './components/RefInput'
import ShowHeightCallback from './components/ShowHeightCallback'

function App() {
  return (
    <div className="App">
      <section>
        <Counter />
      </section>
      <section>
        <Theme />
      </section>
      <section>
        <Rcounter />
      </section>
      <section>
        <RefInput />
      </section>
      <section>
        <ShowHeightCallback />
      </section>
    </div>
  )
}

export default App
