import express from "express";
import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import ticket, { Ticket } from "./models/ticket";
import { getTickets } from "./controllers/ticketController";
import router from "./routes/ticketRoutes";

const start = async () => {
  try {
    // Creating the mongoDB memory server
    const mongoServer = await MongoMemoryServer.create();
    // Connecting to the mongoDB memory server using mongoose
    // await mongoose.connect(mongoServer.getUri(), { dbName: "notificationsDB" }).then(() => {
    //   console.log('connected');
    // });
    await mongoose.connect('mongodb://localhost:27017/notificationsDB').then(() => {
      console.log('connected');
    });
    // Creating the express app
    const app = express();
    app.use(express.json());
    // Starting the server
    app.use(router);
    // app.post('/tickets', async (req, res) => {
    //   try {
    //     const newUser = new ticket({
    //       client: req.body.client,
    //       issue: req.body.issue,
    //       status: req.body.status,
    //       deadline: req.body.deadline,
    //     // ... Assign values for other fields as needed ...
    //     });
    //   await newUser.save();

    //   res.send('User created successfully');
    //   } catch (error) {
    //     console.error('Error saving user:', error);
    //     res.status(500).send('Internal Server Error');
    //   }
    // });

    // app.get('/tickets', async (req, res) => {
    //   // const respon = getTickets();
    //   try {
    //     const response = await getTickets(req, res);
    //     res.send(response);
    //   } catch (error) {
    //     console.error('Failed to fetch tickets:', error);
    //   }
      
      
    //   // try {
    //   //   const articles = await ticket.find();
    //   //   res.send(articles);
    //   //   console.log(articles);
    //   // } catch (err) {
    //   //   console.log(err);
    //   // }
    // });

    await new Promise<void>((resolve, reject) => {
      app.listen(3000, resolve).on("error", reject);
    });
    console.log(`Server started at http://localhost:3000`);
  } catch (error: unknown) {
    console.log(error);
    process.exit(1);
  }
};

process.on("beforeExit", async () => {
  await mongoose.disconnect();
  console.log("mongoose disconnected");
});

if (require.main === module) {
  start();
}

export { start };
