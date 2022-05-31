import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Router, Navigate } from 'react-router-dom'
import Layout from './layout/Layout'
import Index from './pages/Index'
import NewClient from './pages/NewClient'
import EditClient from './pages/EditClient'
import SeeClient from './pages/SeeClient'

function App() {
  
  return (
    <BrowserRouter>
        {/* A list of Routes */}
      <Routes>

        {/* Coments of Raect Router
          A list of Nested Routes 
          Path = Where is it?
          Element = Which element is it?
          
        <Route path="/" element={<SignIn />}>
            
          Routes Nested 
          <Route  />
            
          <Route index element={<LoginForm/>} />
        </Route>
        */}

        <Route path="/clients" element={<Layout/>}>
            {/* In nested Rout the path is write like a property */}
          <Route index element={<Index/>} />
            {/* 
              Go to Layout for more... 

              If we create a new path like a
                <Route path="new" element={<New/>}>
              React Route make a new adress like:
                /clients/new
            */}
          <Route path="newClient" element={<NewClient/>} />

          <Route path="editClient/:id" element={<EditClient/>} />

          <Route path=":id" element={<SeeClient/>} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
  // In this version of React Router Dom we can add Nested Routs
}

export default App
