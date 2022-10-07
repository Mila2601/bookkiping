import React, { useContext } from 'react'
import { BillContext } from '../context/BillContext';
import IncomeItem from './IncomeItem';

function IncomeList() {

  const { bills } = useContext(BillContext);

const sortByDate = (a, b) => {
    return a.date - b.date;
}
  return (
    <div className='income-list p-2'>
      <div>{bills.filter((el) => el.isPlaned === false ).sort(sortByDate).map( (bill, index) => (
        <IncomeItem 
            key={index} 
            bill={bill} 
        />
      ))}</div>
    </div>
  )
}

export default IncomeList
