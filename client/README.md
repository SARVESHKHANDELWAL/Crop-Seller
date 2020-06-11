This project was bootstrapped with [Create React App]

## Crop-Seller
This project was bootstrapped with Create React App.
Create React App is divided into two packages:

create-react-app is a global command-line utility that you use to create new projects.
react-scripts is a development dependency in the generated projects (including this one).
You almost never need to update create-react-app itself: it delegates all the setup to react-scripts.

When you run create-react-app, it always creates the project with the latest version of react-scripts so you’ll get all the new features and improvements in newly created apps automatically.

To update an existing project to a new version of react-scripts, open the changelog, find the version you’re currently on (check package.json in this folder if you’re not sure), and apply the migration instructions for the newer versions.

In most cases bumping the react-scripts version in package.json and running npm install in this folder should be enough, but it’s good to consult the changelog for potential breaking changes.

We commit to keeping the breaking changes minimal so you can upgrade react-scripts painlessly.

Sending Feedback
We are always open to your feedback.

## Folder Structure
After creation, your project should look like this:

## Code Style
1.Proper folder struture has been maintained 
client
config
models
node_modules
routes\api
validation
 gitignore
 package-lock.json
 package.json
 
 
For the project to build, these files must exist with exact filenames:

public/index.html is the page template;
src/index.js is the JavaScript entry point.
You can delete or rename the other files.

You may create subdirectories inside src. For faster rebuilds, only files inside src are processed by Webpack.
You need to put any JS and CSS files inside src, otherwise Webpack won’t see them.

Only files inside public can be used from public/index.html.
## Read instructions below for using assets from JavaScript and HTML.
## Features
* Crop-Seller
A website were the farmer can easily sell his crop to the end user.
* Authentication
  * Secure Authentication features implemented with jwt-token.
  * No two usernames can be same.
  * One user login no need to again for login to website till 24hours.
 
* Additional features
  * Well sanitized code base and easy to maintain
  * All RESTful routes followed and proper routes maintained.
  * Responsive website, suitable for desktop and mobile use. 
## Installation
It is very easy to use if anyone wamts.Just follow the steps.
1. Firstly if you are working locally then you need to install the following:
  * Node.js
  * MongoDB
  * VS Code {Recommended,Any other suitable code editor will work.}
2. Next you need to clone the project's GitHub repository to your desktop.

3. Open command line navigate to the project folder. Then type the following commands to install required dependencies :
     ```javascript
     npm install bcryptjs body-parser classnames concurrently express jsonwebtoken mongoose passport  passport-jwt validator
     ```
 4. Your package.json should look like this with the following dependencies
     ```javascript
     "bcryptjs": "^2.4.3",
    "body-parser": "^1.19.0",
    "classnames": "^2.2.6",
    "concurrently": "^5.2.0",
    "express": "^4.17.1",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^5.9.12",
    "passport": "^0.4.1",
    "passport-jwt": "^4.0.0",
    "validator": "^13.0.0"
     ```

5. Then type the following commands to install required dependencies of client site i.e Frontent Site while remain at root directory.

```javascript
     npm install  
     ```
6. After successful installation run the following command to start the application :
      ```javascript
       npm run dev
      ```
   If you see *Server Has Started!!* then you have successfully setup everything and good to go with our application.

