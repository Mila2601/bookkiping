import React, { useContext } from 'react'
import { BillContext } from '../context/BillContext'

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
        {selectedCostInterval} bill cost: <span className='total-cost'>{
            '$' + bills.reduce( (acc, value) => {
                return value.enabled ? acc + moneyIntervalTransform(value.monthlyCost) : acc
            }, 0).toFixed(2)
            }</span>
      
    </div>
    <div className='total-saved-container'>{selectedCostInterval} saved
        <span className='total-saved'>
        {
            ' $' + bills.reduce( (acc, value) => {
                return !value.enabled ? acc + moneyIntervalTransform(value.monthlyCost) : acc
            }, 0).toFixed(2)
        }   
        </span>
    </div>
    </>)
}

export default BillTotal
