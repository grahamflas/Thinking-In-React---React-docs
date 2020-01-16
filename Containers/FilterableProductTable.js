import React from 'react';
import SearchBar from '../Components/SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends React.Component {
  render(){
    return(
      <div>
        <SearchBar />
        <ProductTable products={this.props.products}/>
      </div>
    )
  }
}

export default FilterableProductTable