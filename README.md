# Nodejs Express Movie Finder API





## Application Structure

- [X] server.js file in the root directory
- [X] routes directory with a movieRoutes.js file
- [X] controllers directory with a movieController.js file

## Build the Server (server.js)
- [X] Import and configure dotenv
- [X] Set up your Express application instance
- [X] Listen on a port and log a message on startup
- [X] Import the routes from ./routes/movieRoutes.js
- [X] Mount your movie routes. All routes related to movies should be prefixed with /api

## Create the Routes (routes/movieRoutes.js)
- [X] Create an express.Router
- [X] Import the controller functions from ../controllers/movieController.js
- [X] Define two routes and associate them with the controller functions
    - [X] GET /search: This will handle movie searches.
    - [X] GET /movies/:id: This will fetch details for a specific movie.
- [X] GET /search: This will handle movie searches
- [X] GET /movies/:id: This will fetch details for a specific movie
- [X] Export the router

## Implement Controller Logic (controllers/movieController.js)

#### `searchMovies` function
 - [X] handle the GET /api/search route.
 - [X] get the search term from a query parameter named title (i.e., req.query.title).
- [X] Validation: If the title query parameter is missing, it should respond with a 400 Bad Request status and a JSON error message like { "error": "Title query parameter is required" }.
- [X] make a GET request to the OMDb API using axios. The base URL is http://www.omdbapi.com/. You will need to include two query parameters in your request to OMDb:
    - [X] s (for search term)
    - [X] apikey (your key from process.env.OMDB_API_KEY)
- [X] If the request is successful, send the list of movies back to the client as JSON.
- [X] Implement try...catch for error handling.

#### `getMovieDetails` function
 - [X] handle the GET /api/movies/:id route.
 - [X] get the movie’s IMDb ID from the route parameters (req.params.id).
- [X] It should make a GET request to the OMDb API. This time, you will need to include two query parameters:
    - i (for IMDb ID)
    - apikey
- [X] If the request is successful, send the detailed movie data back to the client as JSON.
- [X] Implement try...catch for error handling.