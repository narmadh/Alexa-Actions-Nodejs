# Express App to handle requests from Alexa Skills and Google Actions

##### _This is the backend data handler of a protype,which enables learning for children through natural conversations with Alexa and Google Assistant_

###### _Refer the documentation references given below to design conversations for Alexa Skills and Google Actions_

### Initialize project by installing dependencies

     git clone "this repo's link"
     cd "this repo's path in local system"
     npm  install

This is an express app that has two different routes **/alexa** to handle **Alexa Skills Post requests** and **/actions** to handle **Google Actions Handler post Requests**.

Before deploying this app, make sure that you have built a suiable conversational models for both Alexa Skill and your Google Action.

# Project structure:

## Files:

- **index.js** - Initializes the express server in the given port
- **Procfile** - Heroku deployement file
- **package.json** - npm packages and details
- **.gitignore** - Git ignore instructions.
- **Dockerfile** - Use this Dockerfile to build this app as a Docker container
- **index.test.js** - Write test cases for the app inside this file. _Only a sample test case is given as for now._

## Folders:

### Routes folder:

- Contains the **routes** that are to be handled by the express app

- It has three files, one for **Alexa**, one for **Google Actions** and the other one for a **rest API** that can be developed to be the **common API** for Alexa and Google Actions

### Controller folder:

### Alexa folder

- Contains the handlers for Alexa and Google functions in their respective files and also the API file containing the common function calls

##### _alexa.js_

- It has the **ask-express adapter** that helps to convert the Alexa handlers in to a **request-response callback function**

#### _handlers.js_

- The handlers in handlers.js are the same that are defined in the [Alexa Skills handlers documentation](https://developer.amazon.com/en-US/docs/alexa/custom-skills/handle-requests-sent-by-alexa.html)

### Google-actions folder:

#### actions.js

- This file contains all the handlers that are defined in the Google Actions conversational models.

        const app = conversation()

- The above _app_ variable is reference to a **request-response callback function** that can be used by **express**

## Api folder:

- This folder will contain all the common logic that has to be defined for Alexa and Google Actions.
- Define all database reads, writes, input validation, user session variables, storing progress processes in this folder.

#### _api.js_

- It contains the firebase package to initialze Firebase Realtime database object.
- When deploying, consider deleting the API keys from here and add them in the environment variables during deployment.
- [Firebase RealTime database documentation](https://firebase.google.com/docs/database/web/read-and-write)

#### _functionCalls.js_

- The common API function calls between Google Actions and Alexa Skills are all defined here.
- It read the data from database

## How the app works:

![](/Media/req-res-flow.jpg)
In this application workflow, the processes starting from the post request is the part that we handle through this Express app.

When the user invokes or converses our Alexa Skill, an HTTPS post request with the payload will be made to our endpoint.
We need to setup our endpoint as shown below:

### Set Alexa Skills request endpoint

####

![](/Media/alexa-endpoint.jpg)

####

### Google Actions webhook endpoint

![](/Media/google-actions-webhook.jpg)

- Once we setup the endpoints, we then process the request JSON payloads from our Alexa Skills and Google Actions, in our express app.
- The processed data is then sent as the appropriate response payload which is received by the service that sent the request.
- The sent response is then handled by the respective services

## Important References:

- [ASK documentation](https://developer.amazon.com/en-US/docs/alexa/ask-overviews/what-is-the-alexa-skills-kit.html)
- [Google Actions documentation](https://developers.google.com/assistant/conversational/overview)
- [ask-sdk package documentation ](http://ask-sdk-node-typedoc.s3-website-us-east-1.amazonaws.com/)
- [**@assistant/conversation package** documentation](https://actions-on-google.github.io/assistant-conversation-nodejs/3.7.0/index.html)
- [**ASK-sdk-express-adapter** docs](https://developer.amazon.com/en-US/docs/alexa/alexa-skills-kit-sdk-for-nodejs/host-web-service.html)
- [Documentation for Google Actions Webhooks](https://developers.google.com/assistant/conversational/webhooks)

- [**Alexa Skills request and response docs**](https://developers.google.com/assistant/conversational/reference/rest/v1/TopLevel/fulfill)
- [**Google Actions request and response docs**](https://developers.google.com/assistant/conversational/reference/rest/v1/TopLevel/fulfill)
