"use client"
import { useQuery } from "@tanstack/react-query";

import axios from "@/lib/requests/axios";

export default () => {
    const {} = useQuery({
        queryKey: ["videos"],
        queryFn: async () => {
            const { data } = await axios.get("/api/videos");
            console.log(data);
        }
    });
};
