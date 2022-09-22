import { FormattedMessage } from 'react-intl';

function Footer () {
    return <p className="container bg-white footer"><FormattedMessage
    id="designedBy"
    defaultMessage="Designed by Bagira. All rights reserved." /></p>
}

export default Footer;