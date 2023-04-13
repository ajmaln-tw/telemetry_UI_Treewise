import React from "react";
import App from "../App";
import { Icons, RootBoundary } from "../common/components";
import AdminHome from "./admin/Home";

import { PrivateRoute } from "./common/protected-route/protectedRoute";

const Dashboard = React.lazy(() => import("./dashboard/components/Dashboard"));
const Analytics = React.lazy(() => import("./analytics/components/Analytics"));
const Profile = React.lazy(() => import("./profile/components/MyProfile"));

import { routes as adminRoutes } from "../modules/admin/routes";
import { routes as userManagement } from "../modules/user-management/routes";


const { Home } = Icons;
const routes =
    [
        {
            path: "/",
            element:
                <PrivateRoute>
                    <App />
                </PrivateRoute>,
            errorElement: <RootBoundary />,
            icon: <Home />,
            children: [
                {
                    title: "admin",
                    path: "admin",
                    element:
                        <PrivateRoute>
                            <AdminHome />
                        </PrivateRoute>,
                    children: adminRoutes || [],
                    errorElement: <RootBoundary />
                },
                {
                    path: "Dashboard",
                    element:
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>,
                    errorElement: <RootBoundary />
                },
                {
                    path: "analytics",
                    element:
                        <PrivateRoute>
                            <Analytics />
                        </PrivateRoute>,
                    errorElement: <RootBoundary />
                },
                {
                    path: "notifications",
                    element:
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>,
                    errorElement: <RootBoundary />
                },
                {
                    path: "profile",
                    element:
                        <PrivateRoute>
                            <Profile />
                        </PrivateRoute>,
                    errorElement: <RootBoundary />
                }


            ]
        },
        {
            title: "user_management",
            children: userManagement || []
        },
        {
            title: "user_management",
            children: userManagement || []
        }

    ];

export { routes };
