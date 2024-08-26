import React from 'react';
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import useCart from '../hooks/useCart';

export default function CartStatus() {
  const {
    cartQuery: { data: products },
  } = useCart();

  return (
    <div className="relative">
      <MdOutlineAddShoppingCart className="text-2xl" />
      {products && (
        <p className="w-4 h-4 text-sm text-center bg-brand text-white font-semibold rounded-full absolute -top-2 -right-3">
          {products.length}
        </p>
      )}
    </div>
  );
}
