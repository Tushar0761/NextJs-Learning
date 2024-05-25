import "@/styles/globals.css";
import Nav from "../components/Nav";
import { UserProvider } from "@/context/UserContext";
import { Provider } from "react-redux";
import { ageStore } from "../redux/store";
export default function App({ Component, pageProps }) {
    return (
        <>
            <UserProvider>
                <Provider store={ageStore}>
                    <Nav />
                    <Component {...pageProps} />
                </Provider>
            </UserProvider>
        </>
    );
}
