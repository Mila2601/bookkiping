import React, { useContext, useRef } from 'react';
import '../css/income-form.css';
import { BillContext } from '../context/BillContext';


function IncomeForm() {

  const { pr, addInc, descr, noCat, renderSelect, updateBills } = useContext(BillContext);

  const title = useRef(null);
  const date = useRef(null);
  const price = useRef(null);
  const category = useRef(null);

  const AddIncome = e => {
    e.preventDefault();
    let enteredDate = date.current.value.split("-");
    let newDate = new Date(enteredDate[0], enteredDate[1], enteredDate[2]);

    updateBills({
      title: title.current.value,
      price: price.current.value,
      category: category.current.value,
      enabled: true,
      isPlaned: false,
      date: newDate.getTime()
    });

    title.current.value = "";
    category.current.value = {noCat};
    price.current.value = null;
    date.current.value = null;
  }

  renderSelect();

  return (
    <form className='income-form m-2' onSubmit={AddIncome}>
        <div className='form-inner'>
        <select className="brands-select" name="category" id="category" ref={category} />
        <input type="text" name="title" id="desc" placeholder={descr} ref={title} />
        <input type="number" name="price" id="price" placeholder={pr} ref={price} />
        <input type="date" name="date" id='date' placeholder='Income Date...' ref={date} />
        <input type="submit" value={addInc} />
        </div>      
    </form>
  )
}

export default IncomeForm
