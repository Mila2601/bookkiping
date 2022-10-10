import React, { useContext } from 'react';
import { BillContext } from '../context/BillContext';
import { FormattedMessage } from 'react-intl';

const EditBills = () => {

    const { bills, setEditModeEnabled, editBill, deleteBill } = useContext(BillContext);

  return (
    <div className='edit-bill-container mt-3 p-4'>
        {
            bills.filter( bill => bill.isPlaned === true).map( (bill, billIndex) => {
                return (
                    <div key={billIndex} className='edit-bill-row'>
                        <div className='edit-bill-row-content'>
                        <div className='edit-bill-title'>
                                {bill.category}
                            </div>
                            <div className='edit-bill-title'>
                                {bill.title}
                            </div>
                            <input className='edit-bill-cost-input' type='number' value={bill.price} onChange={ e => editBill({
                                title: bill.title,
                                enabled: bill.enabled,
                                price: e.target.value,
                                isPlaned: true,
                                category: bill.category
                            })}></input> 
                            <h6 onClick={ () => deleteBill(bill)} className="delete-btn"><FormattedMessage id="delete" defaultMessage='DELETE' /></h6>
                        </div>
                        <hr></hr>
                    </div>
                )
            })
        }  
        <h6 className='edit-mode-btn mt-3 ml-auto' onClick={() => setEditModeEnabled(false)}>
            <FormattedMessage id="done" defoltMessage='Done' />
        </h6>    
    </div>
  )
}

export default EditBills
