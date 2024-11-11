import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const RoomCard = ({ room }) => {
  return (
    <Col key={room.id} className="mb-4" xs={12}>
      <Card className="shadow-sm p-3">
        <Card.Body className="d-flex flex-wrap align-items-center">
          <div className="flex-shrink-0 me-3 mb-3 mb-md-0">
            <Link className="btn btn-hotel btn-sm" to={`book-room/${room.id}`}>
              <Card.Img
                variant="top"
                src={`data:image/png;base64,${room.photo}`}
                alt="Room Photo"
                style={{ width: "100%", height: "auto", maxWidth: "200px" }}
              />
            </Link>
          </div>

          <div className="flex-grow-1 d-flex flex-column align-items-start px-5">
            <Card.Title className="hotel-color">{room.roomType}</Card.Title>
            <Card.Title className="room-price">
              {room.roomPrice}/Night
            </Card.Title>
            <Card.Text>
              Some room information goes here for the guest to read through
            </Card.Text>
          </div>

          <div className="flex-shrink-0 mt-3">
            <Link className="btn btn-hotel btn-sm" to={`/book-room/${room.id}`}>
              Book Now
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default RoomCard;
