# React Test

This is a technical test

## Quick start
Once you have the repo cloned, run the following commands:

## Install dependencies:
npm install

## Run Project:
(on project folder) npm start
       
## Execute tests:
Execute command: npm run test and open /coverage/lcov-report/index.html on your browser to see the results well displayed


## Observations:

1. During the developement of the test I had some problems for fetching the data URL https://gitlab.com/-/snippets/2041384/raw/master/data.json because of CORS errors. I tried to put on the headers the mode: "no-cors" and the Access Control header but I get no results. Finally I found a solution using a CORS Proxy Server and mounting the URL as: https://cors.bridged.cc/https://gitlab.com/-/snippets/2041384/raw/master/data.json

2. Appart from that, I used Ant Design for the paginator because is a library I have been using for a long time.

3. The Application is not responsive, so it's only well-displayed on browsers.

4. In order to load the media information, I have used redux-saga Middleware.

5. Moreover, to simulate the response time of BE, I used a timeout function with a delay of 2 seconds.

6. Regarding on the Unit Tests, I have implemented a unit test of each different type of file, reducers, actions, saga and components.


