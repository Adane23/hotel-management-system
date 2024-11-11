import React, { useEffect, useState } from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const BookingSummary = ({ booking, payment, isFormValid, onConfirm }) => {
  // Use the correct booking properties for date calculation
  const checkInDate = moment(booking.checkInDate);
  const checkOutDate = moment(booking.checkOutDate);

  // Calculate the number of days between check-in and check-out dates
  const numberOfDays = checkOutDate.diff(checkInDate, "days");

  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);
  const [isProccessingPayment, setIsProccessingPayment] = useState(false);
  const navigate = useNavigate();

  const handleConfirmBooking = () => {
    setIsProccessingPayment(true);

    setTimeout(() => {
      setIsProccessingPayment(false);
      setIsBookingConfirmed(true);
      onConfirm();
    }, 5000);
  };

  useEffect(() => {
    if (isBookingConfirmed) {
      navigate("/booking-success");
    }
  }, [isBookingConfirmed, navigate]);

  return (
    <div className="card card-boody mt-5">
      <h4>Reservation Summary</h4>
      <p>
        FullName: <strong>{booking.guestName}</strong>
      </p>
      <p>
        Email: <strong>{booking.guestEmail}</strong>
      </p>
      <p>
        Check-In Date:{" "}
        <strong>{checkInDate.format("MMM Do YYYY")}</strong>
      </p>
      <p>
        Check-Out Date:{" "}
        <strong>{checkOutDate.format("MMM Do YYYY")}</strong>
      </p>
      <p>
        Number of Days: <strong>{numberOfDays > 0 ? numberOfDays : "Invalid dates"}</strong>
      </p>
      <div>
        <h5>Number of Guests</h5>
        <p>
          <strong>Adult{booking.numberOfAdults > 1 ? "s" : ""}:</strong> {booking.numberOfAdults}
        </p>
        <p>
          <strong>Child{booking.numberOfChildren > 1 ? "ren" : ""}:</strong> {booking.numberOfChildren}
        </p>

        {numberOfDays > 0 && payment > 0 ? (
          <>
            <p>
              Total Payment: <strong>${payment}</strong>
            </p>

            {isFormValid && !isBookingConfirmed ? (
              <Button variant="success" onClick={handleConfirmBooking}>
                {isProccessingPayment ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm mr-2"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Booking Confirmed, redirecting to payment ...
                  </>
                ) : (
                  "Confirm Booking and proceed to payment"
                )}
              </Button>
            ) : isBookingConfirmed ? (
              <div className="d-flex justify-content-center align-items-center">
                <div className="spinner-border text-primary" role="status">
                  <span className="sr-only">Loading</span>
                </div>
              </div>
            ) : null}
          </>
        ) : (
          <p className="text-danger">
            Check-out date must be after check-in date
          </p>
        )}
      </div>
    </div>
  );
};

export default BookingSummary;
