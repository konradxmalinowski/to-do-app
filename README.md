# To-Do App

This project is a simple To-Do application consisting of a backend built with PHP, MySQL (using XAMPP), and a frontend developed using Vite, running on [http://localhost:5173/](http://localhost:5173/).

---

## Table of Contents

- [Overview](#overview)
- [Backend](#backend)
  - [Technologies](#technologies)
  - [Installation & Setup](#installation--setup)
  - [API Endpoints](#api-endpoints)
- [Frontend](#frontend)
  - [Technologies](#technologies-1)
  - [Installation & Setup](#installation--setup-1)
- [Usage](#usage)
- [License](#license)

---

## Overview

The To-Do App allows users to manage their daily tasks efficiently. Users can add, edit, delete, and mark tasks as completed. The backend provides a RESTful API for managing tasks, while the frontend offers a fast and interactive user interface.

---

## Backend

### Technologies

- **PHP** (server-side scripting)
- **MySQL** (database)
- **XAMPP** (local server environment)

### Installation & Setup

1. **Install XAMPP**  
   Download and install XAMPP from [https://www.apachefriends.org/](https://www.apachefriends.org/).

2. **Start Apache and MySQL**  
   Open XAMPP Control Panel and ensure both Apache and MySQL are running.

3. **Clone the Repository**  
   ```bash
   git clone https://github.com/konradxmalinowski/to-do-app.git
   ```

4. **Set up the backend files**  
   Copy the backend folder (e.g., `backend` or `api`) into your XAMPP `htdocs` directory.

5. **Database Setup**
   - Open phpMyAdmin (`http://localhost/phpmyadmin/`).
   - Create a new database (e.g., `todo_app`).
   - Import the provided SQL file (`database.sql` or similar) to create the necessary tables.

6. **Configure Database Connection**
   - Edit the PHP configuration file (e.g., `config.php`) and set your database credentials.

   ```php
   $servername = "localhost";
   $username = "root";
   $password = "";
   $dbname = "todo_app";
   ```

### API Endpoints

The backend exposes the following REST API endpoints (examples):

- `GET /tasks` — Get all tasks
- `POST /tasks` — Add a new task

All endpoints return JSON responses.

---

## Frontend

### Technologies

- **Vite** (development server & build tool)
- **Typescript**
- **TailwindCSS**

### Installation & Setup

1. **Navigate to the frontend directory**
   ```bash
   cd to-do-app/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The app will be running at [http://localhost:5173/](http://localhost:5173/).

4. **Configuration**

   The frontend is set up to communicate with the backend API (PHP server) running on XAMPP. Ensure any API URLs in your frontend configuration point to the correct backend address (e.g., `http://localhost/todo-app/backend/api.php`).

---

## Usage

1. Ensure XAMPP (Apache & MySQL) is running and the backend is accessible.
2. Start the Vite frontend server.
3. Open [http://localhost:5173/](http://localhost:5173/) in your browser.
4. Manage your to-do tasks using the intuitive UI.

---

## License
```
MIT License

Copyright (c) 2025 Konrad Malinowski

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
