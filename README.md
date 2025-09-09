# Youtale Blog 📝

A full-stack blogging platform built with the **MERN stack + TypeScript**.  
Users can sign up, sign in, create blogs, and read blogs from others.  

---

## 🚀 Tech Stack

### Frontend
- React (Vite + TypeScript)
- TailwindCSS
- Axios
- React Router

### Backend
- Node.js + Express
- MongoDB + Mongoose
- TypeScript
- JWT Authentication
- Bcrypt for password hashing

---

## ⚙️ Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/aCoderOfTheSevenKingdoms/youtale-blog.git
cd youtale-blog

```
### 2. Install Dependencies
```bash
cd backend
npm install
cd ../frontend
npm install
```
### 3. Envrironment Variables
Create a .env inside the backend with(add it in .gitignore):
MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-secret-key>
PORT=5000

### 4. Run the project
```bash
cd backend
npm run build
npm start
cd ../frontend
npm run dev
```

🖼️ Features:

🔐 JWT-based authentication

✍️ Create, read, and view blogs

📅 Blog last modified date

📱 Responsive UI with TailwindCSS

⚡ Fast builds with Vite


🤝 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you’d like to change.
