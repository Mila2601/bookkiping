import './css/App.css';
import Header from './components/Header';
import LeftMenu from './components/LeftMenu';
import Day from './components/Day';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import Home from './components/Home';
import React, { useContext } from 'react';
import { useState } from 'react';
import Ukrainian from './components/lang/ua.json';
import English from './components/lang/en.json';

import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

import {IntlProvider} from 'react-intl';
import StartPage from './components/StartPage';
import Planing from './components/Planing';
import { BillContext } from './context/BillContext';

function App() {
  const { userLocale } = useContext(BillContext);
  const locale = userLocale || navigator.language;

let lang;

if (locale==="en-US") {
   lang = English;
} else if (locale === "uk-UA") {
   lang = Ukrainian;
}

  return (
      <IntlProvider locale={userLocale || locale} messages={lang} defaultLocale="en-US">
        <div className="App">
          <BrowserRouter>        
            <Routes>
            <Route path="/" element={<StartPage />}/>       
              <Route path="/main" element={<div className='container bg-white'>
                  <Header />
                  <LeftMenu />  
                  <Home />       
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
