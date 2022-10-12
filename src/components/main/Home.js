import { useContext, useEffect } from 'react';
import { FormattedMessage, FormattedNumber } from 'react-intl';
import { BillContext } from '../../context/BillContext';
import IncomeForm from './IncomeForm';
import IncomeList from './IncomeList';

function Home () {

    const {setTotal, bills, setBills, setCategories, total} = useContext(BillContext);

    useEffect( () => {
        let temp = 0;
        let filteredBills = bills.filter(bill => {
            return bill.enabled ? 1 : 0;
        });
        for ( let i = 0; i < filteredBills.length; i++) {
            temp += +parseInt(filteredBills[i].price);
        }
        setTotal(temp);
    }, [bills])

    useEffect( () => {
        setBills(JSON.parse(localStorage.getItem('bills')));
        setCategories((JSON.parse(localStorage.getItem('categories'))))
    }, [])

    return <div className='home d-inline-block text-center mt-4 pb-4'>
        <h1><FormattedMessage id="addIncomeHere" defaultMessage="Add income / bill here:" /></h1><br />
        <IncomeForm />
        <IncomeList />
        <div className='total-income text-right p-2'>
            <FormattedMessage id="total" defaultMessage="Total: " />
            <FormattedNumber value={total} style="currency" currency="UAH" />
        </div>
    </div>
}
 export default Home;