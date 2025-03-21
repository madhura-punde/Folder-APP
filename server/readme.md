# File and Folder Management API

This API allows you to manage files and folders, including uploading files to S3, fetching paginated files, searching files, creating folders, and fetching folder structures.

## Installation

1. Clone the repository
2. Navigate to the `server` directory
3. Install dependencies:

```sh
npm install
```

4. Start the server:

```sh
npm run dev
```

## Environment Variables

Create a `.env` file in the root of your project and add your AWS credentials and S3 bucket information:

```env
AWS_ACCESS_KEY_ID=your-access-key-id
AWS_SECRET_ACCESS_KEY=your-secret-access-key
AWS_REGION=your-region
AWS_S3_BUCKET=your-bucket-name
```

## API Endpoints

### File Endpoints

#### Upload File

- **URL:** `/files/upload`
- **Method:** `POST`
- **Description:** Upload a file to a specified folder in S3.
- **Request Body:**
  - `file` (form-data): The file to be uploaded.
  - `folderId` (optional): The ID of the folder to upload the file to.
  - `path` (optional): The path to upload the file to.
- **Response:**
  - `200 OK`: File uploaded successfully.
  - `400 Bad Request`: No file uploaded.
  - `500 Internal Server Error`: Error saving file metadata.

#### Fetch Paginated Files

- **URL:** `/files/files`
- **Method:** `GET`
- **Description:** Fetch paginated files.
- **Query Parameters:**
  - `page` (optional): The page number (default is 1).
  - `perPage` (optional): The number of files per page (default is 5).
- **Response:**
  - `200 OK`: Returns the paginated files and total file count.
  - `400 Bad Request`: Invalid page or perPage parameters.
  - `500 Internal Server Error`: Error fetching files.

#### Search Files

- **URL:** `/files/search`
- **Method:** `GET`
- **Description:** Search files by folder and name.
- **Query Parameters:**
  - `searchTerm` (optional): The search term to filter files by name.
  - `folderId` (required): The ID of the folder to search within.
- **Response:**
  - `200 OK`: Returns the matching files.
  - `400 Bad Request`: Folder ID is required.
  - `500 Internal Server Error`: Error searching files.

### Folder Endpoints

#### Create Folder

- **URL:** `/folders/create`
- **Method:** `POST`
- **Description:** Create a new folder.
- **Request Body:**
  - `name` (required): The name of the folder.
  - `parentId` (optional): The ID of the parent folder.
- **Response:**
  - `201 Created`: Folder created successfully.
  - `500 Internal Server Error`: Error creating folder.

#### Fetch Folder Structure

- **URL:** `/folders/structure/:folderId?`
- **Method:** `GET`
- **Description:** Fetch the folder structure, including subfolders and files.
- **Path Parameters:**
  - `folderId` (optional): The ID of the folder to fetch the structure for. If not provided, fetches the root structure.
- **Response:**
  - `200 OK`: Returns the folder structure.
  - `500 Internal Server Error`: Error fetching folder/file structure.

## Controllers

### File Controller

- **uploadFile:** Handles file upload to S3 and saves file metadata to the database.
- **getPaginatedFiles:** Fetches paginated files from the database.
- **searchFiles:** Searches files by folder and name.

### Folder Controller

- **createFolder:** Creates a new folder in the database.
- **getFolderStructure:** Fetches the folder structure, including subfolders and files.

## Models

### File Model

- **name:** The name of the file.
- **path:** The path where the file is stored.
- **folderId:** The ID of the folder the file belongs to.
- **size:** The size of the file.
- **createdAt:** The date and time when the file was created.

### Folder Model

- **name:** The name of the folder.
- **parentId:** The ID of the parent folder.
- **createdAt:** The date and time when the folder was created.

## Utils

### Upload Utility

- **upload:** Middleware for handling file uploads using Multer and S3.

## License

This project is licensed under the MIT License.
