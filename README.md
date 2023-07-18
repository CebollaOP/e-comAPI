# e-comAPI
e-commerce made with Node.JS 
This is a e-Commerce API made with express.js framework in Node.JS
-The dependencies that are used in this project are these:

.-cors: "^2.8.5":

Cors was used in order to avoid Cross-Origin Resource Sharing errors.

"crypto-js": "^4.1.1":
  Used to hash passwords in order to keep the Users's data safe.
  
"dotenv": "^16.3.1":
Allows the use of a .env file which facilitates working with enviroment variables such as database credentials, API keys, etc... 
That way is safer and easier to work with delicate data.

"express": "^4.18.2":

Framework used to developed the API

"jsonwebtoken": "^9.0.0":

Used to manage authentication tokens.

"mongoose": "^7.3.1":

Library that is used to work with MongoDB. It was used to create models and to make the crud operations

"nodemon": "^1.14.9":

Working with nodemon makes things faster. It restarts the server in the moment any change is saved which allows to see changes in real time.

"stripe": "^12.12.0"

Makes working with the stripe API easier and faster.

-In order to start the program you can use the command "npx nodemon index.js(The name of your main file)"

-Each folder has files that shares the same purpose.
In Models you can find the types of schemas that we are working with. For example, if you want to see the User structure, you cand find it in the User.js file inside Models
If you want to see all the routes and its functions in the routes folder.


