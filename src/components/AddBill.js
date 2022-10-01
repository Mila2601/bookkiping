import React, { useContext, useState, useEffect } from 'react';
import { BillContext } from '../context/BillContext';
import '../css/income-form.css';
import { FormattedMessage } from 'react-intl';


function AddBill() {

  const [newBillTitle, setNewBillTitle] = useState('');
  const [price, setPrice] = useState('');

  const billObjectValid = () => {
    const costValid = price && Number.parseFloat(price);
    const titleValid = newBillTitle && newBillTitle.split(' ').join('') !== "";
    return titleValid && costValid;
  }

  const clearForm = () => {
    setNewBillTitle('');
    setPrice('');
  }

  const { updateBills, phbill, phcost } = useContext(BillContext);
  return (
    <div className='add-bill-container'>
      <select className="select-planed-bills brands-select mb-2 form-control" name="category" id="category">
      </select>
      <input className='form-control add-bill-form-control'
             type='text'
             placeholder={phbill}
             value={newBillTitle}
             onChange={ e => setNewBillTitle(e.currentTarget.value)} />
      <input className='form-control add-cost-form-control'
             type='number'
             placeholder={phcost}
             value={price}
             onChange={ e => setPrice(e.currentTarget.value) } />  
      <button type="submit" value="Add Bill" onClick={
        () => {
          if (billObjectValid()) {
            updateBills({
              title: newBillTitle,
              price: price,
              category: document.querySelector('.select-planed-bills').value,
              enabled: true,
              isPlaned: true,
              date: new Date().getTime()
            });
            clearForm();
          }
        }
      } ><FormattedMessage id="plan" defaultMessage="Plan"/></button>
    </div>
  )
}
export default AddBill;
