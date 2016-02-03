
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('pokedex', function(table) {
      table.increments('id');
      table.string('name', 40);
      table.integer('entry');
      table.string('firstType', 20);
      table.string('secondType', 20);
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
      knex.schema.dropTable('bookList')
  ]);
};
