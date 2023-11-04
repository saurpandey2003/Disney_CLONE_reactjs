import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import db from "../firbse";
import "./details.css"
import Header from "./Header";
import play from '../images-20231018T171719Z-001/images/play-icon-black.png'
import Trailore from '../images-20231018T171719Z-001/images/play-icon-white.png'
import groupicon from "../images-20231018T171719Z-001/images/group-icon.png"




const Detail = () => {
    const { id } = useParams();

  const [detailData, setDetailData] = useState({});


    useEffect(() => {
        const fetchMovieData = async () => {
            try {
                // Use the `doc` function to get the document from the collection
                const movieDocRef = doc(db, "movies", id);
                const movieDoc = await getDoc(movieDocRef);

                if (movieDoc.exists()) {
                    setDetailData(movieDoc.data());
                } else {
                    console.log("No such document in Firestore 🔥");
                }
            } catch (error) {
                console.error("Error getting document:", error);
            }
        };

        fetchMovieData();
    }, [id]);


    return (
        <>
            <Header></Header>
            <div className="details" style={{ backgroundImage: `url(${detailData.backgroundImg})` }} >

                <div className="movie_title_img">
                    <img src={detailData.titleImg} alt={detailData.title} />
                </div>
                <div className="btn">
                    <button className="real_btn" >
                        <img className="media" src={play}></img><span>Play</span></button>
                        <button className="real_btn" >
                        <img className="media" src={Trailore}></img><span>Trailore</span></button>
                        

                    </div>
                <div className="text_details subTitle">{detailData.subTitle}</div>
                <div className="text_details description"><h4>{detailData.description}</h4></div>
            </div>
        </>
    );
};

export default Detail;

