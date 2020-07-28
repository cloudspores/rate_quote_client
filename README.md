![alt text](https://github.com/cloudspores/rate_quote_client/blob/master/ScreenShot.png?raw=true)

## Description
Rate Quote application using React and Redux that allows a user to enter loan information and then display rate quotes retrieved from the OwnUp Service via a REST interface.
This application aims to provide quotes from multiple local lenders for the best rate for the customer.

The intial goal was to build a JS client API kit from the swagger spec file - please see the Rate-Quote-Client-SDK repository. There were some issues getting React to call out to the SDK library generated using swagger-codegen:
`swagger-codegen generate -i ./code-challenge.yaml -l javascript -o . --additional-properties usePromises=true,useES6=true`

The code as it stands does not use the code generated SDK. It is however a worthwhile pursuit, particularly for code robustness and testing. 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Configuration and Deployment
Manually add .env file into the newly created build folder:
- `touch .env` will create an empty `.env` file that you can then open in the nano editor using `nano .env`
- enter the following, replacing the first placeholder with your API key and the second with the endpoint. Save the file and exit out of the editor.
`REACT_APP_API_KEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`
`REACT_APP_AUTHORITY=xxxxxx://xxxxxxxxxxxxxxxxxx/xxxx/xxxxxx`

The build folder is now ready to be deployed.
You may serve it with a static server:

- `yarn global add serve`
- `serve -s build`

Find out more about deployment here:

 [bit.ly/CRA-deploy](bit.ly/CRA-deploy)
  
### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
