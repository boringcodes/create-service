<div align="center">
  <h1>create-service</h1>
  <p>Boring Express Microservice Generator</p>

  <p>
    <a href="https://github.com/boringcodes/create-service/commits" aria-label="Commitizen Friendly">
      <img src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square">
    </a>
    <a href="https://github.com/boringcodes/create-service" aria-label="Prettier Code Style">
      <img src="https://img.shields.io/badge/code_style-prettier-brightgreen?style=flat-square">
    </a>
    <a href="https://github.com/boringcodes/create-service/actions" aria-label="Lint Status">
      <img src="https://img.shields.io/github/workflow/status/boringcodes/create-service/lint-source?style=flat-square&label=lint">
    </a>
    <a href="https://david-dm.org/boringcodes/create-service" aria-label="Dependencies Status">
      <img src="https://img.shields.io/david/boringcodes/create-service?style=flat-square">
    </a>
    <a href="https://www.npmjs.com/package/generator-create-service" aria-label="NPM Version">
      <img src="https://img.shields.io/npm/v/generator-create-service?color=brightgreen&style=flat-square">
    </a>
    <a href="https://www.npmjs.com/package/generator-create-service" aria-label="NPM Downloads">
      <img src="https://img.shields.io/npm/dm/generator-create-service?style=flat-square">
    </a>
    <a href="https://github.com/boringcodes/create-service/blob/master/LICENSE" aria-label="MIT License">
      <img src="https://img.shields.io/github/license/boringcodes/create-service?color=brightgreen&style=flat-square">
    </a>
    <a href="https://github.com/boringcodes" aria-label="BoringCodes Verified">
      <img src="https://img.shields.io/badge/boringcodes-verified-brightgreen?style=flat-square">
    </a>
  </p>

  <img src="banner.png">
</div>

## Features

Generated service includes the following features:

- [x] [Express.js](https://expressjs.com)
- [x] [MongoDB](https://mongodb.com) ODM using [Mongoose](https://mongoosejs.com)
- [x] [PostgreSQL](https://www.postgresql.org) ORM using [Sequelize](https://sequelize.org), [TypeORM](https://typeorm.io) or [Prisma](https://www.prisma.io)
- [x] Code structure inspired by [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices) & [Uncle Bob Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)

Other features:

- [x] [Webpack](https://webpack.js.org) with [Typescript](https://www.typescriptlang.org) using [@boringcodes/backpack](https://github.com/boringcodes/backpack)
- [x] [Prettier](https://prettier.io) using [@boringcodes/prettier-config](https://github.com/boringcodes/prettier-config)
- [x] [ESLint](https://eslint.org) using [@boringcodes/eslint-config-typescript](https://github.com/boringcodes/eslint-config-typescript)
- [x] [Husky](https://github.com/typicode/husky)
- [x] [Lint Staged](https://github.com/okonet/lint-staged)
- [x] [NVM](https://github.com/nvm-sh/nvm)
- [x] [Dockerfile](https://docker.com)
- [x] [Standard Version](https://github.com/conventional-changelog/standard-version)

## Install

Make sure `yeoman` is installed

```sh
$ yarn global add yo
```

Then install the generator

```sh
$ yarn global add generator-create-service
```

## Usage

Create a new directory

```sh
$ mkdir service-name
```

Then navigate to the created directory and run the following command to generate source

```sh
$ yo create-service

# or :with-mongo
$ yo create-service:with-mongo

# or :with-postgres-sequelize
$ yo create-service:with-postgres-sequelize

# or :with-postgres-typeorm
$ yo create-service:with-postgres-typeorm

# or :with-postgres-prisma
$ yo create-service:with-postgres-prisma
```

This scaffolds out:

```
├── .husky
├── src
│   ├── components
│   │   ├── index.ts
│   │   └── types.ts
│   ├── config
│   │   ├── index.ts
│   │   ├── mongo.ts        (:with-mongo)
│   │   └── postgres.ts     (:with-postgres-sequelize/:with-postgres-typeorm)
│   ├── db
│   │   ├── mongo.ts        (:with-mongo)
│   │   ├── postgres.prisma (:with-postgres-prisma)
│   │   └── postgres.ts     (:with-postgres-sequelize/:with-postgres-typeorm/:with-postgres-prisma)
│   ├── app.ts
│   └── index.ts
├── .dockerignore
├── .env.example
├── .gitignore
├── .nvmrc
├── Dockerfile
├── LICENSE
├── package.json
├── README.md
└── tsconfig.json
```

To generate service component with full `CRUD` functions, please use [@boringcodes/create-service-component](https://github.com/boringcodes/create-service-component)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Authors

[BoringCodes](https://github.com/boringcodes)

## License

[MIT](https://github.com/boringcodes/create-service/blob/master/LICENSE)
