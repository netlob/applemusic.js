import { Artwork } from './artwork';
export interface Preview {
    artwork?: Artwork;
    url: string;
    hlsUrl?: string;
}
