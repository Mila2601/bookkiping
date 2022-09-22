import React from 'react';
import '../css/right-menu.css';
import { Image, Navbar } from 'react-bootstrap';

function login (e) {
    e.preventDefault();

}

function register (e) {
    e.preventDefault();
}

function RightMenu() {
  return (<Navbar className="right-navbar" expand="lg">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <div id="right" className='right-menu bg-white p-2'>
                <h2 className='p-2'>Log in</h2>
                <form onSubmit={login} className="d-flex">
                <input type="text" name="login" id="login" placeholder='Your login / email' className='my-2' />
                <input type="password" name="password" id="password" placeholder="Enter Password" className='my-2' />
                <button type='submit' className='my-2'>Log in</button>
                </form>
                <div className='registration'>
                    <h2 className='p-2'>Or register</h2>
                    <form onSubmit={register} className="d-flex">
                        <input type="text" name="login-reg" id="login-reg" placeholder='Your login / email' className='my-2'/>
                        <input type="password" name="password-reg" id="password-reg" placeholder="Enter password" className='my-2'/>
                        <input type="password" name="password-reg-copy" id="password-reg-copy" placeholder="Enter password again" className='my-2'/>
                        <button type='submit' className='my-2'>Register</button>
                    </form>
                    <div className='text-center'>
                        <h2 className='p-2'>Registration by fb or gmail:</h2>
                        <Image className='mr-3' height={32} src='./media/fb.png'></Image>
                        <Image height={32} src='./media/gmail.png'></Image>
                    </div>
                </div>
            </div>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default RightMenu;
