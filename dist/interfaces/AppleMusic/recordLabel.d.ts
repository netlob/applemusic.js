import { Artwork } from './artwork';
import { Resource } from './resource';
import { AlbumRelationship } from './albumRelationship';
export interface RecordLabel extends Resource {
    attributes?: RecordLabel.Attributes;
    views?: RecordLabel.Views;
    type: 'record-labels';
}
export declare namespace RecordLabel {
    interface Attributes {
        artwork: Artwork;
        description?: string;
        name: string;
        url: string;
    }
    interface Views {
        'latest-releases'?: RecordLabelLatestReleasesView;
        'top-releases'?: RecordLabelTopReleasesView;
    }
    interface RecordLabelLatestReleasesView {
        data: AlbumRelationship[];
    }
    interface RecordLabelTopReleasesView {
        data: AlbumRelationship[];
    }
}
