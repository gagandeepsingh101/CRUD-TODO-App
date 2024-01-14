# CRUD Todo Application

This is a simple Todo List Application that provides basic functionality for managing tasks. The application is split into two parts: the backend and the frontend.

## 1. Backend Side

### 1.1 Technologies Used:
  - Node.js
  - Express.js
  - MongoDB (or your preferred database)
  
### 1.2 Getting Started:
#### 1.2.1 Clone the repository:
 ```
      git clone https://github.com/your-username/todo-list-app.git
      cd todo-list-app/backend
``` 
#### 1.2.2 Install dependencies:
```
   npm install
```   

#### 1.2.3 Set up the database:

Create a MongoDB database.
Update the database configuration in config.js or .env file.

#### 1.2.4 Run the server:
```
  node index.js
```
The backend server will be running at http://localhost:8000.

### 1.3 API Endpoints:
- GET /api/getAllTodos: Get all tasks.
- POST /api/createTodo: Add a new task.
- PUT /api/deleteParticularTodo: Update a task.
- DELETE /api/updateParticularTodo: Delete a task.


## 2. Frontend Side

### 2.1 Technologies Used:
- React.js
- Axios (or your preferred HTTP client)
- Tailwind CSS (or any preferred styling framework)

### 2.2 Getting Started:

#### 2.2.1 Navigate to the frontend directory:
```
cd ./frontend
```
#### 2.2.2 Install dependencies:
```
npm install
```

### 2.2.3 Run the application:
```
npm start
```
The frontend will be accessible at http://localhost:3001.

### 2.3 Features:
View a list of tasks.
Add a new task.
Mark tasks as completed.
Delete tasks.
## 3. Contributing:
Feel free to contribute to the project by opening issues or creating pull requests. Contributions are welcome!

