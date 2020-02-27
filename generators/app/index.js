const Generator = require('yeoman-generator');
const chalk = require("chalk");
const yosay = require("yosay");
const pkg = require('../../package.json');

module.exports = class extends Generator {
  async prompting() {
    this.log(
      yosay(
        `Welcome to the astounding ${chalk.red(pkg.name)} generator!`
      )
    );
    
    const prompts = [
      {
        type: "input",
        name: "elementName",
        message: "What is the name of your package?",
        default: "my-awesome-package"
      },
      {
        type: "input",
        name: "elementDescription",
        message: "Give us some small description of your package",
        default: ""
      },
      {
        type: "input",
        name: "elementAuthor",
        message: "Who is the author of this package?",
        default: ""
      },
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(
      [
        this.templatePath('**'),
      ],
      this.destinationPath(),
      this.props,
    );
  }

  install () {
    this.installDependencies();
  }
};
