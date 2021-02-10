# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.12.0](https://github.com/boringcodes/create-service/compare/v1.11.3...v1.12.0) (2021-02-10)

### [1.11.3](https://github.com/boringcodes/create-service/compare/v1.11.2...v1.11.3) (2021-02-10)

### [1.11.2](https://github.com/boringcodes/create-service/compare/v1.11.1...v1.11.2) (2021-02-10)

### Features

- **lint-staged:** update glob pattern to ignore /templates dir ([657c381](https://github.com/boringcodes/create-service/commit/657c3812bc68032dd783233c2ad73c1888180588))

### [1.11.1](https://github.com/boringcodes/create-service/compare/v1.11.0...v1.11.1) (2021-01-11)

## [1.11.0](https://github.com/boringcodes/create-service/compare/v1.10.0...v1.11.0) (2021-01-11)

### Features

- **generators:** update writing() to copy .env.example .env file ([bda8bec](https://github.com/boringcodes/create-service/commit/bda8becfe89a8798ad3ea24d8a74b681784fa5b6))
- **templates:** move src/config.ts to src/config/index.ts ([e4406a0](https://github.com/boringcodes/create-service/commit/e4406a095a3d186783e00afc7fcc11452b656a03))
- **templates:** refactor index.ts app.listen callback as it's changed ([dd9dc66](https://github.com/boringcodes/create-service/commit/dd9dc6682e76c6887db5242d3e04aeb0f0b2033f))
- **templates:** set all packages version to \* in order to install the latest ([c7b0bcc](https://github.com/boringcodes/create-service/commit/c7b0bcc8a220a16ae4b37a4a970245bcf972add9))

## [1.10.0](https://github.com/boringcodes/create-service/compare/v1.9.0...v1.10.0) (2020-08-26)

### Features

- **templates:** add config file that contains all env vars ([b686dfb](https://github.com/boringcodes/create-service/commit/b686dfbb57a301a9ce27f447db8a5266ab831273))

## [1.9.0](https://github.com/boringcodes/create-service/compare/v1.8.1...v1.9.0) (2020-08-26)

### Features

- **templates:** move app.use(health()) to above bodyParser to imrpove performance of health check api ([6687015](https://github.com/boringcodes/create-service/commit/668701513dd50cbcc553d83bf2fb070cedf91acc))
- **templates:** move routes.ts to components/index.ts, export components path '/' along with routes, rename Routes interface to RouteOptions ([68e2271](https://github.com/boringcodes/create-service/commit/68e227121e7f4616d450d01074d268a9aaf49f35))

### Bug Fixes

- **templates:** update error type to MyError to fix wrong error type problem ([42b2f71](https://github.com/boringcodes/create-service/commit/42b2f71a4df421492859e8587f78bbfb80e0ac38))

### [1.8.1](https://github.com/boringcodes/create-service/compare/v1.8.0...v1.8.1) (2020-08-26)

### Bug Fixes

- **templates:** add source-map-support to deps to fix problem running on production env without devDeps ([eccfc5b](https://github.com/boringcodes/create-service/commit/eccfc5b3058bcb54320f3c7e91a3517dd264149c))

## [1.8.0](https://github.com/boringcodes/create-service/compare/v1.7.0...v1.8.0) (2020-04-24)

### Features

- **template:** remove unused .prettierignore ([ccda598](https://github.com/boringcodes/create-service/commit/ccda59860aa2e4cd7f7463c3576fc38c86273b61))

### Bug Fixes

- **deps:** mistaken putting change-case to devDeps ([12ca8d9](https://github.com/boringcodes/create-service/commit/12ca8d9dfa89c3096c9f6a20a1496c316cb451c0))

## [1.7.0](https://github.com/boringcodes/create-service/compare/v1.6.0...v1.7.0) (2020-03-28)

### Features

- **template:** replace pretty-quick with lint-staged, add tsconfig.json, fix eslint errors on index file ([301336b](https://github.com/boringcodes/create-service/commit/301336bdb3f278f0ea693331bc8fc8cfeca66c49))

## [1.6.0](https://github.com/boringcodes/create-service/compare/v1.5.0...v1.6.0) (2020-03-28)

### Features

- **template:** migrate tslint to eslint using [@typescript-eslint](https://github.com/typescript-eslint) & @boringcodes/eslint-config-typescript ([5477b03](https://github.com/boringcodes/create-service/commit/5477b03d3b291e5b1b738bf1c5099eb085cc552f))

## [1.5.0](https://github.com/boringcodes/create-service/compare/v1.4.0...v1.5.0) (2020-03-26)

### Features

- **generator:** remove new component generation question ([90428a9](https://github.com/boringcodes/create-service/commit/90428a9930c9c881c705a2666be9a66bb9576aa1))

## [1.4.0](https://github.com/boringcodes/create-service/compare/v1.3.2...v1.4.0) (2020-03-26)

### Features

- **generator:** reduce questions to 6 by asking org instead of homepage, bugs & repository urls ([a2dc47c](https://github.com/boringcodes/create-service/commit/a2dc47c1a77eb18cc5bd8000dbecca4db31240ca))
- **template:** update package.json engines node to use exactly input node verion ([92bf472](https://github.com/boringcodes/create-service/commit/92bf472f243f5cddb75e85f48d6ed8022a426b15))

### [1.3.2](https://github.com/boringcodes/create-service/compare/v1.3.1...v1.3.2) (2020-03-26)

### Features

- **generator:** add change-case to paramCase the input appname ([f34ddac](https://github.com/boringcodes/create-service/commit/f34ddacb73ee2714659427d8c18fa2be7955fac2))

### [1.3.1](https://github.com/boringcodes/create-service/compare/v1.3.0...v1.3.1) (2020-03-26)

### Features

- **template:** update tslint.json to exclude build instead of dist ([858b5c0](https://github.com/boringcodes/create-service/commit/858b5c0954307d5d69dd0fc8183043c54b79e92d))

## [1.3.0](https://github.com/boringcodes/create-service/compare/v1.2.0...v1.3.0) (2020-03-25)

### Features

- **package:** add prettier & husky ([5b585e7](https://github.com/boringcodes/create-service/commit/5b585e7de587d76092cf34ce76f998551dfb6d68))
- **template:** add prettier & husky ([22b3f37](https://github.com/boringcodes/create-service/commit/22b3f379ac6cd38539fc47bbecf4fd26e0fc15bb))

## [1.2.0](https://github.com/boringcodes/create-service/compare/v1.1.1...v1.2.0) (2020-03-23)

### Features

- **close #11:** integrate @boringcodes/create-service-component ([#12](https://github.com/boringcodes/create-service/issues/12)) ([cae819a](https://github.com/boringcodes/create-service/commit/cae819a318ac735b8deb15a99fa25806f52f064d)), closes [#11](https://github.com/boringcodes/create-service/issues/11)
- **close #13:** support nvm ([#14](https://github.com/boringcodes/create-service/issues/14)) ([92be34b](https://github.com/boringcodes/create-service/commit/92be34bc899039a2abf4fcef6f73139874b0de97)), closes [#13](https://github.com/boringcodes/create-service/issues/13)

### [1.1.1](https://github.com/boringcodes/create-service/compare/v1.1.0...v1.1.1) (2020-03-23)

## [1.1.0](https://github.com/boringcodes/create-service/compare/v1.0.1...v1.1.0) (2020-03-23)

### Features

- **close #7:** add package.json engines node information ([#8](https://github.com/boringcodes/create-service/issues/8)) ([18a31d5](https://github.com/boringcodes/create-service/commit/18a31d5b45aa697f58c1586ae2fdad63d6f9f344)), closes [#7](https://github.com/boringcodes/create-service/issues/7)
- **close #9:** Dockerfile & .dockerignore supports ([#10](https://github.com/boringcodes/create-service/issues/10)) ([93af323](https://github.com/boringcodes/create-service/commit/93af32392c49c3d625022058f8dad1da50c88622)), closes [#9](https://github.com/boringcodes/create-service/issues/9)

### [1.0.1](https://github.com/boringcodes/create-service/compare/v1.0.0...v1.0.1) (2020-03-23)

## [1.0.0](https://github.com/boringcodes/create-service/compare/v0.1.1...v1.0.0) (2020-03-22)

### [0.1.1](https://github.com/boringcodes/create-service/compare/v0.1.0...v0.1.1) (2020-03-21)

### Features

- **template:** update source as @boringcodes/utils updated, replace ts type with interface & pretifier some files ([9388983](https://github.com/boringcodes/create-service/commit/93889834c7c192cfb0cc030ff6940d081543f93c))

## 0.1.0 (2020-03-18)

### Features

- **Close #1:** Init source ([#2](https://github.com/boringcodes/create-service/issues/2)) ([5858a6e](https://github.com/boringcodes/create-service/commit/5858a6e3d4ffdceafb2990c843e4cc92447dbddb)), closes [#1](https://github.com/boringcodes/create-service/issues/1) [#1](https://github.com/boringcodes/create-service/issues/1) [#1](https://github.com/boringcodes/create-service/issues/1) [#1](https://github.com/boringcodes/create-service/issues/1) [#1](https://github.com/boringcodes/create-service/issues/1) [#1](https://github.com/boringcodes/create-service/issues/1)
- **closes #3:** integrate github actions ci ([#4](https://github.com/boringcodes/create-service/issues/4)) ([05478f2](https://github.com/boringcodes/create-service/commit/05478f2ca0b2ecc61e1a19387540211afda3ee9b)), closes [#3](https://github.com/boringcodes/create-service/issues/3)
