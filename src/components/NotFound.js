import { FormattedMessage } from 'react-intl';

function NotFound () {
    return <p className="container bg-white"><FormattedMessage id="pageIsNotFound" defaultMessage="Page is not found" /></p>
}

export default NotFound;