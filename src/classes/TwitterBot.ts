import { MediaResponse } from 'src/types/twitter';
import Twit from 'twit';
import { Credentials } from '../types';

export default class TwitterBot {
    private client: Twit;

    constructor(credentials: Credentials) {
        this.client = new Twit(credentials);
    }

    public async tweet(status: string, media?: string) {
        const mediaIds = [];
        if (media) {
            const mediaId = await this.createMedia(media);
            mediaIds.push(mediaId);
        }

        return this.client.post('statuses/update', { status, media_ids: mediaIds });
    }

    public async createMedia(media: string) {
        const { data } = await this.client.post('media/upload', { media_data: media });
        return (data as MediaResponse).media_id_string;
    }
}
