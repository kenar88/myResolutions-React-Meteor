import React from 'react';
import {mount} from 'react-mounter';

import ResolutionsWrapper from './Resolutions/Resolutions.js';
import {MainLayout} from './layouts/MainLayout.js';
import About from './About.js';
import ResolutionDetails from '../client/Resolutions/ResolutionDetails.js';

FlowRouter.route('/', {
    action() {
        mount(MainLayout, {
            content: (<ResolutionsWrapper />)
        })      
    }
});

FlowRouter.route('/about', {
    action() {
        mount(MainLayout, {
            content: (<About />)
        })      
    }
});

FlowRouter.route('/resolutions/:id', {
    action(params) {
        mount(MainLayout, {
            content: (<ResolutionDetails id={params.id} />)
        })      
    }
});