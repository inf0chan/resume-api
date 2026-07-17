# AI Resume Builder REST API

A complete REST API built with **Node.js** and **Express.js** for an AI Resume Builder application.

This project was created as part of my Full Stack Development internship to learn backend development, Express routing, REST APIs, JSON data handling, and project structure.

---

# Project Overview

The goal of this project is to build the backend for an AI Resume Builder.

Instead of creating a website interface, this project focuses on creating REST API endpoints that allow a frontend application to communicate with the server.

The API supports:

* User Authentication (Mock)
* User Profile Management
* Resume/Documents Management
* Resume Templates
* AI Features (Mock)
* Job Application Tracker

Currently, all responses are returned in **JSON format**, and the project uses a local **data.json** file instead of a database.

---

# Features

* Built using Express.js
* RESTful API Design
* Organized Route Structure
* JSON Request & Response
* HTTP Status Codes
* Modular Project Structure
* CRUD Operations
* Mock Authentication
* Mock AI Endpoints
* Job Application Tracker
* Resume Template APIs

---

# Technologies Used

| Technology | Purpose              |
| ---------- | -------------------- |
| Node.js    | JavaScript Runtime   |
| Express.js | Backend Framework    |
| JavaScript | Programming Language |
| JSON       | Data Storage         |
| VS Code    | Code Editor          |
| Git        | Version Control      |
| GitHub     | Source Code Hosting  |

---

# Project Structure

```text
resume-api/
│
├── node_modules/          # Dependencies
│
├── models/                # Data Models
│   ├── User.js           # User model with static methods
│   ├── Document.js       # Document model for resumes
│   ├── Template.js       # Template model for resume templates
│   └── Application.js    # Application model for job tracking
│
├── controllers/          # Business Logic
│   ├── authController.js        # Authentication logic
│   ├── userController.js        # User profile operations
│   ├── documentController.js    # Document CRUD operations
│   ├── templateController.js    # Template operations
│   ├── applicationController.js # Application tracking
│   └── aiController.js          # AI feature logic
│
├── middleware/           # Middleware Functions
│   ├── errorHandler.js         # Centralized error handling
│   └── validationMiddleware.js # Input validation
│
├── routes/              # API Route Handlers
│   ├── auth.js          # Authentication routes
│   ├── users.js         # User profile routes
│   ├── documents.js     # Document routes
│   ├── templates.js     # Template routes
│   ├── ai.js            # AI feature routes
│   └── applications.js  # Application tracking routes
│
├── app.js               # Express app setup & route registration
├── db.js                # Database handler (JSON file operations)
├── package.json         # Dependencies and project metadata
├── package-lock.json    # Dependency lock file
├── data.json           # JSON data storage
└── README.md           # Project documentation
```

---

# Architecture Overview

## MVC Pattern (Models-Views-Controllers)

This project follows a structured architecture with separation of concerns:

### Models (`/models`)
- Handle data operations and business logic
- Interact with the database layer
- Provide static methods for CRUD operations
- Examples: `User.js`, `Document.js`, `Template.js`, `Application.js`

### Controllers (`/controllers`)
- Process HTTP requests and responses
- Validate input data
- Call model methods to perform operations
- Return formatted JSON responses
- Examples: `authController.js`, `userController.js`, `documentController.js`

### Middleware (`/middleware`)
- Pre-process requests and responses
- Handle errors globally
- Validate request data
- Examples: `errorHandler.js`, `validationMiddleware.js`

### Routes (`/routes`)
- Define API endpoints and HTTP methods
- Map requests to controller methods
- Handle route parameters
- Examples: `/api/auth/register`, `/api/users/me`, `/api/documents`

### Database (`db.js`)
- Manages JSON file I/O operations
- Provides CRUD methods for all data collections
- Loads and saves data automatically

---

# API Endpoints

## Authentication (`/api/auth`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/register` | Register new user |
| POST | `/login` | Authenticate user |
| POST | `/logout` | End user session |
| POST | `/forget-password` | Request password reset |
| POST | `/reset-password` | Reset password with token |

