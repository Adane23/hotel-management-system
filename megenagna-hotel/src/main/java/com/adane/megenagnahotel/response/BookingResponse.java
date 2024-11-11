package com.adane.megenagnahotel.response;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BookingResponse {

    private Long id;

    private LocalDate checkInDate;

    private LocalDate checkOutDate;

    private String guestFullName;

    private String guestEmail;

    private String guestPhone;

    private String guestAddress;

    private String guestCity;

    private String guestState;

    private String guestZipCode;

    private String guestCountry;

    private int numberOfAdults;

    private int numberOfChildren;

    private Long bookingId;

    private int totalNumOfGuests;

    private String bookingConfirmationCode;

    private RoomResponse room;



    public BookingResponse(String bookingConfirmationCode, Long id, LocalDate checkInDate,
                           LocalDate checkOutDate) {
        this.bookingConfirmationCode = bookingConfirmationCode;
        this.id = id;
        this.checkInDate = checkInDate;
        this.checkOutDate = checkOutDate;
    }

    public BookingResponse(Long bookingId, LocalDate checkInDate,
                           LocalDate checkOutDate, String guestFullName,
                           String guestEmail, int numberOfAdults,
                           int numberOfChildren, int totalNumOfGuests,
                           String bookingConfirmationCode, RoomResponse room) {
        this.bookingId = bookingId;
        this.checkInDate = checkInDate;
        this.checkOutDate = checkOutDate;
        this.guestFullName = guestFullName;
        this.guestEmail = guestEmail;
        this.numberOfAdults = numberOfAdults;
        this.numberOfChildren = numberOfChildren;
        this.totalNumOfGuests = totalNumOfGuests;
        this.bookingConfirmationCode = bookingConfirmationCode;
        this.room = room;

    }
}
