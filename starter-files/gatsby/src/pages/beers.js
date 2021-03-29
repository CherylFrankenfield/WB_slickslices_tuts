import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
//import SEO from '../components/SEO';

const BeerGridStyles = styled.div`
  display: grid;
  gap: 2 rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

const SingleBeerStyles = styled.div`
  border: 1px solid var(--grey);
  padding: 2rem;
  text-align: center;
  img {
    width: 100%;
    height: 200px;
    object-fit: contain;
    display: grid;
    align-items: center;
    font-size: 10px;
  }
`;

export default function BeersPage({ data }) {
  // console.log(data);
  return (
    <>
      <h2 className="center">We have {data.beers.nodes.length} Beers available. Dine in only.</h2>
      <BeerGridStyles>
        {data.beers.nodes.map((beer) => {
          // console.log(beer);
          const rating = Math.round(beer.rating.average);
          return (
            <SingleBeerStyles key={beer.id}>
              <img src={beer.image} alt={beer.name} />
              <h3>{beer.name}</h3>
              {beer.price}
              <p title={`${rating} out of 5 stars`}>
                {`👨‍🎤`.repeat(rating)}
                <span style={{ filter: `grayscale(100%)` }}>
                  {`👨‍🎤`.repeat(5 - rating)}
                </span>
                <span>({beer.rating.reviews})</span>
              </p>
            </SingleBeerStyles>
          );
        })}
      </BeerGridStyles>
    </>
  );
}

export const query = graphql`
  query {
    beers: allBeer {
      nodes {
        id
        name
        price
        image
        rating {
          average
          reviews
        }
      }
    }
  }
`;


//<SEO title={`Beers! We have ${data.beers.nodes.length} in stock`} />