## Users (`/api/users`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/me` | Get current user profile |
| PUT | `/me` | Update user profile |
| DELETE | `/me` | Delete user account |

## Documents (`/api/documents`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Get all documents |
| POST | `/` | Create new document |
| POST | `/import` | Import document |
| GET | `/:id` | Get specific document |
| PUT | `/:id` | Update document |
| DELETE | `/:id` | Delete document |

## Templates (`/api/templates`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Get all templates |
| GET | `/:id` | Get specific template |

## Applications (`/api/applications`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Get all applications |
| POST | `/` | Create new application |
| PATCH | `/:id` | Update application |
| DELETE | `/:id` | Delete application |

## AI Features (`/api/ai`)
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/bullets` | Generate bullet points |
| POST | `/summary` | Create AI summary |
| POST | `/rewrite` | Rewrite text |
| POST | `/prompt` | Custom AI prompt |

---

# Installation

Clone the repository

```bash
git clone https://github.com/inf0chan/resume-api.git
```

Move inside the project

```bash
cd resume-api
```

Install dependencies

```bash
npm install
```

Start the server

```bash
node app.js
```

Server starts on

```text
http://localhost:3000
```

---

# Running the Server

Open the terminal inside VS Code.

Run:

```bash
node app.js
```

If everything is configured correctly, the terminal will display:

```text
Server is running on http://localhost:3000
```

Open your browser and visit:

```text
http://localhost:3000
```

Expected response:

```json
{
    "message":"APIs is Running!"
}
```

---

# What is Node.js?

Node.js is a JavaScript runtime that allows JavaScript code to run outside the browser.

Normally, JavaScript only runs inside browsers like Chrome, Edge, or Firefox.

Node.js allows developers to use JavaScript for backend development.

Using Node.js we can build:

* APIs
* Servers
* Command Line Applications
* Real-time Chat Applications
* Backend Systems

Example:

```javascript
console.log("Hello Node.js");
```

---

# What is Express.js?

Express.js is a lightweight web framework built on top of Node.js.

It makes backend development much easier by providing simple methods for:

* Creating Servers
* Creating APIs
* Handling Requests
* Sending Responses
* Organizing Routes

Without Express:

Writing a server requires a lot of code.

With Express:

```javascript
const express = require("express");

const app = express();

app.get("/", (req,res)=>{
    res.send("Hello World");
});
```

Only a few lines are needed.

---

# How a Request Travels

```text
Browser / Frontend

        │

        ▼

HTTP Request

        │

        ▼

Express Server

        │

        ▼

Matching Route

        │

        ▼

Business Logic

        │

        ▼

JSON Response

        │

        ▼

Browser
```

Every API request follows this flow.

---

# Express Routing

Routing is the process of creating different URLs (called endpoints) that perform different tasks.

Each route listens for a specific HTTP request and returns a response.

Example:

```javascript
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to Resume API"
    });
});
```

In this example:

* `app.get()` listens for a **GET** request.
* `/` is the route (URL).
* `req` contains the request information.
* `res` sends the response back to the client.

---

# Why Use Separate Route Files?

As a project grows, putting every route inside `app.js` becomes difficult to manage.

Instead, Express allows us to organize routes into separate files.

Example:

```text
routes/
│
├── auth.js
├── users.js
├── documents.js
├── templates.js
├── ai.js
└── applications.js
```

Benefits:

* Cleaner code
* Easier to read
* Easier to maintain
* Better project organization
* Each file handles one feature

---

# Express Router

Express Router helps divide the application into smaller modules.

Instead of writing every route in `app.js`, each feature has its own router.

Example:

```javascript
const express = require("express");

const router = express.Router();
```

Create a route:

```javascript
router.get("/", (req, res) => {
    res.json({
        message: "Documents Route"
    });
});
```

Export it:

```javascript
module.exports = router;
```

Connect it in `app.js`:

```javascript
const documentRoutes = require("./routes/documents");

