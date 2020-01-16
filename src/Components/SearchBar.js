import React from 'react';

class SearchBar extends React.Component{
  render(){
    const {filterText, inStockOnly} = this.props
    return (
      <form>
        <input 
          type="text" 
          placeholder="Search..."
          value={filterText}
          onChange={this.props.searchHandler}
        />
        <p>
          <input 
            type="checkbox"
            checked={inStockOnly}
            onChange={this.props.checkHandler}
          />
          Only show products that are in-stock
        </p>
      </form>
    )
  }
}

export default SearchBar