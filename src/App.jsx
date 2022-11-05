import React from 'react'
import Jokenpo from './Jokenpo'
import Triangle from './Triangle'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/jokenpo' element={<Jokenpo />} />
        <Route path='/triangle' element={<Triangle />} />
      </Routes>
    </BrowserRouter>
  )
}

const Index = () => {


  return (
    <>
      <Link className='rodadas-text' to='/triangle'>Triangle</Link>
      <Link className='rodadas-text' to='/jokenpo'>Jokenpo</Link>
    </>
  )
}

export default App