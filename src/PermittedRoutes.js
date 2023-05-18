

import React, { Suspense } from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "./modules/routes";
import { Components } from "./common/components";


const { LogoLoader } = Components;

const PermittedRoutes = () => {
    return (
        <Suspense fallback={<LogoLoader />}>
            <RouterProvider router={createBrowserRouter(routes)} />
            <Outlet />
        </Suspense>
    );
};

export default PermittedRoutes;
