const camelcase = require("camelcase").default;

/**
 * @param {import("plop").NodePlopAPI} plop
 */
module.exports = (plop) => {
  plop.setHelper("capitalize", (text) => {
    return camelcase(text, { pascalCase: true });
  });

  plop.setGenerator("component", {
    description: "Generates a component package",
    prompts: [
      {
        type: "input",
        name: "componentName",
        message: "Enter component name:",
      },
    ],
    actions(answers) {
      /** @type {import('plop').ActionType[]} */
      const actions = [];

      if (!answers) return actions;

      const { componentName } = answers;

      actions.push({
        type: "addMany",
        templateFiles: "plop/component/**",
        destination: `./packages/${componentName}`,
        base: "plop/component",
        data: { componentName },
        abortOnFail: true,
      });

      return actions;
    },
  });
};
