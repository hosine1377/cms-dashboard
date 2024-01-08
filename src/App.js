import React from 'react'
import './style/App.css'

import Sidebar from './Components/Sidebar/Sidebar'
import Header from './Components/Header/Header'
import route from './route'
import { useRoutes } from 'react-router-dom'
export default function App() {
  const routes = useRoutes(route)
  return (
    <div className="row m-0 p-0">
      <div className="col-2">
        <Sidebar />
      </div>
      <main className="col-10 main">
        <Header />
        {routes}
      </main>
    </div>
  )
}
