// eslint-disable-next-line import/no-extraneous-dependencies
import { useEffectOnce } from 'usehooks-ts';

import { useStore } from 'usestore-ts';

import { container } from 'tsyringe';
import ProductsStore from '../stores/ProductsStore';

import { ProductSummary } from '../types';

export default function useFetchProducts():{
  products: ProductSummary[];
  } {
  const store = container.resolve(ProductsStore);

  const [{ products }] = useStore(store);

  useEffectOnce(() => {
    store.fetchProducts();
  });

  return { products };
}
