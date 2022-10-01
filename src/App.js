import './css/App.css';
import Header from './components/Header';
import LeftMenu from './components/LeftMenu';
import Day from './components/Day';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import Home from './components/Home';
import React, { useContext } from 'react';
import Ukrainian from './components/lang/ua.json';
import English from './components/lang/en.json';
import { useEffect } from 'react';

import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

import {IntlProvider} from 'react-intl';
import StartPage from './components/StartPage';
import Planing from './components/Planing';
import { BillContext } from './context/BillContext';
import CategoryList from './components/CategoryList';

function App() {
  const { userLocale, setCategories, renderSelect } = useContext(BillContext);
  const locale = userLocale || navigator.language;

  useEffect( () => {
    setCategories(JSON.parse(localStorage.getItem('categories')) || [])
    renderSelect();
  }, [])

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
                <div className='container bg-white'>
                  <Header />
                  <Planing />
                </div>
              }/>
              <Route path="/edit-categories" element={
                <div className='container bg-white'>
                  <Header />
                  <CategoryList />
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
