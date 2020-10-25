import { HttpClient } from './http-client';
import * as endpoint from '../../config/endpoint.json';

export class LofmClient extends HttpClient {
    public constructor() {
        super(endpoint.lofm);
    }

    /**
     * Returns the player's score from LoFM.
     *
     * @param playerName player name
     */
    public async getScore(summonerName: string): Promise<number> {
        const response = await this.instance.get(`/score/${summonerName}`);
        return response.data.score;
    }
}
