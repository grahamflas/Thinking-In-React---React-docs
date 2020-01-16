import React from 'react';
import ProductCategoryRow from '../Components/ProductCategoryRow';
import ProductRow from '../Components/ProductRow';

class ProductTable extends React.Component{
  render(){
    const {filterText, inStockOnly} = this.props

    const rows = [];
    let lastCategory = null;

    this.props.products.forEach(product => {
      //apply filters
      if (product.name.indexOf(filterText) === -1) return
      if (inStockOnly && !product.stocked) return

      //how to render if pass filters
      if (product.category !== lastCategory){
        rows.push( 
          <ProductCategoryRow 
            category={product.category} 
            key={product.category}
          /> 
        );
      } 

      rows.push(
        <ProductRow 
          product={product}
          key={product.name}
        />
      )
      lastCategory = product.category
    });

    return(
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    )
  }
}

export default ProductTable