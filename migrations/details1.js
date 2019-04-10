require("dotenv").config
const envr = process.env.NODE_ENV || "development"
const knex = require("knex")(require("../knexfile")[envr])

exports.up = function (knex, Promise) {
  return knex.schema.createTable('details1', (table) => {
      table.increments('id')
      table.string('title').notNullable()
      table.string('last_name').notNullable()
      table.string('first_name').notNullable()
      table.string('middle_name').notNullable()
      table.string('alias').notNullable()
      table.string('gender').notNullable()
      table.integer('age').notNullable()
      table.string('address').notNullable()
      table.string('mobile_no').notNullable()
    }).then(() => console.log("details1 table created"))
    .catch((err) => {
      console.log(err);
      throw err
    })
  // .finally(() => {
  //   knex.destroy();
  // });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("details1")
};