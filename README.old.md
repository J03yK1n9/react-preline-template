##     React app created at the root folder using:
    ~ npx create-react-app@latest . --template typescript

##     Installed tailwindcss via npm, and then ran the init command to generate the tailwind.config.js file:

    bash

    ~ npm install -D tailwindcss

##     Preline UI uses Tailwind CSS Forms plugin in all form components. Installing it before generating the configuration file, will include preline in the initial configuration, making it easier to start styling form elements right away.: 

    bash

    ~ npm install -D @tailwindcss/forms

##     Generated a Tailwind CSS configuration file by running:

    bash

    ~ npx tailwindcss init

##     Created a postcss.config.js file in the project directory with the following content:

            `module.exports = {
            plugins: [
            require('tailwindcss'),
            require('@tailwindcss/forms'),
            require('autoprefixer'),
            ]
        }`

##     Installed Preline UI

    bash

    ~ npm i preline

##     Configured Preline UI JavaScript paths by adding the path to Preline UI JavaScript files in your tailwind.config.js file.

    bash

    `// tailwind.config.js
     module.exports = {
          content: [
                  './node_modules/preline/preline.js',
            ],
            plugins: [
                require('preline/plugin'),
            ],
        }`

##     Add a reinitialization helper

### Add code that reinitializes the components every time when app is mounted or page was changed `projects_root_directory/src/App.tsx`

    bash
    
    `import { useEffect } from 'react';
    import { useLocation } from 'react-router-dom';

    import "preline/preline";
    import { IStaticMethods } from "preline/preline";
    declare global {
    interface Window {
        HSStaticMethods: IStaticMethods;
    }
    }

    ...

    function App() {
    const location = useLocation();

    useEffect(() => {
        window.HSStaticMethods.autoInit();
    }, [location.pathname]);

    return (
        ...
    );
    }

    export default App;`

##     Installed React Dom:
 
    bash

    ~ npm install react-dom

##     Installed React Router Dom:
 
    bash

    ~ npm install react-router-dom

##     Structured the app:

    bash

    ~ mkdir src/assets src/components src/containers src/queries src/shapes src/utils 
    ~ mkdir src/assets/fonts src/assets/img src/assets/styles src/containers/App src/containers/About src/containers/Contact src/containers/Home src/containers/Privacy src/containers/Terms src/containers/NotFound 
    ~ mkdir src/containers/App/tests src/containers/About/tests src/containers/Contact/tests src/containers/Home/tests src/containers/Privacy/tests src/containers/Terms/tests src/containers/NotFound/tests
    ~ touch src/index.js
    ~ touch src/containers/Home/index.js
    ~ touch src/containers/NotFound/index.js
    ~ touch src/containers/Privacy/index.js
    ~ touch src/containers/Terms/index.js
    ~ touch src/containers/About/index.js
    ~ touch src/containers/Contact/index.js

##     By default in typescript, the module resolution resolves the import using only the files with extension: .ts .tsx or .d.ts and this is the reason why in the previous case the module couldn't be found.To solve the problem:

###    added a directory called types on the project's root

###    created inside of that folder a file called index.d.ts with the following content

declare module "*"; //to include all files{I know not ideal but the patch works, working on a better way.}
declare module "*.jpg";
declare module "*.png";

N.B. the extension depends on the file type we are adding.

##    installed the file-loader dependence using npm, yarn or pnpm

    bash
    
    ~ npm install --save-dev file-loader


## /* ~~~~~~~~~~~~~~~~ Side note
In react-router-dom v6, "Switch" is replaced by routes "Routes". You need to update the import from

import { Switch, Route } from "react-router-dom";

to

import { Routes ,Route } from 'react-router-dom';

You also need to update the Route declaration from

<Route path="/" component={Home} />

to

<Route path='/' element={<Home/>} />

In react-router-dom, you also do not need to use the exact in the Route declaration.
## ~~~~~~~~~~~~~~~~~~ */


## installed webpack

    bash
    ~npm install webpack webpack-cli webpack-dev-server --save-dev

