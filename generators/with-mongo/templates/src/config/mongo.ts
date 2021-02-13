const host = process.env.MONGO_HOST ?? 'localhost';
const port = +(process.env.MONGO_PORT ?? '27017');
const dbName = process.env.MONGO_DB_NAME ?? '<%= elementName %>';
const user = process.env.MONGO_USER ?? '';
const password = process.env.MONGO_PASSWORD ?? '';

const config = {
  uri:
    user === '' || password === ''
      ? `mongodb://${host}:${port}/${dbName}`
      : `mongodb://${user}:${password}@${host}:${port}/${dbName}`,
};

export default config;
