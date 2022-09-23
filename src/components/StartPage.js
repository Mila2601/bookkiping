import React from 'react';
import RightMenu from './RightMenu';
import { Image } from 'react-bootstrap';

function StartPage() {
  return (
    <div className='start-page container bg-white clearfix'>
        <div className='left-box d-inline-block float-left p-4'>
            <h1 className='text-center'>Are you a housewife and looking for a simple cost and income tracking solution? Then you are in the right place!</h1>
            <p className='text-center'>See how simple and clear it is to manage your finances in our application:</p>
            <Image className="mb-4" src="./media/image.png"/>
            <Image className="" src="./media/image1.png"/>  
        </div>          
        <RightMenu />  
    </div>
  )
}

export default StartPage;
