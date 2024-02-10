# Project Name
Task Management

Brief description or tagline about your project.

Task-Management is a full-stack web application built using the MERN stack. It incorporates Firebase as the database, Express.js as the backend framework, React for the frontend, and Node.js as the runtime environment.

## Table of Contents

- [Project Overview](#project-overview)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Endpoints/APIs](#endpointsapis)


## Project Overview

Provide a brief overview of your project, including its purpose, goals, and any other relevant information.

### Prerequisites

1. Node
2. NPM 
3. JavaScript

### Installation

Follow these steps to install and set up the project on your local machine. This assumes you have Node.js and npm installed.

Server-Side (Node.js)

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/your-project.git
   cd server 
   npm install
   nodemon index.js 

Client-Side (React.js)

2. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/your-project.git
   cd client 
   npm install
   npm start  

### Project Structure

Server-Side:
/server
|-- /src
|   |-- /controllers
|   |-- /models
|   |-- /routes
|   |-- app.js
|
|-- .gitignore
|-- README.md
|-- package.json
|-- package-lock.json

Client-Side:
/client
|-- /src
|   |-- /components
|   |   |-- /Auth
|   |   |   |-- Login.js
|   |   |   |-- Signp.js
|   |   |
|   |   |-- /Navbar
|   |   |   |-- Navbar.js
|   |   |
|   |   |-- /Pages
|   |   |   |-- AddTasks
|   |   |   |-- Dashboard
            |-- FetchTasks
|   |   |
|   |   |-- App.js
|   |   |-- index.js
|   |
|   |-- /state
|   |   |-- /actions
|   |   |   |-- authActions.js
|   |   |
|   |   |-- /reducers
|   |   |   |-- authReducer.js
|   |   |
|   |   |-- store.js
|   |
|   |-- /Tests
|   |   |-- Login.test.js
|   |
|   |-- .gitignore
|   |-- README.md
|   |-- package.json
|   |-- package-lock.json



### Endpoints/APIs

## Get All Tasks
- **Endpoint:** `/users/tasks`
- **Method:** `GET`
- **Description:** Retrieve all tasks.

## Fetch Tasks by User Email
- **Endpoint:** `/fetchtasks/email`
- **Method:** `POST`
- **Description:** Fetch tasks associated with a specific user's email.

## Add Task
- **Endpoint:** `/add/tasks`
- **Method:** `POST`
- **Description:** Create a new task.

## Delete Task
- **Endpoint:** `/delete/tasks/:id`
- **Method:** `DELETE`
- **Description:** Delete a task by providing its ID.

- **Parameters:**
  - `id` (string) - Task ID.

## Update Task
- **Endpoint:** `/update/task/:id`
- **Method:** `PUT`
- **Description:** Update an existing task by providing its ID.

- **Parameters:**
  - `id` (string) - Task ID.

### Authentication

- `/auth/login`
  - **Method:** `POST`
  - **Description:** Log in a user.

- `/auth/register`
  - **Method:** `POST`
  - **Description:** Register a new user.


### Fronent-Deployed Link
Hosting URL: https://task-management-7a088.web.app