app.use("/api/documents", documentRoutes);
```

Now Express automatically creates:

```text
GET /api/documents
```

---

# Middleware

Middleware is a function that runs **before** a request reaches the route.

It can:

* Read incoming data
* Check authentication
* Log requests
* Parse JSON
* Handle errors

Example:

```javascript
app.use(express.json());
```

This middleware converts JSON into a JavaScript object.

Flow:

```text
Client Request
       │
       ▼
Middleware
       │
       ▼
Route
       │
       ▼
Response
```

---

# express.json()

`express.json()` is built-in middleware provided by Express.

Without it:

```javascript
req.body
```

will be:

```javascript
undefined
```

After adding:

```javascript
app.use(express.json());
```

Express automatically converts incoming JSON.

Example Request

```json
{
    "name":"Himanshu",
    "email":"himanshu@gmail.com"
}
```

Now

```javascript
req.body
```

contains

```javascript
{
    name:"",
    email:""
}
```

---

# Request Object (req)

The request object contains everything sent by the client.

Examples:
### Request Body

```javascript
req.body
```
### URL Parameters

```javascript
req.params
```
### Query Parameters
```javascript
req.query
```
### HTTP Headers

```javascript
req.headers
```

---

# Response Object (res)

The response object sends information back to the client.

Example:

```javascript
res.json({
    message:"Login Successful"
});
```

You can also send status codes.

Example:

```javascript
res.status(200).json({
    message:"Successfull"
});
```

---

# req.body

`req.body` contains the JSON data sent by the client.

Example Request:

```json
{
    "title":"My Resume",
    "type":"Resume"
}
```

Route:

```javascript
router.post("/", (req,res)=>{

    console.log(req.body);

});
```

Output:

```javascript
{
    title:"My Resume",
    type:"Resume"
}
```

---

# req.params

`req.params` stores values passed in the URL.

Example Route:

```javascript
router.get("/:id",(req,res)=>{
});
```

User visits:

```text
/api/documents/10
```

Now

```javascript
req.params.id
```

equals

```text
10
```

This is useful for finding a specific document.

---

# JSON

JSON stands for **JavaScript Object Notation**.

It is the standard format used to exchange data between frontend and backend.

Example:

```json
{
    "name":"Himanshu",
    "age":20,
    "course":"BCA"
}
```

Advantages:

* Lightweight
* Easy to read
* Easy to write
* Supported by almost every programming language

---

# npm

npm stands for **Node Package Manager**.

It is used to install external libraries.

Example:

```bash
npm install express
```

This installs Express inside the project.

Useful npm commands:

```bash
npm init
```

Creates package.json

```bash
npm install
```

Installs all dependencies

```bash
npm install express
```

Installs Express

---

# package.json

`package.json` is the configuration file of a Node.js project.

It stores:

* Project Name
* Version
* Scripts
* Dependencies
* Author
* License

Example:

```json
{
    "name":"resume-api",
    "version":"1.0.0",
    "dependencies":{
        "express":"^5.0.0"
    }
}
```

---

# require()

`require()` imports another file or package.

Example:

```javascript
const express = require("express");
```

Importing a route:

```javascript
const userRoutes = require("./routes/users");
```

---

# module.exports

`module.exports` allows another file to use your code.

Example:

```javascript
module.exports = router;
```

Without exporting, `app.js` cannot access your routes.

---

# CRUD Operations

CRUD represents the four basic database operations.

| Operation | HTTP Method |
| --------- | ----------- |
| Create    | POST        |
| Read      | GET         |
| Update    | PUT / PATCH |
| Delete    | DELETE      |

Example:

```text
POST   /api/documents
```

Creates a new resume.

```text
GET    /api/documents
```

Returns all resumes.

```text
PUT    /api/documents/:id
```

Updates a resume.

```text
DELETE /api/documents/:id
```

Deletes a resume.

---

# HTTP Status Codes

Status codes tell the client whether the request succeeded or failed.

| Code | Meaning               | Example                   |
| ---- | --------------------- | ------------------------- |
| 200  | OK                    | Data fetched successfully |
| 201  | Created               | New resource created      |
| 204  | No Content            | Deleted successfully      |
| 400  | Bad Request           | Invalid request data      |
| 401  | Unauthorized          | Login required            |
| 404  | Not Found             | Resource doesn't exist    |
| 500  | Internal Server Error | Server-side error         |

Example:

```javascript
res.status(200).json({
    message:"Success"
});
```

Create:

```javascript
res.status(201).json({
    message:"Created Successfully"
});
```

Delete:

```javascript
res.status(204).send();
```

---

# API Testing

This project was tested using:

* Browser (GET Requests)
* Thunder Client
* Postman

Example URL:

```text
http://localhost:3000/api/templates
```

If the server returns JSON, the route is working correctly.

# Authentication Routes

These routes simulate user authentication.

| Method | Endpoint                    | Description            |
| ------ | --------------------------- | ---------------------- |
| POST   | `/api/auth/register`        | Register a new user    |
| POST   | `/api/auth/login`           | Login user             |
| POST   | `/api/auth/logout`          | Logout user            |
| POST   | `/api/auth/forgot-password` | Request password reset |
| POST   | `/api/auth/reset-password`  | Reset user password    |

Example Response

```json
{
    "message":"Login Successful"
}
```

---

# User Routes

Manage the currently logged-in user.

| Method | Endpoint        | Description              |
| ------ | --------------- | ------------------------ |
| GET    | `/api/users/me` | Get current user profile |
| PUT    | `/api/users/me` | Update profile           |
| DELETE | `/api/users/me` | Delete account           |

Example Response

```json
{
    "user":{
        "id":1,
        "name":"Info Chan",
        "plan":"Free",
        "aiCredits":25
    }
}
```

---

# Document Routes

Documents represent resumes or cover letters.

| Method | Endpoint                       | Description             |
| ------ | ------------------------------ | ----------------------- |
| GET    | `/api/documents`               | Get all documents       |
| POST   | `/api/documents`               | Create a new document   |
| POST   | `/api/documents/import`        | Import a document       |
| GET    | `/api/documents/:id`           | Get a specific document |
| PUT    | `/api/documents/:id`           | Update a document       |
| DELETE | `/api/documents/:id`           | Delete a document       |

---

# Template Routes

Templates define the visual design of resumes.

| Method | Endpoint             | Description        |
| ------ | -------------------- | ------------------ |
| GET    | `/api/templates`     | List all templates |
| GET    | `/api/templates/:id` | Get one template   |

Example Response

```json
{
    "templates":[
        {
            "id":1,
            "name":"Modern",
            "category":"simple"
        }
    ]
}
```

---

# AI Routes

These routes currently return **mock responses**.

In a future version, they can be connected to an AI service.

| Method | Endpoint          | Description                   |
| ------ | ----------------- | ----------------------------- |
| POST   | `/api/ai/bullets` | Generate bullet points        |
| POST   | `/api/ai/summary` | Generate professional summary |
| POST   | `/api/ai/rewrite` | Rewrite selected text         |
| POST   | `/api/ai/prompt`  | Apply custom AI prompt        |

Example Response

```json
{
    "success":true,
    "summary":"I am a Frontend Developer. (AI Summary)"
}
```

---

# Application Routes

Track applications.

| Method | Endpoint                | Description          |
| ------ | ----------------------- | -------------------- |
| GET    | `/api/applications`     | Get all applications |
| POST   | `/api/applications`     | Add application      |
| PATCH  | `/api/applications/:id` | Update application   |
| DELETE | `/api/applications/:id` | Delete application   |

---

# Testing the API

This project can be tested using:

* Browser (GET requests)
* Thunder Client (VS Code)
* Postman

### Example GET Request

```text
GET http://localhost:3000/api/templates
```

### Example POST Request

```text
POST http://localhost:3000/api/auth/login
```

Request Body

```json
{
    "email":"info@gmail.com"
}
```
# Data Models

## User Object
```json
{
  "id": 1,
  "name": "Info Chan",
  "email": "info@example.com",
  "password": "hashed_password",
  "plan": "Free",
  "aiCredits": 25,
  "createdAt": "2024-01-15T10:30:00Z"
}
```

## Document Object
```json
{
  "id": 1,
  "userId": 1,
  "title": "My Resume",
  "content": "Resume content here...",
  "templateId": 1,
  "createdAt": "2024-01-15T10:30:00Z"
}
```

## Template Object
```json
{
  "id": 1,
  "name": "Modern",
  "description": "Clean and modern resume template",
  "category": "simple",
  "content": "Template HTML/CSS here...",
  "createdAt": "2024-01-15T10:30:00Z"
}
```

## Application Object
```json
{
  "id": 1,
  "userId": 1,
  "companyName": "Google",
  "position": "Frontend Developer",
  "status": "Applied",
  "appliedDate": "2024-01-15T10:30:00Z",
  "createdAt": "2024-01-15T10:30:00Z"
}
```

---

# Example Requests and Responses

## Register User
**Request:**
```bash
POST /api/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "secure123",
  "name": "John Doe"
}
```

**Response:**
```json
{
  "message": "User Registered",
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "user@example.com",
    "plan": "Free",
    "aiCredits": 25
  }
}
```

## Create Document
**Request:**
```bash
POST /api/documents
Content-Type: application/json

