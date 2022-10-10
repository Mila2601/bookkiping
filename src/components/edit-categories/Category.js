import { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { BillContext } from '../../context/BillContext';

function Category({category}) {

    const { deleteCategory } = useContext(BillContext);

  return (
    <div className='d-flex justify-content-between'>
        <div className=''>{category}</div> 
        <h6 onClick={ () => deleteCategory(category)} 
            className="delete-btn"><FormattedMessage id="delete" defoltMessage='DELETE' /></h6>      
    </div>
  )
}

export default Category;
