const express = require('express');
const { createHandler } = require('graphql-http/lib/use/express');
const { 
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull
} = require('graphql');

// Data importeren
const films = require('./data/films');
const acteurs = require('./data/acteurs');
const genres = require('./data/genres');
const regisseurs = require('./data/regisseurs');

// STAP 1: GenreType
const GenreType = new GraphQLObjectType({
  name: 'Genre',
  description: 'Een filmgenre',
  fields: () => ({
    id: { 
      type: new GraphQLNonNull(GraphQLString) 
    },
    naam: { 
      type: new GraphQLNonNull(GraphQLString) 
    },
    beschrijving: { 
      type: GraphQLString 
    }
  })
});


const RootQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Root Query',
  fields: () => ({
    genres: {
      type: new GraphQLList(GenreType),
      description: 'Lijst van alle genres',
      resolve: () => genres
    }
  })
});


const schema = new GraphQLSchema({
  query: RootQueryType
});


const app = express();


app.all('/graphql', createHandler({ 
  schema: schema 
}));

const PORT = 4000;
app.listen(PORT, () => {
  console.log(` Server draait op http://localhost:${PORT}/graphql`);
  console.log(` Test queries op: http://localhost:${PORT}/graphql`);
});