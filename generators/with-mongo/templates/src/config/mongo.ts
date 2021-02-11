const host = process.env.MONGO_HOST ?? 'localhost';
const port = +(process.env.MONGO_PORT ?? '27017');
const user = process.env.MONGO_USER;
const password = process.env.MONGO_PASSWORD;
const dbName = process.env.MONGO_DB_NAME ?? '<%= elementName %>';

const config = {
  uri: `mongodb://${host}:${port}`,
  user,
  password,
  dbName,
};

export default config;
