import { useState, useEffect } from 'react';
import fetch from 'node-fetch';

const gql = String.raw;

const deets = gql`
  name
  _id 
  image {
    asset {
      url
      metadata {
        lqip
      }
    }
  }
`;

export default function useLatestData() {
  // hot slices
  const [hotSlices, setHotSlices] = useState();
  // slicemasters
  const [slicemasters, setSlicemasters] = useState();
  // use a side effect to fetch the data from graphql endpoint
  useEffect(function() {
    // when the component loads, fetch the data. React hook; component mounts and runs 
    fetch(process.env.GATSBY_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: gql`
          query {
            StoreSettings(id: "downtown") {
              name
              slicemaster {
                ${deets}
              }
              hotSlices {
                ${deets}
              }
            }
          }
        `,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        // TODO: check for errors
        // set the data to state
        // console.log(res.data);
        setHotSlices(res.data.StoreSettings.hotSlices);
        setSlicemasters(res.data.StoreSettings.slicemaster);
      })
      .catch((err) => {
        console.log('Shooooot');
        console.log(err);
      });
  }, []);
  return {
    hotSlices,
    slicemasters,
  };
}