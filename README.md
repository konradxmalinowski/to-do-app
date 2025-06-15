# To-Do App

A full-stack To-Do application built to help users efficiently organize and manage daily tasks. The project consists of a **backend** (PHP, MySQL, XAMPP) and a **frontend** (React, TypeScript, JavaScript, Vite, TailwindCSS). This repository contains both the frontend and backend codebases, making it easy to set up and run the entire application locally.

<br>

## Table of Contents

- [Project Overview](#project-overview)
- [Architecture](#architecture)
- [Frontend](#frontend)
  - [Tech Stack](#frontend-tech-stack)
  - [Features](#frontend-features)
  - [Getting Started](#frontend-getting-started)
- [Backend](#backend)
  - [Tech Stack](#backend-tech-stack)
  - [Features](#backend-features)
  - [Getting Started](#backend-getting-started)

<br>

## Project Overview

The To-Do App allows users to:
- Create, view, edit, and delete tasks.
- Organize tasks efficiently with a responsive and user-friendly interface.
- Persist data using a MySQL database managed via a PHP backend.

The project is divided into two main parts:
- **Frontend:** Provides the user interface and communicates with the backend API.
- **Backend:** Handles business logic, data storage, and exposes a RESTful API.

<br>

## Architecture

```
[Frontend: React + Vite + TailwindCSS + TypeScript]
             |
             v
   [Backend: PHP + MySQL (via XAMPP)]
```

- The frontend communicates with the backend using HTTP requests (typically via Fetch or Axios).
- The backend processes requests, interacts with the MySQL database, and returns responses to the frontend.

<br>

## Frontend

### Frontend Tech Stack

- **React** – For building reusable UI components.
- **TypeScript** – Strong typing for improved reliability and maintainability.
- **Vite** – Fast development environment and build tool.
- **TailwindCSS** – Utility-first CSS framework for rapid UI development.

### Frontend Features

- Modern, responsive user interface.
- Add, edit, delete, and mark tasks as completed.
- Real-time updates of task lists.
- Communicates with backend via REST API.
- Error handling and loading indicators.
- Type-safe codebase with clear file structure.

### Frontend Getting Started

1. **Install dependencies:**
    ```bash
    cd frontend
    npm install
    ```

2. **Configure API endpoint:**
   - Update the API URL in your environment or configuration file to point to your backend server.

3. **Run the development server:**
    ```bash
    npm run dev
    ```

4. Access the frontend at [http://localhost:5173](http://localhost:5173) (default Vite port).

<br>

## Backend

### Backend Tech Stack

- **PHP** – Server-side scripting language.
- **MySQL** – Relational database for storing tasks and users.
- **XAMPP** – Local development environment (Apache, MySQL, PHP, Perl).

### Backend Features

- RESTful API for CRUD operations on tasks.
- Secure database connections.
- Input validation and error handling.
- Easily extensible for user authentication or additional features.

### Backend Getting Started

1. **Set up XAMPP:**
   - Download and install XAMPP from [https://www.apachefriends.org/](https://www.apachefriends.org/).
   - Start Apache and MySQL via the XAMPP control panel.

2. **Database setup:**
   - Import the provided SQL file (if available) to create the `to_do_app` database and tables:
     1. Open phpMyAdmin (`http://localhost/phpmyadmin`).
     2. Create a new database, e.g., `to_do_app`.
     3. Import the SQL script.

3. **Configure database credentials in PHP backend code.**

4. **Run the backend:**
   - Place backend files in the `htdocs` directory of XAMPP.
   - Access the backend API via [http://localhost/to-do-app/backend](http://localhost/Todo%20app%20(database)/backend)](http://localhost/Todo%20app%20(database)/backend).

<br>

## Screenshots
![image](https://github.com/user-attachments/assets/b79c12a2-8b7d-4d9e-a4e8-6e9734a6adae)

<br>

<br>

## Contact

For any inquiries or feedback: [malinowski.konrad45@gmail.com](mailto:malinowski.konrad45@gmail.com)

