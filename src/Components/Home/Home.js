import React from "react";
import Header from "./Header";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { setMovies } from "../../features/movie/movieSlice";
import { selectUserName } from "../../features/user/userSlice";
import  db  from "../firbse";
import "./Home.css";
import ImageSlider from "./imageSlider";
import { collection, onSnapshot } from "firebase/firestore";


// ... Other imports

const Home = () => {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    let recommends = [];
    let newDisneys = [];
    let originals = [];
    let trending = [];
  
    useEffect(() => {
      console.log("hello");
  
      const moviesCollection = collection(db, "movies"); // Access the "movies" collection
  
      onSnapshot(moviesCollection, (snapshot) => {
        snapshot.forEach((doc) => {
          const movieData = doc.data();
  
          console.log(recommends);
  
          switch (movieData.type) {
            case "recommend":
              recommends = [...recommends, { id: doc.id, ...movieData }];
              break;
  
            case "new":
              newDisneys = [...newDisneys, { id: doc.id, ...movieData }];
              break;
  
            case "original":
              originals = [...originals, { id: doc.id, ...movieData }];
              break;
  
            case "trending":
              trending = [...trending, { id: doc.id, ...movieData }];
              break;
          }
        });
  
        dispatch(
          setMovies({
            recommend: recommends,
            newDisney: newDisneys,
            original: originals,
            trending: trending,
          })
        );
      });
    }, [userName]);
  
   
  
    return (
        <>
          
                <Header ></Header>
                <ImageSlider></ImageSlider>
              


        </>
    )

};
export default Home;