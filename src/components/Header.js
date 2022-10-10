import '../css/header.css';
import '../css/main-menu.css';
import { Nav, NavDropdown, Navbar, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { useContext } from 'react';
import { BillContext } from '../context/BillContext';

function Header () {
const { setUserLocale, menuTitle, user } = useContext(BillContext);

    return <div className="header">
        <div className="container">
            <Navbar expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Link className='nav-link' to="/main"><FormattedMessage id="home" defaultMessage="Home" /></Link>
                <Link className='nav-link' to="/plan-bills"><FormattedMessage id="planing" defaultMessage="Planing" /></Link>
                <NavDropdown title={menuTitle} id="basic-nav-dropdown">
                    <Link className='dropdown-item' to="/day"><FormattedMessage id="day" defaultMessage="Day" /></Link>
                    <Link className='dropdown-item' to="/month"><FormattedMessage id="month" defaultMessage="Month" /></Link>
                    <Link className='dropdown-item' to="/year"><FormattedMessage id="year" defaultMessage="Year" /></Link>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            <div className='languages'>
              <FormattedMessage id="greeting" defaultMessage="Hey, {user}" values={{name: "Helen"}} />
              <Image onClick={() => {setUserLocale('en-US'); document.querySelector('.en').classList.toggle('d-none'); document.querySelector('.ua').classList.toggle('d-none')}} className="ml-2 en" src='./media/united-kingdom-en.png'></Image>
              <Image onClick={() => {setUserLocale('uk-UA'); document.querySelector('.en').classList.toggle('d-none'); document.querySelector('.ua').classList.toggle('d-none')}} className="ml-2 ua d-none" src='./media/ukraine.jpg'></Image>
            </div>
            </Navbar>
        </div>
    </div>
}

export default Header;