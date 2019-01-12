import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

const GET_MOVIES = gql`
  query getDirectorsFilms($directorName: String) {
    listOfDirectorsFilms(directorName: $directorName) {
      original_title
      adult
      tagline
      homepage
      genres {
        name
      }
    }
  }
`;

export const App = () => (
  <Query query={GET_MOVIES} variables={{ directorName: "attenborough" }}>
    {({ loading, error, data }) => {
      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error :({console.error(error)}</div>;

      return (
        <ul>
          {data.listOfDirectorsFilms.map(film => (
            <li key={film.original_title}>{film.original_title}</li>
          ))}
        </ul>
      );
    }}
  </Query>
);
