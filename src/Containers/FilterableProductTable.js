import React from 'react';
import SearchBar from '../Components/SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      filterText: "",
      inStockOnly: false
    }
  }

  checkHandler = () => {
    this.setState({
      inStockOnly: !this.state.inStockOnly
    })
  }

  searchHandler = event => {
    this.setState({
      filterText: event.target.value
    })
  }

  render(){
    return(
      <div>
        <SearchBar 
          checkHandler = {this.checkHandler}
          searchHandler = {this.searchHandler}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
        <ProductTable 
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    )
  }
}

export default FilterableProductTable