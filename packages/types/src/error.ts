export type ErrorObjectType = {
    "statusCode": number;
    "message": string;
    "error"?: string;
    "code"?: number;
}

export type ActionCatchState = {
    success: boolean;
    message: string;
}