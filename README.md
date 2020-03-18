<div align="center">
  <h1>create-service</h1>
  <p>Boring Express Microservice Generator</p>
  
  <div>
    <a href="https://github.com/boringcodes/create-service/commits" aria-label="Commitizen Friendly">
      <img src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square">
    </a>
    <a href="https://github.com/boringcodes/create-service/actions" aria-label="GitHub Workflow Status">
      <img src="https://img.shields.io/github/workflow/status/boringcodes/create-service/publish-npm?style=flat-square">
    </a>
    <a href="https://david-dm.org/boringcodes/create-service" aria-label="Dependencies Status">
      <img src="https://img.shields.io/david/boringcodes/create-service?style=flat-square">
    </a>
    <a href="https://www.npmjs.com/package/@boringcodes/create-service" aria-label="NPM Version">
      <img src="https://img.shields.io/npm/v/@boringcodes/create-service?color=brightgreen&style=flat-square">
    </a>
    <a href="https://www.npmjs.com/package/@boringcodes/create-service" aria-label="NPM Downloads">
      <img src="https://img.shields.io/npm/dm/@boringcodes/create-service?style=flat-square">
    </a>
    <a href="https://github.com/boringcodes/create-service/blob/master/LICENSE" aria-label="MIT License">
      <img src="https://img.shields.io/github/license/boringcodes/create-service?color=brightgreen&style=flat-square">
    </a>
    <a href="https://github.com/boringcodes" aria-label="BoringCodes Verified">
      <img src="https://img.shields.io/badge/boringcodes-verified-brightgreen?style=flat-square">
    </a>
  </div>
</div>

## Install

Make sure `yeoman` is installed:

```sh
$ yarn global add yo
```

Then install the generator

```sh
$ yarn global add @boringcodes/create-service
```

## Usage

With [yo](https://github.com/yeoman/yo):

```sh
$ yo create-service
```

This scaffolds out:
```
├── Dockerfile
├── README.md
├── package.json
└── src
    ├── app.ts
    ├── components
    │   ├── things
    │   │   ├── constants.ts
    │   │   ├── controller.ts
    │   │   ├── index.ts
    │   │   ├── middleware.ts
    │   │   ├── model.ts
    │   │   ├── repository.ts
    │   │   └── type.ts
    │   └── types.ts
    ├── index.ts
    └── routes.ts
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Authors

[BoringCodes](https://github.com/boringcodes)

## License

[MIT](https://github.com/boringcodes/create-service/blob/master/LICENSE)
