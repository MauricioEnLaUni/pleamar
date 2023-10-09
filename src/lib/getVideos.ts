import axios from "@/components/Auth/axios";

const getVideos = async (id: string) => {
    const res = await axios.get("site");

    if (!(res.status === 200 && res.statusText === "OK")) {
        throw new Error("Video not found");
    }

    return res.data;
};

export default getVideos;