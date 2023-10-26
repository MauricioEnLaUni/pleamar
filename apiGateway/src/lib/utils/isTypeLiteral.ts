/**
 * Checks whether a value is part of an object literal.
 * Defaults otherwise.
 * 
 * @template Type Must be an object literal with a DEFAULT key otherwise,
 * keys can be anything.
 * @param { unknown } value Input to validate
 * @param { any } options The object literal itself
 */
export default <Type>(value: string, options: any) => {
    if (Object.keys(options).includes(value))
    {
        return value as Type;
    }
    return options.DEFAULT
}