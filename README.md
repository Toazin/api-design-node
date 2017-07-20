##Getting started
* `npm i`

##Todo

create a basic server with express
that will send back the index.html file on a GET request to '/'
it should then send back jsonData on a GET to /data
##Solution to step-1
##Testing our app

We're going to use mocha and chai along with supertest to runt inegration test against our api. **Be sure to gloably install mocha**. `npm i -g mocha`. 

To run the test, run `mocha server/spec.js` or `npm test`;
