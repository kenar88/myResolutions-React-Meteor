import React from 'react';

import AccountsUi from '../AccountsUi.js';
import { Session } from 'meteor/session';

export const MainLayout = ({content}) => (
    <div className='main-layot'>
        <header>
            <h2>My Resolutions</h2>
            <nav>
                <a href='/'>Resolutions</a>
                <a href='/about'>About</a>
                <AccountsUi />
            </nav>
        </header>
        <main>    
            {content}
        </main>
    </div>
);