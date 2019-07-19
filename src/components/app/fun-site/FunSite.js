import React from "react";

import SideMenuLayout from "../../side-menu-layout/SideMenuLayout";

const FunSite = () => {

    const links = [
        {title: 'To Work Information', link: '/work'},
        {title: 'test', link: '/test'}
    ];

    return (
        <SideMenuLayout menuAlign='left' menuItems={links}>
        </SideMenuLayout>
    );

};

export default FunSite;