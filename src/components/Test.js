import React, { useContext } from 'react'
import { BillContext } from '../context/BillContext';

function Test() {

    const {bills} = useContext(BillContext) ;

    window.onload = (() => {


    function getBills() {          
        const countriesSelect = document.querySelector('.countries-select');
        if(countriesSelect?.innerHTML) {
            countriesSelect.remove();
        }
        renderBills(bills);
        //renderSelect(bills);
    
    }

    function renderBills(bills) {           
        const htmlStr = bills.reduce((acc, bill) => acc + `<tr>                        
                        <td>${bill.category}</td>
                        <td>${bill.title || '---'}</td>
                        <td>${bill.price}</td>
                        <td>${bill.date}</td>
                    </tr>`, '');
        document.querySelector('.table tbody').innerHTML = htmlStr;
        setListeners();
    }
    
    function setListeners() {
        document.getElementById('search').onkeyup = e => {
            clearIcon();
            let searchValue = e.currentTarget.value.toLowerCase().trim();
            const filteredBills = bills.filter(bill => {
                const category = bill.category.toLowerCase();
                const title = bill.title.toLowerCase();
                const price = bill.price;
                return category.includes(searchValue)
                    || title.includes(searchValue)
                    || price.includes(searchValue);
            })
            renderBills(filteredBills);
        }
        setIcon();  
    }

    function clearIcon() {
        for (let i of document.querySelectorAll('.fa')) {
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
                    e.currentTarget.querySelector('.fa-sort-amount-asc').classList.remove('d-none');               
                    e.currentTarget.removeAttribute('data-sort');
                } else {
                    e.currentTarget.querySelector('.fa-sort-amount-desc').classList.remove('d-none');
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
    

    getBills();})

  return (
    <div className="container bg-light my-3 p-3">
    <select className="countries-select form-control my-3"></select>
    <input className="form-control mb-3" id="search" placeholder="Type search here" />
    <table className="table table-striped table-bordered">
        <thead>
        <tr><th data-attr="category">Category <i aria-hidden="true" className="fa fa-sort-amount-asc d-none"></i>
        <i aria-hidden="true" className="fa fa-sort-amount-desc d-none"></i></th>
        <th data-attr="title">Title <i aria-hidden="true" className="fa fa-sort-amount-asc d-none"></i>
        <i aria-hidden="true" className="fa fa-sort-amount-desc d-none"></i></th><th data-attr="price">Price 
        <i aria-hidden="true" className="fa fa-sort-amount-asc d-none"></i>
        <i aria-hidden="true" className="fa fa-sort-amount-desc d-none"></i></th>
        <th data-attr="date">Date <i aria-hidden="true" className="fa fa-sort-amount-asc d-none"></i></th></tr>
        </thead>
        <tbody></tbody>
    </table>
</div>
  )
}

export default Test
