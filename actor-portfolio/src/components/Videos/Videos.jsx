import React, { useState } from "react";
import "./Videos.css";

const videos = [
  {
    id: 1,
    title: "Audition - Comedy",
    url: "https://www.youtube.com/embed/CiRoak-o8Z0",
  },
  {
    id: 2,
    title: "Bank Employee",
    url: "https://www.youtube.com/embed/wR0sYW1NHBQ",
  },
  {
    id: 3,
    title: "Cop",
    url: "https://www.youtube.com/embed/TPX0ar0nK60",
  },
  {
    id: 4,
    title: "Gunda",
    url: "https://www.youtube.com/embed/mEH2qpirTSE",
  },
  {
    id: 5,
    title: "Lokendra Negative",
    url: "https://www.youtube.com/embed/X4aU4ibykeA",
  },
  {
    id: 6,
    title: "Raju Villager",
    url: "https://www.youtube.com/embed/ZRlNmFxrf4A",
  },
  {
    id: 7,
    title: "Work Link Vertical",
    url: "https://www.youtube.com/embed/uDwGfszxrVw",
  },
  {
    id: 8,
    title: "Digital Ad",
    url: "https://www.youtube.com/embed/dyTCx8c4g0Y",
  },
];

const Videos = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const visibleVideos = showAll ? videos : videos.slice(0, 4);

  return (
    <section id="videos">
      <h2 className="videosTitle">
        Work <span>Videos</span>
      </h2>

      {/* GRID */}
      <div className="videosGrid">
        {visibleVideos.map((video) => (
          <div
            className="videoBox"
            key={video.id}
            onClick={() => setActiveVideo(video.url)}
          >
            <iframe
              src={video.url + "?rel=0"}
              title={video.title}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p className="videoLabel">{video.title}</p>
          </div>
        ))}
      </div>

      {/* SEE MORE */}
      <div className="videosBtnWrap">
        <button
          className="seeMoreBtn"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "See More"}
        </button>
      </div>

      {/* FULL SCREEN MODAL */}
      {activeVideo && (
        <div className="videoModal">
          <span className="closeBtn" onClick={() => setActiveVideo(null)}>
            ✕
          </span>
          <iframe
            src={activeVideo + "?autoplay=1&rel=0"}
            title="Full Video"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </section>
  );
};

export default Videos;
