import express from "express";
import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import router from "./routes/ticketRoutes";
import cors from 'cors';
const start = async () => {
  try {
    // Creating the mongoDB memory server
    // const mongoServer = await MongoMemoryServer.create();
    // // Connecting to the mongoDB memory server using mongoose
    // await mongoose.connect(mongoServer.getUri(), { dbName: "notificationsDB" }).then(() => {
    //   console.log('connected');
    // });
    await mongoose.connect('mongodb://mongo:27017/notificationsDB').then(() => {
      console.log('connected');
    });
    // Creating the express app

    const app = express();
    app.use(cors());
    app.use(express.json());

    // Starting the server
    app.use(router);

    await new Promise<void>((resolve, reject) => {
      app.listen(3000, resolve).on("error", reject);
    });
    console.log(`Server started at http://localhost:3000/tickets`);
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
