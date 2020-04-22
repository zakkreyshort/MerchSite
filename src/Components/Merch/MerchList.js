import React from 'react';
import PropTypes from "prop-types";
import Merch from './Merch';
import MerchControl from '.././MerchControl';

function MerchList(props) {
  
  function increaseQuantity() {
    props.increaseQuantityState();
  }
  
  function decreaseQuantity(){
    props.decreaseQuantityState();
  }
  
  return (
    <React.Fragment>
      {props.merchList.map((merch) =>
      <Merch name={merch.name}
      description={merch.description}
      quantity={merch.quantity}
      key={merch.id} />
      )}
    </React.Fragment>
  );
}

MerchList.propTypes = {
  merchList: PropTypes.array
};

export default MerchList;