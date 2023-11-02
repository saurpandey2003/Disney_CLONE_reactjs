import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db  from "../firbse"; // Import the Firebase instance correctly

const Detail = (props) => {
    const { id } = useParams();
    const [detailData, setDetailData] = useState({});

    useEffect(() => {
        const fetchMovieData = async () => {
            try {
                const movieDoc = await db.collection("movies").doc(id).get();

                if (movieDoc.exists) {
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
        <div className="rec_movie">
         <h1>hiiiu</h1>
         <h1>hiiiu</h1>
         <h1>hiiiu</h1>
        </div>
    );
};

export default Detail;
