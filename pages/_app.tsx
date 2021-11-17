import "../styles/globals.scss";
import "macro-css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Header } from "../components/Header";
import { MainLayout } from "../layouts/MainLayout";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>RJournal</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Header />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
