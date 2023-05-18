export const STATE_REDUCER_KEY = "push-notifications";

export const NOTIFICATIONS_TABLE_COLUMN = [
    {
        id: "id"
    },
    {
        id: "name",
        header: "Power (kW)",
        accessorKey: "name",
        size: 150
    },
    {
        id: "username",
        header: "Torque (kNm)",
        accessorKey: "username",
        size: 150
    },
    {
        id: "email",
        header: "RPM",
        accessorKey: "email",
        size: 250
    },
    {
        id: "SOG",
        header: "SOG",
        accessorKey: "phone",
        size: 250
    },
    {
        id: "RPM",
        header: "RPM",
        accessorKey: "phone",
        size: 250
    },
    {
        id: "website",
        header: "URL",
        accessorKey: "website",
        size: 150
    }
];
export const notificationsColumnOrder = [
    "name",
    "username",
    "email",
    "phone",
    "phone",
    "website"
];
