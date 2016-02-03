
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('pokedex').del(),

    // Inserts seed entries
    knex('pokedex').insert({name: 'Bulbasaur', entry: 1, firstType: 'Grass', secondType: 'Poison'}),
    knex('pokedex').insert({name: 'Ivysaur', entry: 2, firstType: 'Grass', secondType: 'Poison'}),
    knex('pokedex').insert({name: 'Venusaur', entry: 3, firstType: 'Grass', secondType: 'Poison'}),
    knex('pokedex').insert({name: 'Charmander', entry: 4, firstType: 'Fire', secondType: 'Fire'}),
    knex('pokedex').insert({name: 'Charmeleon', entry: 5, firstType: 'Fire', secondType: 'Fire'}),
    knex('pokedex').insert({name: 'Charizard', entry: 6, firstType: 'Fire', secondType: 'Flying'}),
    knex('pokedex').insert({name: 'Squirtle', entry: 7, firstType: 'Water', secondType: 'Water'}),
    knex('pokedex').insert({name: 'Wartortle', entry: 8, firstType: 'Water', secondType: 'Water'}),
    knex('pokedex').insert({name: 'Blastoise', entry: 9, firstType: 'Water', secondType: 'Water'})
  );
};
