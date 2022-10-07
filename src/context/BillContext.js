import React, { createContext, useEffect, useState } from 'react';

const BillContext = createContext();

const BillProvider = ({children}) => {
  const today = new Date().getTime();
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
  const [user, setUser] = useState([]);
  const [planed, setPlaned] = useState('Planed');
  const [selectedDate, setSelectedDate] = useState(today);
  const [selectedCat, setSelectedCat] = useState('');
  const [notFound, setNotFound] = useState('Not Found');
  const [typeSearchHere, setTypeSearchHere] = useState('Type search here');
  const [click, setClick] = useState([]);
  const [period, setPeriod] = useState('day');
  const [filtBills, setFiltBills] = useState([]);

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
          setNotFound('Не знайдено');
          setTypeSearchHere('Введіть що шукаєте')
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
          setNotFound('Not Found');
          setTypeSearchHere('Type search here')
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

  function setListeners() {
    document.getElementById('search').onkeyup = e => {
        clearIcon();
        setClick([...click, e.currentTarget.value]);
    }
    setIcon();
}

function renderBills(bills) {
  let str = '';

  switch (period) {
    case 'year':
      str = bills.reduce((acc, bill) => {
        const billDateYear = new Date(bill.date).getFullYear();
        const selectedDateYear = new Date(selectedDate).getFullYear() || new Date().getFullYear();

        if (bill.isPlaned) {
          return acc + `<tr key={bill.title} class='is-planed'>
                <td>${planed}</td>
                <td class='category'>${bill.category || '-'}</td>
                <td class='desc'>${bill.title || '-'}</td>
                <td class='price'>${(bill.price * 12).toFixed(2)} грн</td>
                <td class='date'>${selectedDateYear}</td>
            </tr> `
        } else if ((new Date(bill.date)).getFullYear() == (new Date(selectedDate)).getFullYear()) {
          return acc +
            `<tr class=''>
                <td>-</td>
                <td class='category'>${bill.category || '-'}</td>
                <td class='desc'>${bill.title || '-'}</td>
                <td class='price'>${bill.price} грн</td>
                <td class='date'>${billDateYear}</td>
            </tr>`
        } else return acc
      }, '') || `<tr><td style="border-radius: 0  0 20px 20px" colspan="5" >${notFound}</td></tr>`;
      break;
    case 'month':
      str = bills.reduce((acc, bill) => {
        let month = (date) => {
          return date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
      };
      const billDateMonth = new Date(bill.date).getMonth();
      const billDateYear = new Date(bill.date).getFullYear();
      const selectedDateYear = new Date(selectedDate).getFullYear() || new Date().getFullYear();
      const selectedDateMonth = new Date(selectedDate).getMonth() || new Date().getMonth();

        if (bill.isPlaned) {
          return acc + `<tr key={bill.title} class='is-planed'>
                <td>${planed}</td>
                <td class='category'>${bill.category || '-'}</td>
                <td class='desc'>${bill.title || '-'}</td>
                <td class='price'>${Number(bill.price).toFixed(2)} грн</td>
                <td class='date'>${month(new Date(selectedDate)) +
                  "." + selectedDateYear}</td>
            </tr> `
        } else if (billDateYear == selectedDateYear &&
                   billDateMonth == selectedDateMonth) {
          return acc +
            `<tr class=''>
                <td>-</td>
                <td class='category'>${bill.category || '-'}</td>
                <td class='desc'>${bill.title || '-'}</td>
                <td class='price'>${Number(bill.price).toFixed(2)} грн</td>
                <td class='date'>${month(new Date(bill.date)) +
                  "." + billDateYear}</td>
            </tr>`
        } else return acc
      }, '') || `<tr><td style="border-radius: 0  0 20px 20px" colspan="5" >${notFound}</td></tr>`;
      break;
    case 'day':
      str = bills.reduce((acc, bill) => {
        let day = (date) => {
          return date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
        }
        let month = (date) => {
          return date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
        };

        const billDateMonth = new Date(bill.date).getMonth();
        const billDateYear = new Date(bill.date).getFullYear();
        const selectedDateYear = new Date(selectedDate).getFullYear() || new Date().getFullYear();
        const selectedDateMonth = new Date(selectedDate).getMonth() || new Date().getMonth();
        const billDateDay = new Date(bill.date).getDate();
        const selectedDateDay = new Date(selectedDate).getDate() || new Date().getDate();

        if (bill.isPlaned) {
          return acc + `<tr key={bill.title} class='is-planed'>
                <td>${planed}</td>
                <td class='category'>${bill.category || '-'}</td>
                <td class='desc'>${bill.title || '-'}</td>
                <td class='price'>${Number(bill.price).toFixed(2)} грн</td>
                <td class='date'>${day(new Date(selectedDate)) +
                  "." + month(new Date(selectedDate)) +
                  "." + selectedDateYear}</td>
            </tr> `
        } else if (billDateYear == selectedDateYear &&
                   billDateMonth == selectedDateMonth &&
                   billDateDay == selectedDateDay) {
          return acc +
            `<tr class=''>
                <td>-</td>
                <td class='category'>${bill.category || '-'}</td>
                <td class='desc'>${bill.title || '-'}</td>
                <td class='price'>${Number(bill.price).toFixed(2)} грн</td>
                <td class='date'>${day(new Date(bill.date)) +
                  "." + month(new Date(bill.date)) +
                  "." + billDateYear}</td>
            </tr>`
        } else return acc
      }, '') || `<tr><td style="border-radius: 0  0 20px 20px" colspan="5" >${notFound}</td></tr>`;  }

document.querySelector('.table tbody').innerHTML = str;
setListeners();
}

function clearIcon() {
  for (let i of document.querySelectorAll('.svg-inline--fa')) {
      i.classList.add('d-none');
  }
}

function setIcon() {
  for (let item of document.querySelectorAll('[data-attr]')) {
      item.onclick = e => {
          clearIcon();
          let key = e.currentTarget.getAttribute('data-attr');
          let isSorted = e.currentTarget.getAttribute('data-sort');

          if (isSorted) {
              e.currentTarget.querySelector('.down').classList.remove('d-none');
              e.currentTarget.removeAttribute('data-sort');
          } else {
              e.currentTarget.querySelector('.up').classList.remove('d-none');
              e.currentTarget.setAttribute('data-sort', '+');
          };
          sortBills(key, isSorted);
      };
  };
}

function sortBills(key, isSorted) {
  let rendered = bills.sort((a, b) => {
      if (isSorted) {
          return (a[key] > b[key]) ? 1 : -1
      } else {
          return (a[key] > b[key]) ? -1 : 1
      }
  });
  renderBills(rendered);
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
      selectedDate, setSelectedDate,
      user, setUser,
      click, setClick,
      period, setPeriod,
      selectedCat, setSelectedCat,
      filtBills, setFiltBills,
      updateBills,
      editBill,
      deleteBill,
      deleteCategory,
      updateCategories,
      renderSelect,
      renderBills,
      renderSelect,
      setListeners,
      typeSearchHere,
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
