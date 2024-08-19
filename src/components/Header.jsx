import { Link } from 'react-router-dom';
import { LuShoppingBag } from 'react-icons/lu';
import { GoPencil } from 'react-icons/go';
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import User from './User';
import Button from './ui/Button';
import { useAuthContext } from './context/AuthContext';

export default function Header() {
  const { user, login, logout } = useAuthContext();

  return (
    <header className="flex justify-between border-b boder-gray-3000 p-4">
      <Link to={'/'} className="flex items-center gap-2 text-4xl text-brand">
        <LuShoppingBag className="text-3xl" />
        <h1>Shoppy</h1>
      </Link>
      <nav className="flex items-center gap-4  font-semibold">
        <Link to={'/products'}>Products</Link>
        <Link to={user ? '/carts' : '/'} onClick={!user && login}>
          <MdOutlineAddShoppingCart className="text-2xl" />
        </Link>
        {user && user.isAdmin && (
          <Link to={'/products/new'} className="text-2xl text-brand">
            <GoPencil />
          </Link>
        )}
        {user && <User user={user} />}
        {!user && <Button text={'Login'} onClick={login} />}
        {user && <Button text={'Logout'} onClick={logout} />}
      </nav>
    </header>
  );
}
