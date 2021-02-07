import "../../../scss/UpComingComponent.scss";
import EventCard from "../EventCardComponent/EventCardComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
function upComingEvents() {
  return (
    <>
      <div className="container-fluid card-container">
        <div className="row d-flex justify-content-center p-5 ">
          <h2 className="text-bold text-right mb-5 upcoming-text">
            Upcoming Events{" "}
            <span>
              <FontAwesomeIcon icon={faArrowCircleRight} />
            </span>
          </h2>

          <div className="col-12">
            <div id="carousel" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li
                  data-target="#carousel"
                  data-slide-to={0}
                  className="active bg-secondary"
                />
                <li
                  data-target="#carousel"
                  data-slide-to={1}
                  className="bg-secondary"
                />
                <li
                  data-target="#carousel"
                  data-slide-to={2}
                  className="bg-secondary"
                />
              </ol>
              <div className="carousel-inner ">
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-12 col-md-6 col-xl-3 mb-4">
                      <EventCard />
                    </div>
                    <div className="col-12 col-md-6 col-xl-3 mb-4">
                      <EventCard />
                    </div>
                    <div className="col-12 col-md-6 col-xl-3 mb-4">
                      <EventCard />
                    </div>
                    <div className="col-12 col-md-6 col-xl-3 mb-4">
                      <EventCard />
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-12 col-md-6 col-xl-3 mb-4">
                      <EventCard />
                    </div>
                    <div className="col-12 col-md-6 col-xl-3 mb-4">
                      <EventCard />
                    </div>
                    <div className="col-12 col-md-6 col-xl-3 mb-4">
                      <EventCard />
                    </div>
                    <div className="col-12 col-md-6 col-xl-3 mb-4">
                      <EventCard />
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-12 col-md-6 col-xl-3 mb-4">
                      <EventCard />
                    </div>
                    <div className="col-12 col-md-6 col-xl-3 mb-4">
                      <EventCard />
                    </div>
                    <div className="col-12 col-md-6 col-xl-3 mb-4">
                      <EventCard />
                    </div>
                    <div className="col-12 col-md-6 col-xl-3 mb-4">
                      <EventCard />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default upComingEvents;
