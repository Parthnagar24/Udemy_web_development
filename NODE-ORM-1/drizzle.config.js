 const dotenv = require('dotenv')

const {defineConfig} = require('drizzle-kit')
dotenv.config()
const conig = defineConfig({
    dialect: "postgresql",
     out:"./drizzle",
     schema: "./drizzzle/schema.js",
     dbCredentials:{
        url: process.env.DATABASE_URL,
     }
})

module.exports =config