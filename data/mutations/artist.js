'use strict';

const ArtistMutation = `type Mutation{
    createArtist(artist:ArtistInput):Artist,
}`;

export default ArtistMutation;
