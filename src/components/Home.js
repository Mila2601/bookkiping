import { FormattedMessage, FormattedNumber } from 'react-intl';

function Home () {
    return <div>
        <h1><FormattedMessage
          id="addIncomeHere"
          defaultMessage="Add income / bill here:" /></h1>
                <br />
        <FormattedNumber value={19} style="currency" currency="UAH" />
    </div>
}
 export default Home;