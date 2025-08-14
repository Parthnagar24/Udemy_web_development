const  {pgTable, integer, varchar} =require('drizzle-orm/pg-core')

const userTable = pgTable('users', {
    id:integer().primaryKey(),
    name: varchar({lenght : 255}).notNull(),
    email: varchar({lenght:255}).notNull().unique(),
  
})

module.exports ={
    usersTable,
}