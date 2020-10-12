"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 8080; // default port to listen
const axios_1 = __importDefault(require("axios"));
const request_1 = __importDefault(require("request"));
const accounts_1 = require("./enum/accounts");
const baseURL = "https://na1.api.riotgames.com/";
const apiKey = 'RGAPI-71775a09-8b6e-4b31-ac79-e6979f802ecf';
// define a route handler for the default home page
app.get("/api/matches/:id", (req, res) => {
    request_1.default(`${baseURL}lol/match/v4/matches/${req.params.id}?api_key=${apiKey}`, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            res.send(body);
        }
        else {
            res.status(400).json({ msg: error });
        }
    });
});
app.get("/api/matchlists/by-account/:account", (req, res) => {
    if (req.params.account in accounts_1.Accounts) {
        const account = accounts_1.Accounts[req.params.account];
        request_1.default(`${baseURL}lol/match/v4/matchlists/by-account/${account}?api_key=${apiKey}`, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                res.send(body);
            }
            else {
                res.status(400).json({ msg: error });
            }
        });
    }
    else {
        res.status(403).json({ msg: "invalid account" });
    }
});
const fillGamesMap = (matches, gamesMap) => {
    for (const match of matches) {
        if (!gamesMap[match.gameId]) {
            gamesMap[match.gameId] = 1;
        }
        else {
            const val = gamesMap[match.gameId] + 1;
            gamesMap[match.gameId] = val;
        }
    }
    return gamesMap;
};
app.get("/api/matches", (req, res) => {
    let matches = {};
    const requestsArray = [
        `https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/${accounts_1.Accounts.Asmir9990}?queue=400&api_key=${apiKey}`,
        `https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/${accounts_1.Accounts.KnightHulk}?queue=400&api_key=${apiKey}`,
        `https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/${accounts_1.Accounts.Sec}?queue=400&api_key=${apiKey}`,
        `https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/${accounts_1.Accounts.Crendez}?queue=400&api_key=${apiKey}`,
        `https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/${accounts_1.Accounts.Bluegoldfish}?queue=400&api_key=${apiKey}`,
        `https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/${accounts_1.Accounts.JRal}?queue=400&api_key=${apiKey}`,
    ];
    Promise.all(requestsArray.map((quest) => {
        return axios_1.default.get(quest).then((response) => {
            return response.data;
        }).then((data) => {
            return data;
        });
    })).then((data) => {
        data.map((adata) => {
            matches = fillGamesMap(adata.matches, matches);
        });
        res.send({ data: Object.keys(matches).filter((key) => matches[key] >= 5) });
    }).catch(() => res.status(400).json({ msg: "error" }));
    // request(`https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/${Accounts.Asmir9990}?queue=450&api_key=${apiKey}`,
    //         (error, response, body) => {
    //         if (!error && response.statusCode === 200) {
    //             return fillGamesMap(JSON.parse(body).matches,matches);
    //         } else {
    //             res.status(400).json({msg:error})
    //         }
    //     });
});
// start the Express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map