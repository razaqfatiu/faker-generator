const faker = require("faker")

const details2 = [{
        town: faker.address.city(),
        mobile_no: faker.phone.phoneNumber("080########"),
        occupation: faker.name.jobType(),
        employment_details: faker.name.jobTitle(),
        email: faker.internet.email(),
        state: faker.address.state(),
        industry: faker.company.companyName(),
        lga: faker.address.zipCode(),
        address: faker.address.streetAddress()
    },
    {
        town: faker.address.city(),
        mobile_no: faker.phone.phoneNumber("080########"),
        occupation: faker.name.jobType(),
        employment_details: faker.name.jobTitle(),
        email: faker.internet.email(),
        state: faker.address.state(),
        industry: faker.company.companyName(),
        lga: faker.address.zipCode(),
        address: faker.address.streetAddress()
    },
    {
        town: faker.address.city(),
        mobile_no: faker.phone.phoneNumber("070########"),
        occupation: faker.name.jobType(),
        employment_details: faker.name.jobTitle(),
        email: faker.internet.email(),
        state: faker.address.state(),
        industry: faker.company.companyName(),
        lga: faker.address.zipCode(),
        address: faker.address.streetAddress()
    },
    {
        town: faker.address.city(),
        mobile_no: faker.phone.phoneNumber("080########"),
        occupation: faker.name.jobType(),
        employment_details: faker.name.jobTitle(),
        email: faker.internet.email(),
        state: faker.address.state(),
        industry: faker.company.companyName(),
        lga: faker.address.zipCode(),
        address: faker.address.streetAddress()
    },
    {
        town: faker.address.city(),
        mobile_no: faker.phone.phoneNumber("081########"),
        occupation: faker.name.jobType(),
        employment_details: faker.name.jobTitle(),
        email: faker.internet.email(),
        state: faker.address.state(),
        industry: faker.company.companyName(),
        lga: faker.address.zipCode(),
        address: faker.address.streetAddress()
    },
    {
        town: faker.address.city(),
        mobile_no: faker.phone.phoneNumber("090########"),
        occupation: faker.name.jobType(),
        employment_details: faker.name.jobTitle(),
        email: faker.internet.email(),
        state: faker.address.state(),
        industry: faker.company.companyName(),
        lga: faker.address.zipCode(),
        address: faker.address.streetAddress()
    },
    {
        town: faker.address.city(),
        mobile_no: faker.phone.phoneNumber("080########"),
        occupation: faker.name.jobType(),
        employment_details: faker.name.jobTitle(),
        email: faker.internet.email(),
        state: faker.address.state(),
        industry: faker.company.companyName(),
        lga: faker.address.zipCode(),
        address: faker.address.streetAddress()
    },
    {
        town: faker.address.city(),
        mobile_no: faker.phone.phoneNumber("080########"),
        occupation: faker.name.jobType(),
        employment_details: faker.name.jobTitle(),
        email: faker.internet.email(),
        state: faker.address.state(),
        industry: faker.company.companyName(),
        lga: faker.address.zipCode(),
        address: faker.address.streetAddress()
    },
    {
        town: faker.address.city(),
        mobile_no: faker.phone.phoneNumber("070########"),
        occupation: faker.name.jobType(),
        employment_details: faker.name.jobTitle(),
        email: faker.internet.email(),
        state: faker.address.state(),
        industry: faker.company.companyName(),
        lga: faker.address.zipCode(),
        address: faker.address.streetAddress()
    },
    {
        town: faker.address.city(),
        mobile_no: faker.phone.phoneNumber("081########"),
        occupation: faker.name.jobType(),
        employment_details: faker.name.jobTitle(),
        email: faker.internet.email(),
        state: faker.address.state(),
        industry: faker.company.companyName(),
        lga: faker.address.zipCode(),
        address: faker.address.streetAddress()
    },
    {
        town: faker.address.city(),
        mobile_no: faker.phone.phoneNumber("090########"),
        occupation: faker.name.jobType(),
        employment_details: faker.name.jobTitle(),
        email: faker.internet.email(),
        state: faker.address.state(),
        industry: faker.company.companyName(),
        lga: faker.address.zipCode(),
        address: faker.address.streetAddress()
    },
]


exports.seed = (knex, Promise) => {
    return knex("details2").del()
        .then(() => knex('details2').insert(details2))
        .then(() => console.log("data inserted into details2"))
        .catch((err) => {
            console.log(err);
            throw err
        })
    // .finally(() => {
    //     knex.destroy();
    // });
}