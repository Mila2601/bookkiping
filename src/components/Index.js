import React from 'react';
import RightMenu from './RightMenu';
import { Image } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

function Index() {
  return (
    <div className='start-page container bg-white clearfix'>
        <div className='left-box d-inline-block float-left p-4'>
            <h1 className='text-center'>
              <FormattedMessage
                id="areU"
                defaultMessage="Are you a housewife and looking for a simple cost and income tracking solution?
                Then you are in the right place!" />
            </h1>
            <p className='text-center'>
              <FormattedMessage
                id="see"
                defaultMessage="See how simple and clear it is to manage your finances in our application:" />
            </p>
            {
            /* The images are saved from the "Figma" as originally planned.
               During the development process, the appearance was slightly changed. */
            }
            <Image className="mb-4" src="./media/image.png"/>
            <Image src="./media/image1.png"/>
            <Image src="./media/image2.jpg"/>
            <Image src="./media/image3.jpg"/>
            <Image src="./media/image4.jpg"/>
        </div>
        <RightMenu />
    </div>
  )
}

export default Index;
