import { ReactNode } from "react";

import { createTranslator, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TanstackProvider from "@/components/Providers/TanstackProvider";

export const generateStaticParams = () => ["es", "en"]
    .map(locale => ({ locale }));

const getMessages = async (locale: string) => {
    try {
        return (await import(`@/../messages/${ locale }.json`)).default;
    } catch (error) {
        notFound();
    }
}

type Props = {
    children: ReactNode,
    params: {
        locale: string
    }
}

export const generateMetadata = async ({ params: { locale }}: Props) => {
    const messages = await getMessages(locale);
    const t = createTranslator({ locale, messages });
    return {
        title: t("LocaleLayout.title")
    }
}

const LocaleLayout = async ({ children, params: { locale }} : Props) => {
    const messages = await getMessages(locale);

    return (
        <html className="clear" lang={ locale }>
            <body>
                <NextIntlClientProvider locale={ locale } messages={ messages }>
                    <TanstackProvider>
                        <Header />
                            { children }
                        <Footer />
                    </TanstackProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}

export default LocaleLayout;
