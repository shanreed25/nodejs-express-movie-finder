import express from "express";
import "dotenv/config";//runs dotenv.config() which reads the .env file
import movieRoutes from "./routes/movieRoutes.js";


const app = express();

const PORT = process.env.PORT || 3001;

app.use("/api", movieRoutes);

app.get("/", (req, res) => {
  res.send("Movie Finder API iis running");
});



app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});