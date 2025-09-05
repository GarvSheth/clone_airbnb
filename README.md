🥝 Kiwi Project

The Kiwi Project is a full-stack vacation rental web application inspired by modern rental marketplaces.
It allows users to browse, create, and review listings with integrated maps, cloud storage, and dynamic data.

📌 Project Overview

Kiwi is built with Node.js, Express, MongoDB, EJS, Bootstrap, Cloudinary, and Mapbox.
It provides users with a seamless experience of exploring listings, viewing locations on maps, adding reviews, and uploading images.

✨ Features

Dynamic Listings

Create, edit, and delete rental listings.

Store and serve images using Cloudinary.

Interactive Maps

Integrated with Mapbox for location search & display.

Shows listing locations with interactive pins.

User Authentication

Signup/Login system with secure session management.

Users can manage their own listings and reviews.

Reviews System

Add, edit, and delete reviews on listings.

Ratings integrated with listings for better user feedback.

Responsive UI

Styled with Bootstrap for mobile-first design.

Clean, user-friendly layouts.

🛠️ Technologies Used

Frontend: EJS, Bootstrap

Backend: Node.js, Express

Database: MongoDB with Mongoose

Image Storage: Cloudinary

Maps & Location: Mapbox

Authentication: Passport.js

🚀 Getting Started
Prerequisites

Node.js
 installed

MongoDB
 running locally or on Atlas

Cloudinary & Mapbox accounts for API keys

Installation
# Clone the repository
git clone https://github.com/your-username/kiwi-project.git

# Navigate into the project folder
cd kiwi-project

# Install dependencies
npm install

# Create a .env file and add your keys
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_key
CLOUDINARY_SECRET=your_secret
MAPBOX_TOKEN=your_mapbox_token
DB_URL=your_mongodb_connection

# Start the server
npm start

Usage

Visit in your browser:

http://localhost:3000

📌 Future Improvements

Booking system with calendar availability

Payment gateway integration

Advanced search & filtering options

User profile with activity history
