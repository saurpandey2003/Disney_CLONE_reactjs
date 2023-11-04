import React from 'react';
import Login from './Components/Home/Login';
import Header from './Components/Home/Header';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Components/Home/Home';
import Detail from './Components/Home/Details';
import Movie from './Components/Home/Movies';
import Search from './Components/Home/Search';

const App = () => {
  return (
    <>
  
      <Router>
        <Routes>
        <Route path='/' element={<Login />} />
          <Route path='/header' element={<Header />} />
          <Route path='/home' element={<Home></Home>}/>
          <Route path="/detail/:id" element={<Detail />} />
          <Route path='/Movie' element={<Movie></Movie>}></Route>
          <Route path='/search' element={<Search></Search>}></Route>
        </Routes>

      </Router>


    </>
  )
}

export default App