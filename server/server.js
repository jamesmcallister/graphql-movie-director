const { ApolloServer, gql } = require("apollo-server");
const { listOfDirectorsFilms } = require("./movieFetch");

const typeDefs = gql`
  type Query {
    listOfDirectorsFilms(directorName: String): [listOfDirectorsFilms]
  }

  type Genre {
    id: Int
    name: String
  }

  type ProductionCompany {
    id: Int
    logo_path: String
    name: String
    origin_country: String
  }

  type ProductionCountry {
    iso_3166_1: String
    name: String
  }

  type SpokenLanguage {
    iso_639_1: String
    name: String
  }

  type listOfDirectorsFilms {
    adult: Boolean
    backdrop_path: String
    budget: Int
    genres: [Genre]
    homepage: String
    id: Int
    imdb_id: String
    original_language: String
    original_title: String
    overview: String
    popularity: Int
    poster_path: String
    production_companies: [ProductionCompany]
    production_countries: [ProductionCountry]
    release_date: String
    revenue: Int
    runtime: Int
    spoken_languages: [SpokenLanguage]
    status: String
    tagline: String
    title: String
    video: Boolean
    vote_average: Int
    vote_count: Int
  }
`;

const resolvers = {
  Query: {
    listOfDirectorsFilms: (_, { directorName }) =>
      listOfDirectorsFilms(directorName)
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
