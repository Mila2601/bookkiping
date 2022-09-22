import React from 'react'

function IncomeItem({ income, index, removeIncome }) {
    let date = new Date(income.date);
    let day = () => {
        return date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    }
    let month = () => {
        return date.getMonth() < 10 ? "0" + (date.getMonth()-1) : date.getMonth() - 1;
    };
    let year = date.getFullYear();

    const removeHandle = i => {
        removeIncome(i);
    }

  return (
    <div className='income-item'>
        <button className='remove-item' onClick={ () => removeHandle(index)}>x</button>  
        <div className='category'>{income.categorie}</div>
        <div className='desc'>{income.desc}</div>   
        <div className='price'>${income.price}</div> 
        <div className='date'>{day() + "." + month() + "." + year}</div>
    </div>
  )
}

export default IncomeItem
