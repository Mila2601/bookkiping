import React, { useContext } from 'react';
import { BillContext } from '../context/BillContext';
import { FormattedMessage } from 'react-intl';

const BillOptions = () => {
    const { selectedCostInterval, setselectedCostInterval } = useContext(BillContext);
  return (
    <div className='interval-options-container mt-3'>
        <div id="Daily" className={selectedCostInterval === 'Daily' ? 'selected-interval' : 'interval' } onClick={e => setselectedCostInterval(e.target.id)}>
            <FormattedMessage id="daily" defaultMessage="Daily" />
        </div>
        <div id="Monthly" className={selectedCostInterval === 'Monthly' ? 'selected-interval' : 'interval' } onClick={e => setselectedCostInterval(e.target.id)}>
            <FormattedMessage id="monthly" defaultMessage="Monthly" />
        </div>
        <div id="Yearly" className={selectedCostInterval === 'Yearly' ? 'selected-interval' : 'interval' } onClick={e => setselectedCostInterval(e.target.id)}>
            <FormattedMessage id="yearly" defaultMessage="Yearly" />
        </div>
    </div>
  )
}

export default BillOptions;
