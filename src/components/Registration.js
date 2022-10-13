import React, { useContext, useRef } from 'react';
import { Image } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { BillContext } from '../context/BillContext';
import "../css/income-form.css";

function Registration() {

  const { youAreInSystem, passIsNotTheSame } = useContext(BillContext);

  const name = useRef(null);
  const email = useRef(null);
  const pass = useRef(null);
  const passCopy = useRef(null);

  function register (e) {
    e.preventDefault();

    // Compare the password and a copy of the password for detection case of an accidental mistake
    if (pass.current.value === passCopy.current.value) {
      // TODO: Organize receiving data from the server.
      // let response = fetch('https://git.heroku.com/diplom-05-01.git/registration', {
      //     method: 'POST',
      //     mode: "cors",
      //     headers: {
      //         "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({email: 'someemail@gmail.com', password: 'qwerty'})
      // }).then(response => response.json()).then( response => alert(response));

      let users = JSON.parse(localStorage.getItem('users')) || [];

      // Checking if already is in the list of users and the fields are filled
      if (users.some(user => user.email === email.current.value)) {
        alert(youAreInSystem);
        window.location.assign('/');
      } else if (name.current.value == '' ||
                email.current.value == '' ||
                pass.current.value == '') {
        alert('All fields are required');
      } else {
        users.push({
          name: name.current.value,
          email: email.current.value,
          password: pass.current.value,
          categories: [],
          bills: []
        });

        // TODO: When the data would be receive from the server, this part can be removed.
        //       Save an array of users to the server.
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('bills', JSON.stringify([]));
        localStorage.setItem('categories', JSON.stringify(['Food', 'Rent', 'Phone']));
        localStorage.setItem('user', JSON.stringify({
          name: name.current.value,
          email: email.current.value,
          password: pass.current.value,
          categories: ['Food', 'Rent', 'Phone'],
          bills: []
        }));

        window.location.href = '/main';
        }
    } else alert(passIsNotTheSame);
  }

  return (
    <div className='registration container bg-white p-4'>
      <h1 className='p-2'>
        <FormattedMessage id="registration" defaultMessage="Registration" />
      </h1>
      <form onSubmit={register} className="d-flex income-form">
        <div className='form-inner'>
          <input className=""
                  type="text"
                  name="reg"
                  id="reg"
                  placeholder='Your Name'
                  ref={name} />
          <input className=""
                  type="email"
                  name="email-reg"
                  id="email-reg"
                  placeholder='Your email'
                  ref={email} />
          <input className=""
                  type="password"
                  name="password-reg"
                  id="password-reg"
                  placeholder="Enter password"
                  ref={pass}/>
          <input className=""
                  type="password"
                  name="password-reg-copy"
                  id="password-reg-copy"
                  placeholder="Enter password again"
                  ref={passCopy}/>
          <input type='submit' className="income-item"/>
        </div>
      </form>
      {/* TODO: Organize social login. */}
      <div className=''>
        <h2 className='p-2'>
          <FormattedMessage id="registrationBy" defaultMessage="Registration by fb or gmail: "/>
        </h2>
        <Image className='mr-3' height={32} src='./media/fb.png'></Image>
        <Image height={32} src='./media/gmail.png'></Image>
      </div>
    </div>
  )
}

export default Registration;
