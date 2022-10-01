import React, { useContext } from 'react';
import AddBill from './AddBill';
import BillList from './BillList';
import BillTotal from './BillTotal';
import BillOptions from './BillOptions';
import { BillContext } from '../context/BillContext';
import EditBills from './EditBills';

function Planing() {

  const { editModeEnabled, renderSelect } = useContext(BillContext);
  renderSelect();
  
  return (
    <div>
      {
        editModeEnabled ? <EditBills /> : <span><BillOptions /><AddBill /><BillList /><BillTotal /></span>
      }
    </div>
  )
}

export default Planing;
