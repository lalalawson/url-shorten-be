# Url Shortening Service (USS) - Backend repo

This project provides a platform for users to shorten their long URLs into something simpler.
The frontend of this project is built using ReactJS and vanilla CSS. [Frontend repo can be found here.](https://github.com/lalalawson/url-shorten-fe)

For the backend, I used Node.js, together with express, and MongoDB to store the url pairs.

Both [frontend](https://uss-fe.herokuapp.com/) and [backend](https://uss-be.herokuapp.com/) have been deployed using Heroku. [^1] The database (MongoDB) is currently deployed using the platform's inbuilt Atlast deployment services.

[^1]: Depending on when the app is being accessed remotely, heroku might be down (credit overuse or end of free period).

<b>Considerations</b>

- NoSQL was preferred over RDBMS due to it's ease & compatibility to the project requirements. No heavy entity relation was required, and the simplicity means that a key-value database was sufficient.
- UUID v4 was used to generate an entirely random string as the shortened url's identifier.

## Accessing the project locally

To run the the project on your local system, Node JS must be installed.
After which, if `yarn` was not previously installed on your system, do run `npm install -g yarn` before running the app.

### Setting up MongoDB

To run the backend locally, there must be a viable connection to a MongoDB database. The database can be created locally if you have MongoDB installed on your device, or, it can be created remotely using MongoDB Atlas.

1. After creation of your cluster, obtain your db's URI. The connection URI should begin with `mongodb://...` or `mongodb+srv://...`.
2. Create a `.env` file in the folder's root directory
3. Paste in `DB_URI=<YOUR_MONGODB_PRIVATE_URI_HERE>`, where your db's URI should replace the `<YOUR_MONGODB_PRIVATE_URI_HERE>`.

### Running the service

Once yarn is installed, and a valid MongoDB URI has been added in a `.env` file, in the project directory, you can run the following commands in order:

### `yarn`

Initializes and download the node modules required on to your system.

### `yarn start`

Runs the app in the development mode. The console will indicate when the server is up and listening, as well as whether the connection to your DB is successful.
