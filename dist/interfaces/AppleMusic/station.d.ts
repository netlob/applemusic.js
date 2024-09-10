import { Resource } from './resource';
import { Artwork } from './artwork';
import { EditorialNotes } from './editorialNotes';
import { PlayParameters } from './playParameters';
export interface Station extends Resource {
    attributes?: Station.Attributes;
    type: 'stations';
}
declare namespace Station {
    interface Attributes {
        artwork: Artwork;
        contentRating?: string;
        durationInMillis?: number;
        editorialNotes?: EditorialNotes;
        episodeNumber?: string;
        isLive: boolean;
        mediaKind: 'audio' | 'video';
        name: string;
        playParams?: PlayParameters;
        stationProviderName?: string;
        url: string;
    }
}
export {};
