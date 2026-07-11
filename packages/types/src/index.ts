export * from './medal'
export * from './conflict'
export * from './error'
export * from './soldier'
export * from  './regiment'
export * from  './service_record'
export * from  './soldier_award'
export * from  './dashboard'


export type MetadataType = {
    title: string,
    description: string,
}

export type ParamsPropsType = {
    params: Promise<{slug: string}>
}