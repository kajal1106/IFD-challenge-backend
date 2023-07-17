import chai from "chai";
import chaiHttp from 'chai-http';
const sinon = require('sinon');
import { start } from "../src/server";
import ticket from "../src/models/ticket";
const { expect } = chai;

chai.use(chaiHttp);

describe('API Tests', () => {
  let app : any; // Store the reference to the Express app

  before(async () => {
    // Set up any necessary test data or stubs before starting the app
    // For example, you can use sinon to stub Mongoose models or methods

    // Start the app and store the reference to the Express app
    try {
      app = await start();
      console.log('Express app started successfully');
    } catch (error) {
      console.log('Error starting the app:', error);
    }  });

  after(() => {
    // Clean up any resources after all tests have finished
    // For example, you can disconnect from the database
  });

  describe('GET /api/endpoint', () => {
    it('should return all resources', async () => {
      // Set up any necessary test data

      // Use chai-http to make a GET request to your API endpoint
      const res = await chai.request('http://localhost:3000').get('/tickets');

      // Assert the response status code and body
      expect(res).to.have.status(200);
      expect(res.body).to.be.an('array');
      // Add more assertions as needed
    });

    // Add more tests for other scenarios (e.g., error handling, specific responses)
  });

  describe('POST /api/endpoint', () => {
    it('should create a new resource', async () => {
      // Set up any necessary test data
      const mockTickets = { client: 'John Doe', issue: 'Issue 1', status: 'open', deadline: '2023-07-15T00:00:00.000Z' };

      // Use chai-http to make a POST request to your API endpoint
      const res = await chai.request('http://localhost:3000').post('/tickets').send(mockTickets);

      // Assert the response status code and body
      expect(res).to.have.status(201);
      expect(res.body).to.be.an('object');
      // Add more assertions as needed
      ticket.find({client: 'John Doe'}).then((tick) => {
        expect(tick[0].issue).equal('Issue 1');
      })
      //delete the above entry
      ticket.deleteMany({client: 'John Doe'});
    });

    // Add more tests for other scenarios (e.g., error handling, specific responses)
  });

  // Add more test suites for other API endpoints
});
