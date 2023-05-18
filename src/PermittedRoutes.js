

import React, { Suspense } from "react";
import { Outlet, RouterProvider, createHashRouter } from "react-router-dom";
import { routes } from "./modules/routes";
import { Components } from "./common/components";
import { routePermission } from "./utils/permissionUtils";
import { useSelector } from "react-redux";


const { LogoLoader } = Components;


const PermittedRoutes = () => {
    const user = useSelector(state => state.common.user);
    return (
        <Suspense fallback={<LogoLoader />}>
            <RouterProvider router={createHashRouter(routePermission(user, routes))} />
            <Outlet />
        </Suspense>
    );
};

export default PermittedRoutes;
