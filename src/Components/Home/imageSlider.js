import React from "react";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import "../../../node_modules/slick-carousel/slick/slick.css"
import "./Home.css";
import img1 from "../images-20231018T171719Z-001/images/slider-badag.jpg";
import img2 from "../images-20231018T171719Z-001/images/slider-badging.jpg";
import img3 from "../images-20231018T171719Z-001/images/slider-scale.jpg";
import img4 from "../images-20231018T171719Z-001/images/slider-scales.jpg";
import Viewers from "./viewer";
import Rec_movie from "./Recomnd_movie";
import NewDisneyMovie from "./newDisneyMovie";
import Trending_movies from "./TrendingMovies";
import { UseSelector } from "react-redux/es/hooks/useSelector";
import Originalsmovie from "./newMovies";


const ImageSlider = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
  };



  return (
    <>
      <div className="conatiner">
        <Slider className="slider"  {...settings}>
         <div className="slider_div"><a ><img src={img1}></img></a></div>
         <div className="slider_div"><a ><img src={img2}></img></a></div>
         <div className="slider_div"><a ><img src={img3}></img></a></div>
         <div className="slider_div"><a ><img src={img4}></img></a></div>
        </Slider>

        <Viewers></Viewers>
        <Rec_movie></Rec_movie>
        <NewDisneyMovie></NewDisneyMovie>
      <Trending_movies></Trending_movies>
      <Originalsmovie></Originalsmovie>




      </div>
    </>
  )

}
export default ImageSlider;