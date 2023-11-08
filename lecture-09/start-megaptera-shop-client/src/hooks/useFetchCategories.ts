import { useStore } from 'usestore-ts';
import { container } from 'tsyringe';
import { useEffect } from 'react';
import CategoriesStore from '../stores/CategoriesStore';

export default function useFetchCategories() {
  const store = container.resolve(CategoriesStore);

  const [{ categories }] = useStore(store);

  useEffect(() => {
    store.fetchCategories();
  }, [store]);

  return { categories };
}
