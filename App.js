import React from 'react';
import logo from './logo.svg';
import './App.css';
import FilterableProductTable from './Containers/FilterableProductTable';
import PRODUCTS from './products';

function App() {
  return (
    <div className="App">
      <FilterableProductTable products={ PRODUCTS }/>
    </div>
  );
}

export default App;
