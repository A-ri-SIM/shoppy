import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useAuthContext } from '../context/AuthContext';
import { addUpdateToCart, getCart, removeFromCart } from '../api/firebase';

export default function useCart() {
  const { uid } = useAuthContext();
  const queryClient = useQueryClient();
  const cartQuery = useQuery({
    queryKey: ['carts', uid || ''],
    queryFn: () => getCart(uid),
    enable: !!uid,
  });

  const addUpdateItem = useMutation({
    mutationFn: (product) => addUpdateToCart(uid, product),
    onSuccess: () => {
      queryClient.invalidateQueries(['carts', uid]);
    },
  });

  const removeItem = useMutation({
    mutationFn: (id) => removeFromCart(uid, id),
    onSuccess: () => {
      queryClient.invalidateQueries(['carts', uid]);
    },
  });

  return { cartQuery, addUpdateItem, removeItem };
}
