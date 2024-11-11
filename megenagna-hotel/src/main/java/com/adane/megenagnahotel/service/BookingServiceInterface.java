package com.adane.megenagnahotel.service;

import com.adane.megenagnahotel.model.BookedRoom;

import java.util.List;

public interface BookingServiceInterface {
    void cancelBooking(Long bookingId);

    String saveBooking(Long roomId, BookedRoom bookingRequest);

    BookedRoom findByBookingConfirmationCode(String confirmationCode);

    List<BookedRoom> getAllBookings();
}
