import React, { useEffect, useState } from "react";
import { getRoomById } from "../utils/ApiFunctions";
import { Link, useParams } from "react-router-dom";
import { updateRoom } from "../utils/ApiFunctions";

const EditRoom = () => {
  const [room, setRoom] = useState({
    photo: null,
    roomType: "",
    roomPrice: "",
  });

  const [imagePreview, setImagePreview] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const { roomId } = useParams();

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setRoom({ ...room, photo: selectedImage });
    setImagePreview(URL.createObjectURL(selectedImage));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRoom({ ...room, [name]: value });
  };

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const roomData = await getRoomById(roomId);
        setRoom(roomData);
        setImagePreview(roomData.photo);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRoom();
  }, [roomId]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await updateRoom(roomId, room);
      if (response.status === 200) {
        setSuccessMessage("Room updated successfully!");
        const updatedRoomData = await getRoomById(roomId);
        setRoom(updatedRoomData);
        setImagePreview(updatedRoomData.photo);
        setErrorMessage("");
      } else {
        setErrorMessage("Failed to update room!");
      }
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <h3 className="text-center mb-s mt-5">Edit Room</h3>
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          {successMessage && (
            <div className="alert alert-success" role="alert">
              {successMessage}
            </div>
          )}

          {errorMessage && (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="roomType" className="form-label hotel-color">
                Room Type
              </label>
              <input
                className="form-control"
                id="roomType"
                type="text"
                name="roomType"
                value={room.roomType}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="roomPrice" className="form-label hotel-color">
                Room Price
              </label>
              <input
                className="form-control"
                id="roomPrice"
                type="number"
                name="roomPrice"
                value={room.roomPrice}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="photo" className="form-label hotel-color">
                Photo
              </label>
              <input
                required
                className="form-control"
                id="photo"
                type="file"
                name="photo"
                onChange={handleImageChange}
              />

              {imagePreview && (
                <img
                  // src={`data:image/jpeg;base64,${imagePreview}`}
                  src={
                    imagePreview.startsWith("data:image/")
                      ? imagePreview
                      : `data:image/jpeg;base64,${imagePreview}`
                  }
                  alt="Room Preview"
                  style={{ maxWidth: "400px", minWidth: "400px" }}
                  className="img-fluid mt-3"
                />
              )}
            </div>

            <div className="d-grid gap-2 d-md-fles mt-2">
              <Link
                to={"/existing-rooms"}
                className="btn btn-outline-info ml-5"
              >
                Back
              </Link>
              <button type="submit" className="btn btn-outline-warning">
                Edit Room
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditRoom;
