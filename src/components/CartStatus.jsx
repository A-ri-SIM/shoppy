import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import { getCart } from '../api/firebase';
import { useAuthContext } from '../context/AuthContext';

export default function CartStatus() {
  const { uid } = useAuthContext();

  const { data: products } = useQuery({
    queryKey: ['carts'],
    queryFn: () => getCart(uid),
  });
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
