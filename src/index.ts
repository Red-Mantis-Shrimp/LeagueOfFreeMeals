import axios, { AxiosResponse } from "axios";
import { Region } from "./opgg/enum/region";
import { MatchScraper } from "./opgg/scraper/match-scraper";

const summonerId = '31390656'; // Sec
const gameId = '3599895949'; // random game

let scraper = new MatchScraper(Region.NA);

scraper.getOPScoreBySummonerName(gameId, summonerId).then(result => console.log(result));
