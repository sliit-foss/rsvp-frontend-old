import "./ClubsPage.scss";

const ClubsPage = () => {
  return (
    <div className="cl-container py-5 my-5">
      <div className="cl-row">
        <div className="cl-column cl-image"></div>
        <div className="cl-column cl-box">
          <span>SLIIT FOSS Community</span>
          <button>More Info</button>
        </div>
        <div className="cl-column cl-image"></div>
        <div className="cl-column cl-box">
          <span>MS Club of SLIIT</span>
          <button>More Info</button>
        </div>
      </div>

      <div className="cl-row cl-rowtwo">
        <div className="cl-column cl-box">
          <span>Mozilla Campus Club</span>
          <button>More Info</button>
        </div>
        <div className="cl-column cl-image"></div>
        <div className="cl-column cl-box">
          <span>Other Societies</span>
          <button>More Info</button>
        </div>
        <div className="cl-column cl-image"></div>
      </div>
    </div>
  );
};

export default ClubsPage;
