const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const changeCase = require('change-case');

const pkg = require('../../package.json');

module.exports = class extends Generator {
  async prompting() {
    this.log(yosay(`Welcome to the ${chalk.red(pkg.name)} generator!`));

    const appName = changeCase.paramCase(this.appname);
    const organizationName = await (async () => {
      try {
        const username = await this.user.github.username();

        return username;
      } catch (err) {
        return 'organization-name';
      }
    })();
    const gitName = this.user.git.name() || organizationName;
    const gitEmail =
      this.user.git.email() || `my-email@${organizationName}.com`;
    const prompts = [
      {
        type: 'input',
        name: 'elementName',
        message: 'Name of this service?',
        default: appName,
      },
      {
        type: 'input',
        name: 'elementDescription',
        message: 'Description?',
        default: 'My awesome service',
      },
      {
        type: 'input',
        name: 'elementOrganizationName',
        message: 'GitHub organization name?',
        default: organizationName,
      },
      {
        type: 'input',
        name: 'elementAuthor',
        message: 'Author?',
        default: `${gitName} <${gitEmail}>`,
      },
      {
        type: 'input',
        name: 'elementNodeVersion',
        message: 'Node version?',
        default: 15,
      },
      {
        type: 'list',
        name: 'elementPM',
        message: 'Package manager?',
        choices: [
          { name: 'Yarn', value: 'yarn' },
          { name: 'NPM', value: 'npm' },
        ],
        default: 0,
      },
    ];

    const { elementPM, ...restProps } = await this.prompt(prompts);

    this.env.options.nodePackageManager = elementPM;

    this.props = {
      ...restProps,
      elementName: changeCase.paramCase(restProps.elementName),
      elementOrganizationName: changeCase.paramCase(
        restProps.elementOrganizationName,
      ),
    };
  }

  writing() {
    this.fs.copyTpl(
      [
        this.templatePath('**/*'),
        this.templatePath('**/.*'),
        this.templatePath('**/.husky/*'),
        this.templatePath('**/.husky/.*'),
      ],
      this.destinationPath(),
      this.props,
    );

    this.fs.copy(
      this.destinationPath('.env.example'),
      this.destinationPath('.env'),
    );
  }
};
