import { useContext, useEffect } from 'react';
import { FormattedMessage, FormattedNumber } from 'react-intl';
import { BillContext } from '../context/BillContext';
import IncomeForm from './IncomeForm';
import IncomeList from './IncomeList';

function Home () {

    const {setTotalIncome, bills, totalIncome} = useContext(BillContext);

    useEffect( () => {
        let temp = 0;
        let filteredBills = bills.filter(bill => {
            return (Math.floor(bill.date / (24*60*60*1000)) == Math.floor((new Date()).getTime() / (24*60*60*1000)) &&
                    !bill.isPlaned) ? 1 : 0;
        });
        for ( let i = 0; i < filteredBills.length; i++) {
            temp += +parseInt(filteredBills[i].price);
        }
        let planedBills = bills.filter(bill => {
            return (bill.isPlaned && bill.enabled) ? 1 : 0
        });
        for ( let i = 0; i < planedBills.length; i++) {
            temp += +(parseInt(planedBills[i].price) * 12 / 365).toFixed(2);
        }
        setTotalIncome(temp);
    }, [bills])

    return <div className='home d-inline-block text-center mt-4 pb-4'>
        <h1><FormattedMessage
          id="addIncomeHere"
          defaultMessage="Add income / bill here:" /></h1>
                <br />
        <IncomeForm />
        <IncomeList />
        <div className='total-income text-right p-2'><FormattedMessage
          id="total" defaultMessage="Total: " /><FormattedNumber value={totalIncome} style="currency" currency="UAH" /></div>
    </div>
}
 export default Home;