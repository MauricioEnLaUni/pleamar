import React from "react";

export const metadata = ({ title, status }: { title: string, status: boolean }) => ({
    title,
    status
})

const Loading = () => {
    return(
        <></>
    );
};

export default Loading;
