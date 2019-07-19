## Project Motivation
This project contains the source code for my personal website, which is intended to function as a hosting space for my personal projects, as well as a resume/code example repository. This project is written in React, using the latest coding and design patterns. This project only contains the frontend for the website; the backend is housed under the 'site-backend' repository.

## Project Organization
This project is organized using a variant of the component folders pattern. All components are housed in a directory with the same name (i.e. route-animator for the RouteAnimator component). This directory also contains any tests and styles related to this component. This structure makes it easy to find everything related to specific components.

Some component folders are nested inside of other component folders. This is done when the component is only used in the context of the other component, and never separately. These components are not intended to be reusable, and only exist for code organization purposes. For example, the individual pages of the site are housed in folders under the App directory.

All other components are housed under the "component" directory.

Most components have a brief description at the top of their javascript file, describing their overall function, and detailing any quirks that may be relevant.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

