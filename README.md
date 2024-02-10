# Web Projects API

This Express.js API manages a collection of web projects stored in a JSON file. It allows users to perform CRUD operations (Create, Read, Update, Delete) on the projects.

## Installation

1. Clone the repository:

   ```
   git clone (https://github.com/pikxs08/webprojects.git)
   ```

2. Install dependencies:

   ```
   npm install
   npm install nodemon
   ```

## Usage

1. Start the server:

   ```
   npm start
   ```

2. Open Postman to test the API endpoints.

## API Endpoints

### Get All Projects

- **URL:** `/api`
- **Method:** `GET`
- **Description:** Retrieves all web projects.
- **Sample Response:**
  ```json
  [
    {
      "id": 1,
      "title": "React Game!",
      "description": "Tic tac toe game created using Create React app.",
      "URL": "http://heroku/myapp/game/"
    },
    {
      "id": 2,
      "title": "Online store",
      "description": "Online store created with HTML, CSS and JavaScript.",
      "URL": "https://git.com/myrepos/shop/index"
    }
    ...
  ]
  ```

### Add New Project

- **URL:** `/`
- **Method:** `POST`
- **Description:** Adds a new web project.
- **Parameters:**
  - `title` (string, required): Title of the project.
  - `description` (string, required): Description of the project.
  - `url` (string, required): URL of the project.
- **Sample Request:**
  ```
  POST /?title=New%20Project&description=Description%20of%20the%20project&url=https://example.com
  ```
- **Sample Response:** `Project Successfully added!`

### Update Project

- **URL:** `/:id`
- **Method:** `PUT`
- **Description:** Updates an existing web project.
- **Parameters:**
  - `id` (integer, required): ID of the project to update.
  - `title` (string, required): Updated title of the project.
  - `description` (string, required): Updated description of the project.
- **Sample Request:**
  ```
  PUT /2?title=Updated%20Project&description=Updated%20description%20of%20the%20project
  ```
- **Sample Response:** `Project Successfully updated!`

### Delete Project

- **URL:** `/:id`
- **Method:** `DELETE`
- **Description:** Deletes an existing web project.
- **Parameters:**
  - `id` (integer, required): ID of the project to delete.
- **Sample Request:**
  ```
  DELETE /2
  ```
- **Sample Response:** `Project Successfully deleted!`

ENJOY!!!!!!!!!!
