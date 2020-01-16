import React from 'react';
import ProductCategoryRow from '../Components/ProductCategoryRow';

class ProductTable extends React.Component{
  render(){
    const rows = [];
    let lastCategory = null;

    this.props.products.forEach(product => {
      if (product.category !== lastCategory){
        rows.push( <ProductCategoryRow /> );
      } 
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