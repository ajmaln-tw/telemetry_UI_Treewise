import { lazy } from "react";
import { PrivateRoute } from "../common/protected-route/protectedRoute";

const Info = lazy(() => import("./components/EditProfile"));
const ChangePassword = lazy(() => import("./components/ChangePassword"));
const Settings = lazy(() => import("./components/Settings"));
const Subscription = lazy(() => import("./components/Subscriptions"));

const routes = [
    {
        children: [
            {
                path: "info",
                element: <PrivateRoute> <Info /> </PrivateRoute>
            },
            {
                path: "change-password",
                element: <PrivateRoute> <ChangePassword /> </PrivateRoute>
            },
            {
                path: "settings",
                element: <PrivateRoute> <Settings /> </PrivateRoute>
            },
            {
                path: "subscription",
                element: <PrivateRoute> <Subscription /> </PrivateRoute>
            }
        ]
    }
];

export { routes };
