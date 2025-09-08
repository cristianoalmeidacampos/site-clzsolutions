import React from "react";
import video from "../assets/video.mp4";

const VideoPlayer = () => {
    return (
      <div style={{ width: "600px", margin: "0 auto" }}>
        <video width="100%" controls>
          <source src="../assets/video.mp4" type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>
      </div>
    );
  };
  
  export default VideoPlayer;