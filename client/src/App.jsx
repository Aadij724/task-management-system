import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import EditProfile from './pages/editProfile/EditProfile'
import Login from './pages/login/Login.jsx'
import MyStats from './pages/myStats/MyStats.jsx'
import Profile from './pages/profile/Profile.jsx'
import SignUp from './pages/signup/SignUp.jsx'
import TeamStats from './pages/teamStats/TeamStats.jsx'
import { useEffect, useState } from 'react'
import axios from "axios"
import MyDashboard from './pages/myDashboard/MyDashboard.jsx'
import Team from './pages/team/Team.jsx'
import CreateTeam from './pages/createTeam/CreateTeam.jsx'

function App() {

  const [user,setUser] = useState(null);

  const getUser = async () => {
    try {
      const url = `http://localhost:8800/api/auth/login/success`;
      const { data } = await axios.get(url, {withCredentials:true});
      setUser(data.user._json);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(()=>{
    getUser();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            {/* <Route index element={user? <Home/>: <Navigate to={"/login"}/> } /> */}
            <Route index element={<MyDashboard/>} />
            <Route path="signup" element={user ? <MyDashboard/>: <SignUp/>} />
            <Route path="login" element={user ? <MyDashboard/> : <Login/>} />
            <Route path="profile">
              {/* <Route index element={user ? <Profile/> : <Navigate to={"/login"}/> } /> */}
              <Route index element={<Profile/>  } />
              <Route path="edit" element={user ? <EditProfile/> : <Navigate to={"/login"}/>} />
            </Route>
            <Route path="team">
              <Route index element={<Team/>} />
              {/* <Route path="new" element={user ? <CreateTeam/> : <Login/>} /> */}
              
              <Route path="new" element={ <CreateTeam/>} />
            </Route>
            <Route path="mystats" element={user ? <MyStats/> : <Login/> } />
            <Route path="teamstats" element={user ? <TeamStats/> : <Login/> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
