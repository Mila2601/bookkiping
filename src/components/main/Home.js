import { useContext, useEffect } from 'react';
import { FormattedMessage, FormattedNumber } from 'react-intl';
import { BillContext } from '../../context/BillContext';
import IncomeForm from './IncomeForm';
import IncomeList from './IncomeList';

function Home () {

    const {setTotal, bills, total} = useContext(BillContext);

    useEffect( () => {
        let totalPrice = 0;
        // Filter enabled bills
        let filteredBills = bills.filter(bill => {
            return bill.enabled ? 1 : 0;
        });
        // Count enabled bills total price
        for ( let i = 0; i < filteredBills.length; i++) {
            totalPrice += +parseInt(filteredBills[i].price);
        }
        setTotal(totalPrice);
    }, [bills])

    return <div className='home d-inline-block text-center mt-4 pb-4'>
        <h1>
            <FormattedMessage id="addIncomeHere" defaultMessage="Add income / bill here:" />
        </h1><br />
        <IncomeForm />
        <IncomeList />
        <div className='total-income text-right p-2'>
            <FormattedMessage id="total" defaultMessage="Total: " />
            <FormattedNumber value={total} style="currency" currency="UAH" />
        </div>
    </div>
}
 export default Home;