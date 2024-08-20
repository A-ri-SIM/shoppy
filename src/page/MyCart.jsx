import React from 'react';
import { useAuthContext } from '../context/AuthContext';
import { useQuery } from '@tanstack/react-query';
import { getCart } from '../api/firebase';
import CartItem from '../components/CartItem';
import PriceCard from '../components/PriceCard';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { FaEquals } from 'react-icons/fa';
import Button from '../components/ui/Button';

const SHIPPING = 3000;

export default function MyCart() {
  const { uid } = useAuthContext();

  const { isLoading, data: products } = useQuery({
    queryKey: ['carts'],
    queryFn: () => getCart(uid),
  });

  if (isLoading) return <p>Loading...</p>;

  const hasProducts = products && products.length > 0;
  const totalPrice =
    hasProducts &&
    products.reduce(
      (prev, current) => prev + parseInt(current.price) * current.quantity,
      0
    );

  return (
    <section className="p-8 flex flex-col">
      <p className="text-2xl text-center font-bold pb-4 border-b border-gray-300">
        내 장바구니{' '}
      </p>
      {!hasProducts && <p>텅!</p>}
      {hasProducts && (
        <>
          <ul className="py-4 px-8 border-b border-gray-300 my-8">
            {products &&
              products.map((product) => (
                <CartItem key={product.id} product={product} uid={uid} />
              ))}
          </ul>
          <div className="flex justify-between items-center mb-6 px-2 md:px-8 lg:px-16">
            <PriceCard text="총 상품 금액" price={totalPrice} />
            <BsFillPlusCircleFill className="shrink-0" />
            <PriceCard text="배송비" price={SHIPPING} />
            <FaEquals className="shrink-0" />
            <PriceCard text="결제 금액" price={totalPrice + SHIPPING} />
          </div>
          <Button text={'주문하기'} />
        </>
      )}
    </section>
  );
}
