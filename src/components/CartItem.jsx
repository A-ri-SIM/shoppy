import React from 'react';
import { FiMinusCircle, FiPlusCircle } from 'react-icons/fi';
import { FaRegTrashCan } from 'react-icons/fa6';
import Price from './ui/Price';
import useCart from '../hooks/useCart';

const ICON_CLASS =
  'transition-all cursor-pointer hover:text-brand hover:scale-105 mx-3';

export default function CartItem({
  product,
  product: { id, image, title, option, quantity, price },
}) {
  const { addUpdateItem, removeItem } = useCart();
  const handleMinus = () => {
    if (quantity < 2) return;
    addUpdateItem.mutate({ ...product, quantity: quantity - 1 });
  };
  const handlePlus = () => {
    addUpdateItem.mutate({ ...product, quantity: quantity + 1 });
  };
  const handleDelete = () => {
    removeItem.mutate(product);
  };

  return (
    <li className="flex justify-between my-4 items-center">
      <img className="w-24 md:w-48 rounded-lg" src={image} alt={title} />
      <div className="flex-1 flex justify-between ml-6">
        <div className="basis-3/5">
          <p className="text-lg">{title}</p>
          <p className="text-xl font-semibold text-brand">{option}</p>
          <Price price={price} />
        </div>
        <div className="flex text-2xl items-center ">
          <FiMinusCircle className={ICON_CLASS} onClick={handleMinus} />
          <p>{quantity}</p>
          <FiPlusCircle className={ICON_CLASS} onClick={handlePlus} />
          <FaRegTrashCan className={ICON_CLASS} onClick={handleDelete} />
        </div>
      </div>
    </li>
  );
}
