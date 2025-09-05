# 🥝 Kiwi Project  

The **Kiwi Project** is inspired by modern vacation rental marketplaces. It enables users to explore rental listings, view details on maps, manage accounts, leave reviews, and much more — all with a clean, responsive UI.  

## 📌 Project Overview  

Kiwi is built using **Bootstrap, EJS, Express, MongoDB, Cloudinary, and Mapbox** to deliver a full-stack web application experience.  
It’s designed not just as a static clone, but as a **fully functional platform** where users can interact with listings, maps, and reviews in real time.  

## ✨ Features  

### 🏡 Listings Management  
- Users can **create, edit, and delete** rental listings.  
- Upload multiple images per listing with **Cloudinary** integration.  
- Rich descriptions with pricing and location details.  

### 📍 Interactive Maps  
- **Mapbox integration** to display property locations on dynamic maps.  
- Search and view listings based on location.  
- Clickable map markers linked to listing details.  

### 👤 User Accounts & Authentication  
- Secure **signup/login/logout** system using Passport.js.  
- Each user can manage their own listings.  
- Only authenticated users can post reviews or modify listings.  

### ⭐ Reviews & Ratings  
- Users can **add, edit, and delete** reviews on listings.  
- Rating system integrated for better feedback.  
- Prevents duplicate reviews by the same user.  

### 📱 Responsive UI/UX  
- Built with **Bootstrap** for a clean and mobile-friendly design.  
- Simple, intuitive navigation inspired by real-world rental platforms.  

### ☁️ Cloud & Database  
- **MongoDB** + **Mongoose** for efficient data management.  
- **Cloudinary** for secure image upload and hosting.  
- Persistent storage for users, listings, and reviews.  

---

## 🛠️ Tech Stack  

- **Frontend/UI**: Bootstrap, EJS  
- **Backend**: Node.js, Express  
- **Database**: MongoDB, Mongoose  
- **Authentication**: Passport.js  
- **Image Hosting**: Cloudinary  
- **Maps & Location**: Mapbox  

---

## 🚀 Getting Started  

### Prerequisites  
- [Node.js](https://nodejs.org/) installed  
- MongoDB database (local or cloud e.g. MongoDB Atlas)  
- Cloudinary account for image uploads  
- Mapbox API key  

### Installation  
```bash
# Clone the repository
git clone https://github.com/your-username/kiwi-project.git

# Navigate into the project folder
cd kiwi-project

# Install dependencies
npm install

# Create a .env file and add:
# MONGO_URI=your-mongodb-uri
# CLOUDINARY_CLOUD_NAME=your-cloudinary-name
# CLOUDINARY_KEY=your-cloudinary-key
# CLOUDINARY_SECRET=your-cloudinary-secret
# MAPBOX_TOKEN=your-mapbox-token
# SESSION_SECRET=your-secret
