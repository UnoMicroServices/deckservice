const repository = require("../repository/repository");

exports.getAllDecks = (req,res,next) => {
    repository.getAllDecks((err, cards) => {
        if(err) return next(err);
        res.json(cards);
    });
}

// exports.getCardById = (req,res,next) => {
//     repository.getCardByID((err, cards) => {
//         if(err) return next(err);
//         res.json(cards);
//     });
// }

exports.insertANewDeck = (req,res,next) => {
    let card = req.body;
    repository.insertANewDeck(card, (err, resp) => {
        if(err) return next(err);
        //res.status(201).set('Location', )
        res.json(resp);
    });
}

exports.insertAListOfDecks = (req,res,next) => {
    let cards = req.body;
    repository.insertAListOfDecks(cards, (err, resp) => {
        if(err) return next(err);
        //res.status(201).set('Location', )
        res.json(resp);
    });
}