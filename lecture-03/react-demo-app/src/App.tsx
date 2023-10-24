import FilterableProductTable from './components/FilterableProductTable';
import TimerControl from './components/TimerControl';

import useFecthProducts from './hooks/useFetchProducts';

export default function App() {
  const products = useFecthProducts();

  return (
    <div>
      <TimerControl/>
      <hr/>
      <h1>상품</h1>
      <FilterableProductTable products={products} />
    </div>
  );
}
