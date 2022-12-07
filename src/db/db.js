const { json } = require("express");
const { MongoClient } = require("mongodb");
const confi = require("../config");

// Connection URI db
const uri = confi.confiBd.url;

// db name
const dbName = confi.confiBd.bd;

// collection name sm
const collectionSm = confi.confiBd.collectionSm;

// Create a new MongoClient
const client = new MongoClient(uri);

async function insertData(data) {
  try {
    // mongo connect
    await client.connect();
    console.log("Connected correctly to server");
    // Use db name
    const db = client.db(dbName);
    // Use the collection name  "Sm"
    const col = db.collection(collectionSm);
    // Construct a document
    let dato = JSON.parse(data);
    // Insert a single document, wait for promise so we can read it back
    const p = await col.insertOne(dato);
    console.log("doc", p.insertedId);
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}

async function inserUser(user) {
  try {
    // mongo connect
    await client.connect();
    console.log("Connected correctly to server");
    // Use db name
    const db = client.db(dbName);
    // Use the collection name  "Sm"
    const col = db.collection("user");
    // Insert a single document, wait for promise so we can read it back
    const p = await col.insertOne(user);
    console.log("doc", p.insertedId);
    return p;
  } catch (err) {
    console.log(err);
    return err;
  } finally {
    await client.close();
  }
}


async function userFind(user){
  try{await client.connect();
    console.log("Connected correctly to server");
    // Use db name
    const db = client.db(dbName);
    // Use the collection name  "Sm"
    const col  = await db.collection("user").findOne({"email":user.email});
    // Insert a single document, wait for promise so we can read it back
   // const p = await col.find()
    return col

  }catch{(error)=>{
    console.log(error)
    return error
  }}
  
} 

module.exports = {
  insertData,
  inserUser,
  userFind
};
