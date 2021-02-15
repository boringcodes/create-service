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
        message: 'Supported Node version?',
        default: 15,
      },
    ];

    const props = await this.prompt(prompts);

    this.props = {
      ...props,
      elementName: changeCase.paramCase(props.elementName),
      elementOrganizationName: changeCase.paramCase(
        props.elementOrganizationName,
      ),
    };
  }

  writing() {
    this.fs.copyTpl(
      [this.templatePath('**/*'), this.templatePath('**/.*')],
      this.destinationPath(),
      this.props,
    );

    this.fs.copy(
      this.destinationPath('.env.example'),
      this.destinationPath('.env'),
    );
  }

  install() {
    this.yarnInstall();
  }
};
