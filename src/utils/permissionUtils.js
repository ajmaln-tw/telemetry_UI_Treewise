import _ from "lodash";
import { RESOURCE_PERMISSIONS, USER_TYPES, USER_TYPE_PERMISSIONS } from "../modules/common/constants";

export const checkUserTypeMenuPermissions = (routes, userPermissions) => {
    if (userPermissions.includes(USER_TYPE_PERMISSIONS.ADMIN)) {
        return routes;
    }

    let response = [];

    routes.forEach(route => {
        let childRoutes = [];
        let hasChildren = route.children && route.children.length > 0;
        let permissions = RESOURCE_PERMISSIONS[route.id || ""] || [];
        if (permissions.length) {
            let currentPermission = permissions.some(p => userPermissions.includes(p));
            if (currentPermission) {
                if (hasChildren) {
                    let checkedPermissions = checkUserTypeMenuPermissions(route.children, userPermissions) || [];
                    if (checkedPermissions.length > 0) {
                        childRoutes.push({
                            ...route,
                            children: checkedPermissions
                        });
                    }
                } else {
                    childRoutes.push(route);
                }
            }
        } else {
            if (hasChildren) {
                let checkedPermissions = checkUserTypeMenuPermissions(route.children, userPermissions) || [];
                if (checkedPermissions.length > 0) {
                    childRoutes.push({
                        ...route,
                        children: checkedPermissions
                    });
                }
            } else {
                childRoutes.push(route);
            }
        }
        if (childRoutes.length) {
            response.push(...childRoutes);
        }
    });
    return response;
};


export const routePermission = (user = {}, routes = []) => {
    let newRoutes = _.cloneDeep(routes[0]);
    let newChildren = [];
    const { userType = USER_TYPES.COMPANY } = user;
    routes[0].children.map((child = []) => {
        if (userType === USER_TYPES.ADMIN && _.get(child, "path") === "admin") {
            newChildren.push(child);
        }
        if (userType === USER_TYPES.COMPANY && _.get(child, "path") !== "admin") {
            newChildren.push(child);
        }
    });
    _.set(newRoutes, "children", newChildren);
    return [newRoutes, routes[1]];
};
