import { useContext, useEffect } from 'react';
import { FormattedMessage, FormattedNumber } from 'react-intl';
import { BillContext } from '../context/BillContext';
import IncomeForm from './IncomeForm';
import IncomeList from './IncomeList';

function Home () {

    const {setTotalIncome, bills, totalIncome} = useContext(BillContext);

    useEffect( () => {
        let temp = 0;
        for ( let i = 0; i < bills.length; i++) {
            temp += parseInt(bills[i].price);
        }
        setTotalIncome(temp);
    }, [bills])

    return <div className='home d-inline-block text-center mt-4'>
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