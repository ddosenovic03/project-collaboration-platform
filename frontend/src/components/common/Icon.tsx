import type { ReactNode, SVGAttributes } from "react";

export type IconName =
    | "dashboard"
    | "projects"
    | "invitations"
    | "tasks"
    | "createdTasks"
    | "logout"
    | "sun"
    | "moon";

type IconProps = SVGAttributes<SVGSVGElement> & {
    name: IconName;
    size?: number;
};

const iconPaths: Record<IconName, ReactNode> = {
    dashboard: (
        <>
            <rect x="3" y="3" width="7" height="7" rx="2" />
            <rect x="14" y="3" width="7" height="7" rx="2" />
            <rect x="3" y="14" width="7" height="7" rx="2" />
            <rect x="14" y="14" width="7" height="7" rx="2" />
        </>
    ),
    projects: (
        <>
            <path d="M3 7.5h18" />
            <path d="M5 4h5l2 3.5h7v12.5H5z" />
        </>
    ),
    invitations: (
        <>
            <rect x="3" y="5" width="18" height="14" rx="3" />
            <path d="m4.5 7 7.5 6 7.5-6" />
        </>
    ),
    tasks: (
        <>
            <rect x="4" y="3" width="16" height="18" rx="3" />
            <path d="m8 9 1.5 1.5L12 8" />
            <path d="M14 9h3" />
            <path d="m8 15 1.5 1.5L12 14" />
            <path d="M14 15h3" />
        </>
    ),
    createdTasks: (
        <>
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L8 18l-4 1 1-4z" />
        </>
    ),
    logout: (
        <>
            <path d="M10 17l5-5-5-5" />
            <path d="M15 12H3" />
            <path d="M14 3h5a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5" />
        </>
    ),
    sun: (
        <>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.41M17.66 6.34l1.41-1.41" />
        </>
    ),
    moon: <path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5 9 9 0 1 0 20.5 14.2Z" />,
};

export const Icon = ({ name, size = 20, className = "", ...props }: IconProps) => (
    <svg
        aria-hidden="true"
        className={`icon ${className}`}
        fill="none"
        height={size}
        viewBox="0 0 24 24"
        width={size}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        {...props}
    >
        {iconPaths[name]}
    </svg>
);
