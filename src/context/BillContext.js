import React, { createContext, useEffect, useState } from 'react';

const BillContext = createContext();

const BillProvider = ({children}) => {
  const [users, setUsers] = useState([]);
  const today = new Date().getTime();
  const [bills, setBills] = useState([]);
  const [editModeEnabled, setEditModeEnabled] = useState(false);
  const [total, setTotal] = useState(0);
  const [categories, setCategories] = useState(['Food', 'Fun']);
  const [user, setUser] = useState('');
  const [selectedCat, setSelectedCat] = useState('');
  const [click, setClick] = useState([]);
  const [period, setPeriod] = useState('day');
  const [filtBills, setFiltBills] = useState([]);
  const [selectedDate, setSelectedDate] = useState(today);
  const [selectedCostInterval, setselectedCostInterval] = useState('Monthly');

  // Language constants
  const [userLocale, setUserLocale] = useState('uk-UA');
  const [phbill, setPhbill] = useState('Add notes');
  const [phcost, setPhcost] = useState('Enter bill monthly cost');
  const [menuTitle, setMenuTitle] = useState('Statistics');
  const [descr, setDescr] = useState('Income Description');
  const [pr, setPr] = useState('Price');
  const [addInc, setAddInc] = useState('Add income');
  const [noCat, setNoCat] = useState('No category');
  const [alreadyHaveCat, setAlreadyHaveCat] = useState('You already have that category');
  const [planed, setPlaned] = useState('Planed');
  const [notFound, setNotFound] = useState('Not Found');
  const [typeSearchHere, setTypeSearchHere] = useState('Type search here');
  const [pleaseRegister, setPleaseRegister] = useState('Your login was not found. Please register.');
  const [enterPass, setEnterPass] = useState('Please enter valid password.');
  const [yourLogin, setYourLogin] = useState('Your login / email');
  const [yourPass, setYourPass] = useState('Enter password');
  const [youAreInSystem, setYouAreInSystem] = useState('You are already in system. Please log in.');
  const [passIsNotTheSame, setPassIsNotTheSame] = useState('Make sure that password and password repeat are the same.');
  const [chartBarLabel, setChartBarLabel] = useState('Statistics by categories');
  const [labels, setLabels] = useState(['Categories']);
  const [chartLineLabel, setChartLineLabel] = useState('Statistics by month')
  const [labels1, setLabels1] = useState(['January', 'Fabruary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'])


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
          setTypeSearchHere('Введіть що шукаєте');
          setPlaned('Заплановано');
          setPleaseRegister('Будь ласка спочатку зареєструйтеся у системі.');
          setEnterPass('Пароль не співпадає. Будь ласка, введіть вірний пароль.');
          setYourLogin('Ваш логін');
          setYourPass('Введіть пароль');
          setYouAreInSystem('Вас вже зареєстровано. Ви можете увійти в систему.');
          setPassIsNotTheSame('Будь ласка впевніться, що пароль та повторення паролю збігаються.');
          setChartBarLabel('Статистика за категоріями');
          setChartLineLabel('Статистика по місяцям');
          setLabels(['Категорії']);
          setLabels1(['Січень', 'Лютий', 'Березень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень']);
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
          setTypeSearchHere('Type search here');
          setPlaned('Planed');
          setPleaseRegister('Your login was not found. Please register.');
          setEnterPass('Please enter valid password.');
          setYourLogin('Your login');
          setYourPass('Enter password');
          setYouAreInSystem('You are already in system. Please log in.');
          setPassIsNotTheSame('Make sure that password and password repeat are the same.');
          setChartBarLabel('Statistics by categories');
          setChartLineLabel('Statistics by month');
          setLabels(['Categories']);
          setLabels1(['January', 'Fabruary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'])
          break
        }
    };
  }

  useEffect(() => choseLocale(userLocale), [userLocale, setUserLocale]);

  // useEffect( () => setUpdatedUsers(user), [setBills, setCategories])

  //   useEffect( () => {
  //   setBills(bills || [])
  // }, [setBills])

  //   useEffect( () => {
  //   setCategories(categories || [])
  // }, [setCategories])

  // useEffect( () => {
  //   setBills(JSON.parse(localStorage.getItem('bills')) || [])
  // }, [setBills])

  // useEffect( () => {
  //   setCategories(JSON.parse(localStorage.getItem('categories')) || [])
  // }, [setCategories])

  function setUpdatedUsers (currentUser) {
    const currentUsers = JSON.parse(JSON.stringify(users));
    const updatedUsers = currentUsers.map(user => (user.name === currentUser.name) ?currentUser : user);
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  }

  const updateBills = (bill) => {
    const updatedBills = [...bills, bill];
    const currentUser = JSON.parse(JSON.stringify(user));
    currentUser.bills = updatedBills;
    setBills(updatedBills);
    setUser(currentUser);
    setUpdatedUsers(currentUser);
    localStorage.setItem('bills', JSON.stringify(updatedBills));
    localStorage.setItem('user', JSON.stringify(currentUser));
  }

  const updateCategories = (category) => {
    const updatedCategories = [...categories, category];
    const currentUser = JSON.parse(JSON.stringify(user));
    currentUser.categories = updatedCategories;
    setCategories(updatedCategories);
    setUser(currentUser);
    setUpdatedUsers(currentUser);
    localStorage.setItem('categories', JSON.stringify(updatedCategories));
    localStorage.setItem('user', JSON.stringify(currentUser));
  }

  const alfabeticalOrder = bills => bills.sort( (a, b) => {
    return a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 1;
  })

  const editBill = (billToUpdate) => {
    const billsFiltered = bills.filter(bill => bill.title !== billToUpdate.title);
    const updatedBills = alfabeticalOrder([...billsFiltered, billToUpdate]);
    const currentUser = JSON.parse(JSON.stringify(user));
    currentUser.bills = updatedBills;
    setUpdatedUsers(currentUser);
    //localStorage.setItem('bills', JSON.stringify(updatedBills));
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
  let temp = 0;


  switch (period) {
    case 'year':
      str = bills.reduce((acc, bill) => {
        const billDateYear = new Date(bill.date).getFullYear();
        const selectedDateYear = new Date(selectedDate).getFullYear() || new Date().getFullYear();

        if (bill.isPlaned && bill.enabled) {
          temp += +(bill.price * 12);
          return acc + `<tr key={bill.title} class='is-planed'>
                <td>${planed}</td>
                <td class='category'>${bill.category || '-'}</td>
                <td class='desc'>${bill.title || '-'}</td>
                <td class='price'>${(bill.price * 12).toFixed(2)} грн</td>
                <td class='date'>${selectedDateYear}</td>
            </tr> `
        } else if ((new Date(bill.date)).getFullYear() == (new Date(selectedDate)).getFullYear()) {
          temp += +bill.price;
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

        if (bill.isPlaned && bill.enabled) {
          temp += +bill.price;
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
          temp += +bill.price;
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

        if (bill.isPlaned && bill.enabled) {
          temp += +(bill.price * 12 / 365);
          return acc + `<tr key={bill.title} class='is-planed'>
                <td>{planed}</td>
                <td class='category'>${bill.category || '-'}</td>
                <td class='desc'>${bill.title || '-'}</td>
                <td class='price'>${Number(bill.price * 12 / 365).toFixed(2)} грн</td>
                <td class='date'>${day(new Date(selectedDate)) +
                  "." + month(new Date(selectedDate)) +
                  "." + selectedDateYear}</td>
            </tr> `
        } else if (billDateYear == selectedDateYear &&
                   billDateMonth == selectedDateMonth &&
                   billDateDay == selectedDateDay) {
          temp += +bill.price;
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
setTotal(temp.toFixed(2));
document.querySelector('.table tbody').innerHTML = str;
setListeners();
}

let deg = 0;

const datasetsForBar = categories.map( function (category) {
  const catTotal = bills.reduce( (acc, bill) => {
    if (bill.category == category && bill.enabled) {
      acc += +bill.price;
      deg += 25;
      if (deg >= 360) {
        deg -= 360;
      }
    }
    return acc;
  }, 0);
  return {
      label: category,
      data: [catTotal],
      borderColor: `hsl(${deg}, 50%, 50%)`,
      backgroundColor: `hsl(${deg}, 50%, 80%)`,
    }
});

const datasetsForLine = categories.map( function (category, index) { // 6 objects
    const totalPerMonth = []; // 12 points
    for (let i = 0; i < labels1.length; i++ ) {
      totalPerMonth[i] = bills.reduce( (acc, bill) => {
      if ((new Date(bill.date)).getFullYear() == (new Date()).getFullYear() && (new Date(bill.date)).getMonth() == i && bill.category == categories[index] && bill.enabled) {
        acc += +bill.price;
        deg += 25;
        if (deg >= 360) {
          deg -= 360;
        }
      }
      return acc;
    }, 0);
  }
  return {
    label: category,
    data: totalPerMonth,
    borderColor: `hsl(${deg}, 50%, 50%)`,
    backgroundColor: `hsl(${deg}, 50%, 80%)`,
  }
});

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
              e.currentTarget.setAttribute('data-sort', 'true');
          };
          sortBills(key, isSorted);
      };
  };
}

function sortBills(key, isSorted) {
  let rendered = bills.sort((a, b) => {
    if ( key == "price" ) {
      if (isSorted) {
        if (a.isPlaned && b.isPlaned) {
          switch (period) {
            case 'day': return (a[key] > b[key]) ? 1 : -1
            case 'month': return (a[key] > b[key]) ? 1 : -1
            case 'year': return (a[key] > b[key]) ? 1 : -1
          }
        } else if (a.isPlaned) {
          switch (period) {
            case 'day': return (a[key] * 12 / 365 > b[key]) ? 1 : -1
            case 'month': return (a[key] > b[key]) ? 1 : -1
            case 'year': return (a[key] * 12 > b[key]) ? 1 : -1
          }
        } else if (b.isPlaned) {
          switch (period) {
            case 'day': return (a[key] > b[key] * 12 / 365) ? 1 : -1
            case 'month': return (a[key] > b[key]) ? 1 : -1
            case 'year': return (a[key] > b[key] * 12) ? 1 : -1
          }
        } else if (!a.isPlaned && !b.isPlaned) {
          switch (period) {
            case 'day': return (a[key] > b[key]) ? 1 : -1
            case 'month': return (a[key] > b[key]) ? 1 : -1
            case 'year': return (a[key] > b[key]) ? 1 : -1
          }
        }
      } else {
        if (a.isPlaned && b.isPlaned) {
          switch (period) {
            case 'day': return (a[key] > b[key]) ? -1 : 1
            case 'month': return (a[key] > b[key]) ? -1 : 1
            case 'year': return (a[key] > b[key]) ? -1 : 1
          }
        } else if (a.isPlaned) {
          switch (period) {
            case 'day': return (a[key] * 12 / 365 > b[key]) ? -1 : 1
            case 'month': return (a[key] > b[key]) ? -1 : 1
            case 'year': return (a[key] * 12 > b[key]) ? -1 : 1
          }
        } else if (b.isPlaned) {
          switch (period) {
            case 'day': return (a[key] > b[key] * 12 / 365) ? -1 : 1
            case 'month': return (a[key] > b[key]) ? -1 : 1
            case 'year': return (a[key] > b[key] * 12) ? -1 : 1
          }
        } else if (!a.isPlaned && !b.isPlaned) {
          console.log('we both is not planed')
          switch (period) {
            case 'day': return (a[key] > b[key]) ? -1 : 1
            case 'month': return (a[key] > b[key]) ? -1 : 1
            case 'year': return (a[key] > b[key]) ? -1 : 1
          }
        }
      }
    } else {
      if (isSorted) {
        return (a[key] > b[key]) ? 1 : -1
      } else {
          return (a[key] > b[key]) ? -1 : 1
      }
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
    const currentUser = JSON.parse(localStorage.getItem('user'));
    currentUser.categories = updatedCategories;
    localStorage.setItem('user', JSON.stringify(currentUser));
    const users = JSON.parse(localStorage.getItem('users'));
    const localUsers = users.map( user => user.name === currentUser.name ? currentUser : user)
    localStorage.setItem('users', JSON.stringify(localUsers));
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
      users, setUsers,
      selectedCostInterval, setselectedCostInterval,
      editModeEnabled, setEditModeEnabled,
      userLocale, setUserLocale,
      total, setTotal,
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
      alreadyHaveCat,
      pleaseRegister,
      enterPass,
      yourLogin,
      yourPass,
      youAreInSystem,
      passIsNotTheSame,
      datasetsForBar,
      chartBarLabel,
      chartLineLabel,
      labels,
      labels1,
      datasetsForLine,
      planed
    }}>
      {children}
    </BillContext.Provider>
 )
}

export {
  BillContext,
  BillProvider
}
