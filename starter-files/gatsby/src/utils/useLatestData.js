import { useState, useEffect } from 'react';

function useLatestData() {
  // hot slices
  const [hotSlices, setHotSlices] = useState();
  // slicemasters
  const [slicemasters, setSlicemasters] = useState();
  // use a side effect to fetch the data from graphql endpoint
  useEffect(function() {
    // when the component loads, fetch the data. React hook; component mounts and runs 
  }, []);
}