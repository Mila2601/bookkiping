import React, { useContext } from 'react';
import { BillContext } from '../context/BillContext';


function IncomeItem({bill}) {

    const {deleteBill} = useContext(BillContext);

    let day = (date) => {
        return date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    }
    let month = (date) => {
        return date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
    };

    if (bill.isPlaned) {
        return (
            <div className='income-item is-planed'>
                <div>Planed</div>
                <div className='category'>{bill.category}</div>
                <div className='desc'>{bill.title}</div>   
                <div className='price'>{(bill.price * 12 / 365).toFixed(2)} грн</div> 
                <div className='date'>{day(new Date()) + "." + month(new Date()) + "." + (new Date()).getFullYear()}</div>
            </div>
          ) 
    } else {
    
return (
    <div className='income-item'>
        <button className='remove-item' onClick={ () => deleteBill(bill)}>x</button>  
        <div className='category'>{bill.category}</div>
        <div className='desc'>{bill.title}</div>   
        <div className='price'>{bill.price} грн</div> 
        <div className='date'>{day(new Date(bill.date)) + "." + month(new Date(bill.date)) + "." + (new Date(bill.date)).getFullYear()}</div>
    </div>
  )}
}

export default IncomeItem
