

import React, { Suspense } from "react";
import { createHashRouter, Outlet, RouterProvider } from "react-router-dom";
import { routes } from "./modules/routes";
import { Components } from "./common/components";


const { LogoLoader } = Components;

const PermittedRoutes = () => {
    return (
        <Suspense fallback={<LogoLoader />}>
            <RouterProvider router={createHashRouter(routes)} />
            <Outlet />
        </Suspense>
    );
};

export default PermittedRoutes;
