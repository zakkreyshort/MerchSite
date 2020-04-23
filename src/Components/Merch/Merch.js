import React from 'react';
import PropTypes from 'prop-types';

function Merch(props) {
  let quantity = '';
  if (props.quantity > 0) {
    quantity = <h4>Quantity available: {props.quantity}</h4>;
  } else {
    quantity = <h4>Out of stock</h4>;
  }

  const styledComponent = {
      border: '2px black solid',
      borderRadius: '15px',
      maxWidth: '400px',
      margin:'5px' 
    }

  return (
    
    <div style={styledComponent}>
      <h2>Item name: {props.name}</h2>
      <h4>Description: {props.description}</h4>
      <h4>{quantity}</h4>
      {/* <button onClick={()=> onClickingDecrease(props.id)}>Add to cart</button>
      <button onClick={()=> onClickingIncrease(props.id)}>Restock</button> */}
      <button onClick={() => props.whenMerchClicked(props.id)}>Remove Item</button>
    </div>
  );
}

Merch.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenMerchClicked: PropTypes.func
};

export default Merch;