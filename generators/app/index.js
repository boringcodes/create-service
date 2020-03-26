const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const changeCase = require('change-case');

const pkg = require('../../package.json');

module.exports = class extends Generator {
  async prompting() {
    this.log(yosay(`Welcome to the ${chalk.red(pkg.name)} generator!`));

    const appName = changeCase.paramCase(this.appname);
    const gitName = this.user.git.name() || 'organization';
    const gitEmail = this.user.git.email() || 'hi@domain.com';
    const githubUsername = await (async () => {
      try {
        const username = await this.user.github.username();

        return username;
      } catch (err) {
        return gitName;
      }
    })();
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
        name: 'elementHomepage',
        message: 'Homepage?',
        default: `https://github.com/${githubUsername}/${appName}`,
      },
      {
        type: 'input',
        name: 'elementBugs',
        message: 'Bugs tracker?',
        default: `https://github.com/${githubUsername}/${appName}/issues`,
      },
      {
        type: 'input',
        name: 'elementAuthor',
        message: 'Author?',
        default: `${gitName} \<${gitEmail}\>`,
      },
      {
        type: 'input',
        name: 'elementRepository',
        message: 'Repository?',
        default: `https://github.com/${githubUsername}/${appName}.git`,
      },
      {
        type: 'input',
        name: 'elementNodeVersion',
        message: 'Supported Node version?',
        default: 12,
      },
      {
        type: 'confirm',
        name: 'elementGenerateNewComponent',
        message: 'Do you want to generate a new component?',
        default: true,
      },
    ];

    const props = await this.prompt(prompts);

    if (props.elementGenerateNewComponent) {
      this.composeWith(require.resolve('generator-create-service-component'));
    }

    this.props = props;
  }

  writing() {
    this.fs.copyTpl(
      [this.templatePath('**/*'), this.templatePath('**/.*')],
      this.destinationPath(),
      this.props,
    );
  }

  install() {
    this.yarnInstall();
  }
};
