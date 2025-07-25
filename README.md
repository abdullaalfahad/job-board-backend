# 🧰 Job Board Backend

A minimal backend for a Job Board application built with Express.js and MongoDB.

Companies (admins) can post jobs, and users can browse and apply for them.

---

## 📦 Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication (admin login)
- pnpm
- Docker & Docker Compose
- ESLint + Prettier + Husky

[🔗 Live Backend on Render](https://job-board-backend-liyl.onrender.com/)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/abdullaalfahad/job-board-backend.git
cd job-board-backend
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Create a `.env` File

Create a `.env` file in the root:

```env
PORT=5000
MONGODB_URI=mongodb+srv://aafahad02:EL6xm5TD0FISTCcz@cluster0.p52ms5h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=84a7c34c995ea1778d50de87dac924832a605c32a7fd6e66abb21da708f7c2b2
ADMIN_USERNAME=admin
ADMIN_PASSWORD=$2b$10$JD9azIOAvWTtUvHPwQmOu.toxorUz84QaRfAeeBUxGS3vV/V1FfrG
```

You can generate a hashed password using:

```js
import bcrypt from 'bcryptjs';
console.log(bcrypt.hashSync('admin123', 10));
```

### 🔐 Admin Credentials

```json
{
  "username": "admin",
  "password": "admin123"
}
```

### 4. Run the App (Locally)

```bash
pnpm dev
```

App will run at: `http://localhost:5000`

---

## 🐳 Run with Docker

### Docker only

```bash
docker build -t job-board-backend .
docker run --env-file .env -p 5000:5000 job-board-backend
```

### Docker Compose (with MongoDB)

```bash
docker-compose up --build
```

---

---

## 🧪 Run Tests

```bash
pnpm test
```

---

## 🧭 API Endpoints

### Jobs

- `GET /jobs` — List all jobs
- `GET /jobs/:id` — Get single job
- `POST /jobs` — Create job (admin only)

### Applications

- `POST /applications` — Submit job application

### Auth

- `POST /auth/login` — Login as admin, receive JWT

---

## ✅ Lint & Format

```bash
pnpm lint      # Check lint issues
pnpm lint:fix  # Fix lint issues
pnpm format    # Format code with Prettier
```

> ✅ Husky will run lint & format automatically on commit.

---

## 📁 Folder Structure

```
src/
├── config/            # Database connection
├── modules/
│   ├── job/
│   ├── auth/
│   └── application/
├── index.js           # Main entry point
```

---

## 🧠 License

MIT

---

## ✨ Author

**Abdulla Al Fahad**  
[GitHub Profile](https://github.com/abdullaalfahad)
