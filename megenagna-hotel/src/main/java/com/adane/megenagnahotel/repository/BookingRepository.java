package com.adane.megenagnahotel.repository;

import com.adane.megenagnahotel.model.BookedRoom;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookingRepository extends JpaRepository<BookedRoom, Long > {

    BookedRoom findByBookingConfirmationCode(String confirmationCode);


    List<BookedRoom> findByRoomId(Long roomID);
}
