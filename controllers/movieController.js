export function searchMovies(req, res) {
    //?title=moviename is not part of the path it is
    //on req.query
    const { title } = req.query;//get the search term from a query parameter named title

    res.send(`Search Movies for ${title}`);
}


export function getMovieDetails(req, res) {
    const { id } = req.params;//get the movie’s IMDb ID from the route parameters

    res.send(`Get Movie Details for ${id} `);
}