export const PATHS = {
    dashboard: {
        main: '/dashboard',
        clasp: {
            main: 'clasp',
            create: '/dashboard/clasp/create',
        },
        conflicts: {
            main: 'conflicts',
            create: '/dashboard/conflicts/create',
            list: '/dashboard/conflicts',
            details: (id: string | number) => `/dashboard/conflicts/${id}`,
        },
        soldiers: {
            main: 'soldiers',
            create: '/dashboard/soldiers/create',
            list: '/dashboard/soldiers',
            details: (id: string | number) => `/dashboard/soldiers/${id}`,
        },
        medals: {
            main: 'medals',
            create: '/dashboard/medals/create',
            list: '/dashboard/medals',
            details: (id: string | number) => `/dashboard/medals/${id}`,
        },
        regiments: {
            main: 'regiments',
            create: '/dashboard/regiments/create',
            list: '/dashboard/regiments',
            details: (id: string | number) => `/dashboard/regiments/${id}`,
        }
    }
} as const;