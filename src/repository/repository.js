const mongodb = require("../config/mongodb");

function getAllCards(callback) {
    mongodb.connect((err,db) => {
        db.collection("decks").find().toArray(callback);
    });
}

function getCardByID(id, callback) {
    mongodb.connect((err, db) => {
        db.collection("decks").findOne({_id: require("mongodb").ObjectID(id)}, callback);
    });
}

function getDecksByIDs(ids, callback) {
    let parsedIds = ids.map(id => { return require("mongodb").ObjectID(id)});
    mongodb.connect((err, db) => {
        db.collection("Decks").find({_id: {$in: parsedIds}}).toArray(callback);
    });
}

function insertANewCard(card, callback) {
    mongodb.connect((err,db) => {
        db.collection("Decks").insertOne(card,callback);
    }); 
}

function insertAListOfDecks(cards, callback) {
    mongodb.connect((err, db) => {
        db.collection("cards").insertMany(cards, callback);
    });
}

module.exports = { getAllCards, getCardByID, getCardsByIDs, insertANewCard, insertAListOfCards }