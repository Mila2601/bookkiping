import React, { useContext, useRef } from 'react';
import { Image } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { BillContext } from '../context/BillContext';
import "../css/income-form.css";

function Registration() {

    const  { setUser, user } = useContext(BillContext);

    const name = useRef(null);
    const email = useRef(null);
    const pass = useRef(null);
    const passCopy = useRef(null);

    function register (e) {
        e.preventDefault();
        if (pass.current.value === passCopy.current.value) {
            fetch('https://try-agan.herokuapp.com/users').then(response => response.json()).then( response => alert(response));
            // setUser({
            //     name: name.current.value,
            //     email: email.current.value,
            //     password: pass.current.value,
            // }); 
            // let response = fetch('https://try-agan.herokuapp.com/registration', {
            //     method: 'POST',
            //     headers: {
            //     'Content-Type': 'application/json;charset=utf-8'
            //     },
            //     body: JSON.stringify(user)
            // }).then(response => response.json()).then( response => alert(response));
            // console.log(response);
            // localStorage.setItem('user', JSON.stringify({
            //     name: name.current.value,
            //     email: email.current.value,
            //     password: pass.current.value,
            // }));
            //window.location.href = '/main';
        } else alert("Make sure that password and password repeat are the same");
    }

  return (
    <div className='registration container bg-white p-4'>
        <h1 className='p-2'><FormattedMessage id="registration" defaultMessage="Registration" /></h1>
        <form onSubmit={register} className="d-flex income-form">
            <div className='form-inner'>
                <input className="" type="text" name="reg" id="reg" placeholder='Your Name' ref={name} />
                <input className="" type="email" name="email-reg" id="email-reg" placeholder='Your email' ref={email} />
                <input className="" type="password" name="password-reg" id="password-reg" placeholder="Enter password" ref={pass}/>
                <input className="" type="password" name="password-reg-copy" id="password-reg-copy" placeholder="Enter password again" ref={passCopy}/>
                <input type='submit' className="income-item"/>
            </div>
        </form>
        <div className=''>
            <h2 className='p-2'><FormattedMessage id="registrationBy" defaultMessage="Registration by fb or gmail: "/></h2>
            <Image className='mr-3' height={32} src='./media/fb.png'></Image>
            <Image height={32} src='./media/gmail.png'></Image>
        </div>
    </div>
  )
}

export default Registration;
