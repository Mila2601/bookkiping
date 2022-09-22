import './css/App.css';
import Header from './components/Header';
import LeftMenu from './components/LeftMenu';
import Day from './components/Day';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import Home from './components/Home';
import React from 'react';
import { Store } from './Store';
import { useState, useEffect } from 'react';

import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

import {IntlProvider} from 'react-intl';
import StartPage from './components/StartPage';

function loadLocaleData(locale) {
  switch (locale) {
    case 'ua':
      return require('./components/lang/ua.json')
    default:
      return require('./components/lang/en.json')
  }
}

function App() {
  const [ income, setIncome ] = useState([]);
  const [ totalIncome, setTotalIncome ] = useState(0);
  const locale = 'ua';
  const messages = loadLocaleData(locale);
  // let store = Store;
  // console.log(`store is ${store}`);

  return (
    <IntlProvider locale={locale} messages={messages}>
    <div className="App">
      <BrowserRouter>        
        <Routes>
        <Route path="/" element={<StartPage />}/>       
          <Route path="/main" element={<div className='container bg-white'>
              <Header />
              <LeftMenu />  
              <Home totalIncome={totalIncome} income={income} setIncome={setIncome} setTotalIncome={setTotalIncome} />       
            </div> 
          }>  
          </Route>
          <Route path="/day" element={<div className='container bg-white'>
              <Header />
              <LeftMenu />  
              <Day />       
            </div> 
          }>  
          </Route> 
          <Route path="*" element={<NotFound />}/>       
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
    </IntlProvider>
  );
}

export default App;
