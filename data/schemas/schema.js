'use strict';

import {
    makeExecutableSchema
} from 'graphql-tools';

import RootMutation from '../mutations/index';
import RootQuery from '../queries/index';
import Types from './index';
import {concat} from 'lodash';
import resolvers from '../resolvers/index';

const SchemaDefinition = `
schema{
    query:Query,
    mutation:Mutation
}
`;

/*Se unen todos los esquemas,queries,mutaciones y tipos en un unico arreglo para que la función makeExecutableSchema los reciba correctamente*/
const graphQlSchema = concat(SchemaDefinition,RootQuery,RootMutation,Types);

const schema = makeExecutableSchema({
    typeDefs:graphQlSchema,
    resolvers
});

export default schema;
