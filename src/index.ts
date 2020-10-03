import { AxiosResponse } from "axios";

const axios = require('axios');


const summonerId = '31390656'; // Sec
const gameId = '3599895949'; // random game

const url = `https://na.op.gg/summoner/matches/ajax/detail/gameId=${gameId}&summonerId=${summonerId}`;

console.log(url);

axios(url)
    .then((response: AxiosResponse) => {
        const html = response.data;
        console.log(html);
    })
    .catch(console.error);
