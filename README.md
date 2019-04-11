Proceedures: 
1. npm install the dependencies
2. Create a .env file, then copy .env.sample parameters and paste it into the .env file, then edit. Note: Make sure you've created the db details explicitly
3. run knex migrate:latest command on the cli, for migration
4. run knex seed:run to insert dummy datas into the fields