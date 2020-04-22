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

  return (
    <React.Fragment>
      <h1>Item name: {props.name}</h1>
      <h2>Description: {props.description}</h2>
      <h2>{quantity}</h2>
      <button onClick={handleDecreaseQuantity}>Add to cart</button>
      <button onClick={handleIncreaseQuantity}>Restock</button>
    </React.Fragment>
  );
}

Merch.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired
};

export default Merch;