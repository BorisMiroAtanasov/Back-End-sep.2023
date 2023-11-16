const mongodb = require("mongodb");

const connectionString ="mongodb://127.0.0.1:27017"
const clinet = new mongodb.MongoClient(connectionString);

async function connectDb() {
  clinet.connect();

  const db = clinet.db("dogsDB");
  const dogs = db.collection("dogs");

  const result = await dogs.find().toArray();
  console.log(result);
}

connectDb();