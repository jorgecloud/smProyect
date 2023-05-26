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

async function findBase(user){
  try{
    await client.connect()
    console.log("Connected correctly to server");
    const db = client.db(user.empresaName)
    console.log("conecta a la db")
    const col = db.collection("users").findOne({"email":user.email})
    console.log("user exist", col)
    return col




  } catch(err){
    console.log("no se encuentra la base ",err)

  } finally{
    await client.close()
  }
}


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
    const db = client.db(user.empresaName);
    // Use the collection name  "Sm"
    const col = db.collection("users");
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
    const db = client.db(user.empresaName);
    // Use the collection name  "Sm"
    const col  = await db.collection("users").findOne({"email":user.email});
    // Insert a single document, wait for promise so we can read it back
   // const p = await col.find()
    return col

  }catch{(error)=>{
    console.log("este es el error en db",error)
    return error
  }}
  
} 

async function messagesmodel (body){
  try{
    await client.connect()
    console.log("Connected correctly to server");
    const db = await client.db(body.empresaName)
    const col = await db.collection("messagesModel")
    console.log("col",col)

  }catch(err){
    console.log("err messagesModel",err)
  }

}

module.exports = {
  insertData,
  inserUser,
  userFind,
  findBase,
  messagesmodel
};
