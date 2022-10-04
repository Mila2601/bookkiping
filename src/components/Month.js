import { useContext, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { BillContext } from '../context/BillContext';
import '../css/income-form.css';

function Month () {

  const { bills, selectedDate, setSelectedDate } = useContext(BillContext);

  return <div className='statistics'>
      <h1><FormattedMessage id="monthStatistic" defaultMessage="Month statistics:" /></h1>
      <input className='date-day' type="date" onChange={ e => setSelectedDate(e.currentTarget.value) } />
      <div className='p-4 income-list mt-3'>
      {
        bills.map( bill => { 

        let month = (date) => {
            return date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
        };

        if (bill.isPlaned) {
          return (
              <div key={bill.title} className='income-item is-planed'>
                  <div>Planed</div>
                  <div className='category'>{bill.category}</div>
                  <div className='desc'>{bill.title}</div>   
                  <div className='price'>{Number(bill.price).toFixed(2)} грн</div> 
                  <div className='date'>{month(new Date(selectedDate)) + 
                  "." + (new Date(selectedDate)).getFullYear()}</div>
              </div>
            ) 
        } else if ((new Date(bill.date)).getMonth() == (new Date(selectedDate)).getMonth()) {      
          return (
              <div className='income-item'>
                  <div className='category'>{bill.category}</div>
                  <div className='desc'>{bill.title}</div>   
                  <div className='price'>{bill.price} грн</div> 
                  <div className='date'>{month(new Date(bill.date)) + 
                  "." + (new Date(bill.date)).getFullYear()}</div>
              </div>
            )
        }
      })
    }
  </div>  
  </div>
}

export default Month;