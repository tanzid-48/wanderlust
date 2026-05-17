# 🌍 Wanderlust — Travel Booking Platform

<div align="center">

![Hero](https://github.com/user-attachments/assets/13b68661-7bab-4026-b7e4-4ef1ad493363)

<br/>

**Discover • Plan • Explore**

<br/>

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-black?style=for-the-badge&logo=vercel)](https://wanderlust-pvb4.vercel.app)
[![Backend](https://img.shields.io/badge/Backend-Render-46E3B7?style=for-the-badge&logo=render)](https://wanderlust-server-3.onrender.com)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/tanzid-48/wanderlust)

</div>

---

## ✨ Overview

Wanderlust is a full-stack travel booking platform where users can explore featured destinations, book trips, manage their bookings, and more — all with secure JWT-based authentication powered by **better-auth**.

---

## 🚀 Live Links

| Service | URL |
|---------|-----|
| 🌐 Frontend (Vercel) | [https://wanderlust-pvb4.vercel.app](https://wanderlust-pvb4.vercel.app) |
| ⚙️ Backend (Render) | [https://wanderlust-server-3.onrender.com](https://wanderlust-server-3.onrender.com) |

---

## 🖼️ Screenshots

<table>
  <tr>
    <td align="center" colspan="2">
      <strong>🏠 Homepage</strong><br/><br/>
      <img src="https://github.com/user-attachments/assets/13b68661-7bab-4026-b7e4-4ef1ad493363" width="100%"/>
    </td>
  </tr>
  <tr>
    <td align="center" colspan="2">
      <strong>⭐ Featured Destinations</strong><br/><br/>
      <img src="https://github.com/user-attachments/assets/9bc82e24-d18f-4551-8d7f-3dfec15330e4" width="100%"/>
    </td>
  </tr>
  <tr>
    <td align="center">
      <strong>🌍 All Destinations</strong><br/><br/>
      <img src="https://github.com/user-attachments/assets/38f86fc3-2773-4078-84e0-105762351507" width="100%"/>
    </td>
    <td align="center">
      <strong>📋 My Bookings</strong><br/><br/>
      <img src="https://github.com/user-attachments/assets/ffd3063d-ef07-4fba-bb76-da7498475e50" width="100%"/>
    </td>
  </tr>
  <tr>
    <td align="center">
      <strong>🏛️ Destination Details</strong><br/><br/>
      <img src="https://github.com/user-attachments/assets/6b7bffe2-9dcd-43d5-a811-3bff857920bf" width="100%"/>
    </td>
    <td align="center">
      <strong>🎫 Booking Card</strong><br/><br/>
      <img src="https://github.com/user-attachments/assets/5459161c-d0d1-45da-81c8-9f5bd2924ca6" width="100%"/>
    </td>
  </tr>
  <tr>
    <td align="center" colspan="2">
      <strong>🔐 Authentication</strong><br/><br/>
      <img src="https://github.com/user-attachments/assets/4c100395-03c5-4f7a-a897-e59bb979eba9" width="50%"/>
    </td>
  </tr>
</table>

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| [Next.js 16](https://nextjs.org/) | React Framework (App Router) |
| [Tailwind CSS v4](https://tailwindcss.com/) | Styling |
| [HeroUI](https://heroui.com/) | UI Component Library |
| [better-auth](https://better-auth.com/) | Authentication |
| [Lucide React](https://lucide.dev/) | Icons |
| [Sonner](https://sonner.emilkowal.ski/) | Toast Notifications |
| [React Hook Form](https://react-hook-form.com/) | Form Handling |

### Backend
| Technology | Purpose |
|------------|---------|
| [Express.js v5](https://expressjs.com/) | Web Framework |
| [MongoDB](https://www.mongodb.com/) | Database |
| [jose-cjs](https://github.com/panva/jose) | JWT Verification (JWKS) |
| [dotenv](https://www.npmjs.com/package/dotenv) | Environment Variables |
| [CORS](https://www.npmjs.com/package/cors) | Cross-Origin Resource Sharing |

---

## ✅ Features

- 🔐 **Secure Authentication** — Login, Register, Session management via better-auth
- 🌍 **Browse Destinations** — Explore all available travel destinations
- ⭐ **Featured Destinations** — Handpicked top destinations on the homepage
- 📅 **Book Trips** — Select departure date and book destinations
- 📋 **My Bookings** — View and manage all your bookings
- ❌ **Cancel Booking** — Cancel any existing booking
- ✏️ **Edit Destination** — Update destination details (protected)
- ➕ **Add Destination** — Add new destinations (protected)
- 🛡️ **JWT Authorization** — All protected routes verified via JWKS
- 📱 **Responsive Design** — Works on mobile, tablet, and desktop

---

## 🔐 Authentication & Authorization

This project uses **better-auth** for authentication and **JWKS-based JWT verification** for API security.

### How it works:

```
User Login
    ↓
better-auth issues session token
    ↓
Frontend attaches token to API requests
Authorization: Bearer <token>
    ↓
Backend verifies token via JWKS endpoint
https://wanderlust-pvb4.vercel.app/api/auth/jwks
    ↓
✅ Valid → Return data
❌ Invalid → 401/403 Unauthorized
```

### Server Component:
```js
const { token } = await auth.api.getToken({ headers: await headers() });
```

### Client Component:
```js
const { data: tokenData } = await authClient.token();
// Authorization: `Bearer ${tokenData?.token}`
```

---

## 📁 Project Structure

```
wanderlust/                    # Frontend (Next.js)
├── src/
│   ├── app/
│   │   ├── page.jsx           # Home page
│   │   ├── destinations/      # All destinations
│   │   │   └── [id]/          # Single destination + booking
│   │   ├── my-booking/        # User bookings
│   │   └── add-destinations/  # Add new destination
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Featured.jsx
│   │   ├── DestinationCard.jsx
│   │   ├── BookingCard.jsx
│   │   ├── BookingCancel.jsx
│   │   ├── WhyChoose.jsx
│   │   ├── Testimonials.jsx
│   │   ├── CTA.jsx
│   │   └── Footer.jsx
│   └── lib/
│       ├── auth.js            # better-auth server config
│       ├── auth-client.js     # better-auth client config
│       └── actions.js         # Server actions
│
wanderlust-server/             # Backend (Express)
├── index.js                   # Main server file
└── .env                       # Environment variables
```

---

## ⚙️ API Endpoints

### Destinations
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/destinations` | ❌ | Get all destinations |
| GET | `/destinations/:id` | ✅ | Get single destination |
| POST | `/destinations` | ✅ | Add new destination |
| PATCH | `/destinations/:id` | ✅ | Update destination |
| DELETE | `/destinations/:id` | ✅ | Delete destination |

### Bookings
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/booking/:userId` | ✅ | Get user bookings |
| POST | `/booking` | ✅ | Create booking |
| DELETE | `/booking/:bookingId` | ✅ | Cancel booking |

### Misc
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/featured` | ❌ | Get 4 featured destinations |

---

## 🏃 Getting Started

### Prerequisites
- Node.js 18+
- MongoDB Atlas account
- Git

### Clone the repository
```bash
git clone https://github.com/tanzid-48/wanderlust.git
```

### Frontend Setup
```bash
cd wanderlust
npm install
```

Create `.env.local`:
```env
BETTER_AUTH_SECRET=your_secret_key
BETTER_AUTH_URL=http://localhost:3000
MONGODB_URI=your_mongodb_uri
```

```bash
npm run dev
```

### Backend Setup
```bash
cd wanderlust-server
npm install
```

Create `.env`:
```env
MONGODB_URI=your_mongodb_uri
PORT=5000
```

```bash
npm run server
```

---

## 🌐 Deployment

| Service | Platform | Auto Deploy |
|---------|----------|-------------|
| Frontend | Vercel | ✅ On push to `main` |
| Backend | Render | ✅ On push to `main` |

---

## 👨‍💻 Author

**Tanzid Mondol**

[![GitHub](https://img.shields.io/badge/GitHub-tanzid--48-181717?style=flat&logo=github)](https://github.com/tanzid-48)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
  Made with ❤️ by Tanzid Mondol
</div>