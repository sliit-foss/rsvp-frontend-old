/*
 *
 * Created by Layan Jayasinghe <layanjayasinghe2@gmail.com>
 * Used the mentioned design in github issue
 *
 */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import EventCard from "../../modules/EventModules/EventCardComponent/EventCardComponent";

import "./eventPage.scss";

function EventsPage() {
  // dummy array to show iteration
  // must change after connecting the backend
  const dummyArray = ["a", "a", "a", "a", "a"];

  return (
    <>
      <div className="container-fluid card-container mt-5 pb-5 h-full event__page">
        {/* Happening events */}
        <section className="event__page-section">
          <div className="row d-flex justify-content-center px-5 pt-5">
            <h2 className="text-bold text-right upcoming-text">
              Happening Now{" "}
              <span>
                <FontAwesomeIcon icon={faArrowCircleRight} />
              </span>
            </h2>
          </div>
          <div className="event__page-row px-5">
            {dummyArray.map(() => (
              <EventCard
                title="Event Title"
                community="Event Community"
                fromDate="20-03-2021"
                toDate="23-03-2021"
                image="https://www.developerweek.com/wp-content/uploads/2020/04/DeveloperWeek-2020.jpg"
              />
            ))}
          </div>
        </section>

        {/* upcomming events */}
        <section className="event__page-section">
          <div className="row d-flex justify-content-center px-5 pt-5">
            <h2 className="text-bold text-right upcoming-text">
              Upcoming Events{" "}
              <span>
                <FontAwesomeIcon icon={faArrowCircleRight} />
              </span>
            </h2>
          </div>
          <div className="event__page-row px-5">
            {dummyArray.map(() => (
              <EventCard
                title="Event Title"
                community="Event Community"
                fromDate="20-03-2021"
                toDate="23-03-2021"
                image="https://www.developerweek.com/wp-content/uploads/2020/04/DeveloperWeek-2020.jpg"
              />
            ))}
          </div>
        </section>

        {/* top categories */}
        <section className="event__page-section">
          <div className="row d-flex justify-content-center px-5 pt-5">
            <h2 className="text-bold text-right upcoming-text">
              Past Events{" "}
              <span>
                <FontAwesomeIcon icon={faArrowCircleRight} />
              </span>
            </h2>
          </div>
          <div className="event__page-row px-5">
            {dummyArray.map(() => (
              <EventCard
                title="Category Title"
                community="Event Community"
                fromDate="20-03-2021"
                toDate="23-03-2021"
                image="https://www.developerweek.com/wp-content/uploads/2020/04/DeveloperWeek-2020.jpg"
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default EventsPage;
