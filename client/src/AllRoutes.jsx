import React from 'react'
import Auth from './pages/Auth/Auth.jsx'
import Home from './pages/Home/Home.jsx'
import Questions from './pages/Questions/Questions.jsx';
import AskQuestions from './pages/AskQuestions/AskQuestions.jsx';
import DisplayQuestion from './pages/Questions/DisplayQuestion.jsx';
import Tags from './pages/Tags/Tags.jsx';
import Users from './pages/Users/Users.jsx';
import UserProfile from './pages/UserProfile/UserProfile.jsx';

import {
  Routes,
  Route,
} from "react-router-dom";

function AllRoutes() {
  return (
    <div>
        <Routes>
          <Route path="/"element={<Home/>}/>
          <Route path="/Auth"element={<Auth/>}/>
          <Route path='/AskQuestions'element={<AskQuestions/>}/>
          <Route path='/Questions'element={<Questions/>}/>
          <Route path='/Questions/:id'element={<DisplayQuestion/>}/>
          <Route path='/Tags'element={<Tags/>}/>
          <Route path='/Users' element={<Users/>}/>
          <Route path='/Users/:id'element={<UserProfile/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes