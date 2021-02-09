import "./Navbar.scss";
import { useHistory } from "react-router-dom";

function Navbar() {
  const history = useHistory();

  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light">
        <div className="container-fluid col-11">
          <a className="navbar-brand" href="#">
            SLIIT RSVP PORTAL
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={() => {
                    history.push("/events");
                  }}
                >
                  Events
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Clubs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
