import axios from "axios";

const BASE_URL = "https://www.omdbapi.com/";

export async function searchMovies(req, res) {
  //?title=moviename is not part of the path it is
  //on req.query
  const { title } = req.query; //get the search term from a query parameter named title

  /*
    If the title query parameter is missing, it should respond with a 
    400 Bad Request status and a JSON error message like 
    { "error": "Title query parameter is required" }
    */
  if (!title) {
    return res.status(400).json({ error: "Title query parameter is required" });
  }

  try {
    
    const response = await axios.get(BASE_URL, {
      params: {s: title, apikey: process.env.OMDB_API_KEY,}
    });

    res.json(response.data);
  } catch (err) {
    console.error("Search Failed:", err.message);
    res.status(500).json({ error: "Failed to fetch movies from OMDb API" });
  }

//   res.send(`Search Movies for ${title}`);
}

export async function getMovieDetails(req, res) {
  const { id } = req.params; //get the movie’s IMDb ID from the route parameters

  /*
  make sure the movie id matches the correct format 
  it must start with tt, then one or more digits
  */
   if (!/^tt\d+$/.test(id)) {
    return res.status(400).json({ error: "Invalid IMDb ID. It should look like tt0372784" });
  }

  try {
    
    const response = await axios.get(BASE_URL, {
      params: {i: id, apikey: process.env.OMDB_API_KEY,}
    });

    res.json(response.data);
  } catch (err) {
    console.error("Movie Request Failed:", err.message);
    res.status(500).json({ error: "Failed to fetch movie details from OMDb API" });
  }
}
