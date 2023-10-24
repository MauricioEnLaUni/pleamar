const ERROR_CATALOG = {
    IGNORE: 0,
    WARNING: 1,
    RETRY: 2,
    LOG: 4,
    DIE: 8,
} as const;

export default ERROR_CATALOG;

export type ErrorType = typeof ERROR_CATALOG[keyof typeof ERROR_CATALOG];