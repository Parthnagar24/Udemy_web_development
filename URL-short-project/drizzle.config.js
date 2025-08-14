import 'dotenv/config';

export default {
  schema: "./models/index.js",
  out: "./drizzle",
  dialect: "postgresql", // ✅ new required field
  dbCredentials: {
    url: process.env.DATABASE_URL // ✅ using env variable
  }
};
