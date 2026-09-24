import React, { useState } from "react";
import "./Videos.css";
import { trackEvent } from "../../analytics";

const videos = [
  {
    id: 0,
    title: "Introduction",
   url: "https://www.youtube.com/embed/gTHPW2lXArE",
  },
  {
    id: 1,
    title: "Webseries Vimal Khanna",
    url: "https://drive.google.com/file/d/1KMmP1ffVHgF7mfyR7taw-pEkWcrSQRSu/preview",
  },
  {
    id: 2,
    title: "Webseries Raakh",
    url: "https://drive.google.com/file/d/1qmCllUpx_Z9aK-OWegf8ah7bsZeGhOxb/preview",
  },
  {
    id: 3,
    title: "Paisa Bazar TVC ad",
    url: "https://drive.google.com/file/d/1TyokKdlssXSPEzew2mZmCdwQWMYrx8qV/preview",
  },
  {
    id: 4,
    title: "Moneyview Digital ad",
    url: "https://www.youtube.com/embed/HWzyNiLBLzc",
  },
  {
    id: 5,
    title: "Digitak Ad",
    url: "https://www.youtube.com/embed/lw8C_pIg5ZU",
  },

  {
    id: 6,
    title: "Bank Employee",
    url: "https://www.youtube.com/embed/wR0sYW1NHBQ",
  },
  {
    id: 7,
    title: "Cop",
    url: "https://www.youtube.com/embed/TPX0ar0nK60",
  },
  {
    id: 8,
    title: "Gunda",
    url: "https://www.youtube.com/embed/mEH2qpirTSE",
  },
  {
    id: 9,
    title: "Lokendra Negative",
    url: "https://www.youtube.com/embed/X4aU4ibykeA",
  },
 
  {
    id: 10,
    title: "Digital Ad",
    url: "https://www.youtube.com/embed/dyTCx8c4g0Y",
  },
  {
    id: 11,
    title: "Guard audition",
     url: "https://www.youtube.com/embed/TF1Fn8AYR2g",
  },
  {
    id: 12,
    title: "Teacher audition",
      url: "https://www.youtube.com/embed/bLSAHSO6nH8",
  },
  {
    id: 13,
    title: "Chadda Sahab Audition",
      url: "https://www.youtube.com/embed/E_yU02iGQvs",
  },
];

const Videos = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const visibleVideos = showAll ? videos : videos.slice(0, 4);

  const handleVideoClick = (video) => {
    setActiveVideo(video.url);
    trackEvent("video_click", {
      event_category: "videos",
      event_label: video.title,
    });
  };

  const handleToggleSeeMore = () => {
    setShowAll((prev) => !prev);
    trackEvent("video_gallery_toggle", {
      event_category: "videos",
      event_label: showAll ? "show_less" : "show_more",
    });
  };

  return (
    <section id="videos">
      <h2 className="videosTitle">
        Work <span>Videos</span>
      </h2>

      <div className="videosGrid">
        {visibleVideos.map((video) => (
          <div
            className="videoBox"
            key={video.id}
            onClick={() => handleVideoClick(video)}
          >
            <div className="videoInner">
              <iframe
                src={video.url + "?rel=0"}
                title={video.title}
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="videoMeta">
              <p className="videoLabel">{video.title}</p>
              <span className="videoBadge">Preview</span>
            </div>
          </div>
        ))}
      </div>

      <div className="videosBtnWrap">
        <button className="seeMoreBtn" onClick={handleToggleSeeMore}>
          {showAll ? "Show Less" : "See More"}
        </button>
      </div>

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
