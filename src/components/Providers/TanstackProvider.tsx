"use client"
import { useState } from "react";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import ProviderProps from "./Props/ProviderProps";

export default ({ children }: ProviderProps) => {
    const [client] = useState(() => new QueryClient());

    return(
        <QueryClientProvider client={ client }>
            { children }
            <ReactQueryDevtools initialIsOpen={ false } />
        </QueryClientProvider>
    );
}
