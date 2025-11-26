import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import Countries from './pages/Countries.jsx'
import Collection from './pages/Collection.jsx'
import InfoCountry from './pages/InfoCountry.jsx'
import Quiz from './pages/Quiz.jsx'
import Leaderboard from './pages/Leaderboard.jsx'

import './App.css'

export default function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element ={<HomePage/>} />
        <Route path='/countries' element ={<Countries/>} />
        <Route path='/collection' element ={<Collection/>} />
        <Route path='/countries/:countryName' element ={<InfoCountry/>} />
        <Route path='/quiz' element ={<Quiz/>} />
        <Route path='/leaderboard' element ={<Leaderboard/>} />
      </Routes>
    </Router>
  )
}