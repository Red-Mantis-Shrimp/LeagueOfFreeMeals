import express from "express";
const app = express();
const port = 8080; // default port to listen
import request from 'request';
import { Accounts } from "./enum/accounts";


const apiKey = 'RGAPI-912b0237-bc95-4c19-9596-896803d14ee9';
// define a route handler for the default home page
app.get( "/api/matches/:id",  ( req, res ) => {

        request(`https://na1.api.riotgames.com/lol/match/v4/matches/${req.params.id}?api_key=${apiKey}`,
            (error, response, body) => {
            if (!error && response.statusCode === 200) {
                res.send( body );
            } else {
                res.status(400).json({msg:error})
            }
        });
} );


app.get( "/api/matchlists/by-account/:account",  ( req, res ) => {
    if(req.params.account in Accounts) {
        const account = (Accounts as any)[req.params.account];
        request(`https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/${account}?api_key=${apiKey}`,
            (error, response, body) => {
            if (!error && response.statusCode === 200) {
                res.send( body );
            } else {
                res.status(400).json({msg:error})
            }
        });
    } else {
        res.status(403).json({msg:"invalid account"})
    }
} );

// start the Express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );