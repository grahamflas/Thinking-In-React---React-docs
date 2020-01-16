import React from 'react';
import '../App.css';
import FilterableProductTable from './FilterableProductTable';
import PRODUCTS from '../products';

function App() {
  return (
    <div className="App">
      <FilterableProductTable products={PRODUCTS}/>
    </div>
  );
}

export default App;
