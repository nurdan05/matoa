import React from 'react'
import AboutProduct from './aboutProduct';
import Relate from './relate';
import WatchesBlok from './WatchesBlok';
import WatchesLinks from './WatchesLink';

function Watches() {
    return (
        <React.Fragment>
            <main>
                <WatchesLinks />
                <WatchesBlok />
                <AboutProduct />
                <Relate />
            </main>
        </React.Fragment>
    )
}

export default Watches
