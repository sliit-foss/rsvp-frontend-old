import "../UpComingEvents/UpComing.scss";
function EventCard() {
  return (
    <>
      <div className="card mr-3">
        <img
          src="https://themesberg.s3.us-east-2.amazonaws.com/public/posts/gpt-3-tailwind-css-code-generator.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Event Name</h5>
          <p className="card-text">Description</p>
        </div>
      </div>
    </>
  );
}

export default EventCard;
