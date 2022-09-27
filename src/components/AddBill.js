import React, { useContext, useState, useEffect } from 'react';
import { BillContext } from '../context/BillContext';
import '../css/income-form.css';
import { FormattedMessage } from 'react-intl';


function AddBill() {

  const [newBillTitle, setNewBillTitle] = useState('');
  const [newBillCost, setNewBillCost] = useState('');

  const billObjectValid = () => {
    const costValid = newBillCost && Number.parseFloat(newBillCost);
    const titleValid = newBillTitle && newBillTitle.split('').find( char => char !== " ");
    return titleValid && costValid;
  }

  const clearForm = () => {
    setNewBillTitle('');
    setNewBillCost('');
  }

  const { updateBills, phbill, phcost } = useContext(BillContext);

  return (
    <div className='add-bill-container'>
      <select className="brands-select" name="categorie" id="categorie">
        <option value="no category"><FormattedMessage id="chooseCategory" defaultMessage="Choose category" /></option>
      </select>
      <input className='form-control add-bill-form-control'
             type='text'
             placeholder={phbill}
             value={newBillTitle}
             onChange={ e => setNewBillTitle(e.currentTarget.value)} />
      <input className='form-control add-cost-form-control'
             type='number'
             placeholder={phcost}
             value={newBillCost}
             onChange={ e => setNewBillCost(e.currentTarget.value) } />  
      <button type="submit" value="Add Bill" onClick={
        () => {
          if (billObjectValid()) {
            updateBills({
              title: newBillTitle,
              monthlyCost: newBillCost,
              category: '',
              enabled: true
            });
            clearForm();
          }
        }
      } ><FormattedMessage id="plan" defaultMessage="Plan"/></button>
    </div>
  )
}
export default AddBill;
