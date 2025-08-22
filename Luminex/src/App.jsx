import React from 'react'
import Nav from './Components/1 Home/nav'
import Home from './Components/1 Home/Home'
import Marque from './Components/1 Home/Marque'
import Besidemarque from './Components/1 Home/Besidemarque'
import SmartService from './Components/1 Home/smartService'
import DigitalGrowth from './Components/1 Home/digitalGrowth'
import Feedback from './Components/1 Home/Feedback'
import FaqPage from './Components/1 Home/FaqPage'
import ResultsPage from './Components/1 Home/ResultsPage'
import FooterPage from './Components/1 Home/FooterPage'

const App = () => {
  return (
    <div>
      <Nav/>
      <Home/>
      <Marque/>
      <Besidemarque/>
      <SmartService/>
      <DigitalGrowth/>
      <Feedback/>
      <FaqPage/>
      <ResultsPage/>
      <FooterPage/>
    </div>
  )
}

export default App