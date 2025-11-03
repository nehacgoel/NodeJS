
const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = "mongodb+srv://nehachd38:uNQ2WmjKkzWTnGH2@nehag-dev.ukazbr2.mongodb.net/";
const client = new MongoClient(url);

// Database Name
const dbName = 'test-dev';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('users');

  // the following code examples can be pasted here...

  //Read
  const findResult = await collection.find({}).toArray();
console.log('Found documents =>', findResult);

//Insert
const insertResult = await collection.insertMany([{ firstName: "John",
    lastName: "D"
 }]);
console.log('Inserted documents =>', insertResult);

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
