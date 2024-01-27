// In the app.jsx file we have imported useState, viteLogo and Navbar from componets as well as Main from componets. We update our app.jsx as we add componets so that the componeets we are adding are displayed on the screen
import { useState } from 'react'
import viteLogo from '/vite.svg'
import Navbar from './componets/Navbar'
import Main from './componets/Main'

function App() {
  
// Here we add each compnet we create to make sure they are displayed on the screen
  return (
    <div>
      <Navbar />
      <Main />
    </div>
  )
}

export default App
