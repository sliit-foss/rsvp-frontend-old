import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentAlt,
  faCode,
  faLaptop,
  faPhotoVideo,
} from "@fortawesome/free-solid-svg-icons";
function WhatWeDo() {
  return (
    <>
      <section className="fdb-block">
        <div className="container" style={{ backgroundColor: "#F4F3F5" }}>
          <div className="row align-items-center p-3">
            <div className="col-12 col-md-8 col-lg-6 m-md-auto ml-lg-0 mr-lg-auto">
              <img
                alt="image"
                className="img-fluid"
                src="https://raw.githubusercontent.com/froala/design-blocks/000427352ad89da7fb4325037c116a3b06745608/src/imgs/draws/features.svg"
              />
            </div>
            <div className="col-12 col-lg-6 col-xl-5 ml-sm-auto pt-5 pt-lg-0">
              <h1 className="fw-bold">What we do</h1>
              <div className="row pt-4 pt-xl-5">
                <div className="col-12 col-sm-6 col-xl-5">
                  <h4>
                    <strong>
                      Talks{" "}
                      <span>
                        <FontAwesomeIcon icon={faCommentAlt} />
                      </span>
                    </strong>
                  </h4>
                  <p>Far far away, behind the word mountains</p>
                </div>
                <div className="col-12 col-sm-6 col-xl-5 m-auto pt-3 pt-sm-0">
                  <h4>
                    <strong>
                      Codelabs{" "}
                      <span>
                        <FontAwesomeIcon icon={faCode} />
                      </span>{" "}
                    </strong>
                  </h4>
                  <p>Separated they live in Bookmarksgrove</p>
                </div>
              </div>
              <div className="row pt-3">
                <div className="col-12 col-sm-6 col-xl-5">
                  <h4>
                    <strong>
                      Study Jam{" "}
                      <span>
                        <FontAwesomeIcon icon={faLaptop} />
                      </span>
                    </strong>
                  </h4>
                  <p>A small river named Duden flows by me</p>
                </div>
                <div className="col-12 col-sm-6 col-xl-5 m-auto pt-3 pt-sm-0">
                  <h4>
                    <strong>
                      Live Viewing Parties{" "}
                      <span>
                        <FontAwesomeIcon icon={faPhotoVideo} />
                      </span>
                    </strong>
                  </h4>
                  <p>Separated they live in Bookmarksgrove</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhatWeDo;
