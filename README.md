# Kanban Board

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## Description
This is a full-stack PERM application that acts as a visual project management Kanban board. By utilizing JSON Web Tokens to encode a user's authentication data, users are able to login to the application, and are presented with project tickets displayed across 3 columns: Todo, In Progress, and Completed. Users are able to add new tickets, edit exiting tickets, or delete existing tickets. The application is deployed to Render, and utilizes PostgreSQL for database management, Express.js, ReactJS, and Node.js.


## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Contributing](#contributing)
4. [Tests](#tests)
5. [License](#license)
6. [Questions](#questions)


## Installation
To install the application locally, do the following in your terminal:

1. Clone the repository to your local computer.  
   `git clone git@github.com:lwebert/Challenge-14-Kanban.git`
2. Check that node.js is installed.  
   `node -v`
3. Install dependencies.  
   `npm i`

## Usage
The application is deployed to Render, and can be found [here](https://challenge-14-kanban.onrender.com/).


To run the application locally, open an instance of the application in your terminal. 
Run the following:
1. `npm run build`.
2. `npm run seed`.
3. `npm run start`. Open the application in your browser at http://localhost:3000/.


## Contributing
This application was developed by Lauren Webert. Here are some guidelines on ways to contribute:

Report a bug fix.

1. Create a new Issue in the GitHub repo.

Make local changes to push up.

1. Create a new branch (`git checkout -b <your-feature-branch-name>`)
2. Make your changes locally
3. Push the code back to the GitHub repo (`git push origin <your-feature-branch-name>`)
4. Create a pull request to merge your changes

## Tests
The application is working correctly if the user is able to login to the application, create new tickets, move tickets to different columns of the board, edit existing tickets, and delete existing tickets without any errors.

![Kanban board application after user login.](./assets/KanbanApplication.jpg).

## License
The application is covered under [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0.txt).   
https://www.apache.org/licenses/LICENSE-2.0.txt


## Questions
- GitHub username: [lwebert](https://github.com/lwebert).
- Reach me at [lauren@weberts.org](lauren@weberts.org) with additional questions.
