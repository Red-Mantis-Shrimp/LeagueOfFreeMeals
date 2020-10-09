"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 8080; // default port to listen
const request_1 = __importDefault(require("request"));
const accounts_1 = require("./enum/accounts");
const apiKey = 'RGAPI-912b0237-bc95-4c19-9596-896803d14ee9';
// define a route handler for the default home page
app.get("/api/matches/:id", (req, res) => {
    request_1.default(`https://na1.api.riotgames.com/lol/match/v4/matches/${req.params.id}?api_key=${apiKey}`, (error, response, body) => {
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
        request_1.default(`https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/${account}?api_key=${apiKey}`, (error, response, body) => {
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
// start the Express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map