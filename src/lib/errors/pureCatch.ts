export default (
    intent: (values: any) => any,
    params: any,
    errorHandling: (error: unknown, params: any) => any
) => {
    try {
        intent(params);
    } catch (error) {
        errorHandling(error, params);
    }
}
