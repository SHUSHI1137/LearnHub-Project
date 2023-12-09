# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


# Hands-on Exercise 10 : Front-end Project
### Background
At this point, you have learned the fundamentals of Front-end Development and have shown progress through each hands-on exercise provided. Now, it is time for a project to demonstrate your overall skills. In this Hands-on Exercise, you will get to a front-end site for example backend API using React and deploy the site to the internet using Netlify.

### Tasks
- Explore the example API documentation at https://api.learnhub.thanayut.in.th/docs. You may try using Swagger or Postman to experiment with each endpoint.
- Initialize a new React project using Vite and npm.
- Install the dependencies (ex. eslint, react-router-dom etc.) and start the development server to preview your React application.
- (Optional) Set up TailwindCSS or other CSS Frameworks for styling, depending on your preference.
- Implement the front-end site using the design provided. But please note that design doesn’t have to be the same as the demo. You can freely re-design in your own style.

#### Minimum Requirements
- Home page / Content page
- Authorization (Login, Logout)
- Users can create new content, edit, and delete their content

### EXTRA
- Register page
- Pagination
- Filter contents based on rating

You can play the demo at https://learnhub.thanayut.in.th/

### Resources
- Lecture Slides
- React Docs : https://beta.reactjs.org/learn
- Importing and Exporting Components : https://beta.reactjs.org/learn/importing-and-exporting-components
- Get started with Tailwind CSS : https://tailwindcss.com/docs/installation
- Emotion Introduction : https://emotion.sh/docs/introduction
- A Step-by-Step Guide: Deploying on Netlify with Git : https://docs.netlify.com/site-deploys/create-deploys/#deploy-with-git

### Additional Resources
- The following resources are optional. They are here if you want to explore more about the topic.
- Ant Design 5.0 - Help designers/developers building beautiful products more flexible and working with happiness : https://ant.design/
- MUI - The React component library you always wanted : https://mui.com/
- Mantine - A fully featured React components library : https://mantine.dev/
- Storybook: Frontend workshop for UI development : https://storybook.js.org/
