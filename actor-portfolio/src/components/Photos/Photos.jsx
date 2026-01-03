import React, { useState } from "react";
import "./Photos.css";

// Replace with your real images
import p0 from "../../assets/animesh.jpg";
import p1 from "../../assets/one.jpg";
import p2 from "../../assets/two.jpg";
import p3 from "../../assets/three.jpg";
import p4 from "../../assets/four.jpg";
import p5 from "../../assets/five.jpg";
import p6 from "../../assets/six.jpg";

const photos = [p0,p1, p2, p3, p4, p5, p6,];

const Photos = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const visiblePhotos = showAll ? photos : photos.slice(0, 6);

  return (
    <section id="photos">
      <h2 className="photosTitle">
        Photos <span>Gallery</span>
      </h2>

      {/* GRID */}
      <div className="photosGrid">
        {visiblePhotos.map((img, index) => (
          <div
            className="photoBox"
            key={index}
            onClick={() => setSelectedImg(img)}
          >
            <img src={img} alt={`Photo ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* SEE MORE */}
      <div className="photosBtnWrap">
        <button className="seeMoreBtn" onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show Less" : "See More"}
        </button>
      </div>

      {/* FULL IMAGE MODAL */}
      {selectedImg && (
        <div className="photoModal" onClick={() => setSelectedImg(null)}>
          <span className="closeBtn">✕</span>
          <img src={selectedImg} alt="Full View" />
        </div>
      )}
    </section>
  );
};

export default Photos;
