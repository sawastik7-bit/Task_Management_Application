# Task Hub

A full stack MERN task management application where users can:

- Register and Login
- Create Tasks
- Delete Tasks
- Stay Logged In using JWT Authentication
- Use Refresh Tokens for secure authentication

---

# Tech Stack

## Frontend
- React
- Axios
- React Router DOM
- Context API
- CSS

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt

---

# Features

- Authentication System
- Protected Routes
- Task Creation
- Task Deletion
- Persistent Login
- Responsive UI
- Hacker Style Dashboard UI

---

# Installation

## Clone Repository

```bash
git clone <repo-link>
```

---

# Backend Setup

```bash
cd backend
npm install
npm run dev
```

Create `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
REFRESH_TOKEN_SECRET=your_refresh_secret
```

---

# Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

# Folder Structure

```bash
TaskManagementApplication/
│
├── frontend/
├── backend/
└── README.md
```

---

# API Routes

## Auth Routes

- POST `/api/register`
- POST `/api/login`
- POST `/api/logout`
- POST `/api/refresh-token`

## Task Routes

- GET `/api/tasks`
- POST `/api/tasks`
- DELETE `/api/tasks/:id`

---

# Future Improvements

- Update Task Feature
- Task Status
- Drag and Drop
- Search Tasks
- Pagination

---

# Author

Sawastik Bhullar
