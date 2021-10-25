import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { SubmitButton, FormField } from "./Styles"


function App() {

  return (
    <div className="App">
      <SubmitButton>Go Bills</SubmitButton>
      <FormField type="text" />
    </div>
  )
}

export default App
