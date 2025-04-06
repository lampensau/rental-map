# Rental Map Application

A Svelte 5 application for visualizing rental companies, products and manufacturers on a map.

## Features

- Interactive map displaying rental company locations
- Filtering by manufacturers and products
- Admin interface for managing entities
- Firebase Firestore integration for data storage
- Authentication for secure admin operations
- Entity activation/deactivation capabilities

## Setup Instructions

### 1. Prerequisites

- Node.js (v18 or later recommended)
- npm or yarn package manager
- A Firebase account (for Firestore and Authentication)

### 2. Firebase Setup

1. Create a new Firebase project at [https://console.firebase.google.com/](https://console.firebase.google.com/)
2. Enable Firestore database:
   - Go to Firestore Database in the Firebase console
   - Click "Create database"
   - Start in production mode or test mode as needed
3. Enable Authentication:
   - Go to Authentication in the Firebase console
   - Set up Email/Password authentication
   - Create an admin user
4. Create a Firestore user with admin rights:
   - After creating a user through authentication
   - Manually create a document in a 'users' collection
   - Document ID should be the user's UID
   - Add `isAdmin: true` field

### 3. Project Setup

1. Clone the repository:
   ```
   git clone <repository-url>
   cd rental-map
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Configure Environment Variables:
   - Copy `.env.example` to `.env`:
     ```
     cp .env.example .env
     ```
   - Fill in your Firebase project details in the `.env` file

4. Run the development server:
   ```
   npm run dev
   ```

5. Import initial data:
   - Navigate to `/admin` in your browser
   - Log in with your admin credentials
   - Use the import functionality to load initial data

## Production Deployment

For static hosting (GitHub Pages, Netlify, Vercel, etc.):

1. Build the project:
   ```
   npm run build
   ```

2. The `build` folder will contain the static files to deploy.

## Data Management

Admin users can:
- Add new manufacturers, products, and rental companies
- Activate/deactivate entities
- Update entity information

## API Endpoints

The application provides REST API endpoints for CRUD operations:

- `/api/manufacturers` - Manage manufacturers
- `/api/products` - Manage products
- `/api/rental-companies` - Manage rental companies

All write operations require authentication with admin privileges.

## License

[License Information]
