'use strict';

const ArtistQuery = `type Query {
    artist(name: String): Artist
    artistList:[Artist]
}`;

export default ArtistQuery;
