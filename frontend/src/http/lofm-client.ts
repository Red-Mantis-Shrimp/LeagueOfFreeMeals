import { HttpClient } from "./http-client";
import * as endpoint from "../../config/endpoint.json";

export class LofmClient extends HttpClient {
    public constructor() {
        super(endpoint.lofm);
    }

    /**
     * Returns the player's score from LoFM.
     * 
     * @param playerName player name
     */
    public async getScore(summonerId: number): Promise<number> {
        // const response = await this.instance.get(`/score/${summonerId}`);
        // return response.data;
        return 0;
    }

}

