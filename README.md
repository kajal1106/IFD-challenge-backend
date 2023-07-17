# Ticket Management System Backend

The Ticket Management System Backend is a RESTful API built with TypeScript, MongoDB, Mongoose, and Express.js. It provides the necessary endpoints to create and manage tickets for the Ticket Management System.

## Features

- Use TypeScript, MongoDB, Mongoose, and Express.js to create a RESTful API.
- Implement the following endpoints:
  - GET `/tickets`: Retrieve a list of all tickets sorted by deadline in descending order.
  - POST `/tickets`: Create a new ticket.
  - PUT `/tickets/{id}`: Update a ticket.
- Each ticket should have the following properties: `client`, `issue`, `status('open', 'closed')`, and `deadline`.

## Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/kajal1106/IFD-challenge-backend.git


## API Endpoints

1. GET /tickets: Retrieve a list of all tickets sorted by deadline in descending order.
2. POST /tickets: Create a new ticket. The request body should include the following fields: client, issue, status, and deadline.
3. PUT /tickets/{id}: Update a ticket identified by its ID. The request body should include the status field.

## Test Cases

The backend includes test cases to ensure the functionality of the API endpoints. To run the tests, use the following command:
1. ```shell
   npm run test
  
The test cases are located in the test directory. The chai library is used for making assertions and sinon is used for stubbing Mongoose models or methods.

## Docker Configuration
The backend includes a docker-compose.yml file and a Dockerfile for containerization. You can use Docker to run the backend in a containerized environment.

To run the backend using Docker:

1. Ensure that Docker is installed on your system.

2. Open a terminal and navigate to the project directory.

3. Run the following command to start the backend container:
  ```shell
   docker-compose up -d --build

4. Ensure no other application is running on your machine's port 3000. The backend application will start and be exposed from port 3000. To run the app locally, you can go to your browser and paste http://localhost:3000/tickets

### TODO
1. Add tests to check for failed requests

2. Research about Sinon Stubs so that the main database in not touched

3. Currently, the docker-compose templates are different for both frontend and backend. Create a docker-compose.yml file in the root directory.