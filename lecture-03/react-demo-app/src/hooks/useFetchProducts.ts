/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';

import { useEffectOnce, useFetch } from 'usehooks-ts';

import type Product from '../types/Product';

function useFetchProductsOld() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffectOnce(() => {
    const fetchProducts = async () => {
      const url = 'http://localhost:3000/products';
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data.products);
    };

    fetchProducts();
  });

  return products;
}

interface ProductsResult {
	[products: string]: Product[];
}

export default function useFetchProducts() {
  const url = 'http://localhost:3000/products';
  const { data, error } = useFetch<ProductsResult>(url);
  if (!data) {
    return [];
  }

  return data.products;
}
