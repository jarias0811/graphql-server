'use strict';

import Artist from '../models/artist';
import Album from '../models/album';

const ArtistResolvers = {
    Query: {
        artist(_, args) {
            return Artist.findOne({
                name: args.name
            }).then((artist) => artist);
        },
        artistList() {
            return Artist.find().then((artists) => artists);
        }
    },
    Mutation: {
        createArtist(root, args) {
            let artist = new Artist(args.artist);
            return artist.save().then((artistSaved) => artistSaved);
        }
    },
    Artist: {
        albums(artist) {
            return Album.find({
                artist: artist.id
            }).then((albums) => albums);
        }
    }
};

export default ArtistResolvers;
