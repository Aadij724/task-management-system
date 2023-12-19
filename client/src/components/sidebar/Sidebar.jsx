import React, { useState } from 'react'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import InsightsIcon from '@mui/icons-material/Insights';
import Groups3Icon from '@mui/icons-material/Groups3';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import HomeIcon from '@mui/icons-material/Home';
import "./Sidebar.scss"
import { Link } from 'react-router-dom';

const Sidebar = () => {

    const [tab,setTab] = useState('dashboard')

  return (
    <div className='side-nb'>
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" id='eeee1'>
            <div className="nav nav-pills flex-column mb-auto" id='eeee3'>
            <Link to={"/"} style={{textDecoration: "none"}}>
                <li className='li-item' style={{textDecoration: "none"}} onClick={()=>{setTab('')}} >
                    <a className={ tab=="" ? "nav-link active" : "nav-link link-dark"}>
                    {/* <svg className="bi me-2" width="16" height="16"><use xlinkHref="#grid"></use></svg> */}
                    <HomeIcon className="bi me-2" height="15px" width="16px"/>
                    Home
                    </a>
                </li>
            </Link>
            <Link to={"/profile"} style={{textDecoration: "none"}}>
                <li className='li-item' onClick={()=>{setTab('profile')}}>
                    <a className={ tab=="profile" ? "nav-link active" : "nav-link link-dark"}>
                    {/* <svg className="bi me-2" width="16" height="16"><use xlinkHref="#grid"></use></svg> */}
                    <AccountBoxIcon className="bi me-2" height="15px" width="16px"/>
                    Profile
                    </a>
                </li>
            </Link>
            <Link to={"/mystats"} style={{textDecoration: "none"}}>
                <li className='li-item' onClick={()=>{setTab('mystats')}}>
                    <a className={ tab=="mystats" ? "nav-link active" : "nav-link link-dark"}>
                    {/* <svg className="bi me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg> */}
                    <AutoGraphIcon className="bi me-2" height="15px" width="16px"/>
                    My Stats
                    </a>
                </li>
            </Link>
            <Link to={"/teamstats"} style={{textDecoration: "none"}}>
                <li className='li-item' onClick={()=>{setTab('teamstats')}}>
                    <a className={ tab=="teamstats" ? "nav-link active" : "nav-link link-dark"} aria-current="page">
                        {/* <svg className="bi me-2" width="16" height="16"><use xlinkHref="#home"></use></svg> */}
                        <InsightsIcon className="bi me-2" width="16" height="16"/>
                        Team Stats
                    </a>
                </li>
            </Link>
                <li >
                    <a className="nav-link link-dark">
                    {/* <svg className="bi me-2" width="16" height="16"><use xlinkHref="#table"></use></svg> */}
                    <Groups3Icon className="bi me-2" width="16" height="16"/>
                    Projects
                    <div >
                        <ul className="list-unstyled fw-normal pb-1 small">
                            <Link to={"/projects/new"} style={{textDecoration: "none"}}>
                            <li className='li-item' onClick={()=>{setTab('newproject')}}>
                                {/* <svg className="bi me-2" width="16" height="16"><use xlinkHref="#table"></use></svg> */}
                                <a href="#" className={"nav-link  d-inline-flex text-decoration-none " + (tab=="newproject" ? "active" : "line-dark") }>
                                <AccountTreeIcon className="bi me-2" width="10px" height="10px"/>
                                New Project
                                </a>
                            </li>
                            </Link>
                            <Link to={"/projects/1"} style={{textDecoration: "none"}}>
                            <li className='li-item' onClick={()=>{setTab('project1')}}>
                                {/* <svg className="bi me-2" width="16" height="16"><use xlinkHref="#table"></use></svg> */}
                                <a href="#" className={"nav-link d-inline-flex text-decoration-none " + (tab=="project1" ? "active" : "line-dark") }>
                                <AccountTreeIcon className="bi me-2" width="10px" height="10px"/>
                                Project 1
                                </a>
                            </li>
                            </Link>
                            <Link to={"/projects/2"} style={{textDecoration: "none"}}>
                            <li className='li-item' onClick={()=>{setTab('project2')}}>
                                {/* <svg className="bi me-2" width="16" height="16"><use xlinkHref="#table"></use></svg> */}
                                <a href="#" className={"nav-link d-inline-flex text-decoration-none " + (tab=="project2" ? "active" : "line-dark") }>
                                <AccountTreeIcon className="bi me-2" width="10px" height="10px"/>
                                Project 2
                                </a>
                            </li>
                            </Link>
                            <Link to={"/projects/3"} style={{textDecoration: "none"}}>
                            <li className='li-item' onClick={()=>{setTab('project3')}}>
                                {/* <svg className="bi me-2" width="16" height="16"><use xlinkHref="#table"></use></svg> */}
                                <a href="#" className={"nav-link d-inline-flex text-decoration-none " + (tab=="project3" ? "active" : "line-dark") }>
                                <AccountTreeIcon className="bi me-2" width="10px" height="10px"/>
                                Project 3
                                </a>
                            </li>
                            </Link>
                        </ul>
                    </div>
                    </a>
                </li>
                
                
            </div>
            <hr/>
            <div className="dropdown" id='eeee4'>
                <a href="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
                    <strong>mdo</strong>
                </a>
                <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                    <li><a className="dropdown-item" href="#">New project...</a></li>
                    <li><a className="dropdown-item" href="#">Settings</a></li>
                    <li><a className="dropdown-item" href="#">Profile</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="#">Sign out</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Sidebar