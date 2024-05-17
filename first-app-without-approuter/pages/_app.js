import "@/styles/globals.css";
import Nav from "/components/Nav";

import { useRouter } from "next/router";
export default function App({ Component, pageProps }) {
    let router = useRouter();
    console.log(router.pathname);
    if (router.pathname == "/about") {
        console.log("true");
        return (
            <div>
                <h1 className="text-4xl">My Custom Layout on About Page</h1>
                <Component {...pageProps} />
                <Nav />
            </div>
        );
    }
    console.log("false");
    return (
        <div>
            <Nav />
            <Component {...pageProps} />
        </div>
    );
}
