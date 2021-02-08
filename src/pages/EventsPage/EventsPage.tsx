import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

function EventsPage() {
  return (
    <>
      <div className="container-fluid card-container mt-5">
        <div className="row d-flex justify-content-center p-5 ">
          <h2 className="text-bold text-right mb-5 upcoming-text">
            Upcoming Events{" "}
            <span>
              <FontAwesomeIcon icon={faArrowCircleRight} />
            </span>
          </h2>
        </div>
      </div>
    </>
  );
}

export default EventsPage;
