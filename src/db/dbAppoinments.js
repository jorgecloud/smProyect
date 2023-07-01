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
