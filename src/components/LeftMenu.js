import { Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/left-menu.css'

function LeftMenu () {
    return <Nav defaultActiveKey="/home" className="flex-column left-menu">
    <b className='mt-2'>Statistics</b>
    <NavDropdown.Divider />
    <ul>
    <li><Link className='nav-link' to="/day">Day</Link></li>
    <li><Link className='nav-link' to="/month">Month</Link></li>
    <li><Link className='nav-link' to="/year">Year</Link></li>
    <li><Link className='nav-link' to="/categories">Categories</Link></li>
    </ul>
    <NavDropdown.Divider />
    <Link className='nav-link font-weight-bold' to="/plan-bills">Plan your bills</Link>
    <NavDropdown.Divider />
    <Link className='nav-link font-weight-bold mb-2' to="/edit-categories">Edit categories</Link>
  </Nav>

}

export default LeftMenu;