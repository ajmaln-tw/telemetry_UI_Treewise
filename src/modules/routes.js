import React from "react";
import App from "../App";
import { Icons, RootBoundary } from "../common/components";
import AdminHome from "./admin/Home";
import ProfileHome from "./profile/components/Home";

import { PrivateRoute } from "./common/protected-route/protectedRoute";
import { routes as adminRoutes } from "../modules/admin/routes";
import { routes as userManagement } from "../modules/user-management/routes";
import { routes as profileRoutes } from "../modules/profile/routes";

const Dashboard = React.lazy(() => import("./dashboard/components/Dashboard"));
const Analytics = React.lazy(() => import("./analytics/components/Analytics"));
// const Profile = React.lazy(() => import("./profile/components/MyProfile"));
const EmissionsData = React.lazy(() => import("./emissions/components/EmissionsData"));
const EmissionCalc = React.lazy(() => import("./emissions/components/EmissionCalculator/WrapperEmissionCalculator"));
const NotificationTable = React.lazy(() => import("./notifications/components/NotificationTable"));


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
                    path: "dashboard",
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
                            <NotificationTable />
                        </PrivateRoute>,
                    errorElement: <RootBoundary />
                },
                {
                    path: "emissions",
                    element:
                        <PrivateRoute>
                            <EmissionsData />
                        </PrivateRoute>,
                    errorElement: <RootBoundary />
                },
                {
                    path: "route-emissions",
                    element:
                        <PrivateRoute>
                            <EmissionCalc />
                        </PrivateRoute>,
                    errorElement: <RootBoundary />
                },
                {
                    path: "profile",
                    element:
                        <PrivateRoute>
                            <ProfileHome />
                        </PrivateRoute>,
                    children: profileRoutes || [],
                    errorElement: <RootBoundary />
                }


            ]
        },
        {
            title: "user_management",
            children: userManagement || [],
            errorElement: <RootBoundary />
        }

    ];

export { routes };
