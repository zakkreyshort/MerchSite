import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function EditMerchForm(props) {



  return(
    <React.Fragment>
      <div style={styles}>
        <ReusableForm 
          buttonText="Update Merch" />
      </div>
    </React.Fragment>
  );
}

export default EditMerchForm;