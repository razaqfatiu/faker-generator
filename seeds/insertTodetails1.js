const faker = require("faker")

const details1 = [{
        title: faker.name.prefix(),
        last_name: faker.name.lastName(),
        first_name: faker.name.firstName(),
        middle_name: faker.name.findName(),
        alias: faker.name.prefix(),
        gender: faker.name.prefix(),
        age: faker.random.number(),
        address: faker.address.streetAddress(),
        mobile_no: faker.phone.phoneNumber("080########")
    },
    {
        title: faker.name.prefix(),
        last_name: faker.name.lastName(),
        first_name: faker.name.firstName(),
        middle_name: faker.name.findName(),
        alias: faker.name.prefix(),
        gender: faker.name.prefix(),
        age: faker.random.number(),
        address: faker.address.streetAddress(),
        mobile_no: faker.phone.phoneNumber("081########")
    },
    {
        title: faker.name.prefix(),
        last_name: faker.name.lastName(),
        first_name: faker.name.firstName(),
        middle_name: faker.name.findName(),
        alias: faker.name.prefix(),
        gender: faker.name.prefix(),
        age: faker.random.number(),
        address: faker.address.streetAddress(),
        mobile_no: faker.phone.phoneNumber("070########")
    },
    {
        title: faker.name.prefix(),
        last_name: faker.name.lastName(),
        first_name: faker.name.firstName(),
        middle_name: faker.name.findName(),
        alias: faker.name.prefix(),
        gender: faker.name.prefix(),
        age: faker.random.number(),
        address: faker.address.streetAddress(),
        mobile_no: faker.phone.phoneNumber("090########")
    },
    {
        title: faker.name.prefix(),
        last_name: faker.name.lastName(),
        first_name: faker.name.firstName(),
        middle_name: faker.name.findName(),
        alias: faker.name.prefix(),
        gender: faker.name.prefix(),
        age: faker.random.number(),
        address: faker.address.streetAddress(),
        mobile_no: faker.phone.phoneNumber("080########")
    },
    {
        title: faker.name.prefix(),
        last_name: faker.name.lastName(),
        first_name: faker.name.firstName(),
        middle_name: faker.name.findName(),
        alias: faker.name.prefix(),
        gender: faker.name.prefix(),
        age: faker.random.number(),
        address: faker.address.streetAddress(),
        mobile_no: faker.phone.phoneNumber("081########")
    },
    {
        title: faker.name.prefix(),
        last_name: faker.name.lastName(),
        first_name: faker.name.firstName(),
        middle_name: faker.name.findName(),
        alias: faker.name.prefix(),
        gender: faker.name.prefix(),
        age: faker.random.number(),
        address: faker.address.streetAddress(),
        mobile_no: faker.phone.phoneNumber("090########")
    },
    {
        title: faker.name.prefix(),
        last_name: faker.name.lastName(),
        first_name: faker.name.firstName(),
        middle_name: faker.name.findName(),
        alias: faker.name.prefix(),
        gender: faker.name.prefix(),
        age: faker.random.number(),
        address: faker.address.streetAddress(),
        mobile_no: faker.phone.phoneNumber("080########")
    },
    {
        title: faker.name.prefix(),
        last_name: faker.name.lastName(),
        first_name: faker.name.firstName(),
        middle_name: faker.name.findName(),
        alias: faker.name.prefix(),
        gender: faker.name.prefix(),
        age: faker.random.number(),
        address: faker.address.streetAddress(),
        mobile_no: faker.phone.phoneNumber("080########")
    },
    {
        title: faker.name.prefix(),
        last_name: faker.name.lastName(),
        first_name: faker.name.firstName(),
        middle_name: faker.name.findName(),
        alias: faker.name.prefix(),
        gender: faker.name.prefix(),
        age: faker.random.number(),
        address: faker.address.streetAddress(),
        mobile_no: faker.phone.phoneNumber("070########")
    },
    {
        title: faker.name.prefix(),
        last_name: faker.name.lastName(),
        first_name: faker.name.firstName(),
        middle_name: faker.name.findName(),
        alias: faker.name.prefix(),
        gender: faker.name.prefix(),
        age: faker.random.number(),
        address: faker.address.streetAddress(),
        mobile_no: faker.phone.phoneNumber("080########")
    },
]

exports.seed = (knex, Promise) => {
    // Deletes ALL existing entries
    return knex('details1').del()
        .then(() => knex('details1').insert(details1))
        .then(() => console.log("data inserted into details1"))
        .catch((err) => {
            console.log(err);
            throw err
        })
    // .finally(() => {
    //     knex.destroy();
    // });
}