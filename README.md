# Task Hub

A full stack MERN task management application with authentication, JWT authorization, refresh tokens, protected routes, and responsive hacker-themed UI.

---

# Features

- User Registration
- User Login
- JWT Authentication
- Refresh Token Authentication
- Protected Routes
- Persistent Login
- Create Tasks
- Delete Tasks
- Fetch Tasks
- Responsive UI
- Hacker / Terminal Styled Dashboard
- Real-time UI updates without refresh

---

# Tech Stack

## Frontend
- React
- React Router DOM
- Axios
- Context API
- CSS

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- cookie-parser

---

# Folder Structure

```bash
TaskManagementApplication/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── validators/
│   └── package.json
│
└── README.md
```

---

# Installation

## Clone Repository

```bash
git clone <your_repo_url>
```

---

# Backend Setup

```bash
cd backend
npm install
```

Create `.env`

```env
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret
REFRESH_TOKEN_SECRET=your_refresh_secret
```

Run backend:

```bash
npm run dev
```

---

# Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

# Authentication Flow

- User logs in
- Backend generates:
  - Access Token (15 min)
  - Refresh Token (7 days)
- Refresh token stored in HTTP-only cookie
- Access token stored in localStorage
- Tokens refresh automatically
- Protected routes prevent unauthorized access

---

# API Endpoints

## Auth Routes

| Method | Route | Description |
|---|---|---|
| POST | /api/register | Register user |
| POST | /api/login | Login user |
| POST | /api/logout | Logout user |
| POST | /api/refresh-token | Refresh access token |

---

## Task Routes

| Method | Route | Description |
|---|---|---|
| GET | /api/tasks | Get all tasks |
| POST | /api/tasks | Create task |
| DELETE | /api/tasks/:id | Delete task |

---

# Screenshots

Add screenshots here after deployment.

---

# Future Improvements

- Update Task API
- Drag and Drop Tasks
- Task Categories
- Dark/Light Theme Toggle
- Task Completion Status
- Pagination
- Search and Filters

---

# Author

Built by Sawastik Bhullar