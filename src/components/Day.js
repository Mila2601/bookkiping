import { useContext, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { BillContext } from '../context/BillContext';
import '../css/income-form.css';

function Day () {

  const { bills, selectedDate, setSelectedDate } = useContext(BillContext);

  return (
      <div className='statistics'>
      <h1><FormattedMessage id="dayStatistic" defaultMessage="Day statistics:" /></h1>
      <input className='date-day' type="date" onChange={ e => setSelectedDate((new Date(e.currentTarget.value)).getTime()) } />
      <div className='p-4 income-list mt-3'>
    {
      bills.map( bill => { 

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
                  <div className='date'>{day(new Date(selectedDate)) + 
                  "." + month(new Date(selectedDate)) + 
                  "." + (new Date(selectedDate)).getFullYear()}</div>
              </div>
            ) 
        } else if ((new Date(bill.date)).getDate() == (new Date(selectedDate)).getDate()) {      
          return (
              <div className='income-item'>
                  <div className='category'>{bill.category}</div>
                  <div className='desc'>{bill.title}</div>   
                  <div className='price'>{bill.price} грн</div> 
                  <div className='date'>{day(new Date(bill.date)) + 
                  "." + month(new Date(bill.date)) + 
                  "." + (new Date(bill.date)).getFullYear()}</div>
              </div>
            )
        }
      })
    } 
      </div>  
      </div>
  )
}

export default Day;