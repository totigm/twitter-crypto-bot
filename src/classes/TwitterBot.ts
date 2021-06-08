import Twit from 'twit';
import { Credentials } from '../types';

export default class TwitterBot {
    private client: Twit;

    constructor(credentials: Credentials) {
        this.client = new Twit(credentials);
    }

    public tweet(status: string) {
        return this.client.post('statuses/update', { status });
    }
}
