# Node.js Bookstore REST API

A professional backend-only Bookstore REST API built using Node.js and Express.js. This project demonstrates CRUD operations, RESTful API architecture, middleware usage, file handling, and JSON-based data storage.

---

## Project Overview

This project is a beginner-friendly backend application designed to manage bookstore data using REST APIs. It allows users to create, read, update, delete, and search books while following proper backend architecture practices.

The project uses a JSON file as a lightweight database, making it ideal for learning Node.js backend development before moving to databases like MongoDB.

---

## Features

* Create new books
* Get all books
* Get a single book by ID
* Update existing books
* Delete books
* Search books by title
* Express middleware integration
* JSON file database storage
* RESTful API structure
* Clean folder architecture

---

## Tech Stack

### Backend

* Node.js
* Express.js
* JavaScript

### Database

* JSON File Storage

### Tools

* Nodemon
* Postman / Thunder Client
* Git & GitHub

---

## Folder Structure

```bash
bookstore-backend/
│
├── controllers/
│   └── bookController.js
│
├── routes/
│   └── bookRoutes.js
│
├── middleware/
│   └── logger.js
│
├── data/
│   └── books.json
│
├── app.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

## Installation

### 1. Clone Repository

```bash
git clone https://github.com/iamnikhilthakre/nodejs-bookstore-api.git
```

### 2. Navigate to Project

```bash
cd nodejs-bookstore-api
```

### 3. Install Dependencies

```bash
npm install
```

---

## Running the Server

### Development Mode

```bash
npm run dev
```

### Production Mode

```bash
npm start
```

---

## Server URL

```bash
http://localhost:3005
```

---

# API Endpoints

## Base URL

```bash
http://localhost:3005/api/books
```

---

## 1. Get All Books

### Request

```http
GET /api/books
```

### Response

```json
[
  {
    "id": 1,
    "title": "Atomic Habits",
    "author": "James Clear",
    "price": 499,
    "category": "Self Help"
  }
]
```

---

## 2. Get Single Book

### Request

```http
GET /api/books/:id
```

### Example

```http
GET /api/books/1
```

---

## 3. Add New Book

### Request

```http
POST /api/books
```

### Body

```json
{
  "title": "Atomic Habits",
  "author": "James Clear",
  "price": 499,
  "category": "Self Help"
}
```

---

## 4. Update Book

### Request

```http
PUT /api/books/:id
```

### Example

```http
PUT /api/books/1
```

### Body

```json
{
  "price": 699
}
```

---

## 5. Delete Book

### Request

```http
DELETE /api/books/:id
```

### Example

```http
DELETE /api/books/1
```

---

## 6. Search Books

### Request

```http
GET /api/books/search?q=atomic
```

---

# Middleware

The project includes a custom logger middleware that logs incoming request methods and URLs.

### Example

```bash
GET /api/books
POST /api/books
PUT /api/books/1
```

---

# Sample JSON Database

### books.json

```json
[
  {
    "id": 1,
    "title": "Atomic Habits",
    "author": "James Clear",
    "price": 499,
    "category": "Self Help"
  }
]
```

---

# Scripts

### Start Server

```bash
npm start
```

### Run with Nodemon

```bash
npm run dev
```

---

# Testing APIs

You can test APIs using:

* Postman
* Thunder Client
* Insomnia

---

# Future Improvements

* MongoDB Integration
* Mongoose ODM
* JWT Authentication
* User Login & Registration
* Admin Dashboard
* Pagination
* Sorting & Filtering
* Image Upload
* Reviews & Ratings
* Order Management
* Payment Gateway Integration

---

# Learning Outcomes

This project helps practice:

* REST API Development
* CRUD Operations
* Express.js Routing
* Middleware Usage
* File Handling in Node.js
* Backend Project Structure
* JSON Data Management
* Git & GitHub Workflow

---

# GitHub Topics

```text
nodejs expressjs rest-api backend bookstore crud-api javascript express api-project
```

---

# Author

## Nikhil Thakre

Backend Developer | Full Stack Learner

GitHub: [https://github.com/iamnikhilthakre](https://github.com/iamnikhilthakre)

---

# License

This project is licensed under the MIT License.
