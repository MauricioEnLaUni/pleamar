import { ReactNode } from "react";

import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const generateStaticParams = () => [
    { locale: "en" }, { locale: "es" }
];

type Props = {
    children: ReactNode,
    params: {
        locale: string
    }
}

const getLocale = async (locale: string) => {
    try {
        return (await import(`@/app/messages/${ locale }.json`)).default;
    } catch (error) {
        notFound();
        return undefined;
    }
}

const LocaleLayout = async ({ children, params: { locale }} : Props) => {
    const messages = await getLocale(locale);

    return (
        <html>
            <body>
                <NextIntlClientProvider locale={ locale } messages={ messages }>
                    <Header />
                    { children }
                    <Footer />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}

export default LocaleLayout;