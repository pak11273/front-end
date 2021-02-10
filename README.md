# Basic SPA

For steps on how to work with this repository [please see here](https://docs.labs.lambdaschool.com/labs-spa-starter/)

# buildwkone

You can find the deployed project at [African Market Place](https://front-end-one-nu.vercel.app/#menu).

## Contributors

<table>
  <tr>
    <td align="center"><a href="https://github.com/rbhouck32"><img src="https://avatars.githubusercontent.com/u/57123769?s=400&u=0f465071104a36d41a96fcf7149c98f1219b4847&v=4" width="100px;" alt=""/><br /><sub><b>Rob Houck</b></sub></a><br /><a href="https://github.com/rbhouck32"><img src="https://github.com/favicon.ico" width="15"></a>&nbsp;<a href="https://www.linkedin.com/in/robbhouck"><img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"></a></td>
<td align="center"><a href="https://github.com/Devon-Brady"><img src="https://avatars.githubusercontent.com/u/72098634?s=460&v=4" width="100px;" alt=""/><br /><sub><b>Devon Brady</b></sub></a><br /><a href="https://github.com/Devon-Brady"><img src="https://github.com/favicon.ico" width="15"></a>&nbsp;<a href="https://www.linkedin.com/in/devon-brady-26bbaa148/"><img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"></a></td>
<td align="center"><a href="https://github.com/xpeedy"><img src="https://avatars.githubusercontent.com/u/69333686?s=460&v=4" width="100px;" alt=""/><br /><sub><b>Hairo Garcia</b></sub></a><br /><a href="https://github.com/xpeedy"><img src="https://github.com/favicon.ico" width="15"></a>&nbsp;<a href="https://www.linkedin.com/in/hairogarcia"><img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"></a></td>
<td align="center"><a href="https://www.linkedin.com/in/stephanieenciso/"><img src="https://media-exp1.licdn.com/dms/image/C4E03AQHDayFlZOzjqg/profile-displayphoto-shrink_400_400/0/1605632211774?e=1618444800&v=beta&t=uStT0oGhfj3D9hqzaDbwLT2FOvgSbWO_bPlsl80pRpU" width="100px;" alt=""/><br /><sub><b>Stephanie Enciso</b></sub></a><br /><a href="https://www.linkedin.com/in/stephanieenciso/"><img src="https://github.com/favicon.ico" width="15"></a>&nbsp;<a href="https://www.linkedin.com/in/stephanieenciso/"><img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"></a></td>
<td align="center"><a href="https://github.com"><img src="https://ca.slack-edge.com/ESZCHB482-U01BUBTV3E3-d28c8d925367-512" width="100px;" alt=""/><br /><sub><b>Mona Hassan</b></sub></a><br /><a href="https://github.com"><img src="https://github.com/favicon.ico" width="15"></a>&nbsp;<a href="https://linkedin.com"><img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"></a></td>
<td align="center"><a href="https://github.com/roerark"><img src="https://avatars.githubusercontent.com/u/73914929?s=400&v=4" width="100px;" alt=""/><br /><sub><b>Joe Park</b></sub></a><br /><a href="https://github.com/roerark"><img src="https://github.com/favicon.ico" width="15"></a>&nbsp;<a href="https://www.linkedin.com/in/joepark"><img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"></a></td>
<td align="center"><a href="https://github.com/pak11273"><img src="https://media-exp1.licdn.com/dms/image/C4D03AQHEMEd21bW1CQ/profile-displayphoto-shrink_400_400/0/1606151035662?e=1618444800&v=beta&t=xcZdZpmXL-3QFjC_CkRDCjPSN5oSDNwxlM-Vz_0OY6w" width="100px;" alt=""/><br /><sub><b>Isaac Pak</b></sub></a><br /><a href="https://github.com/pak11273"><img src="https://github.com/favicon.ico" width="15"></a>&nbsp;<a href="https://www.linkedin.com/in/isaac-pak-78b72687/"><img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"></a></td>
</tr>

<br>
<br>

![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)
![React](https://img.shields.io/badge/react-v16.7.0--alpha.2-blue.svg)
![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)

- Fork and clone the repo to install it as your own remote.
  - **note** please [be sure to set your remote](https://help.github.jp/enterprise/2.11/user/articles/changing-a-remote-s-url/) for this repo to point to your Labs Team Front End Repository.
- run: `npm install` to download all dependencies.
- run: `npm start` to start your local development server.

> When using Okta for authentication, the app will need to run locally on port 3000.

### Key Features

- Local African small businesses can register/login to site
- African businesses and visitors can see what products are being sold in their area.
- Local African small businesses can list their products

#### Front end deployed to `vercel`

#### [Back end](https://github.com/AfricanMarketPlace-TeamSimba/backend) built using: `heroku`

#### NodeJS

- ExpressJS framework
- SQL database
- Knex ORM

#### Documentation

See [Backend Documentation](https://app.swaggerhub.com/apis-docs/rbhouck32/African-MarketPlace/1.0.0#/) for details on the backend of our project.

# APIs

user:

- /users
- /users/:id

countries:

- /countries
- /countries/:id

categories:

- /categories
- /categories/:id

items:

- /items
- /items/:id

userItems:

- /userItems/addItems
- /userItems/:id/list
- /userItems/:id/list/:id

## Authentication API here

auth:

- /auth/register
- /auth/login

# Installation Instructions

- git clone this repo onto your local machine
- cd into the `african-market-place` folder
- then run `npm install`

## Other Scripts

    * build - creates a build of the application
    * start - starts the production server after a build is created
    * test - runs tests in **tests** directory \* eject - copy the configuration files and dependencies into the project so you have full control over them

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.

## Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.
