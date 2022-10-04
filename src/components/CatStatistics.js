import { useContext, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { BillContext } from '../context/BillContext';
import '../css/income-form.css';

function CatStatistics () {

    const { bills, setSelectedCat, selectedCat, renderSelect, selectedDate, setSelectedDate } = useContext(BillContext);

    renderSelect(); 

    return <div className='statistics'>
        <h1><FormattedMessage id="catStatistic" defaultMessage="Monthly statistic by category:" /></h1>
        <select className="brands-select cat-select" name="category" id="category" onChange={ e => setSelectedCat(e.currentTarget.value)} />
        <input className='date-day' type="date" onChange={ e => setSelectedDate((new Date(e.currentTarget.value)).getTime()) } />
        <div className='p-4 income-list mt-3'>
    {
      bills.map( bill => { 

        let month = (date) => {
            return date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
        };

        if (bill.isPlaned && (bill.category == selectedCat)) {
          return (
              <div className='income-item is-planed'>
                  <div>Planed</div>
                  <div className='category'>{bill.category}</div>
                  <div className='desc'>{bill.title}</div>   
                  <div className='price'>{Number(bill.price).toFixed(2)} грн</div> 
                  <div className='date'>{month(new Date(selectedDate)) + 
                  "." + (new Date(selectedDate)).getFullYear()}</div>
              </div>
            ) 
        } else if ((new Date(bill.date)).getMonth() == (new Date(selectedDate)).getMonth() && 
                   (bill.category == selectedCat)) {      
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

export default CatStatistics;
