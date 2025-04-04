module.exports = function (plop) {
  plop.setGenerator("entity", {
    description: "Создание новой сущности в методологии FSD",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Введите имя сущности:",
      },
      {
        type: "list",
        name: "type",
        message: "Выберите тип сущности:",
        choices: ["features", "entities", "shared", "widgets", "pages"],
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/{{type}}/{{pascalCase name}}/index.ts",
        templateFile: "plop-templates/index.hbs",
      },
      {
        type: "add",
        path: "src/{{type}}/{{pascalCase name}}/ui/{{pascalCase name}}.tsx",
        templateFile: "plop-templates/ComponentName.hbs",
      },
      {
        type: "add",
        path: "src/{{type}}/{{pascalCase name}}/ui/{{pascalCase name}}.styles.ts",
        templateFile: "plop-templates/ComponentName.styles.hbs",
      },
      {
        type: "add",
        path: "src/{{type}}/{{pascalCase name}}/model/types.ts",
        templateFile: "plop-templates/types.hbs",
      },
      {
        type: "add",
        path: "src/{{type}}/{{pascalCase name}}/lib/helpers.ts",
        templateFile: "plop-templates/helpers.hbs",
      },
      {
        type: "add",
        path: "src/{{type}}/{{pascalCase name}}/api/index.ts",
        templateFile: "plop-templates/api.hbs",
      },
      {
        type: "add",
        path: "src/{{type}}/{{pascalCase name}}/config/index.ts",
        templateFile: "plop-templates/config.hbs",
      },
      {
        type: "add",
        path: "src/{{type}}/{{pascalCase name}}/model/constants.ts",
        templateFile: "plop-templates/constants.hbs",
      },
      {
        type: "add",
        path: "src/{{type}}/{{pascalCase name}}/model/selectors.ts",
        templateFile: "plop-templates/selectors.hbs",
      },
      {
        type: "add",
        path: "src/{{type}}/{{pascalCase name}}/tests/{{pascalCase name}}.test.tsx",
        templateFile: "plop-templates/test.hbs",
      },
      {
        type: "add",
        path: "src/{{type}}/{{pascalCase name}}/stories/{{pascalCase name}}.stories.tsx",
        templateFile: "plop-templates/story.hbs",
      },
    ],
  });
};
