import "./Partner.scss";
import FCSCMedia from "../../../assets/images/logos/FCSC MEDIA.png";
import FCSC from "../../../assets/images/logos/faculty of Computing Logo1.png";
import Foss from "../../../assets/images/logos/foss.png";
import MSClub from "../../../assets/images/logos/MSClubLogo.png";
import Mozilla from "../../../assets/images/logos/mozilla.png";
function Partners() {
  return (
    <>
      <section className="fdb-block mt-5">
        <div className="container">
          <div className="row align-items-top">
            <div className="col-12 col-md-6 col-xl-4 m-auto">
              <h2 className="fw-bold">Our Partners</h2>
              <p>
                A very big thank you to all our partners for their continued
                partnership. If you’re interested in being showcased throughout
                , contact SLIIT FCSC to discuss sponsorship opportunities.
              </p>
            </div>
            <div className="col-12 col-md-6 pt-5 pt-md-0">
              <div className="row justify-content-left">
                <div className="col-3 m-auto text-center">
                  <img
                    alt="image"
                    className="fdb-icon"
                    src={Foss}
                    width="100px"
                  />
                </div>
                <div className="col-3 m-auto text-center">
                  <img
                    alt="image"
                    className="fdb-icon"
                    src={FCSC}
                    width="100px"
                  />
                </div>
                <div className="col-3 m-auto text-center">
                  <img
                    alt="image"
                    className="fdb-icon"
                    src={MSClub}
                    width="80px"
                  />
                </div>
              </div>
              <div className="row justify-content-left mt-4 mt-xl-3">
                <div className="col-3 m-auto text-center">
                  <img
                    alt="image"
                    className="fdb-icon"
                    src={FCSCMedia}
                    width="70px"
                  />
                </div>
                <div className="col-3 m-auto text-center">
                  <img
                    alt="image"
                    className="fdb-icon"
                    src={Mozilla}
                    width="80px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Partners;
