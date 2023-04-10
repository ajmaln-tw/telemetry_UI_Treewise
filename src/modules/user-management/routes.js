import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

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
