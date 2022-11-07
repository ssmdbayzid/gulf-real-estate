import React, { Fragment } from 'react';

import Header from '../component/Share/Header';
import Footer from '../component/Share/Footer';
import Routers from '../Routers/Routers';

const Layout = () => {
    return (
        <Fragment>
            <Header/>
            <div>
            <Routers />
            </div>
            <Footer />
        </Fragment>
    );
};

export default Layout;