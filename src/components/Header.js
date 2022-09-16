import '../css/header.css';
import '../css/main-menu.css';
import { Nav, NavDropdown, Navbar, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

function choseLocaleTitle(locale) {
    switch (locale) {
      case 'ua':
        return 'Статистика'
      default:
        return 'Statistics'
    }
  }

function Header () {
const title = choseLocaleTitle('ua');

    return <div className="header">
        <div className="container">
            <Navbar expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Link className='nav-link' to="/"><FormattedMessage id="home" defaultMessage="Home" /></Link>
                <Link className='nav-link' to="/plan-bills"><FormattedMessage id="planing" defaultMessage="Planing" /></Link>
                <NavDropdown title={title} id="basic-nav-dropdown">
                    <Link className='dropdown-item' to="#action/3.1"><FormattedMessage id="day" defaultMessage="Day" /></Link>
                    <Link className='dropdown-item' to="#action/3.2"><FormattedMessage id="month" defaultMessage="Month" /></Link>
                    <Link className='dropdown-item' to="#action/3.3"><FormattedMessage id="year" defaultMessage="Year" /></Link>
                    <NavDropdown.Divider />
                    <Link className='dropdown-item' to="/categories"><FormattedMessage id="categories" defaultMessage="Categories" /></Link>
                </NavDropdown>
                </Nav>
                <FormattedMessage id="greeting" defaultMessage="Hey, {name}" values={{name: "Helen"}} />
                <Link className='mx-2' to='#'><Image src='./media/united-kingdom-en.png'></Image></Link>
            </Navbar.Collapse>
            </Navbar>
        </div>
    </div>
}

export default Header;