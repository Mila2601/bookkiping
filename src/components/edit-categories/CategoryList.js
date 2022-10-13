import React, { useContext } from 'react';
import { BillContext } from '../../context/BillContext';
import Category from './Category';
import AddCategory from './AddCategory';
import '../../css/categories.css';
import { FormattedMessage } from 'react-intl';

function CategoryList() {

    const { categories } = useContext(BillContext);

  return (
    <div className='category-list mt-4 pb-4'>
        <h1 className='mb-4'>
          <FormattedMessage id='addDeleteCategory' defaultMessage='Edit list of categories' />
        </h1>
        {
          categories.sort().map( (category, index) => (<Category category={category} key={index}/>))
        }
        <AddCategory/>
    </div>
  )
}

export default CategoryList;