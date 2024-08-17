import { useState } from 'react'

import './App.css'
import Home from './Home'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import EditPage from './EditPage'
import CreateApp from './CreateApp'

function App() {


  return (
   <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/edit/:id' element={<EditPage/>} />
        <Route path='/posts' element={<CreateApp/>} />
      </Routes>
    
    </BrowserRouter>
   
   </div>
  )
}

export default App
