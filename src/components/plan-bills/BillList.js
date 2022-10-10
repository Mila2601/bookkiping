import React, { useContext, useState } from 'react';
import { BillContext } from '../../context/BillContext';
import '../../css/bill-list.css';
import { FormattedNumber, FormattedMessage } from 'react-intl';

function BillList() {

    const { bills, editBill, setEditModeEnabled } = useContext(BillContext);
 
  return (<>
  <div className='bill-list-container mt-3'>
    {
      bills.filter(bill => bill.isPlaned === true).map( (bill, index ) => {
        return (
          <div key={index} className='bill-list-row'>
            <input type="checkbox" className="form-check-input" checked={bill.enabled} onChange={() => editBill({
              title: bill.title,
              price: bill.price,
              enabled: !bill.enabled,
              isPlaned: bill.isPlaned,
              date: bill.date,
              category: bill.category
            })}></input>
            <div className='bill-list-row-content'>
            {bill.category}, {bill.title} - <FormattedNumber value={bill.price} style="currency" currency="UAH" />
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
