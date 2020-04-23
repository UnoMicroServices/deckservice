const express = require('express');
const router = express.Router();

const handler = require('../handlers/handler'); 

router.post('/deck', handler.insertANewCard);

router.post('/decks', handler.insertAListOfCards);

router.get('/deck', handler.getAllCards);

module.exports = router;