### Install necessary dependencies:

    Since the entry point for the React application is index.tsx instead of index.js, we'll need to install necessary dependacies and adjust the Webpack configuration to handle TypeScript files

    bash

    ~npm install --save-dev ts-loader


    note:~    "ts-loader": "^8.0.20", requires a compatible version
                use "typescript" a version compatible with the ts-loader, TypeScript 4.x

### Create a Webpack configuration file:

    Create a file named webpack.config.js in the root directory of your project.
    Configure Webpack in this file according to your project's requirements. Here's a basic example:


    // webpack.config.js

       `const path = require('path');

        module.exports = {
        entry: './src/index.tsx',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js',
        },
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'], // Add .ts and .tsx extensions
        },
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            port: 3000,
            open: true,
        },
        module: {
            rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/, // Update file extensions
                exclude: /node_modules/,
                use: {
                loader: 'ts-loader', // Use ts-loader for TypeScript files
                },
            },
            // Add more rules for handling other file types like CSS, images, etc.
            ],
        },
        };`


    Adjust the configuration as needed based on your project's setup and requirements.

## Update package.json scripts:

    Update the scripts section in your package.json file to include commands for running webpack:

       `json

        "scripts": {
        "start": "webpack serve --mode development",
        "build": "webpack --mode production"
        }`

## installed Babel

    bash
    ~npm install @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev

### Create a .babelrc file:

    Create a .babelrc file in the root directory of your project and configure Babel presets:

       `json

        {
        "presets": ["@babel/preset-env", "@babel/preset-react"]
        }`


## Install ESLint and Prettier: First, ensure you have ESLint and Prettier installed in your project. You can do this using npm or yarn:

    bash

    npm install --save-dev eslint prettier eslint-plugin-prettier eslint-config-prettier

    or

    bash

    yarn add --dev eslint prettier eslint-plugin-prettier eslint-config-prettier

### Create ESLint Configuration: Create an .eslintrc.json file in your project's root directory if you haven't already. Here's a basic configuration:

        json

       `{
        "extends": ["eslint:recommended", "plugin:react/recommended", "plugin:@typescript-eslint/recommended"],
        "plugins": ["prettier"],
        "rules": {
            "prettier/prettier": "error"
        },
        "parser": "@typescript-eslint/parser",
        "parserOptions": {
            "ecmaVersion": 2021,
            "sourceType": "module",
            "ecmaFeatures": {
            "jsx": true
            }
        },
        "settings": {
            "react": {
            "version": "detect"
            }
        }
        }`

### Create Prettier Configuration: Create a .prettierrc.json file in your project's root directory with your preferred Prettier configuration:

        json

       `{
        "semi": false,
        "singleQuote": true,
        "trailingComma": "es5",
        "tabWidth": 2,
        "printWidth": 80
        }`

### Configure Scripts: Add scripts to your package.json file to lint and format your code:

        json

       `"scripts": {
        "lint": "eslint .",
        "lint:fix": "eslint --fix .",
        "format": "prettier --write \"src/**/*.js\""
        }`

### Run Scripts: Now you can run npm run lint to check for linting errors, npm run lint:fix to fix them automatically, and npm run format to format your code using Prettier.


## install firebase
    bash

    npm install firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6O4T-LyYpYtRZVS8ZH2cX8XL-zN2ztC4",
  authDomain: "client-demosite.firebaseapp.com",
  databaseURL: "https://client-demosite.firebaseio.com",
  projectId: "client-demosite",
  storageBucket: "client-demosite.appspot.com",
  messagingSenderId: "634081204018",
  appId: "1:634081204018:web:2865e0068d8073657b292b",
  measurementId: "G-7XVL2VCH71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 Specify your site in firebase.json

Add your site ID to the firebase.json configuration file. After you get set up, see the best practices for multi-site deployment.
{

  "hosting": {

    "site": "demositety00235",

    "public": "public",

    ...

  }

}
When you're ready, deploy your web app

Put your static files (e.g., HTML, CSS, JS) in your app's deploy directory (the default is "public"). Then, run this command from your app's root directory:
firebase deploy --only hosting:demositety00235

After deploying, view your app at demositety00235.web.app