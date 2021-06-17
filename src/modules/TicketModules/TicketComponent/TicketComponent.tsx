import "./Ticket.scss";

function Ticket(props) {
  return (
    <div className="ticket-outer">
      <div className="ticket-frame">
        <div className="user-wrap">
          <div className="container wrapper">
            <div className="row justify-content-md-center">
              <div className="col-2 avatar">
                <img src={props.profileImage} alt="Avatar" />
              </div>
              <div className="col-10 user">
                <h3>{props.name}</h3>
              </div>
            </div>
            <div className="row justify-content-md-center event">
              <div className="col-6 innerdata">{props.event}</div>
              <div className="col-6 innerdata">
                {props.date} <br />
                {props.venue}
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex align-items-right">
          <div className="container ticket-wrapper">
            <div className="row justify-content-md-center">
              <div className="number">{props.ticketId}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ticket;
