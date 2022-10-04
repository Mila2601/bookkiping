import React, { useContext } from 'react';
import { BillContext } from '../context/BillContext';
import { FormattedNumber, FormattedMessage } from 'react-intl';

const BillTotal = () => {

    const { bills, selectedCostInterval } = useContext(BillContext);
    const moneyIntervalTransform = cost => {
        const monthlyCost = Number.parseFloat(cost);

        switch (selectedCostInterval) {
            case "Monthly":
                return monthlyCost;
            case "Yearly":
                return monthlyCost * 12;
            case "Daily":
                return monthlyCost * 12 / 365;
            default:
                return 0;
        }
    }
  
  return (<>
    <div className='bill-total-container'>
        <FormattedMessage id={selectedCostInterval.toLowerCase()} defaultMessage={selectedCostInterval} /> <FormattedMessage id="billCost" defaultMessage="bill cost: " /><span className='total-cost'>{
            <FormattedNumber value={bills.filter(bill => bill.isPlaned === true).reduce( (acc, value) => {
                return value.enabled ? acc + moneyIntervalTransform(value.price) : acc
            }, 0).toFixed(2)} style="currency" currency="UAH" />
            }</span>
      
    </div>
    <div className='total-saved-container pb-4'><FormattedMessage id={selectedCostInterval.toLowerCase()} defaultMessage={selectedCostInterval} /> <FormattedMessage id="saved" defaultMessage=" saved: " /><span className='total-saved'> 
        {
            <FormattedNumber value={bills.filter(bill => bill.isPlaned === true).reduce( (acc, value) => {
                return !value.enabled ? acc + moneyIntervalTransform(value.price) : acc
            }, 0).toFixed(2)} style="currency" currency="UAH" />
        }   
        </span>
    </div>
    </>)
}

export default BillTotal
