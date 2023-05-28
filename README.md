# Lendsqr Frontend Engineer Test

## Quick note: When in mobile or tablet mode, you can use the avatar circle at the top navbar to dock and undocm the left side bar

## Table Of Content

### - Project Description
### - Project Installation and Running
### - Project Navigation and Features
### - Project Challenges and Analysis

## Project Description

This project is my submission for test given to me by Lendsqr prior to my application for the post of Frontend Engineer. I am to replicate a figma design which was given as well as integrate with an API for fetching list of users and user detail. I am also to do this using Typescript, SCSS and React whilst also making the site media responsive.

The project was initially done using actual urls but due to the nature of free host serving that was not going to work out well. So therefore the pages are being loaded using component state to store the url and also the user id (in the case of the UserDetils page).

I would take the oppurtunity to apologize for the lack of comments in my code, it was done in haste due to an unforeseen tight schedule last week which made me use only three days (starting on Friday) out of the seven given to build this. 

## Project Installation and Running

The React app project was built usig the create-react-app command

### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### Available Scripts

In the project directory, you can run:

##### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

##### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

##### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

##### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

##### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Project Navigation and Features

All resource files were stored in the `src` folder of the project. The TSX components: `Dashboard`, `LeftSideBar`, `Login`, `TopNav`, `UserDetails` and `Users` are stored in the `src\components` folder. The `src\styles` folder contains all the CSS files, all image files are in the `src\res` folder and all fonts are in the `src\fonts` folder.

### Login Page

The Login Page located at `http://localhost:3000` is without any form of authentication therefore clicking the login button would take you to the dashboard page. The show/hide password toggle is full functioning.

### Dashboard Users

This page provides a list of the subscribed users. The user list is gotten by fetching the data from [https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users](https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users)
- Clicking any of the table header to display the filte form which does not have any functionalities yet. 
- Clicking the `Reset` button, `Filter` button or any free part of the site would close this filter form. The filter form is not full functional, it currently only filters by user status; meaning anyther information in other inout fields do not affect the filtered result 
- Due to the unavailability of a status attribute/key in the users object sent throught the API, all - status values shown are randomly allocated to users 'onMount' of the `Users` component.
- Clicking the three dot icon at the right of each row would bring out the more options pop up which has the features of activating, blacklisting and viewing user details. These functions are fully functional and activation or blacklist shows real time updates to the table data and active user card above. 
- Clicking the table row can also be an alternative to view user details

### Dashboard User Details

This page shows the details of the user id which is sent parameter to the component using state. The user details are gotte by fetching the data from ['https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/:id']('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/:id').

The blacklist button and activate button are not functional since the effect would not take effect (the code gives each user a random status onMount therefore even though we change status of the user going back would simply re-distribute randome statuses again). This function would be easily implemented is the users object passed through the API contains a status attribute.

## Project Challenges

The object sent by API is quite incomplete and missing data of the users such as 'Marital Status', 'Children', 'Relationship', 'Status', 'Tier' and 'Bank Name'. Where this data was needed but unavailable, default data was used; such as the 'Information unavailable' texts that can be seen in the user details. In the case of the status, random values were allocated to each user.


