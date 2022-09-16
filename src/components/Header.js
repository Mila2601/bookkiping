import '../css/header.css';
import '../css/main-menu.css';
import { Nav, NavDropdown, Navbar, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header () {
    return <div className="header">
        <div className="container">
            <Navbar expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Link className='nav-link' to="/">Home</Link>
                <Link className='nav-link' to="/plan-bills">Planing</Link>
                <NavDropdown title="Statistcs" id="basic-nav-dropdown">
                    <Link className='dropdown-item' to="#action/3.1">Day</Link>
                    <Link className='dropdown-item' to="#action/3.2">Month</Link>
                    <Link className='dropdown-item' to="#action/3.3">Year</Link>
                    <NavDropdown.Divider />
                    <Link className='dropdown-item' to="/categories">Categories</Link>
                </NavDropdown>
                </Nav>
                Hey, Helen!
                <Link className='mx-2' to='#'><Image src='./media/united-kingdom-en.png'></Image></Link>
            </Navbar.Collapse>
            </Navbar>
        </div>
    </div>
}

export default Header;