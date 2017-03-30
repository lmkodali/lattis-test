# README #

This README would normally document whatever steps are necessary to get your application up and running.

### How do I get set up? ###

* Make sure you have NodeJs version 6.x
* Make sure you have MySQL
* Clone this repo
* `npm install -g nodemon`
* `npm install`
* Database TEST configuration in /db.js

### File and Directory structure ###

* /bin/www - is the app settings, bootstrapping, initialization
* /public - is where the client-side stuff like images, js, css are
* /app/modules/{module_name} - is where each module's routes, controller with SQL statements are
* /app/db.js - SQL db connector and config
* /app/app.js - modules and routes declaration

### Running the app ###

* `DEBUG=back-end-v1:* nodemon` - nodemon restarts the node server whenever code changes are detected
* go to localhost:5555 to check server connectivity
