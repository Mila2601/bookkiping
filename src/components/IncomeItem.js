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

    if (bill.isPlaned) {
        return (
            <div className='income-item is-planed'>
                <div>Planed</div>
                <div className='category'>{bill.category}</div>
                <div className='desc'>{bill.title}</div>
                <div className='price'>{Number(bill.price).toFixed(2)} грн</div>
                <div className='date'>{day(new Date(bill.date)) + "." + month(new Date(bill.date)) + "." + (new Date(bill.date)).getFullYear()}</div>
            </div>
          )
    } else {
        return (
            <div className='income-item'>
                <button className='remove-item' onClick={ () => deleteBill(bill)}>x</button>
                <div className='category'>{bill.category}</div>
                <div className='desc'>{bill.title}</div>
                <div className='price'>{Number(bill.price).toFixed(2)} грн</div>
                <div className='date'>{day(new Date(bill.date)) + "." + month(new Date(bill.date)) + "." + (new Date(bill.date)).getFullYear()}</div>
            </div>
        )
}}

export default IncomeItem;
