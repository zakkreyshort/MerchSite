import React from 'react';
import PropTypes from 'prop-types';

function Merch(props) {
  return (
    <React.Fragment>
      <h1>{props.name}</h1>
      <h2>{props.description}</h2>
      <h4>{props.quantity}</h4>
    </React.Fragment>
  );
}

Merch.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired
};

export default Merch;