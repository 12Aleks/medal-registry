export const PATHS = {
    dashboard: {
        main: '/dashboard',
        soldiers: {
            create: '/dashboard/soldiers/create',
            list: '/dashboard/soldiers',
        },
        medals: {
            list: '/dashboard/medals',
        }
    }
} as const;