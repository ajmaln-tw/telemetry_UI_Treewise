import Button from "./custom/Button";
import FormController from "./custom/FormController";
import ReactNotifications from "./custom/ReactNotifications";
import RootBoundary from "./custom/RootBoundary";
import Loader from "./custom/Loader";
import CustomCardHeader from "./custom/CustomCardHeader";
import CardWithHeader from "./custom/CardWithHeader";
import LogoLoader from "../../modules/common/components/LogoLoader";
import { Icons } from "./material/Icons";
import { DefaultComponents } from "./material/Components";

const Components = {
    ...DefaultComponents,
    Button,
    Loader,
    CustomCardHeader,
    CardWithHeader,
    LogoLoader
};

export { Components, RootBoundary, ReactNotifications, FormController, Icons };
