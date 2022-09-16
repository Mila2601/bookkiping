import './css/App.css';
import Header from './components/Header';
import LeftMenu from './components/LeftMenu';
import Day from './components/Day';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import Home from './components/Home';
import DataUa from './components/lang/ua.js';
import DataEn from './components/lang/en-US';
import React from 'react';
import { Store } from './Store';

import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

import {IntlProvider, FormattedMessage, FormattedNumber} from 'react-intl';


function App() {

  const usersLocale = 'ua';
  const messages = DataUa;
  let store = Store;
  console.log(`store is ${store}`);

  return (
    <IntlProvider locale={usersLocale} messages={messages}>
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<div className='container bg-white'>
              <LeftMenu />  
              <Home />       
            </div> 
          }>  
          </Route>
          <Route path="/day" element={<div className='container bg-white'>
              <LeftMenu />  
              <Day />       
            </div> 
          }>  
          </Route> 
          <Route path="*" element={<NotFound />}/>       
        </Routes>


      <p>
        <FormattedMessage
          id="myMessage"
          defaultMessage="Today is {ts, date, ::yyMMdd}"
          values={{ts: Date.now()}}
        />
        
        <br />
        <FormattedNumber value={19} style="currency" currency="EUR" />
      </p>
      <p>
          <FormattedMessage
          id='newMessage'
          />
        </p>
        

        <Footer />
      </BrowserRouter>
    </div>
    </IntlProvider>
  );
}

export default App;
