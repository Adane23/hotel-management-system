package com.adane.megenagnahotel.controller;

import com.adane.megenagnahotel.exception.PhotoRetrievalException;
import com.adane.megenagnahotel.exception.ResourceNotFoundException;
import com.adane.megenagnahotel.model.BookedRoom;
import com.adane.megenagnahotel.model.Room;
import com.adane.megenagnahotel.response.BookingResponse;
import com.adane.megenagnahotel.response.RoomResponse;
import com.adane.megenagnahotel.service.BookingService;
import com.adane.megenagnahotel.service.RoomService;
import com.adane.megenagnahotel.service.RoomServiceInterface;
import lombok.RequiredArgsConstructor;
import org.apache.tomcat.util.codec.binary.Base64;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.sql.rowset.serial.SerialBlob;
import javax.swing.text.html.Option;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.math.BigDecimal;
import java.sql.Blob;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/rooms")
@CrossOrigin(origins = "http://localhost:5173")
public class RoomController {

    private final RoomService roomService;
    private  final BookingService bookingService;

    @PostMapping("/add/new-room")
    public ResponseEntity<RoomResponse> addNewRoom(
            @RequestParam("photo") MultipartFile photo,
            @RequestParam("roomType") String roomType,
            @RequestParam("roomPrice") BigDecimal roomPrice) throws SQLException, IOException {

        Room savedRoom = roomService.addNewRoom(photo, roomType, roomPrice);

        RoomResponse response = new RoomResponse(savedRoom.getId(),
                savedRoom.getRoomType(), savedRoom.getRoomPrice());
        return ResponseEntity.status(HttpStatus.CREATED).body(response); // Return 201 Created
    }

    @GetMapping("/room/types")
    public List<String> getRoomTypes(){
        return roomService.getAllRoomTypes();
    }


    @GetMapping("/all-rooms")
    public ResponseEntity<List<RoomResponse>> getAllRooms() throws SQLException {
        List<Room> rooms = roomService.getAllRooms();

        List<RoomResponse> roomResponses = new ArrayList<>();

        for(Room room : rooms){
            byte[] photoBytes = roomService.getRoomPhotoByRoomID(room.getId());

            if(photoBytes != null && photoBytes.length > 0){
                String base64Photo = Base64.encodeBase64String(photoBytes);
                RoomResponse roomResponse = getRoomResponse(room);
                roomResponse.setPhoto(base64Photo);
                roomResponses.add(roomResponse);
            }
        }
        return ResponseEntity.ok(roomResponses);
    }

    @DeleteMapping("/delete/room/{roomId}")
    public ResponseEntity<Void> deleteRoom(@PathVariable Long roomId){
        roomService.deleteRoom(roomId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping("/update/{roomId}")
    public ResponseEntity <RoomResponse> updateRoom(@PathVariable Long roomId,
                                                    @RequestParam(required = false) String roomType,
                                                    @RequestParam(required = false) BigDecimal roomPrice,
                                                    @RequestParam(required = false) MultipartFile photo) throws IOException, SQLException {

        byte[] photoBytes = photo != null && !photo.isEmpty() ?
                photo.getBytes() : roomService.getRoomPhotoByRoomID(roomId);

        Blob photoBlob = photoBytes != null && photoBytes.length > 0 ? new SerialBlob(photoBytes) : null;
        Room theRoom = roomService.updateRoom(roomId, roomType, roomPrice, photoBytes);
        theRoom.setPhoto(photoBlob);
        RoomResponse roomResponse = getRoomResponse(theRoom);
        return ResponseEntity.ok(roomResponse);
    }

    @GetMapping("/room/{roomId}")
    public ResponseEntity<Optional<RoomResponse>> getRoomById(@PathVariable Long roomId){
        Optional<Room> theRoom = roomService.getRoomById(roomId);
        return theRoom.map(room -> {
            RoomResponse roomResponse = getRoomResponse(room);
            return ResponseEntity.ok(Optional.of(roomResponse));
        }).orElseThrow(() -> new ResourceNotFoundException("Room not found"));
    }

    private RoomResponse getRoomResponse(Room room) {
        List<BookedRoom> bookings  = getAllBookingsByRoomId(room.getId());

        /*
        List<BookingResponse> bookingInfo = bookings
                .stream()
                .map(booking -> new
                BookingResponse(booking.getBookingId(),
                booking.getCheckInDate(),
                booking.getCheckOutDate(), booking.getBookingConfirmationCode())).toList(); */

        byte[] photoBytes = null;
        Blob photoBlob = room.getPhoto();

        if(photoBlob != null){
            try{
                photoBytes = photoBlob.getBytes(1, (int) photoBlob.length());
            }catch (SQLException e){
                throw new PhotoRetrievalException("Error retrieving photo");
            }
        }
        return new RoomResponse(room.getId(),
                room.getRoomType(),
                room.getRoomPrice(),
                room.isBooked(), photoBytes);
    }

    private List<BookedRoom> getAllBookingsByRoomId(Long roomID) {
        return bookingService.getAllBookingsByRoomId(roomID);
    }
}

