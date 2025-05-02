# Next.js Authentication App  🔐

<div align="center">
  <h3>Modern Authentication System with Next.Js 15</h3>
</div>

## Features

- 🔒 Complete JWT Authentication Flow
- 👤 User Registration & Login
- 🔄 Middleware-based Route Protection
- 👁️ Password Hashing with bcrypt
- 📱 Responsive Design with Tailwind CSS
- 🌙 Dark Mode Support
- 🍞 Toast Notifications

## 🚀 Tech Stack

<table>
  <tr>
    <td align="center">
      <img src="https://cdn.worldvectorlogo.com/logos/next-js.svg" width="40" height="40"/><br />
      <b>Next.js 15</b>
    </td>
    <td align="center">
      <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" width="40" height="40"/><br />
      <b>React 19</b>
    </td>
    <td align="center">
      <img src="https://cdn.worldvectorlogo.com/logos/typescript.svg" width="40" height="40"/><br />
      <b>TypeScript 5</b>
    </td>
    <td align="center">
      <img src="https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg" width="40" height="40"/><br />
      <b>Tailwind 4</b>
    </td>
    <td align="center">
      <img src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" width="40" height="40"/><br />
      <b>MongoDB</b>
    </td>
  </tr>
</table>

## 📦 Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| Next.js | 15.2.1 | React Framework |
| React | 19.0.0 | UI Library |
| MongoDB/Mongoose | 8.12.1 | Database |
| bcryptjs | 3.0.2 | Password Hashing |
| jsonwebtoken | 9.0.2 | Authentication |
| axios | 1.9.0 | HTTP Client |
| react-hot-toast | 2.5.2 | Notifications |
| nodemailer | 6.10.0 | Email Services |

## 🛠️ Getting Started

### Prerequisites

- Node.js (18.x or later)
- MongoDB connection string

### Environment Setup

Create a `.env.local` file in the root directory:

```
MONGODB_URI=your_mongodb_connection_string
TOKEN_SECRET=your_jwt_secret_key
```

### Installation

```bash
# Clone this repository
git clone https://github.com/yourusername/nextjs-auth.git
cd nextjs-auth

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🏗️ Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── api/             # API Routes
│   │   └── users/       # User API endpoints
│   │       ├── login/   # Login API
│   │       ├── logout/  # Logout API
│   │       ├── profile/ # User Profile API
│   │       └── signup/  # Signup API
│   ├── login/           # Login Page
│   ├── profile/         # Profile Page
│   └── signup/          # Signup Page
├── dbConfig/            # Database Configuration
├── helpers/             # Helper Functions
├── middleware.ts        # Auth Middleware
└── models/              # MongoDB Models
```

## 🔄 Authentication Flow

1. User registers with email, username, and password
2. Password is hashed using bcrypt
3. User logs in with email and password
4. Server validates credentials and issues JWT token
5. Token is stored in an HTTP-only cookie
6. Protected routes check for valid token via middleware
7. User can view profile and log out


## 🧪 Features To Add

- [ ] Email verification
- [ ] Password reset functionality
- [ ] OAuth integration (Google, GitHub)
- [ ] Enhanced profile management
- [ ] User roles and permissions

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

- **Your Name** - [GitHub Profile](https://github.com/ardhrubo)

---

<div align="center">
  <p>Made with ❤️ using Next.js</p>
</div>
