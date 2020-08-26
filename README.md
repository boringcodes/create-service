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

- [x] Express
- [x] [@boringcodes/backpack](https://github.com/boringcodes/backpack) (TypeScript, dotENV)
- [x] Prettier
- [x] TSLint (tslint-config-airbnb, tslint-immutable, tslint-sonarts)
- [x] Husky
- [x] NVM
- [x] Dockerfile

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
```

This scaffolds out:

```
├── src
│   ├── components
│   │   └── index.ts
│   ├── app.ts
│   ├── index.ts
├── .dockerignore
├── .env.example
├── .huskyrc
├── Dockerfile
├── package.json
└── tslint.json
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Authors

[BoringCodes](https://github.com/boringcodes)

## License

[MIT](https://github.com/boringcodes/create-service/blob/master/LICENSE)
