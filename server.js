const express = require('express');
const { createHandler } = require('graphql-http/lib/use/express');
const expressPlayground = require('graphql-playground-middleware-express').default;

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

// ============================================
// HIER BEGINNEN WE MET STAP 1
// ============================================

// TODO: GenreType komt hier

// TODO: RootQueryType komt hier

// TODO: Schema komt hier

// TODO: Server setup komt hier
