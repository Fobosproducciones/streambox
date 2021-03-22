import React from "react";
import "../styles/Iframestyles.css";

const Iframe = () => {
  return (
    <div>
      <div className="iframe-container">
        <iframe
          className="iframe"
          title="embed-video"
          width="500"
          height="281"
          src="https://www.youtube.com/embed/21X5lGlDOfg"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Iframe;
