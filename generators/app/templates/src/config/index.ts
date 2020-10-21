const config = {
  host: process.env.HOST ?? 'localhost',
  port: +(process.env.PORT ?? '9000'),
};

export default config;
