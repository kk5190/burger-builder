import React from 'react';

import Wrapper from '../../HOC/Wrapper'
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const Layout = ( props ) => (
    <Wrapper>
        <Toolbar />
        <main className={classes.Content}>
            {props.children}
        </main>
    </Wrapper>
);

export default Layout;