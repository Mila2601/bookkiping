import './css/App.css';
import './css/income-form.css';
import Header from './components/Header';
import LeftMenu from './components/LeftMenu';
import Day from './components/Day';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import Home from './components/main/Home';
import React, { useContext } from 'react';
import Ukrainian from './lang/ua.json';
import English from './lang/en.json';
import { useEffect } from 'react';
import Year from './components/Year';
import Registration from './components/Registration';
import Month from './components/Month';

import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

import {IntlProvider} from 'react-intl';
import Index from './components/Index';
import Planing from './components/plan-bills/Planing';
import { BillContext } from './context/BillContext';
import CategoryList from './components/edit-categories/CategoryList';

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
            <Route path="/" element={<Index />}/>
            <Route path="/registration" element={<Registration />}/>
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
              <Route path="/month" element={<div className='container bg-white'>
                  <Header />
                  <LeftMenu />
                  <Month />
                </div>
              }>
              </Route>
              <Route path="/year" element={<div className='container bg-white'>
                  <Header />
                  <LeftMenu />
                  <Year />
                </div>
              }>
              </Route> 
              <Route path="/plan-bills" element={
                <div className='container bg-white'>
                  <Header />
                  <LeftMenu />
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
