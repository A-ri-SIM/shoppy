import React from 'react';
import Price from './ui/Price';

export default function PriceCard({ text, price }) {
  return (
    <div className="bg-gray-50 p-8 mx-2 rounded-2xl text-center text-sm md:text-lg">
      <p>{text}</p>
      <p className="mt-2 font-bold text-brand text-xl md:text-2xl tracking-wider">
        <Price price={price} />
      </p>
    </div>
  );
}
