import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../services/fetch';

const useProductsQuery = () => {
    return useQuery({
        // queryFn: () => fetchProducts(),
        queryFn: fetchProducts,
        queryKey: ['product'],
        staleTime: 1000 * 5,
    });
};

export { useProductsQuery };