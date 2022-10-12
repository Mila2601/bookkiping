import { FormattedMessage } from 'react-intl';
import { BillContext } from '../context/BillContext';
import '../css/income-form.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDownShortWide, faArrowUpWideShort, faMagnifyingGlass  } from '@fortawesome/free-solid-svg-icons';
import { useContext, useEffect } from 'react'

function Day () {
  const { bills,
    total, user,
    setSelectedDate,
    renderBills,
    typeSearchHere,
    setClick,
    click,
    filtBills,
    setFiltBills,
    setListeners,
    setPeriod } = useContext(BillContext);

  useEffect(() => {
    setPeriod('day');
    if (filtBills.length) {
      renderBills(filtBills);
    } else {
      renderBills(bills);
    }
  })

  useEffect(() => {
    setListeners()
  }, [click])

  return (<div className='home statistics d-inline-block text-center mt-4 pb-4'>
  <h1><FormattedMessage id="dayStatistic" defaultMessage="Day statistics:" /></h1>
  <input className='date-day mt-3' type="date" onChange={ e => {
    setSelectedDate(e.currentTarget.value);
   }} />
  <div className='p-4 income-list'>
    <div className="searching-container">
      <input className="w-100 mb-3" id="search" placeholder={typeSearchHere} onChange={e =>
      {
        let searchValue = e.currentTarget.value.toLowerCase().trim();
        if (searchValue) {
        setFiltBills( () => bills.filter(bill => {
            const category = bill.category.toLowerCase();
            const title = bill.title.toLowerCase();
            const price = bill.price;
            return category.includes(searchValue)
                || title.includes(searchValue)
                || price.includes(searchValue);
        }));
      } else setFiltBills([])}}/>
      <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
    </div>
  <table border="0" cellPadding="0" cellSpacing="0" className="table bg-white">
    <thead>
      <tr className='tr-head'>
          <th data-attr="isPlaned" onClick={e => setClick([...click, e.currentTarget.getAttribute('data-attr')])}>
              <FontAwesomeIcon icon={faArrowUpWideShort} className='up d-none'/>
              <FontAwesomeIcon icon={faArrowDownShortWide} className='down d-none'/>
          </th>
          <th data-attr="category" onClick={e => setClick([...click, e.currentTarget.getAttribute('data-attr')])}>
              <FormattedMessage id="category" defaultMessage="Category" className="px-2"/><span>&#160;</span>
              <FontAwesomeIcon icon={faArrowUpWideShort} className='up d-none'/>
              <FontAwesomeIcon icon={faArrowDownShortWide} className='down d-none'/>
          </th>
          <th data-attr="title" onClick={e => setClick([...click, e.currentTarget.getAttribute('data-attr')])}>
              <FormattedMessage id="title" defaultMessage="Title" /><span>&#160;</span>
              <FontAwesomeIcon icon={faArrowUpWideShort} className='up d-none'/>
              <FontAwesomeIcon icon={faArrowDownShortWide} className='down d-none'/>
          </th>
          <th data-attr="price" onClick={e => setClick([...click, e.currentTarget.getAttribute('data-attr')])}>
              <FormattedMessage id="price" defaultMessage="Price" /><span>&#160;</span>
              <FontAwesomeIcon icon={faArrowUpWideShort} className='up d-none'/>
              <FontAwesomeIcon icon={faArrowDownShortWide} className='down d-none'/>
          </th>
          <th onClick={e => setClick([...click, e.currentTarget.getAttribute('data-attr')])}>
              <FormattedMessage id="date" defaultMessage="Date" />
              <FontAwesomeIcon icon={faArrowUpWideShort} className='up d-none'/>
              <FontAwesomeIcon icon={faArrowDownShortWide} className='down d-none'/>
          </th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>
  <div className="text-right"><FormattedMessage id='total' defaultMessage='Total: ' />{total} грн</div>
</div>
</div>)
}

export default Day;