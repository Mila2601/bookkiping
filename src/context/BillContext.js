import React, { createContext, useEffect, useState } from 'react'

const BillContext = createContext();

const BillProvider = ({children}) => {

  const [bills, setBills] = useState([]);
  const [selectedCostInterval, setselectedCostInterval] = useState('Monthly');
  const [editModeEnabled, setEditModeEnabled] = useState(false);
  const [userLocale, setUserLocale] = useState('uk-UA');
  const [phbill, setPhbill] = useState('Add notes');
  const [phcost, setPhcost] = useState('Enter bill monthly cost');
  const [menuTitle, setMenuTitle] = useState('Statistics');
  const [descr, setDescr] = useState('Income Description');
  const [pr, setPr] = useState('Price');
  const [addInc, setAddInc] = useState('Add income');
  const [noCat, setNoCat] = useState('No category');
  const [totalIncome, setTotalIncome] = useState(0);
  const [categories, setCategories] = useState([]);
  const [alreadyHaveCat, setAlreadyHaveCat] = useState('You already have that category');

  function choseLocale(locale) {
    switch (locale) {
      case 'uk-UA':
        { setPhbill('Додайте подробиці'); 
          setPhcost('Введіть суму щомісячного платежу '); 
          setMenuTitle('Статистика');
          setDescr('Нотатки');
          setPr('Ціна');
          setAddInc('Додати платіж');
          setNoCat('Без категорії');
          setAlreadyHaveCat('Така категорія вже існує');
          break
        }
      default:
        { setPhbill('Add notes'); 
          setPhcost('Enter bill monthly cost'); 
          setMenuTitle('Statistics');
          setDescr('Income Description');
          setPr('Price');
          setAddInc('Add income');
          setNoCat('No category');
          setAlreadyHaveCat('You already have that category');
          break
        } 
    };
  }

  useEffect(() => choseLocale(userLocale), [userLocale, setUserLocale]);

  useEffect( () => {
    setBills(JSON.parse(localStorage.getItem('bills')) || [])
  }, [setBills])

  useEffect( () => {
    setCategories(JSON.parse(localStorage.getItem('categories')) || [])
  }, [setCategories])

  const updateBills = (bill) => {
    const updatedBills = alfabeticalOrder([
      ...bills,
      bill
    ]);
    localStorage.setItem('bills', JSON.stringify(updatedBills));
    setBills(updatedBills);
  }

  const updateCategories = (category) => {
    const updatedCategories = [...categories, category];
    localStorage.setItem('categories', JSON.stringify(updatedCategories));
    setCategories(updatedCategories);
  }

  const alfabeticalOrder = bills => bills.sort( (a, b) => {
    return a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 1;
  }) 

  const editBill = (billToUpdate) => {
    const billsFiltered = bills.filter(bill => bill.title !== billToUpdate.title);
    const updatedBills = alfabeticalOrder([
      ...billsFiltered,
      billToUpdate
    ]);
    localStorage.setItem('bills', JSON.stringify(updatedBills));
    setBills(updatedBills);
  }

  const deleteBill = (billToDelete) => {
    const updatedBills = bills.filter(bill => bill.title !== billToDelete.title);
    localStorage.setItem('bills', JSON.stringify(updatedBills));
    setBills(updatedBills);
  }

  const deleteCategory = (category) => {
    const updatedCategories = categories.filter(cat => cat !== category);
    localStorage.setItem('categories', JSON.stringify(updatedCategories));
    setCategories(updatedCategories);
  }

  const renderSelect = () => {
    let htmlStr = `<option value="">${noCat}</option>`;
    htmlStr += categories.map(category => (`<option value="${category}">${category}</option>`)).join('');
    let selectElement = document.querySelector('select');
    if (selectElement) {selectElement.innerHTML = htmlStr};
  }

  return(
    <BillContext.Provider value={{
      bills, setBills,
      selectedCostInterval, setselectedCostInterval,
      editModeEnabled, setEditModeEnabled,
      userLocale, setUserLocale,      
      totalIncome, setTotalIncome,  
      categories, setCategories, 
      updateBills,
      editBill,      
      deleteBill, 
      deleteCategory, 
      updateCategories,
      renderSelect,        
      menuTitle,
      phbill,
      phcost,
      pr,
      descr,
      addInc,
      noCat,
      alreadyHaveCat
    }}>
      {children}
    </BillContext.Provider>
 )
}

export {
  BillContext,
  BillProvider
}
