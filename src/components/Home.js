import { useContext, useEffect } from 'react';
import { FormattedMessage, FormattedNumber } from 'react-intl';
import { BillContext } from '../context/BillContext';
import IncomeForm from './IncomeForm';
import IncomeList from './IncomeList';

function Home ({totalIncome, setTotalIncome, income, setIncome}) {

    const { rate } = useContext(BillContext);

    useEffect( () => {
        let temp = 0;
        for ( let i = 0; i < income.length; i++) {
            temp += parseInt(income[i].price);
        }
        setTotalIncome(temp);
    }, [income])

    return <div className='home d-inline-block text-center'>
        <h1><FormattedMessage
          id="addIncomeHere"
          defaultMessage="Add income / bill here:" /></h1>
                <br />
        {/* <div><FormattedNumber value={19} style="currency" currency="UAH" /></div> */}
        <IncomeForm income={income} setIncome={setIncome} />
        <IncomeList income={income} setIncome={setIncome} />
        <div className='total-income text-right p-2'>Total: {totalIncome} {rate}</div>
    </div>
}
 export default Home;