import React from 'react';

import SideMenuLayout from '../../side-menu-layout/SideMenuLayout';

const WorkSite = () => {

    const links = [
        {title: 'To Personal Projects', link: '/fun'},
        {title: 'test', link: '/test'}
    ];

    return (
        <SideMenuLayout menuAlign='right' menuItems={links}>

        </SideMenuLayout>
    );


};

export default WorkSite;