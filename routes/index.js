var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

function pokedex() {
  return knex('pokedex');
}
/* GET home page. */
router.get('/', function(req, res, next) {
  pokedex().select()
  .then(function(pokemon) {
    console.log(pokemon);
    res.json(pokemon);
  });
});

module.exports = router;
