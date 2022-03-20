import React from "react";
import Typical from "react-typical";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/gihming/">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.instagram.com/gih_ming/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="www.linkedin.com/in/gihmingng">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCZavKbgdOSFch47ECio5w0A">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="https://www.behance.net/gihmingng">
                <i className="fa fa-behance-square"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I am <span className="highlighted-text">Ming</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primay-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev",
                    1000,
                    "Front end Developer",
                    1000,
                    "GRa",
                    1000,
                    "haha Dev",
                    1000,
                    "playing Dev",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building app woth front and back end operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {""}
              Hire Me{" "}
            </button>
            <a href="Resume_Gih_Ming.pdf" download="gihMing.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
