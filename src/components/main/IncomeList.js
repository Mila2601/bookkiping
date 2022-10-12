import React, { useContext } from 'react'
import { BillContext } from '../../context/BillContext';
import IncomeItem from './IncomeItem';

function IncomeList() {

  //const { bills } = useContext(BillContext);
  const bills = JSON.parse(localStorage.getItem('bills'));

  return (
    <div className='income-list p-2'>
      <div>{bills.filter((el) => el.enabled === true ).sort((a, b) => {
        return a.date < b.date ? -1 : 1
      }).map( (bill, index) => (
      <IncomeItem
            key={index} 
            bill={bill} 
        />
      ))}</div>
    </div>
  )
}

export default IncomeList
