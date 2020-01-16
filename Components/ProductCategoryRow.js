import React from 'react';

class ProductCategoryRow extends React.Component{
  render(){
    return  (
      <div>
        {this.props.category}
      </div>
    )
  }
}

export default ProductCategoryRow