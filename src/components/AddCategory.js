import React, { useContext } from 'react';
import { BillContext } from '../context/BillContext';
import { FormattedMessage } from 'react-intl';

function AddCategory() {

    const { categories, updateCategories, alreadyHaveCat } = useContext(BillContext);

  return (
  <>
    <input className='edit-bill-cost-input edit-category-input' type='text' ></input> 
    <h6 onClick={ () => {
      if (document.querySelector('.edit-category-input').value.split(" ").join('') !== '' ) {
      if (!categories.includes(document.querySelector('.edit-category-input').value)) {
        updateCategories(document.querySelector('.edit-category-input').value);
        document.querySelector('.edit-category-input').value = "";
      }  else { alert(alreadyHaveCat) }  
    }  
      }} className="delete-btn"><FormattedMessage id="add" defaultMessage='ADD' /></h6>
  </>
  )
}

export default AddCategory;
