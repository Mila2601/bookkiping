import React, { useRef } from 'react';
import '../css/income-form.css'

function IncomeForm({income, setIncome}) {
  const desc = useRef(null);
  const date = useRef(null);
  const price = useRef(null);
  const categorie = useRef(null);

  const AddIncome = e => {
    e.preventDefault();
    let enteredDate = date.current.value.split("-");
    let newDate = new Date(enteredDate[0], enteredDate[1], enteredDate[2]);

    setIncome([...income, {
      "categorie": categorie.current.value,
      "desc": desc.current.value,
      "price": price.current.value,
      "date": newDate.getTime()
    }]);

    console.log(categorie.current.value);

    desc.current.value = "";
    categorie.current.value = "no category";
    price.current.value = null;
    date.current.value = null;
  }

  return (
    <form className='income-form' onSubmit={AddIncome}>
        <div className='form-inner'>
        <select className="brands-select" name="categorie" id="categorie" ref={categorie}>
        <option value="no category">Choose category</option>
        </select>
        <input type="text" name="desc" id="desc" placeholder='Income Description...' ref={desc} />
        <input type="number" name="price" id="price" placeholder="Price..." ref={price} />
        <input type="date" name="date" id='date' placeholder='Income Date...' ref={date} />
        <input type="submit" value="Add Income" />
        </div>      
    </form>
  )
}

export default IncomeForm
