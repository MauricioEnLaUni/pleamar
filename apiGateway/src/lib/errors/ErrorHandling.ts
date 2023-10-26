import { ErrorType } from "./ERROR_CATALOG";

type ErrorHandler = {
    type: ErrorType,
    error: unknown
};

export type { ErrorHandler as default };
