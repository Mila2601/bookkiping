import { useContext, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { BillContext } from '../context/BillContext';
import '../css/income-form.css';

function Day () {

    const { bills, selectedDate, setSelectedDate } = useContext(BillContext);

    return <div className='statistics'>
        <h1><FormattedMessage id="yearStatistic" defaultMessage="Year statistics:" /></h1>
        <input className='date-day' type="date" onChange={ e => setSelectedDate(e.currentTarget.value) } />
        <div className='p-4 income-list mt-3'>
      {
        bills.map( bill => { 

        if (bill.isPlaned) {
          return (
              <div key={bill.title} className='income-item is-planed'>
                  <div>Planed</div>
                  <div className='category'>{bill.category}</div>
                  <div className='desc'>{bill.title}</div>   
                  <div className='price'>{(bill.price * 12).toFixed(2)} грн</div> 
                  <div className='date'>{(new Date(selectedDate)).getFullYear()}</div>
              </div>
            ) 
        } else if ((new Date(bill.date)).getFullYear() == (new Date(selectedDate)).getFullYear()) {      
          return (
              <div className='income-item'>
                  <div className='category'>{bill.category}</div>
                  <div className='desc'>{bill.title}</div>   
                  <div className='price'>{bill.price} грн</div> 
                  <div className='date'>{(new Date(bill.date)).getFullYear()}</div>
              </div>
            )
        }
      })
    }
  </div> 
  </div>
}

export default Day;