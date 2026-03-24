# 🌍 Pollusat - Air Quality Monitoring Platform

A full-stack web application for pollution detection and monitoring, featuring satellite data visualization and secure user authentication. This project combines modern web technologies with environmental awareness to provide real-time air quality insights.

## ✨ Features

- **🔐 Secure Authentication**: JWT-based user authentication with bcrypt password hashing
- **🛡️ Protected Routes**: Private routes requiring authentication for sensitive operations
- **🛰️ Satellite Data Visualization**: Interactive components displaying environmental data
- **📊 Real-time Monitoring**: Cloud and satellite tracking components
- **🎨 Modern UI**: Beautiful, responsive design with Tailwind CSS and AOS animations
- **⚡ Fast Performance**: Built with Vite for optimized development and production builds

## 🚀 Tech Stack

### Frontend
- **React 18.2** - Modern UI library
- **Vite** - Next-generation frontend tooling
- **React Router v7** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **AOS** - Animate On Scroll library
- **React Icons** - Icon library

### Backend
- **Node.js** - JavaScript runtime
- **Express 5.2** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcrypt** - Password hashing
- **CORS** - Cross-Origin Resource Sharing

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher)
- **MongoDB** (running locally on port 27017)
- **npm** or **yarn**

## 🛠️ Installation

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/pollusat.git
cd pollusat
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the backend directory (optional, for production):
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/pollusatdata
JWT_SECRET=your_jwt_secret_here
```

Start the backend server:
```bash
npm start
```
The server will run on `http://localhost:5000` (or your configured port)

### 3. Frontend Setup
```bash
cd sonalr/space-web-main
npm install
```

Start the development server:
```bash
npm run dev
```
The application will be available at `http://localhost:5173`

## 📁 Project Structure

```
pollusat/
├── backend/                 # Backend API
│   ├── config.js           # Database configuration
│   ├── index.js            # Express server & routes
│   ├── User.js             # User model schema
│   └── package.json        # Backend dependencies
│
└── sonalr/
    └── space-web-main/     # Frontend application
        ├── public/         # Static assets
        ├── src/
        │   ├── components/ # React components
        │   │   ├── Navbar/
        │   │   ├── Hero/
        │   │   ├── Cloud/
        │   │   ├── Satelite/
        │   │   ├── Rapidscat/
        │   │   └── Footer/
        │   ├── App.jsx     # Main app component
        │   ├── Login.jsx   # Login page
        │   ├── Register.jsx # Registration page
        │   ├── Logout.jsx  # Logout handler
        │   └── PrivateRouter.jsx # Protected route wrapper
        ├── index.html
        └── package.json    # Frontend dependencies
```

## 🔑 API Endpoints

### Authentication

#### Register User
```http
POST /singup
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword"
}
```

**Response:**
```json
{
  "message": "User registered successfully",
  "user": {
    "name": "John Doe",
    "email": "john@example.com",
    "_id": "..."
  },
  "auth": "jwt_token_here"
}
```

#### Login
```http
POST /login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securepassword"
}
```

**Response:**
```json
{
  "user": {
    "name": "John Doe",
    "email": "john@example.com",
    "_id": "..."
  },
  "auth": "jwt_token_here"
}
```

## 🎯 Usage

1. **Register**: Create a new account at `/register`
2. **Login**: Sign in with your credentials at `/login`
3. **Dashboard**: Access protected routes after authentication
4. **Monitor**: View satellite data and pollution metrics
5. **Logout**: Securely log out from `/logout`

## 🔒 Security Features

- Passwords are hashed using bcrypt with 10 salt rounds
- JWT tokens expire after 2 hours
- Protected routes require valid authentication tokens
- CORS enabled for secure cross-origin requests
- Password fields are never returned in API responses

## 🌐 Environment Variables

### Backend
| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | 5000 |
| `MONGODB_URI` | MongoDB connection string | mongodb://localhost:27017/pollusatdata |
| `JWT_SECRET` | Secret key for JWT signing | (configure in production) |

## 📦 Build for Production

### Frontend
```bash
cd sonalr/space-web-main
npm run build
```
This creates an optimized production build in the `dist/` directory.

### Backend
Ensure MongoDB is running and all environment variables are properly configured for production deployment.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Your Name**
- GitHub: [sonalkumar1819](https://github.com/sonalkumar1819)

## 🙏 Acknowledgments

- Satellite imagery and data providers
- Open-source community for amazing tools and libraries
- Environmental organizations working towards cleaner air

## 📧 Contact

For questions or support, please open an issue or contact [jhasonal9142@gmail.com](mailto:jhasonal9142@gmail.com)

---

⭐ If you find this project helpful, please consider giving it a star!

**Made with ❤️ for a cleaner planet**
