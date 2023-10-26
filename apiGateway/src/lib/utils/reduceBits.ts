const reduceBits = (
    n: number,
    result: number[] = [],
    exp: number = 1
): number[] => {
    if (n < 3)
    {
        return !n ? result : [... result, n];
    }
    
    const current = exp & n;
    const next = current ? n - exp : n;
    const output = current ? [...result, current] : result;
    
    return reduceBits(next, output, exp * 2);
}

export default reduceBits;