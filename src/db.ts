import { connect, connection } from "mongoose";

export async function connectToMongodb() {
  try {
    await connect(process.env.DB_URI || "mongodb+srv://admin:admin@test.test.mongodb.net");
  } catch (error) {
    console.log("Error:", error);
  }
}

connection.on("connected", () => {
  console.log("Mongodb connected to:", connection.db.databaseName);
});

connection.on("error", (error) => {
  console.error("error", error);
});

connection.on("disconnected", () => {
  console.log("Mongodb disconnected");
});