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
  const dummyArray = ["a", "a", "a", "a", "a", "a", "a", "a"];

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
                description="Event Description"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKZkX0Ib2I0hhRl5XBwBYqPeDaXFg7JzHAyA&usqp=CAU"
              />
            ))}
          </div>
        </section>

        {/* upcomming events */}
        <section className="event__page-section">
          <div className="row d-flex justify-content-center px-5 pt-5">
            <h2 className="text-bold text-right upcoming-text">
              Upcomming{" "}
              <span>
                <FontAwesomeIcon icon={faArrowCircleRight} />
              </span>
            </h2>
          </div>
          <div className="event__page-row px-5">
            {dummyArray.map(() => (
              <EventCard
                title="Event Title"
                description="Event Description"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKZkX0Ib2I0hhRl5XBwBYqPeDaXFg7JzHAyA&usqp=CAU"
              />
            ))}
          </div>
        </section>

        {/* top categories */}
        <section className="event__page-section">
          <div className="row d-flex justify-content-center px-5 pt-5">
            <h2 className="text-bold text-right upcoming-text">
              Top Categories{" "}
              <span>
                <FontAwesomeIcon icon={faArrowCircleRight} />
              </span>
            </h2>
          </div>
          <div className="event__page-row px-5">
            {dummyArray.map(() => (
              <EventCard
                title="Category Title"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKZkX0Ib2I0hhRl5XBwBYqPeDaXFg7JzHAyA&usqp=CAU"
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default EventsPage;
