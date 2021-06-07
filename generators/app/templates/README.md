<div align="center">
  <h1><%= elementName %></h1>
  <p><%= elementDescription %>e</p>

  <div>
    <a href="https://github.com/<%= elementOrganizationName %>/<%= elementName %>/commits" aria-label="Commitizen Friendly">
      <img src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square">
    </a>
    <a href="https://github.com/<%= elementOrganizationName %>/<%= elementName %>" aria-label="Prettier Code Style">
      <img src="https://img.shields.io/badge/code_style-prettier-brightgreen?style=flat-square">
    </a>
    <a href="https://github.com/<%= elementOrganizationName %>/<%= elementName %>/actions" aria-label="Lint Status">
      <img src="https://img.shields.io/github/workflow/status/<%= elementOrganizationName %>/<%= elementName %>/lint-source?style=flat-square&label=lint">
    </a>
    <a href="https://github.com/<%= elementOrganizationName %>/<%= elementName %>/actions" aria-label="Build Status">
      <img src="https://img.shields.io/github/workflow/status/<%= elementOrganizationName %>/<%= elementName %>/build-source?style=flat-square">
    </a>
    <a href="https://david-dm.org/<%= elementOrganizationName %>/<%= elementName %>" aria-label="Dependencies Status">
      <img src="https://img.shields.io/david/<%= elementOrganizationName %>/<%= elementName %>?style=flat-square">
    </a>
    <a href="https://github.com/<%= elementOrganizationName %>/<%= elementName %>/blob/master/LICENSE" aria-label="MIT License">
      <img src="https://img.shields.io/github/license/<%= elementOrganizationName %>/<%= elementName %>?color=brightgreen&style=flat-square">
    </a>
    <a href="https://github.com/boringcodes" aria-label="BoringCodes Verified">
      <img src="https://img.shields.io/badge/boringcodes-verified-brightgreen?style=flat-square">
    </a>
  </div>
</div>

## Installation

Use the package manager to install `<%= elementName %>`

```bash
yarn add <%= elementName %>
```

## Usage

```javascript
import foo from '<%= elementName %>';

foo();
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Authors

<%- elementAuthor %>

## License

[MIT](https://github.com/<%= elementOrganizationName %>/<%= elementName %>/blob/master/LICENSE)
