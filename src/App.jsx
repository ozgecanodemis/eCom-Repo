import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import MainLayout from './layouts/MainLayout'

// **react-router-dom'dan import etmen gerekenler**
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <MainLayout>
          <Switch>

          </Switch>
        </MainLayout>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
