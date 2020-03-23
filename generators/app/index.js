const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

const pkg = require('../../package.json');

module.exports = class extends Generator {
  async prompting() {
    this.log(
      yosay(`Welcome to the ${chalk.red(pkg.name)} generator!`),
    );

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
        default: this.appname,
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
        default: `https://github.com/${githubUsername}/${this.appname}`,
      },
      {
        type: 'input',
        name: 'elementBugs',
        message: 'Bugs tracker?',
        default: `https://github.com/${githubUsername}/${this.appname}/issues`,
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
        default: `https://github.com/${githubUsername}/${this.appname}.git`,
      },
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
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
