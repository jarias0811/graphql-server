'use strict';

const AlbumMutation = `extend type Mutation{
    createAlbum(artistId:String,album:AlbumInput):Album
}`;

export default AlbumMutation;
