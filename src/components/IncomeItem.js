import React, { useContext } from 'react';
import { BillContext } from '../context/BillContext';


function IncomeItem({bill}) {

    const {deleteBill} = useContext(BillContext);

    let date = new Date(bill.date);
    let day = () => {
        return date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    }
    let month = () => {
        return date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth() - 1;
    };
    let year = date.getFullYear();
    
return (
    <div className='income-item'>
        <button className='remove-item' onClick={ () => deleteBill(bill)}>x</button>  
        <div className='category'>{bill.category}</div>
        <div className='desc'>{bill.title}</div>   
        <div className='price'>{bill.price} грн</div> 
        <div className='date'>{day() + "." + month() + "." + year}</div>
    </div>
  )
}

export default IncomeItem
