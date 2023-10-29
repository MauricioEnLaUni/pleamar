import axios from "../axios/fromMeta";

export default async () => {
    const response = await axios.get("/");
}
