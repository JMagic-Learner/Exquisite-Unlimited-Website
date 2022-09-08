
# Exquisite Unlimited Website
![NPM](https://img.shields.io/npm/l/inquirer)

[LIVE DEPLOY](https://JMagic-Learner.github.io/Exquisite Unlimited Website)
## Description
Hello, my name is Jason Ma. This application is called Exquisite Unlimited Website.
              
Description:
This application is the core website for Exquisite Unlimited LLC. This website showcases and allows consumers to order paintings. The Techstack used for this application is REACT, Bootstrap, MongoDB, GraphQL, Apollo-Client             
          
Coding Process
The coding process was unusual. Instead of having a website design given by a graphic artist, or having the backend infrastructure designed by a database engineer/administrator, I instead had to design this website from the ground up. Before I set out on the physical design of this website, I first had to set up the GraphQL server as shown in Exquisite-Unlimited-Server. After defining the GraphQL queries and mutations, I set up the MongoDB Cloud service to allow me to test the GraphQL requests. After confirming that the GraphQL server was operational, I then began working on structuring the physical layout of the website. I blocked out 3 main Pages for use, and used React-Router-Dom to help the webpage navigate to the specifeid endpoints. After that, I designed the Homepage, then the About page, and then the Shoppage.
              
# Table of Contents 
If your README is long, add a table of contents to make it easy for users to find what they need.
- [Installation](##-Installation)
- [Usage](#Usage)
- [Credits](#Credits)
- [License](#license)
- [Contribution](#contribution)
- [Test](#test)
- [Question](#question)
              
# Installation

Step 1: Clone this REPO into your local development machine
Step 2: Run NPM I to install the client dependencies
Step 3: Npm run start to start the application

Optional: There is an optional installation where you can also install a local server.
Assuming that you have a MongoDB Compass, you can install the server and initialize the local repo.

In index.js, instead of using the following code

const client = new ApolloClient({
    uri: 'https://exquisite-unlimited-server.herokuapp.com',
    cache: new InMemoryCache(),
  });

You can instead use;

const client = new ApolloClient({
    uri: 'MongoDB Compass URI connection string',
    cache: new InMemoryCache(),
  });
              

            
# Usage
              
This appliation is meant to help my father sell his paintings.
                                      
          
# License
            
License Utilized: 
![NPM](https://img.shields.io/npm/l/inquirer)
                      
                      
# Contribution
Jason Ma, React-Router-Dom, REACT, GraphQL, Apollo-Server, Apollo-Client, MongoDB, Boostrap, etc
              
# Tests
Use the CLI command, NPM run test to start the unit tests
              
# Questions
Github Username: JMagic-Learner
Github Profile: 
[JMagic-Learner](https://github.com/JMagic-Learner)
              
If you have any questions, please contact me via email at the following email address;
MaJason93@gmail.com
