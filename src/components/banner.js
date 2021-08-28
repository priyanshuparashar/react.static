import React from 'react';
import vanner from '../Images/crypto.png';
import Ban6 from '../Images/ban6.PNG';

const banner = () => {
    return (
        <div className="container">
            <h3 class="text-center">Best Price to Trade.</h3>
            <img className="responsive" src={Ban6}></img>
            <img className="o1 responsive" src={vanner}></img>
        </div>
    )
}

export default banner
