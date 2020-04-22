import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewMerchForm(props) {
   
    function handleNewMerchFormSubmission(event) {
      event.preventDefault();
      props.onNewMerchCreation({name: event.target.name.value, description: event.target.description.value, quantity: event.target.quantity.value, id: v4()});
    }
  
  return (
    <React.Fragment>
      <div style={styles}>
        <form onSubmit={handleNewMerchFormSubmission}>
          <input
            required
            type='text'
            name='name'
            placeholder='Name of item' /><br />
          <input
            required
            type='text'
            name='description'
            placeholder='Description' /><br />
          <input
            required
            type='number'
            name='quantity'
            placeholder='Quantity' /><br />
          <button type='submit'>Add to merch list!</button>
        </form>
      </div>
    </React.Fragment>
  );
}

const styles = {
  display: 'inlineBlock'
}

NewMerchForm.propTypes = {
  onNewMerchCreation: PropTypes.func
};

export default NewMerchForm;