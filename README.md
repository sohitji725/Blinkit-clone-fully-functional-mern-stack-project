

# 🛒 BinkeyIt - Blinkit Clone (MERN Stack)

A full-stack eCommerce grocery delivery web application inspired by [Blinkit](https://www.blinkit.com/). Built using the MERN stack (MongoDB, Express, React, Node.js) with complete authentication, product management, cart, and payment features.



open these both links in seperate browser tab to see the live project
Frontend Demo: https://blinkit-frontend-client.onrender.com
Backend API:  https://binkeyit-server.onrender.com


---

## 🚀 Features

### 👤 Authentication
- User registration & login with JWT and refresh tokens
- Secure `httpOnly` cookies for token storage
- Forgot/reset password via OTP

### 🛍️ Product & Category Management
- Add/Edit/Delete categories and subcategories
- Add products with images and rich descriptions
- Filter products by category/subcategory

### 🛒 Shopping Cart
- Add items to cart, adjust quantity, delete items
- Cart persists per user

### 🏠 Address Book
- Add, update, or remove delivery addresses

### 💳 Checkout & Payment
- Cash on Delivery (COD) flow
- Stripe payment integration (test mode)

### 📦 Orders
- Place and view order history

### 📷 File Upload
- Upload user avatars and product images using Multer

---

## 🧑‍💻 Tech Stack

| Tech      | Usage                        |
|-----------|------------------------------|
| **React** | Frontend UI                  |
| **Vite**  | Fast React build tool        |
| **Redux** | Global state management      |
| **Tailwind CSS** | Utility-first styling |
| **Node.js** | Backend runtime            |
| **Express** | API server framework       |
| **MongoDB** | NoSQL database             |
| **Mongoose** | ODM for MongoDB           |
| **JWT** | Authentication & tokens       |
| **Multer** | File uploads                |
| **Stripe** | Payment gateway (test key)  |

---



## 🛠️ How to Run Locally

### 1. Clone the Repo
```bash
git clone https://github.com/sohitji725/Blinkit-clone-fully-functional-mern-stack-project.git
cd Blinkit-clone-fully-functional-mern-stack-project

2. Install Frontend Dependencies
cd client
npm install
3. Install Backend Dependencies

cd ../server
npm install
4. Create .env Files
Frontend (client/.env):


VITE_API_URL=http://localhost:5000
VITE_STRIPE_PUBLIC_KEY=your_test_key
Backend (server/.env):

MONGO_URI=your_mongo_uri
SECRET_KEY_ACCESS_TOKEN=your_secret_key
SECRET_KEY_REFRESH_TOKEN=your_refresh_key
STRIPE_SECRET_KEY=your_stripe_secret_key
CLOUDINARY_NAME
CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET_KEY

Frontend:
cd client
npm run dev
Backend:
cd server
node index.js
🌐 Deployment
Frontend: render 

Backend: render

🙋‍♂️ About Me
Hi! I’m Sohit, a full-stack web developer passionate about solving real-world problems using clean and scalable code.




