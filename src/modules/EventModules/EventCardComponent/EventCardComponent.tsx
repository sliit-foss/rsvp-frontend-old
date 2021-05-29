import "./eventCard.scss";

function EventCard({ title, description = "", image }) {
  return (
    <>
      <div className="card mx-2 my-3 rounded-lg shadow event__">
        <div className="event__img">
          <img src={image} className="card-img-top" alt={title} />
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          {description && <p className="card-text">{description}</p>}
        </div>
      </div>
    </>
  );
}

export default EventCard;
