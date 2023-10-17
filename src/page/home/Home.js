import React from 'react'
import './home.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Sidebar from '../../components/sidebar/Sidebar'
import Rightbar from '../../components/rightbar/Rightbar'

function Home() {
  return (
    <div className='homeContainer'>
      <Sidebar />
      <Rightbar />
    </div>
  )
}

export default Home