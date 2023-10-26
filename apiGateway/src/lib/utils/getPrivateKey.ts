import getConfig from "next/config";
import NodeRSA from "node-rsa";

const getPrivateKey = () => {
    const { serverRuntimeConfig } = getConfig();
    const key = serverRuntimeConfig.rsa_private.replace(/\\n/g, "\n");

    return new NodeRSA(key);
}

export default getPrivateKey;