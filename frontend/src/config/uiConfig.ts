import type { IconName } from "../components/common/Icon";

type NavigationItem = {
    to: string;
    label: string;
    icon: IconName;
};

export const uiConfig = {
    brand: {
        name: "Kolaboracija",
        shortName: "K",
        subtitle: "Projektni prostor",
    },
    navigation: [
        { to: "/dashboard", label: "Dashboard", icon: "dashboard" },
        { to: "/projekti", label: "Projekti", icon: "projects" },
        { to: "/pozivi", label: "Pozivi", icon: "invitations" },
        { to: "/moji-poslovi", label: "Moji poslovi", icon: "tasks" },
        { to: "/kreirani-poslovi", label: "Kreirani poslovi", icon: "createdTasks" },
    ] satisfies NavigationItem[],
} as const;
