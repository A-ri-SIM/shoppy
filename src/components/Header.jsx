import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { LuShoppingBag } from 'react-icons/lu';
import { GoPencil } from 'react-icons/go';
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import { login, logout, onUserStateChange } from '../api/firebase';
import User from './User';

export default function Header() {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChange(setUser);
  }, []);

  return (
    <header className="flex justify-between border-b boder-gray-3000 p-4">
      <Link to={'/'} className="flex items-center gap-2 text-4xl text-brand">
        <LuShoppingBag className="text-3xl" />
        <h1>Shoppy</h1>
      </Link>
      <nav className="flex items-center gap-4  font-semibold">
        <Link to={'/products'}>Products</Link>
        <Link to={'/carts'}>
          <MdOutlineAddShoppingCart className="text-2xl" />
        </Link>
        <Link to={'/products/new'} className="text-2xl text-brand">
          <GoPencil />
        </Link>
        {user && <User user={user} />}
        {!user && <button onClick={login}>Login</button>}
        {user && <button onClick={logout}>Logout</button>}
      </nav>
    </header>
  );
}
