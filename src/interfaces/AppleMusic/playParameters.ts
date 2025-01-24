// https://developer.apple.com/documentation/applemusicapi/playparameters
export interface PlayParameters {
  id: string;
  kind: string;
  isLibrary?: boolean;
  reporting?: boolean;
  catalogId?: string;
  reportingId?: string;
}
