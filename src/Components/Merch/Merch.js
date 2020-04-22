import React from 'react';
import PropTypes from 'prop-types';

function Merch(props) {
  let quantity = '';
  if (props.quantity > 0) {
    quantity = <h4>Quantity available: {props.quantity}</h4>;
  } else {
    quantity = <h4>Out of stock</h4>;
  }

  function handleDecreaseQuantity() {
    props.increaseQuantity();
  }

  function handleIncreaseQuantity() {
    props.decreaseQuantity();
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
      <button onClick={handleDecreaseQuantity}>Add to cart</button>
      <button onClick={handleIncreaseQuantity}>Restock</button>
    </div>
  );
}

Merch.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired
};

export default Merch;