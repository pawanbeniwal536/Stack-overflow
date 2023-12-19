import React, { useEffect } from 'react';
import Navbar from './component/Navbar/Navbar';
import AllRoutes from './AllRoutes';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { fetchAllQuestions } from './actions/question';
import { useDispatch } from 'react-redux';
import { fetchAllUsers } from './actions/users';
function App(){

   const dispatch=useDispatch()
   useEffect(()=>{
      dispatch(fetchAllQuestions())
      dispatch(fetchAllUsers())
   },[dispatch])

return(
   <>
   <Router>
   <Navbar/>
   <AllRoutes/>
   </Router>
   </>
)
}
export default App;