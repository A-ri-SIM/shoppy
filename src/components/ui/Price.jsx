import React from 'react';

export default function Price({ price }) {
  const priceComma = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return <p>{`￦ ${priceComma}`}</p>;
}
