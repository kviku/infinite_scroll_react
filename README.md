# How to used the application
As you scroll down the page, more items will be loaded automatically in batches of 10.
Click the "View Details" button on any item to view more details in a modal.
Click the "Close" button in the modal to close it.
# How to call Api.
Fetch api by using axios libraries.
We import the necessary dependencies: React, useState, useEffect, and axios.
We create a functional component called App.
Inside the useEffect hook, we make an asynchronous request to the JSONPlaceholder API with the specified query parameters.
When the data is fetched successfully, we update the data state with the fetched data and set loading to false.
In the component's return, we conditionally render a loading message while the data is being fetched and display the fetched data as a list of posts when it's available.

# How to do scroll.
We introduce a page state variable to keep track of the current page number.
We add a fetching state variable to indicate when new data is being fetched.
The fetchData function now uses the page state to fetch the next page of data when called.
We add an event listener for the scroll event, and when the user scrolls to the bottom of the page, the fetchData function is called to load the next page of items.
While fetching new data, a "Loading..." message is displayed.
The fetched data is appended to the existing data array to maintain the previous items.
With these modifications, your React application will implement infinite scrolling, loading 10 items at a time, and displaying a loading spinner while fetching data.
# When user click on items to view more details
We need to install "react-modal" library
Each item in the list now has a "View Details" button that triggers the openModal function when clicked. This function sets the selectedItem state with the item data.
We conditionally render the modal using isOpen={!!selectedItem}. When an item is selected, the modal is displayed with additional details, and it can be closed using a "Close" button.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
By using netilfy

The page will reload when you make changes.\
You may also see any lint errors in the console.
yes error will be show because same id repeated 

# Deployment link:
https://650c325a0a9f9d1f163a2aa3--glittering-croissant-bdcbe8.netlify.app/

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
