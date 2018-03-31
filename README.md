# REST-Blog-API with Express
***
## Module 2 Lab
***
### Packages which will be in dependencies:

1. express 
2. morgan
3. errorhandler
4. body-parser
5. node-dev

To install them: `npm i express morgan errorhandler body-parser -E`

To install node-dev `npm i node-dev -DE`
***

#### How to run it?

Launch server with `node server.js` in Terminal/Command Prompt from the project root

#### How to use it?

Use Postman, CURL or any other HTTP request agent to test this server.

[Postman download](https://www.getpostman.com/apps)
> When using Postman for the POST request, make sure to select body, 
> raw and JSON (application/json) settings to avoid a common mistake 
> of not providing the right request payload format.

#### CRUD commands are:

*posts post data*

`curl -H "Content-Type: application/json" -X POST -d '{"name": "Top 10 ES6 Features", "url":"http://webapplog.com/es6", "text": ""}'  "http://localhost:3000/posts"`

*updates post data at a specified id*

`curl -H 'Content-Type: application/json' -X PUT -d '{"name": "Top 10 ES6 Features Every Developer Must Know", "url":"http://webapplog.com/es6", "text": ""}'  "http://localhost:3000/posts/0"`

*gets post data*

`curl "http://localhost:3000/posts"`

*deletes post data and a specified id*

`curl -X DELETE "http://localhost:3000/posts/0"`