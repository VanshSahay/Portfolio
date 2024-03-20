import React from 'react'
import { Navbar, Header } from './containers'
import { Analytics } from "@vercel/analytics/react"
import './index.css'

function App() {
  return (
    <>
      <Analytics/>
      <Navbar/>
      <Header/>
    </>
  )
}

export default App
