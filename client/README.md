# Folder-App Client

This is the frontend of the Folder-App, a full-stack application for managing files and folders. The client is built using React.js and provides a user-friendly interface for interacting with the backend APIs.

## Features

- **Sidebar Navigation**: A collapsible sidebar to display folder and file hierarchy.
- **File Upload**: Upload files to specific folders.
- **Folder Creation**: Create new folders and subfolders.
- **Document Viewer**: View details of selected files.
- **Filter Functionality**: Apply filters to search for specific files or folders.
- **Responsive Design**: Built with Bootstrap for a responsive and modern UI.

## Folder Structure

```
client/
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
├── vite.config.js
├── public/
│   └── vite.svg
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── assets/
    ├── components/
    │   ├── CreateFolder/
    │   │   ├── CreateFolderModal.jsx
    │   │   └── CreateFolderService.js
    │   ├── Filter/
    │   │   └── FilterModal.jsx
    │   ├── Home/
    │   │   ├── DocumentTable.jsx
    │   │   ├── Home.jsx
    │   │   ├── HomeService.js
    │   │   ├── homeSlice.js
    │   │   ├── Sidebar.jsx
    │   │   └── sidebarRecursive.jsx
    │   ├── UploadDocument/
    │   │   └── UploadDocument.jsx
    │   └── common/
    │       ├── apiService.js
    │       ├── redux/
    │       │   ├── rootReducer.js
    │       │   └── store.js
```

## Installation

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Steps

1. Navigate to the `client` directory:

   ```sh
   cd client
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the development server:

   ```sh
   npm run dev
   ```

4. Open the application in your browser at [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run preview`: Previews the production build.
- `npm run lint`: Runs ESLint to check for code quality issues.

## Components

### Sidebar

- **File**: `Sidebar.jsx`
- **Description**: Displays a collapsible sidebar with a folder and file hierarchy.

### Home

- **File**: `Home.jsx`
- **Description**: Main component that includes file and folder management features like upload, creation, and filtering.

### Create Folder

- **File**: `CreateFolderModal.jsx`
- **Description**: Modal for creating new folders.
- **Service**: `CreateFolderService.js` handles API calls for folder creation.

### Upload Document

- **File**: `UploadDocument.jsx`
- **Description**: Modal for uploading files.

### Filter

- **File**: `FilterModal.jsx`
- **Description**: Modal for applying filters to search files and folders.

### Document Table

- **File**: `DocumentTable.jsx`
- **Description**: Displays a table of files and folders with actions like edit and delete.

## State Management

- **Library**: Redux Toolkit
- **Store**: Configured in `store.js`.
- **Reducers**: Combined in `rootReducer.js`.
- **Slice**: `homeSlice.js` manages the state for files and folders.

## API Services

- **File**: `apiService.js`
- **Description**: Contains reusable functions for making API calls (`getService`, `postService`, etc.).

## Configuration

### Vite

The project uses Vite for fast builds and development. Configuration is in `vite.config.js`.

### ESLint

Linting is configured in `eslint.config.js` to ensure code quality.

## Dependencies

### Core

- `react`: Frontend library for building user interfaces.
- `react-dom`: React's DOM rendering library.
- `react-redux`: For state management.
- `reduxjs/toolkit`: Simplifies Redux state management.
- `axios`: For making HTTP requests.

### UI

- `bootstrap`: For responsive and modern UI components.
- `react-bootstrap`: React bindings for Bootstrap.
- `react-icons`: For using icons in the UI.

## Future Enhancements

- Add drag-and-drop functionality for file uploads.
- Implement advanced search and filtering options.
- Add user authentication and authorization.
- Improve the document viewer to support more file types.

## License
NA
