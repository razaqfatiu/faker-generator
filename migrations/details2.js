require("dotenv").config
const envr = process.env.NODE_ENV || "development"
const knex = require("knex")(require("../knexfile")[envr])

exports.up = function (knex, Promise) {
    knex.schema.createTable('details2', (table) => {
            table.increments('id')
            table.string('town').notNullable()
            table.string('mobile_no').notNullable()
            table.string('occupation').notNullable()
            table.string('employment_details').notNullable()
            table.string('email').notNullable()
            table.string('state').notNullable()
            table.string('industry').notNullable()
            table.string('lga').notNullable()
            table.string('address').notNullable()
        }).then(() => console.log("details2 table created"))
        .catch((err) => {
            console.log(err);
            throw err
        })
    // .finally(() => {
    //     knex.destroy();
    // });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('details2')
};