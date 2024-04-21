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