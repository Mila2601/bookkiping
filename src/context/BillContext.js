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
          break
        } 
    };
  }

  useEffect(() => choseLocale(userLocale), [userLocale, setUserLocale]);

  useEffect( () => {
    setBills(JSON.parse(localStorage.getItem('bills')) || [])
  }, [setBills])

  const updateBills = (bill) => {
    const updatedBills = alfabeticalOrder([
      ...bills,
      bill
    ]);
    localStorage.setItem('bills', JSON.stringify(updatedBills));
    setBills(updatedBills);
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
    console.log(billToDelete);
    const updatedBills = bills.filter(bill => bill.title !== billToDelete.title);
    localStorage.setItem('bills', JSON.stringify(updatedBills));
    setBills(updatedBills);
  }

  return(
    <BillContext.Provider value={{
      bills,
      updateBills,
      editBill,
      selectedCostInterval,
      setselectedCostInterval,
      setEditModeEnabled,
      editModeEnabled,
      deleteBill,
      userLocale, 
      setUserLocale,
      totalIncome, 
      setTotalIncome,
      setBills,
      menuTitle, 
      phbill,
      phcost,
      pr,
      descr,
      addInc,
      noCat
    }}>
      {children}
    </BillContext.Provider>
 )
}

export {
  BillContext,
  BillProvider
}
