export type ServerAction = {
    message: string;
    success: boolean;
};

export type ServerActionResponse<T> = {
    data?: T;
    success: boolean;
    message: string;
};