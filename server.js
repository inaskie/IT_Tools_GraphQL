const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList, GraphQLNonNull } = require('graphql');

// Data importeren
const films = require('./data/films');
const acteurs = require('./data/acteurs');
const genres = require('./data/genres');
const regisseurs = require('./data/regisseurs');

// TODO STAP 1: Definieer de basis types
// Tip: Begin met GenreType - dit is het simpelste type

const GenreType = new GraphQLObjectType({
  name: 'Genre',
  description: 'Een filmgenre',
  fields: () => ({
    // TODO: Voeg velden toe: id, naam, beschrijving
  })
});

// TODO STAP 2: Maak FilmType met nested relaties
// Tip: Gebruik resolvers om genres op te halen via genreIds

const FilmType = new GraphQLObjectType({
  name: 'Film',
  description: 'Een film in de catalogus',
  fields: () => ({
    // TODO: Voeg basis velden toe
    // TODO: Voeg genres veld toe met resolver
  })
});

// TODO STAP 3: Root Query - Laat studenten queries toevoegen
const RootQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Root Query',
  fields: () => ({
    // TODO: Voeg 'films' query toe (lijst van alle films)
    // TODO: Voeg 'film' query toe (één film op basis van id)
  })
});

// TODO STAP 4: Mutations voor CRUD operaties
const RootMutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Root Mutation',
  fields: () => ({
    // TODO: Voeg mutation toe om film toe te voegen
  })
});

// Schema aanmaken
const schema = new GraphQLSchema({
  query: RootQueryType,
  // mutation: RootMutationType // Uncomment na stap 4
});

// Express server
const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true // GraphiQL interface voor testen
}));

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server draait op http://localhost:${PORT}/graphql`);
});