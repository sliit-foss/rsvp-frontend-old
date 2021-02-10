import "../../scss/hero.scss";
import carousel1 from "../../assets/images/logos/carousel1.jpg";
import carousel2 from "../../assets/images/logos/carousel2.jpg";
import carousel3 from "../../assets/images/logos/carousel3.jpg";
function HomeHero() {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide p-5"
        data-bs-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={0}
            className="active"
          />
          <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} />
          <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={carousel1} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
          <div className="carousel-item">
            <img src={carousel2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
          <div className="carousel-item">
            <img src={carousel3} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </a>
      </div>
    </>
  );
}

export default HomeHero;
