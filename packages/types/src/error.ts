export type ErrorObjectType = {
    "statusCode": number;
    "message": string;
    "error"?: string;
    "code"?: number;
}

export type ActionCatchError = {
    success: boolean;
    message: string;
}