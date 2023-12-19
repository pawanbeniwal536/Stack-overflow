import React from "react";
import Logo from "../../assets/Logo.png";
import {useSelector, useDispatch} from "react-redux"
import Search from "../../picture/Searchicon"
import Avatar from "../Avatar/Avatar"
import './Navbar.css';
import { Link ,useNavigate} from 'react-router-dom'
import { useEffect } from "react";
import { setCurrentUser } from "../../actions/currentUser";
import {jwtDecode} from 'jwt-decode'

function Navbar() { 
  const dispatch=useDispatch();
  var User=useSelector((state)=>(state.currentUserReducer));
  const navigate=useNavigate()

  const handleLogout = () =>{
    dispatch({type: 'LOGOUT'})
    navigate('/')
    dispatch(setCurrentUser(null))
  }

  useEffect(()=>{
    const token =User?.token
    if(token){
      const decodedToken =jwtDecode(token)
      if(decodedToken.exp+1000 <new Date().getTime()){
         handleLogout()
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
  },[dispatch])

  return(
    <nav className="main-nav">
      <div className="navbar">
      <Link className="nav-item nav-logo" to="/">
        <img src={Logo}alt="Logo"/>
      </Link>

      <Link to="/" className="nav-item nav-btn">About</Link>
      <Link to="/"className="nav-item nav-btn">Products</Link>
      {/* <Link to="/"className="nav-item nav-btn">For Teams</Link> */}
      <form>
      <input  type="text"placeholder="Search..."/>
      <div className="search-icon">
        <Search/>
      </div>
      </form>
      { User===null?
      <div className="myclass">
      <Link to="/Auth"className="myclass2 nav-item nav-links">Log in</Link>
      </div>:
      <>
       <Avatar backgroundColor='#009dff' px="10px" py="7px"borderRadius="50%"color="white"><Link to={`/Users/${User.result._id}`} style={{color:"white",textDecoration:'none'}}>{User.result.name.charAt(0).toUpperCase()}</Link></Avatar>
       <button className="myclass3 nav-item nav-links"onClick={handleLogout}>Log out</button>
      </>
    }

      </div>
      </nav>
    
  );
}
export default Navbar;
