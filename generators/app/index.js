const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

const pkg = require('../../package.json');

module.exports = class extends Generator {
  async prompting() {
    this.log(
      yosay(`Welcome to the astounding ${chalk.red(pkg.name)} generator!`),
    );

    const prompts = [
      {
        type: 'input',
        name: 'elementName',
        message: 'What is the name of your service?',
        default: 'my-awesome-service',
      },
      {
        type: 'input',
        name: 'elementDescription',
        message: 'Give us some small description of your service',
        default: '',
      },
      {
        type: 'input',
        name: 'elementAuthor',
        message: 'Who is the author of this service?',
        default: '',
      },
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(
      [this.templatePath('**')],
      this.destinationPath(),
      this.props,
    );

    this.fs.copyTpl(
      this.templatePath('.env.example'),
      this.destinationPath('.env.example'),
    );
  }

  install() {
    this.installDependencies();
  }
};
