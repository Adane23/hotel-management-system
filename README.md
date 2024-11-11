#Megenagna Hotel Management System
	A full-stack hotel management application built with Spring Boot and React. This system allows users to view, book, and manage hotel rooms, while also providing admin features for managing room inventory and viewing bookings. The application integrates JWT-based authentication for secure access control, with separate roles for customers and admin users.

## Table of Contents
	- [Project Overview]
	- [Technologies Used]
	- [Features]
	- [Setup Instructions]
	- [Screenshots]
    - [Future Enhancements]

## Project Overview
	The Megenagna Hotel Management System is a full-stack application designed to manage hotel bookings, room availability, and customer details. Built with a Spring Boot backend and a React frontend, this project provides a seamless experience for both guests and administrators. The system supports customer and admin users, allowing customers to browse available rooms, book rooms, and manage their bookings. Admin users can manage room details, view all bookings, and monitor room availability, and dynamic pricing based on the duration of the stay.

## Technologies Used
	### Backend:
		- Java: Core programming language
		- Spring Boot: Backend framework
		- Spring Data JPA: ORM for database operations
		- MySQL: Relational database
		- JWT (JSON Web Tokens): Secure authentication
		- Lombok: Reduces boilerplate code for models
	### Frontend:
		- React: Frontend library for building the UI
		- React Bootstrap: For styling and responsive design
		- Axios: For API requests
	### Additional Tools:
		- Maven: Build automation tool
		- Moment.js: JavaScript library for date manipulation
		- Git: Version control
		- Postman: testing and documenting API endpoints
## Features
	### User Authentication:
		- JWT-based authentication for secure login and access control.
		- Separate roles for admin and customer users.
	### Room Management:
		- Admin users can add, edit, delete, and view all hotel rooms.
		- Customers can view available rooms and filter by room type.
	### Booking System:
		- Customers can book rooms by specifying check-in and check-out dates.
		- Dynamic booking summaries with date validation and calculated total cost.
		- Admins can view all bookings in the system.
	### File Uploads:
		- Supports image uploads for room photos with file size restrictions.
	### Error Handling and Validation:
		- Form validation for booking details (e.g., valid dates, minimum guest requirements).
		- Secure error messages for authentication and booking validation. 

## Setup Instructions
	### Prerequisites
		Java 21
		MySQL (or access to a MySQL-compatible database)
		Node.js and npm
		Git
	### Backend Setup
		- Clone the Repository:
			git clone https://github.com/your-username/hotel-management-system.git
			cd hotel-management-system

		- Configure the Database:
			Create a new MySQL database called megenagna_hotel_db.
			Update src/main/resources/application.yml with your MySQL username and password.
			Sample configuration:
				spring:
		  			datasource:
		    			username: <YOUR_MYSQL_USERNAME>
		    			password: <YOUR_MYSQL_PASSWORD>
		    			url: jdbc:mysql://localhost:3306/megenagna_hotel_db
		- Run the Backend Application:
			./mvnw spring-boot:run
			The backend will start on http://localhost:9192.
			Frontend Setup
	### Frontend Setup
		- Navigate to the Frontend Directory:
			cd frontend
		- Install Dependencies:
			npm install
		- Start the Frontend Application:
			npm start
		- The frontend will start on http://localhost:3000.

        - Access the Application
	        Navigate to http://localhost:3000 in your browser to access the hotel management system.

    ### API Endpoints
	    The backend API provides various endpoints for user authentication, room management, and booking functionality. Here are a few key endpoints:
    		POST /login: Authenticate user and obtain JWT token.
    		GET /rooms: Retrieve all available rooms.
    		POST /bookings: Create a new booking.
    		GET /admin/bookings: View all bookings (admin-only).

## Screenshots
	Screenshots to showcase the UI and important features. To add images, create an images folder and reference them like this:

		Homepage:

		Room Booking:

		Admin Dashboard:

## Future Enhancements
	- Payment Integration: Add integration with a payment gateway for processing bookings.
	- Email Notifications: Send booking confirmations and reminders to customers.
	- Enhanced Role Management: Additional admin roles with specific access permissions.
	- UI Improvements: Enhance mobile responsiveness and UI consistency.

### Contact
    If you have questions, feel free to reach out or contribute to the project!
