import './App.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'

// **react-router-dom'dan import etmen gerekenler**
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <MainLayout>
          <Switch>
            <Route exact path="/" component={HomePage} />

          </Switch>
        </MainLayout>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
