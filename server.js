'use strict';
import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';
import schema from './data/schema';

const GRAPHQL_PORT = 3000;

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

/*Objeto tipo schema de graphql*/
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

/*graphiql sirve para probar las rutas de graphql mediante un grap cli*/
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(GRAPHQL_PORT, () => console.log(
  `GraphiQL is now running on http://localhost:${GRAPHQL_PORT}/graphiql`
));
