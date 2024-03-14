# Course Management API

## Overview

The Course Management API is a backend service that provides functionality for managing courses. It allows users to perform operations such as creating, retrieving, updating, and deleting courses.

## Motivation

The motivation behind developing this project was to create a simple and efficient API for managing course data. It aims to provide a robust solution for applications that require course management functionality, such as educational platforms or training systems.

## Features

- Create new courses
- Retrieve existing courses
- Update course details
- Delete courses
- MongoDB integration for data storage
- RESTful API endpoints for easy integration with frontend applications

## Technologies Used

- Express.js
- MongoDB
- Mongoose
- dotenv
- morgan
- nodemon (for development)

## Installation

1. Clone the repository: `git clone https://github.com/yourusername/course-management-api.git`
2. Navigate to the project directory: `cd course-management-api`
3. Install dependencies: `npm install`
4. Set up environment variables by creating a `.env` file and adding necessary configurations (e.g., `PORT`, `MONGODB_URI`)
5. Start the server: `npm start`

## Usage

To use the Course Management API, follow these steps:

1. Ensure the server is running.
2. Use a tool like Postman or curl to make HTTP requests to the API endpoints.
3. Use the provided endpoints to perform CRUD operations on courses.

Example usage:

- **Create a new course:**
  ```http
  POST /courses
  Request Body:
  {
    "name": "Course Name"
  }
  ```

GET /courses

GET /courses/:id

PUT /courses/:id
Request Body:
{
"name": "New Course Name"
}

DELETE /courses/:id

## Screenshots

Include relevant screenshots or images of the API endpoints, if applicable.

## What I Learned

During the development of this project, I learned:

- How to build RESTful APIs using Express.js
- Integrating MongoDB with Mongoose for data storage
- Handling CRUD operations in a Node.js application
- Working with environment variables using dotenv
- Logging HTTP requests using morgan middleware

## Challenges Faced

- Learning to work with MongoDB and Mongoose for the first time.
- Implementing error handling and validation in the API endpoints.
- Understanding and implementing RESTful design principles.

## Future Improvements

- Implement user authentication and authorization for secure access to the API.
- Add pagination support for retrieving large sets of courses.
- Implement sorting and filtering options for course retrieval.
- Write unit tests to ensure the reliability of the API endpoints.

## Acknowledgements

I would like to acknowledge the developers of Express.js, MongoDB, Mongoose, morgan, and other open-source libraries used in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or feedback, please contact [Sachin Sagar](mailto:sachinssagar@gmail.com.com).
