const mongodb = require("../config/mongodb");

function getAllDecks(callback) {
    mongodb.connect((err,db) => {
        db.collection("decks").find().toArray(callback);
    });
}

function getDeckByID(id, callback) {
    mongodb.connect((err, db) => {
        db.collection("decks").findOne({_id: require("mongodb").ObjectID(id)}, callback);
    });
}

function getDecksByIDs(ids, callback) {
    let parsedIds = ids.map(id => { return require("mongodb").ObjectID(id)});
    mongodb.connect((err, db) => {
        db.collection("decks").find({_id: {$in: parsedIds}}).toArray(callback);
    });
}

function insertANewDeck(deck, callback) {
    mongodb.connect((err,db) => {
        db.collection("decks").insertOne(deck,callback);
    }); 
}

function insertAListOfDecks(decks, callback) {
    mongodb.connect((err, db) => {
        db.collection("decks").insertMany(decks, callback);
    });
}

module.exports = { getAllDecks, getDeckByID, getDecksByIDs, insertANewDeck, insertAListOfDecks }