{
  "title": "My Professional Resume",
  "content": "Experience: ...",
  "templateId": 1
}
```

**Response:**
```json
{
  "message": "Document created successfully",
  "document": {
    "id": 1,
    "userId": 1,
    "title": "My Professional Resume",
    "templateId": 1,
    "createdAt": "2024-01-15T10:30:00Z"
  }
}
```

## Get Templates
**Request:**
```bash
GET /api/templates
```

**Response:**
```json
{
  "message": "templates listing successfully",
  "templates": [
    {
      "id": 1,
      "name": "Modern",
      "category": "simple"
    },
    {
      "id": 2,
      "name": "Creative",
      "category": "designer"
    }
  ]
}
```

---

# Best Practices

## Controllers
- Always validate input before processing
- Use try-catch blocks for error handling
- Return appropriate HTTP status codes
- Provide meaningful error messages
- Keep controllers focused on request/response handling

## Models
- Keep models focused on data operations
- Use static methods for data access
- Maintain consistent method naming
- Handle errors gracefully

## Middleware
- Use middleware for cross-cutting concerns
- Order middleware correctly in app.js
- Keep middleware focused and reusable
- Document middleware functionality

## Routes
- Use descriptive route names
- Organize routes by feature
- Document all endpoints with comments
- Use consistent HTTP methods

## Database
- Always save after modifications
- Handle file read/write errors
- Use proper data validation
- Backup data regularly

---

# Error Handling

The API uses standardized HTTP status codes and error responses:

### Error Response Format
```json
{
  "error": "Error message here",
  "status": 400
}
```

### Common Errors

**400 Bad Request**
- Missing required fields
- Invalid email format
- Invalid data type

**404 Not Found**
- User doesn't exist
- Document not found
- Resource not found

**409 Conflict**
- User already exists
- Duplicate entry

**500 Internal Server Error**
- Database operation failed
- Unexpected server error

---

# Future Improvements

- [ ] Add database support (MongoDB/PostgreSQL)
- [ ] Implement JWT authentication
- [ ] Add password hashing (bcrypt)
- [ ] Integrate real AI service
- [ ] Add file upload functionality
- [ ] Implement rate limiting
- [ ] Add request validation middleware
- [ ] Create unit tests
- [ ] Add API documentation (Swagger)
- [ ] Implement caching
- [ ] Add logging system
- [ ] Email verification
- [ ] Two-factor authentication

---

# What I Learned

During this project, I learned:

* Node.js fundamentals
* Express.js framework
* REST API development
* CRUD operations
* Express Routing and Middleware
* JSON data handling
* Request & Response objects
* HTTP Methods and Status Codes
* Project structure and organization
* Modular route files and separation of concerns
* API testing with tools like Postman
* Backend development basics
* MVC architecture pattern
* Error handling strategies
* Code organization and best practices

---

# Contributing

This is a learning project. Feel free to fork, modify, and learn from it!

---

# ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub.

---
