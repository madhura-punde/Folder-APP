# Folder-APP
a Full Stack ReactJS NodeJS application with enhanced file management capabilities.

### Project Overview
This project is a Full Stack ReactJS and NodeJS application focused on enhancing file management capabilities. The application consists of two main components:

1. Backend (Node.js): Handles the core business logic, file storage, and management.
2. Frontend (React.js): Provides the user interface for file upload, folder creation, document viewing, and more.

### The application is divided into four key sections:

1. Top Section: Allows users to upload files and create folders. It also includes folder breadcrumbs and a context menu for easy navigation.
2. Left Section: Displays a folder and file hierarchy along with an ongoing upload progress section.
3. Middle Section: Provides an expanded view of the folder and file structure.
4. Right Section: Displays a document viewer for the selected file.
Currently, the backend has been fully implemented, and the frontend is still a work in progress.

### Tech Stack
- Backend:
  1. Node.js
  2. Express.js
  3. MongoDB (or any other database you're using)
  4. Multer (for file handling and uploads)
- Frontend:
 1. React.js (in progress)


### Features
1. Backend Features:
    - File Upload API: Handles file uploads using Multer.
    - Folder Management: Allows users to create and manage folders.
    - File Hierarchy API: Fetches the folder and file structure.
    - Document Viewer: A simple API to serve files for document viewing.
2. Frontend (Work in Progress):
    - File Upload & Folder Creation
    - Folder and File Hierarchy Visualization
    - Document Viewer
    
### Installation
  #### Prerequisites
Ensure you have the following installed:
- Node.js (Backend & Frontend)
- MongoDB (or your preferred database)
- npm or yarn (For dependency management)
 
 ####  Steps to Install:
Clone the repository:
```
git clone https://github.com/your-username/Folder-APP.git
```

Install backend dependencies: Navigate to the backend directory and install dependencies:

```
cd backend
npm install
```

Install frontend dependencies (currently in progress): Navigate to the frontend directory and install dependencies:
```
cd ../frontend
npm install
```

Backend Setup
Database Configuration: If you are using MongoDB, create a .env file in the backend directory and include the following variables:
```
DB_URI=<your-mongo-database-uri>
PORT=5000
```
Running the Backend: Navigate to the backend directory and start the server:

```
cd backend
npm start
```
The backend will run on http://localhost:5000.

Frontend Setup (In Progress)
The frontend is still under development, but once it's ready, you can set up and run the client as follows:

Running the Frontend: Navigate to the frontend directory and run:
```
cd frontend
npm start
```
The frontend will run on http://localhost:3000.

#### Running the Application
To run the full-stack application:

Start the backend:
```
cd backend
npm start
```

Start the frontend:

```
cd frontend
npm start
```
Once both the backend and frontend are running, you can access the application at http://localhost:3000 (frontend) and http://localhost:5000 (backend).


Future Enhancements
Frontend: Complete the frontend with UI for file upload, folder creation, and document viewing.
User Authentication: Implement user authentication for file access and management.
File Preview: Add support for previewing different types of files (images, PDFs, etc.).
Drag-and-Drop Upload: Implement drag-and-drop file upload functionality for better UX.
Search Functionality: Add search functionality to find files and folders.
File Versioning: Implement versioning for files.

