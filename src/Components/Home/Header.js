import React, { useState, useEffect, useContext } from "react";
import navimg1 from '../images-20231018T171719Z-001/images/logo.svg';
import homelogo from '../images-20231018T171719Z-001/images/home-icon.svg';
import "./_header.css";
import { auth, provider } from "../firbse";
import { signInWithPopup } from "firebase/auth";
import { Link } from "react-router-dom";
import Home from "./Home";
import { useNavigate } from 'react-router-dom';
import Login from "./Login";
import { useDispatch, useSelector } from "react-redux";
import searchicon from "../images-20231018T171719Z-001/images/search-icon.svg"
import wtchicon from "../images-20231018T171719Z-001/images/watchlist-icon.svg"
import movieicon from "../images-20231018T171719Z-001/images/movie-icon.svg"
import seriesicon from "../images-20231018T171719Z-001/images/series-icon.svg"


import {
  selectUserName, selectUserPhoto,
  setUserLoginDetails,
  setSignOutState
} from "../../features/user/userSlice";




const Header = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  const navigate = useNavigate();
  const [value, setValue] = useState('')
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email)
      localStorage.setItem("email", data.user.email);
      navigate('/home');
      setUser(data.user);
      console.log(data.user);

    })
  }
  const handleClicksingout=()=>{
    setUser(false);
    navigate('/');
  }



  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };


  useEffect(() => {
    setValue(localStorage.getItem('email'));

  })


  return (
    <>
      <nav>
        <div className="header">
          <logo>
            <img src={navimg1} alt="Disney_logo"></img>
          </logo>

          {userName ? (<><div className='nav_menu'  >

            <ul>
              <Link to="/home"> <li className="li_logo"><img src={homelogo} alt="HOME"></img>HOME </li></Link>
              <Link to="/search"><li className="li_logo"><img src={searchicon} alt="SEARCH"></img>SEARCH</li></Link>
              <Link to="/home"><li className="li_logo"><img src={wtchicon} alt="WATCHLIST"></img>WATCHLIST</li></Link>
              <Link to="/Movie"><li className="li_logo"><img src={movieicon} alt="MOVIES"></img>MOVIES</li></Link>
              <Link to="/home"><li className="li_logo"><img src={seriesicon} alt="SERIES"></img>SERIES</li></Link>
            </ul>
       
          </div>
          <button className="login" onClick={handleClicksingout}>LogOut</button>
          
    
  </>
          ) : (<button className="login" onClick={handleClick } >LOGIN</button>)}






        </div>
      </nav>
    </>
  );
};

export default Header;
