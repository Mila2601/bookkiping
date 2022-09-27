import React, { createContext, useEffect, useState } from 'react'

const BillContext = createContext();

const BillProvider = ({children}) => {

  const [bills, setBills] = useState([]);
  const [selectedCostInterval, setselectedCostInterval] = useState('Monthly');
  const [editModeEnabled, setEditModeEnabled] = useState(false);
  const [userLocale, setUserLocale] = useState('ua');
  const [phbill, setPhbill] = useState('Add notes');
  const [phcost, setPhcost] = useState('Enter bill monthly cost');
  const [rate, setRate] = useState('$');
  const [menuTitle, setMenuTitle] = useState('Statistics');

  function choseLocale(locale) {
    switch (locale) {
      case 'ua':
        { setPhbill('Додайте нотатки'); 
          setPhcost('Додайте суму щомісячного платежу'); 
          setRate('грн'); 
          setMenuTitle('Статистика') }
      default:
        { setPhbill('Add notes'); 
          setPhcost('Enter bill monthly cost'); 
          setRate('$'); 
          setMenuTitle('Statistics') } 
    };
  }

  useEffect(() => choseLocale(userLocale), [setUserLocale])

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
      rate,
      menuTitle, 
      phbill,
      phcost
    }}>
      {children}
    </BillContext.Provider>
 )
}

export {
  BillContext,
  BillProvider
}
