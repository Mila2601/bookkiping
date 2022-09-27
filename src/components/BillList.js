import React, { useContext, useState } from 'react';
import { BillContext } from '../context/BillContext';
import '../css/bill-list.css';
import { FormattedNumber, FormattedMessage } from 'react-intl';

function BillList() {

    const { bills, editBill, setEditModeEnabled } = useContext(BillContext);
 
  return (<>
  <div className='bill-list-container mt-3'>
    {
      bills.map( (bill, index ) => {
        return (
          <div key={index} className='bill-list-row'>
            <input type="checkbox" className="form-check-input" checked={bill.enabled} onChange={() => editBill({
              title: bill.title,
              monthlyCost: bill.monthlyCost,
              enabled: !bill.enabled
            })}></input>
            <div className='bill-list-row-content'>
              {bill.title} - <FormattedNumber value={bill.monthlyCost} style="currency" currency="UAH" />
            </div>
          </div>
        )
      })
    }
  </div>  
  <h6 className='edit edit-mode-btn mt-3' onClick={() =>setEditModeEnabled(true)}><FormattedMessage id="edit" defaultmessage="Edit" /></h6>
  </>  
  )
}
export default BillList;
