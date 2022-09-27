import './css/App.css';
import Header from './components/Header';
import LeftMenu from './components/LeftMenu';
import Day from './components/Day';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import Home from './components/Home';
import React, { useContext } from 'react';
import { useState } from 'react';

import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

import {IntlProvider} from 'react-intl';
import StartPage from './components/StartPage';
import Planing from './components/Planing';
import { BillContext } from './context/BillContext';

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
  const { userLocale } = useContext(BillContext);
  const messages = loadLocaleData(userLocale);

  return (
      <IntlProvider locale={userLocale} messages={messages} defaultLocale="en-US">
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
              <Route path="/plan-bills" element={
                <div className='container bg-white p-3'>
                  <Header />
                  <Planing />
                </div>
              }/>       
              <Route path="*" element={<NotFound />}/>       
            </Routes>
            <Footer />
          </BrowserRouter>
        </div>
      </IntlProvider>
  );
}

export default App;
