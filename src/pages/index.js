import React from 'react'; //eslint-disable-line
import graphql from 'graphql';

export default ({data}) => {
  return <div>
    <h1>Gabriel Pascua</h1>
    <h3>Work History</h3>
    <ul>
      {
        data.allDataJson.edges[0].node
          .work.map((w, index) => {
            return <li key={index}>{w.company}</li>;
          })
      }
    </ul>
  </div>;
};

export const query = graphql`
  query ResumeQuery {
    allDataJson
    {
      edges{
        node {
          work {
            company
            startDate
            endDate
            position
            summary
            website
          }
        }
      }
    }
  }
`;