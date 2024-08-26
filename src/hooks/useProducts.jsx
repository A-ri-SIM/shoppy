import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getProducts, addNewProduct } from '../api/firebase';

export default function useProducts() {
  const queryClient = useQueryClient();

  const ProductsQuery = useQuery({
    queryKey: [],
    queryFn: getProducts,
    staleTime: 1000 * 60,
  });

  const addProduct = useMutation({
    mutationFn: ({ product, url }) => addNewProduct(product, url),
    onSuccess: () => queryClient.invalidateQueries(['products']),
  });

  return { ProductsQuery, addProduct };
}
