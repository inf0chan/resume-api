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
├── node_modules/
│
├── routes/
│   ├── auth.js
│   ├── users.js
│   ├── documents.js
│   ├── templates.js
│   ├── ai.js
│   └── applications.js
│
├── data.json
├── package.json
├── package-lock.json
├── app.js
└── README.md
```

---

# Installation

Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/resume-api.git
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

# 🔢 req.params

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

# 📄 package.json

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

# 📁 node_modules

`node_modules` contains every installed package.

Example:

```text
node_modules/
```

is automatically created after:

```bash
npm install
```

You should **not upload** this folder to GitHub.

Instead, add it to `.gitignore`.

---

# 📥 require()

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

# 📤 module.exports

`module.exports` allows another file to use your code.

Example:

```javascript
module.exports = router;
```

Without exporting, `app.js` cannot access your routes.

---

# 🔄 CRUD Operations

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

# 📊 HTTP Status Codes

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

# 🔍 API Testing

This project was tested using:

* Browser (GET Requests)
* Thunder Client
* Postman

Example URL:

```text
http://localhost:3000/api/templates
```

If the server returns JSON, the route is working correctly.

# 📚 API Documentation

The following REST API endpoints are available in this project.

---

# 🔐 Authentication Routes

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

# 👤 User Routes

Manage the currently logged-in user.

| Method | Endpoint        | Description              |
| ------ | --------------- | ------------------------ |
| GET    | `/api/users/me` | Get current user profile |
| PUT    | `/api/users/me` | Update profile           |
| DELETE | `/api/users/me` | Delete account           |

Example Response

```json
{
    "success":true,
    "user":{
        "id":1,
        "name":"Info Chan",
        "plan":"Free",
        "aiCredits":25
    }
}
```

---

# 📄 Document Routes

Documents represent resumes or cover letters.

| Method | Endpoint                       | Description             |
| ------ | ------------------------------ | ----------------------- |
| GET    | `/api/documents`               | Get all documents       |
| POST   | `/api/documents`               | Create a new document   |
| POST   | `/api/documents/import`        | Import a document       |
| GET    | `/api/documents/:id`           | Get a specific document |
| PUT    | `/api/documents/:id`           | Update a document       |
| POST   | `/api/documents/:id/duplicate` | Duplicate a document    |
| DELETE | `/api/documents/:id`           | Delete a document       |

---

# 📝 Sections & Items

These routes manage sections inside a resume.

| Method | Endpoint                                       | Description    |
| ------ | ---------------------------------------------- | -------------- |
| POST   | `/api/documents/:id/sections`                  | Add section    |
| PATCH  | `/api/documents/:id/sections/:sectionId`       | Update section |
| DELETE | `/api/documents/:id/sections/:sectionId`       | Delete section |
| POST   | `/api/documents/:id/sections/:sectionId/items` | Add item       |
| PATCH  | `/api/documents/:id/items/:itemId`             | Update item    |
| DELETE | `/api/documents/:id/items/:itemId`             | Delete item    |

> **Note:** These endpoints are part of the API design. They can be implemented later when adding autosave and nested editing.

---

# 🕒 Version Routes

Versioning allows users to save multiple versions of a resume.

| Method | Endpoint                                         | Description          |
| ------ | ------------------------------------------------ | -------------------- |
| GET    | `/api/documents/:id/versions`                    | List versions        |
| POST   | `/api/documents/:id/versions`                    | Save current version |
| POST   | `/api/documents/:id/versions/:versionId/restore` | Restore version      |

---

# 🎨 Template Routes

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
            "category":"Professional"
        }
    ]
}
```

---

# 🤖 AI Routes

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

# 💼 Job Application Routes

Track job applications.

| Method | Endpoint                | Description          |
| ------ | ----------------------- | -------------------- |
| GET    | `/api/applications`     | Get all applications |
| POST   | `/api/applications`     | Add application      |
| PATCH  | `/api/applications/:id` | Update application   |
| DELETE | `/api/applications/:id` | Delete application   |

---

# 🧪 Testing the API

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
    "email":"user@gmail.com",
    "password":"123456"
}
```

---

# 📌 HTTP Status Codes Used

| Code | Meaning      |
| ---- | ------------ |
| 200  | OK           |
| 201  | Created      |
| 204  | No Content   |
| 400  | Bad Request  |
| 401  | Unauthorized |
| 404  | Not Found    |

---

# 🚀 Future Improvements

This project currently uses mock responses and local JSON storage.

Planned improvements include:

* MongoDB Database Integration
* JWT Authentication
* Password Hashing with bcrypt
* Real AI Integration (OpenAI API)
* File Upload Support
* Resume Export to PDF
* Resume Sharing
* ATS Resume Checker
* Cloud Storage
* Email Verification
* Role-Based Authentication
* Unit & Integration Testing

---

# 📖 What I Learned

During this project, I learned:

* Node.js fundamentals
* Express.js
* REST API development
* CRUD operations
* Express Routing
* Middleware
* JSON handling
* Request & Response objects
* HTTP Methods
* HTTP Status Codes
* Project Structure
* Modular Route Files
* API Testing
* Backend Development Basics

---
---

# ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub.

---
