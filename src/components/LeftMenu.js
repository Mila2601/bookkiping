import { Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/left-menu.css';
import { FormattedMessage } from 'react-intl';

function LeftMenu () {
    return <Nav defaultActiveKey="/main" className="flex-column left-menu">
    <b className='mt-2 text-center'><FormattedMessage id="statistics" defaultMessage="Statistics" /></b>
    <NavDropdown.Divider />
    <ul>
    <li><Link className='nav-link' to="/day"><FormattedMessage id="day" defaultMessage="Day" /></Link></li>
    <li><Link className='nav-link' to="/month"><FormattedMessage id="month" defaultMessage="Month" /></Link></li>
    <li><Link className='nav-link' to="/year"><FormattedMessage id="year" defaultMessage="Year" /></Link></li>
    <li><Link className='nav-link' to="/categories"><FormattedMessage id="categories" defaultMessage="Categories" /></Link></li>
    </ul>
    <NavDropdown.Divider />
    <Link className='nav-link font-weight-bold' to="/plan-bills"><FormattedMessage id="planYourBills" defaultMessage="Plan your bills" /></Link>
    <NavDropdown.Divider />
    <Link className='nav-link font-weight-bold mb-2' to="/edit-categories"><FormattedMessage id="editCategories" defaultMessage="Edit categories" /></Link>
  </Nav>
}

export default LeftMenu;