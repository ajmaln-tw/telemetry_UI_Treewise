import { lazy } from "react";

const SignIn = lazy(() => import("./components/SignIn"));
const SignUp = lazy(() => import("./components/SignUp"));

const routes = [
    {
        children: [
            {
                path: "login",
                element: <SignIn />
            },
            {
                path: "signup",
                element: <SignUp />
            }
        ]
    }
];

export { routes };
