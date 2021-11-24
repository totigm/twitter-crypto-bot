export interface Image {
    image_type: string;
    w: number;
    h: number;
}

export interface MediaResponse {
    media_id?: number;
    media_id_string?: string;
    size?: number;
    expires_after_secs?: number;
    image?: Image;
}
