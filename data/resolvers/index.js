'use strict';

import ArtistResolvers from './artist';
import AlbumResolvers from './album';
import {merge} from 'lodash';

const resolvers = merge(
    ArtistResolvers,
    AlbumResolvers
);

export default resolvers;
