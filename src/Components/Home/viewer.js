import React from "react";
import "./viewer.css";
import img1 from '../images-20231018T171719Z-001/images/viewers-disney.png';
import img2 from '../images-20231018T171719Z-001/images/viewers-marvel.png';
import img3 from '../images-20231018T171719Z-001/images/viewers-national.png';
import img4 from '../images-20231018T171719Z-001/images/viewers-pixar.png';
import img5 from '../images-20231018T171719Z-001/images/viewers-starwars.png'
import video1 from '../videos/1564674844-disney.mp4';
import video2 from '../videos/1564676115-marvel.mp4';
import video3 from '../videos/1564676296-national-geographic.mp4';
import video4 from '../videos/1564676714-pixar.mp4'
import video5 from '../videos/1608229455-star-wars.mp4'


const Viewers =()=>{
    return (
        <>
            <div className="viewer">
                <div><a><img src={img1}></img><video className="videos"autoPlay={true} loop={true} playsInline={true}><source src={video1} type="video/mp4"></source></video></a></div>
                <div><a><img src={img2}></img><video className="videos"autoPlay={true} loop={true} playsInline={true}><source src={video2} type="video/mp4"></source></video></a></div>
                <div><a><img src={img3}></img><video className="videos"autoPlay={true} loop={true} playsInline={true}><source src={video3} type="video/mp4"></source></video></a></div>
                <div><a><img src={img4}></img><video className="videos"autoPlay={true} loop={true} playsInline={true}><source src={video4} type="video/mp4"></source></video></a></div>
                <div><a><img src={img5}></img><video className="videos"autoPlay={true} loop={true} playsInline={true}><source src={video5} type="video/mp4"></source></video></a></div>
              
            </div>   
        </>
    )
}
export default Viewers;