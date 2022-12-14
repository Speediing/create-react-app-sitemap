# Create React App with Sitemaps

This directory is a brief example of a [Create React App](https://github.com/facebook/create-react-app) site with sitemap generation that can be deployed to Vercel with zero configuration.

There is a file called `sitemapbuilder.js` that runs after the build to generate a sitemap based on the React Router Configuration

## Deploy Your Own

Test out sitemap generation in Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Speediing/create-react-app-sitemap)

_Live Example: https://sitemapdemo.vercel.app/_

_Sitemap File: https://sitemapdemo.vercel.app/sitemap.xml_

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes. You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder with the sitemap generator.

It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.
