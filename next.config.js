/** @type {import('next').NextConfig} */
const nextConfig = {
    serverRuntimeConfig: {
        rsa_private: process.env.RSA_PRIVATE_KEY,
    },
    publicRuntimeConfig: {
        langs: ["es", "en"],
        rsa_public: process.env.NEXT_PUBLIC_PUBLIC_RSA_KEY,
    }
}

module.exports = nextConfig
