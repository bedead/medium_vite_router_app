import { useState } from 'react'
import { BrowserRouter, Link, Navigate, Route, Router, Routes } from 'react-router-dom'
import Home from './routes/home'
import Service from './routes/Service'
import Tools from './routes/Tools'
import Help from './routes/Help'
import PageNotFound from './routes/PageNotFound'
import XYZ from './routes/XYZ'

function App() {

  return (
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to='/' >Home</Link>
          </li>
          <li>
            <Link to='/services' >Services</Link>
          </li>
          <li>
            <Link to='/tools' >Tools</Link>
          </li>
          <li>
            <Link to='/help' >Help</Link>
          </li>
        </ul>
      </div>
      <Routes>
        {/* All the end points goes here */}
        {/* index route which gets displayed when the site gets open */}
        <Route path='/' index element={<Home />} />
        {/* nested routes */}
        <Route path='/services' >
          <Route index element={<Service />} />
          <Route path='/services/xyz' element={<XYZ />} />
        </Route>
        <Route path='/tools' element={<Tools />} />
        <Route path='/help' element={<Help />} />
        {/* PageNotFound route */}
        <Route path='/pagenotfound' element={<PageNotFound />} />
        <Route path='*' element={<Navigate to='/pagenotfound' />} />
      </Routes>
      {/* Footer goes here */}
      <div style={{
        backgroundColor: 'blueviolet',
        minHeight: '100px',
        textAlign: 'center',
        padding: '10px'
      }}>
        <h4>This is a footer</h4>
      </div>
    </BrowserRouter>
  )
}

export default App
