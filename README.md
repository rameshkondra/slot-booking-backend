# 🎟️ Seat Booking System (MERN Stack)

A full-stack **Seat Booking Application** built using the MERN stack.
This system allows users to book seats and view all booked details with a clean UI and proper state management.

---

## 🚀 Features

### 🏠 Home Page (Tabs)

* 📌 **Book Slot**
* 📌 **Booked Slots**

---

### 🎯 Book Slot Flow

1. User opens **Book Slot tab**
2. Seats are displayed:

   * 🟢 **Green → Available**
   * 🔴 **Red → Booked**
   * 🔵 **Blue → Selected**
3. User selects seats
4. Clicks **Continue**
5. Redirects to **User Details Page**
6. Displays:

   * Selected Seats
7. User enters:

   * Name
   * Email
8. Clicks **Book Seats**
9. Booking stored in MongoDB

---

### 📄 Booked Slots Flow

1. User clicks **Booked Slots tab**
2. Displays all bookings:

   * 🆔 Booking ID
   * 👤 Name
   * 📧 Email
   * 🎟️ Seats

---

## 🏗️ Tech Stack

### Frontend

* React JS
* Context API (State Management)
* Axios

### Backend

* Node.js
* Express.js (MVC Architecture)

### Database

* MongoDB Atlas

---

## 📁 Folder Structure

```
backend/
│
├── config/
│   └── db.js
├── controllers/
│   └── seatController.js
├── models/
│   ├── seatModel.js
│   └── bookingModel.js
├── routes/
│   └── seatRoutes.js
├── server.js

frontend/
│
├── context/
│   └── BookingContext.js
├── components/
│   ├── Home.js
│   ├── SeatSelection.js
│   ├── UserDetails.js
│   └── BookedSlots.js
├── App.js
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/seat-booking.git
cd seat-booking
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Run backend:

```bash
npm start
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm start
```

---

## 🌐 API Endpoints

### ✅ Get all seats

```
GET /api/seats
```

---

### ✅ Book seats

```
POST /api/book-seats
```

**Request Body:**

```json
{
  "name": "Ramesh",
  "email": "ramesh@gmail.com",
  "seats": ["A1", "A2"]
}
```

---

### ✅ Get all bookings

```
GET /api/bookings
```

---



## 🎨 Seat Color Legend

| Color    | Meaning   |
| -------- | --------- |
| 🟢 Green | Available |
| 🔴 Red   | Booked    |
| 🔵 Blue  | Selected  |

---

## 🔄 Complete User Flow

### Book Slot:

* Select seats → Continue → Enter details → Book → Saved in DB

### Booked Slots:

* View all bookings with user details

---

## ⚠️ Validations

* ❌ Cannot book without selecting seats
* ❌ Cannot book already booked seats
* ❌ Cannot submit empty name/email
* ✅ Backend validation ensures data safety

---



## 👨‍💻 Author

**Ramesh Kondra**

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!

---
