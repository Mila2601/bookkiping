import { useEffect } from 'react';
import { FormattedMessage, FormattedNumber } from 'react-intl';
import IncomeForm from './IncomeForm';
import IncomeList from './IncomeList';

function Home ({totalIncome, setTotalIncome, income, setIncome}) {

    useEffect( () => {
        let temp = 0;
        for ( let i = 0; i < income.length; i++) {
            temp += parseInt(income[i].price);
        }
        setTotalIncome(temp);
    }, [income])

    return <div className='home d-inline-block text-center mt-4'>
        <h1><FormattedMessage
          id="addIncomeHere"
          defaultMessage="Add income / bill here:" /></h1>
                <br />
        <IncomeForm income={income} setIncome={setIncome} />
        <IncomeList income={income} setIncome={setIncome} />
        <div className='total-income text-right p-2'><FormattedMessage
          id="total" defaultMessage="Total: " /><FormattedNumber value={totalIncome} style="currency" currency="UAH" /></div>
    </div>
}
 export default Home;