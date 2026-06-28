import { ActionCatchState } from "@medal-registry/types";

export function isActionError(data: any): data is ActionCatchState {
    return (
        data !== null &&
        typeof data === 'object' &&
        'success' in data &&
        data.success === false &&
        'message' in data
    );
}