## Agro-Mart: Team-030-Back-end **Next.js Framework**

The Next.js is an awesome react framework and even better, and i would love we
take a look at how its used and its easy and very familiar setup. If you are
familiar with express then you have no problem at all in the backend. If you are
familiar with React, the you are covered also.

## What we stand to gain

- With Next.js both the front-end and back-end use the same server and PORT.One
  server, One PORT and One deployment!
- Next.js automatically handles front-end routing out-of-the box. No set up
  required
- Easily use your express framework and middle-wares for back-end requests,
  API's, database connections handling without any complex setup. The same setup
  you use for any express.js app
- Babel config as well as web-pack are prepared for you out-of-the box. No
  configuration is needed
- Front-end team can see whats happening on the back-end and if necessary
  contribute to back-end team
- Similarly, back-end team can see whats happening on the front-end and if
  necessary contribute to front-end team
- 100% JavaScript
- Sever side rendering out-of-the box
- These are the benefits i can think of, there are lots more! I believe you'll
  come to like Next.js.

## About the project

Pleae take a look at the `package.json` file.

- `material-ui/core` dependencies are for simple front-end styling
- `mongoose` for MongoDB database handling and modelling
- `express` to run the server
- `dotenv` `cross-env` for environmental variables
- `next` requuired
- `react` `react-dom` for front-end

### Integrating in your project

```sh
#1 - Create an empty project using command line
npm init -y

#2 - install dependencies
npm install

# Or, use yarn
yarn install

#3 - YOU ARE GOOD TO GO
npm run dev

#4
open localhost:3000 on you browser

# NO SETUP REQUIRED
```

### Backend

This main entry file is the `server.js` as you can see in the root directory is
setup like every other typical express.js entry file. Bear with me the code is
not complex, i only did my best to comment so that everyone understands clearly.
You will all agree with me that it is no different fro a typical express.js
setup. For purpose of clarity, i seperated concerns. For example, the
`FrontEndFiles` folder contains files only for front end. Similarly,
`BackEndFiles` folder contains files only for front end.

If you notice in the `server.js` file, the `express` handles the requests, any
request that is left is directed to next.js to create a view or a page.

### Frontend

Next.js automatically handles front end routes. The foder `pages` in the root
directory is created for this purpose. Any file saved in the `pages` folder
automatically becomes a page. For example, the `pages/login.js` creates a new
page called login in the front-end!  
The front-end code will never interfere with the back-end and vise-versa.

## Here is a quick basic app i created using this Next.js Framework

I hosted on heroku platform https://agromart030.herokuapp.com/. Both front-end
and back-end run on the same server

## TEST

- Make a `GET` request on your browser
  `https://agromart030.herokuapp.com/api/mockdata` and see that the server
  handles the request
