import React from 'react';

import Wrapper from '../../HOC/Wrapper'
import classes from './Layout.css';

const Layout = ( props ) => (
    <Wrapper>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Wrapper>
);

export default Layout;