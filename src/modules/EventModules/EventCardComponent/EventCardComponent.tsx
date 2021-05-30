import "./eventCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faCalendar,
  faPaperclip,
} from "@fortawesome/free-solid-svg-icons";

function EventCard({
  title,
  community = "",
  image,
  fromDate = "",
  toDate = "",
}) {
  return (
    <>
      <div className="card mx-2 my-3 rounded-lg shadow event__">
        <div className="event__img">
          <img src={image} className="card-img-top" alt={title} />
        </div>

        <button className="event__category text-center">RSVP</button>

        <div className="card-body pt-5 d-flex flex-column align-items-center">
          <h5 className="card-title mb-3">{title}</h5>
          {community && (
            <div className="d-flex align-items-center">
              <FontAwesomeIcon
                style={{ fontSize: 12, color: "rgb(95, 95, 95)" }}
                icon={faUsers}
              />
              <p
                style={{ fontSize: 14, color: "rgb(95, 95, 95)" }}
                className="card-text px-2"
              >
                {community}
              </p>
            </div>
          )}
          {fromDate && toDate && (
            <div className="d-flex align-items-center">
              <FontAwesomeIcon
                style={{ fontSize: 12, color: "rgb(95, 95, 95)" }}
                icon={faCalendar}
              />
              <p
                style={{ fontSize: 14, color: "rgb(95, 95, 95)" }}
                className="card-text"
              >
                <span className="px-2">{fromDate}</span>
                <span>{toDate}</span>
              </p>
            </div>
          )}
        </div>
        {fromDate && toDate && community && (
          <div className="event__information">
            <div
              style={{ fontSize: 14, color: "rgb(95, 95, 95)" }}
              className="mx-4 card-text"
            >
              Event Information
            </div>
            <button className="event__information-icon">
              <FontAwesomeIcon style={{ fontSize: 12 }} icon={faPaperclip} />
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default EventCard;
