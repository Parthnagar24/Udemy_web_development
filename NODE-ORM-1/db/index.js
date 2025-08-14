const  { drizzle } = require('drizzle-orm/node-postgres')

// postgress://<username>:<password>@<host>:<port>/<db_name>
console.log('DB URl',process.env.DATABASE_URL);

const dv =drizzle("process.env.DATABASE_URL")

module.export =db

