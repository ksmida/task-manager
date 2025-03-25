# Task Manager App

A simple task manager application that allows users to create, edit, delete, and mark tasks as completed. The app uses MongoDB to store task data, with a backend built on Express.js. 
The frontend is built with HTML, CSS, and JavaScript to interact with the backend and manage tasks. 

## Features

- Create Tasks: Add new tasks to your list.
- View Tasks: View all tasks in a simple, clear list.
- Edit Tasks: Edit existing tasks and update their names or completion status.
- Delete Tasks: Remove tasks from the list.
- Mark as Completed: Mark tasks as completed to easily distinguish them from pending tasks.

## Tech Stack

- **Frontend**:
  - HTML, CSS, and JavaScript
  - Axios for making HTTP requests
  - Normalize.css for consistent cross-browser styling
- **Backend**:
  - Node.js with Express.js for creating the RESTful API
  - MongoDB for storing tasks (use a service like MongoDB Atlas for cloud-based storage)
  - Mongoose for interacting with MongoDB

## Getting Started

To run this project locally, follow the steps below.

### Installation

1. Clone this repository to your local machine using Git:

```bash
git clone https://github.com/ksmida/task-manager.git

2. Navigate to the project directory
```bash
cd task-manager

3. Install dependencies:
```bash
npm install

4. Set up environment variables:
Create a '.env' file in the root directory of the project by running:
```bash
touch .env

5. Start the application:
After installing dependencies and configuring your environment, star the application by running:
```bash
npm start

6. Access the application:
Open your browser and visit 'http://localhost:3000' to interact with the Task Manager application!
