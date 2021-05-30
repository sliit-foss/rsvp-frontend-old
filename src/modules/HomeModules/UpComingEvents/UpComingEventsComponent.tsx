import "./UpComing.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
function UpComingEvents() {
  return (
    <>
      <div className="container-fluid card-container mt-5">
        <div className="container-fluid d-flex flex-column justify-content-center px-1">
          <h2 className="text-bold text-center  mt-5 mb-5 upcoming-text">
            Upcoming Event{" "}
            <span>
              <FontAwesomeIcon icon={faArrowCircleRight} />
            </span>
          </h2>

          <div className="courses-container mx-auto mb-4">
            <div className="course">
              <div className="course-preview">
                <h6>Programing</h6>
                <h2>JavaScript Fundamentals</h2>
                <a href="#">
                  <span className="badge rounded-pill text-dark bg-light">
                    #SLIITFOSS
                  </span>{" "}
                  <span className="badge rounded-pill text-dark bg-light">
                    #JAVASCRIPT
                  </span>
                </a>
              </div>
              <div className="course-info">
                <div className="progress-container">
                  <div className="progress" />
                  <span className="progress-text">6/9 Challenges</span>
                </div>
                <h6>Chapter 4</h6>
                <h2>Callbacks &amp; Closures</h2>
                <h6>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti totam tempore earum sint sed ipsam iste accusantium
                  porro? Reprehenderit atque dolor culpa dicta nam quam
                  asperiores numquam natus voluptatibus porro!
                </h6>
                <hr />
                <div className="d-flex justify-content-between align-items-center">
                  <h5>By SLIIT FOSS Community</h5>
                  <button className="btn">RSVP</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpComingEvents;
