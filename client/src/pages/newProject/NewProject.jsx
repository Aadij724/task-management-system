import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import "./NewProject.scss"

const NewProject = () => {
  return (
    <div className='home'>
        <div className='nav-nb'>
            <Navbar />
        </div>
        <div className='h-body'>
            <Sidebar className="side-nb"/>
            <div className='home-content'>
                Project Page
            </div>
        </div>
    </div>
  )
}

export default NewProject