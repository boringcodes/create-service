const host = process.env.POSTGRES_HOST ?? 'localhost';
const port = +(process.env.POSTGRES_PORT ?? '5432');
const dbName = process.env.POSTGRES_DB_NAME ?? '<%= elementName %>';
const user = process.env.POSTGRES_USER ?? '';
const password = process.env.POSTGRES_PASSWORD ?? '';

const config = {
  uri:
    user === '' || password === ''
      ? `postgres://${host}:${port}/${dbName}`
      : `postgres://${user}:${password}@${host}:${port}/${dbName}`,
};

export default config;
