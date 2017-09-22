'use strict';
import Album from '../models/album';

const AlbumResolvers = {
    Mutation: {
        createAlbum(root, args) {
            let album = new Album(args.album);
            album.artist = args.artistId;
            return album.save().then((albumSaved) => albumSaved);
        }
    }
};

export default AlbumResolvers;
