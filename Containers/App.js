import React from 'react';
import '../App.css';
import FilterableProductTable from './FilterableProductTable';

function App(props) {
  return (
    <div className="App">
      <FilterableProductTable products={props.products}/>
    </div>
  );
}

export default App;
