import React, { PureComponent } from 'react';
import SvgIcon from '../../components/SvgIcon';

import loader from '../../resources/Spinner-1s-200px.svg';


const Loader = () =>{
    return(
        <div className="Loader">
            <SvgIcon className="Loader__gif" src={loader} />
        </div>
    )
}

export default Loader