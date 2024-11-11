package com.adane.megenagnahotel.service;

import com.adane.megenagnahotel.model.Room;

import java.math.BigDecimal;
import java.sql.SQLException;
import java.util.List;
import java.util.Optional;

public interface RoomServiceInterface {

    List<String> getAllRoomTypes();

    List<Room> getAllRooms();
    byte[] getRoomPhotoByRoomID(Long roomId) throws SQLException;

    void deleteRoom(Long roomId);

    Room updateRoom(Long roomId, String roomType, BigDecimal roomPrice, byte[] photoBytes);

    Optional<Room> getRoomById(Long roomId);
}
