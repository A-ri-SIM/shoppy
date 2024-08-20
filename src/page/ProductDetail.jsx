import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Price from '../components/ui/Price';
import Button from '../components/ui/Button';
import { useAuthContext } from '../context/AuthContext';
import { addUpdateToCart } from '../api/firebase';

export default function ProductDetail() {
  const { uid } = useAuthContext();
  const {
    state: {
      product: { id, image, title, decription, category, price, options },
    },
  } = useLocation();

  const [selected, setSelected] = useState(options && options[0]);

  const handleSelected = (e) => {
    setSelected(e.target.value);
  };

  const handleClick = (e) => {
    const product={id,image,title,price,option:selected,quantity:1}
    addUpdateToCart(uid,product)
  };

  return (
    <>
      <p className="mx-12 mt-4 text-gray-700">{category}</p>
      <section className="flex flex-col md:flex-row p-4 ">
        <img
          className="w-full px-4 basis-7/12 overflow-hidden"
          src={image}
          alt={title}
        />
        <div className="w-full basis-5/12 flex flex-col p-4">
          <h2 className="text-3xl font-semibold py-2 ">{title}</h2>
          <p className="text-2xl font-semibold py-2 border-b border-gray-400">
            <Price price={price} />
          </p>
          <p className="py-4 text-lg">{decription}</p>
          <div className="flex items-center mb-4">
            <lable className="font-bold text-brand" htmlFor="select">
              옵션 :{' '}
            </lable>
            <select
              id="select"
              className="p-2 m-4 flex-1 border-2 border-dashed border-brand outline-none"
              onChange={handleSelected}
              value={selected}
            >
              {options &&
                options.map((option, index) => (
                  <option key={index}>{option}</option>
                ))}
            </select>
          </div>
          <Button text="장바구니에 추가하기" onClick={handleClick} />
        </div>
      </section>
    </>
  );
}
