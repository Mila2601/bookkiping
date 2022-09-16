import './css/App.css';
import Header from './components/Header';
import LeftMenu from './components/LeftMenu';
import Day from './components/Day';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import Home from './components/Home';
import React from 'react';
import { Store } from './Store';

import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

import {IntlProvider} from 'react-intl';

function loadLocaleData(locale) {
  switch (locale) {
    case 'ua':
      return require('./components/lang/ua.json')
    default:
      return require('./components/lang/en.json')
  }
}

function App() {

  const locale = 'ua';
  const messages = loadLocaleData(locale);
  // let store = Store;
  // console.log(`store is ${store}`);

  return (
    <IntlProvider locale={locale} messages={messages}>
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
        <Footer />
      </BrowserRouter>
    </div>
    </IntlProvider>
  );
}

export default App;
