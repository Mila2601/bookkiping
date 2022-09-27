import React, { useContext } from 'react';
import { BillContext } from '../context/BillContext';
import { FormattedMessage } from 'react-intl';

const EditBills = () => {

    const { bills, setEditModeEnabled, editBill, deleteBill } = useContext(BillContext);

  return (
    <div className='edit-bill-container mt-3'>
        {
            bills.map( (bill, billIndex) => {
                return (
                    <div key={billIndex} className='edit-bill-row'>
                        <div className='edit-bill-row-content'>
                            <div className='edit-bill-title'>
                                {bill.title}
                            </div>
                            <input className='edit-bill-cost-input' type='number' value={bill.monthlyCost} onChange={ e => editBill({
                                title: bill.title,
                                enabled: bill.enabled,
                                monthlyCost: e.target.value
                            })}></input> 
                            <h6 onClick={ () => deleteBill(bill)} className="delete-btn"><FormattedMessage id="delete" defoltMessage='DELETE' /></h6>
                        </div>
                        <hr></hr>
                    </div>
                )
            })
        }  
        <h6 className='edit-mode-btn mt-3' onClick={() => setEditModeEnabled(false)}>
            <FormattedMessage id="done" defoltMessage='Done' />
        </h6>    
    </div>
  )
}

export default EditBills