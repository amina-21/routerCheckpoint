import React from "react";
import "./Home.css";
import { Zoom } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'

const Home = () => {
  const images = [
    "//pbs.twimg.com/media/ETAoYTMXgAA01qD.jpg",
    "https://image.tmdb.org/t/p/original/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
    "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2015%2F11%2Fjs20-20tease.jpeg",
    "https://pbs.twimg.com/media/EbNkkiTXsAc2o3Y.jpg",
    
  ];
  return (
    <div>
      <div>
        <h1>Welcome To The Movie App</h1>
      </div>
      <div className="slide-container">
        <Zoom scale={0.4}>
          {
            images.map((each, index) => <img  key={index} style={{width: "100%", height:"100%"}} src={each} />)
          }
        </Zoom>
      </div>
    </div>
  );
};

export default Home;
