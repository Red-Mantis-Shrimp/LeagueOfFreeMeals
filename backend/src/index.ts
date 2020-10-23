import express from "express";
import cors from "cors";
import { Region } from "./opgg/enum/region";
import { MatchScraper } from "./opgg/scraper/match-scraper";

const app = express();
const port = 8081; // default port to listen
app.use(cors());

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );
} );

// start the Express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );

app.get("/score/:summonerId", async function(req, res) {
    const summonerId = req.params.summonerId;
    const gameId = '3602657684'; // random game
    let scraper = new MatchScraper(Region.NA);

    const opScore = await scraper.getOPScoreBySummonerName(gameId, summonerId);
    
    res.json(opScore);
});
