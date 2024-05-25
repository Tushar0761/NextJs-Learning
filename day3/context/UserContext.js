import { createContext, useContext, useState } from "react";
const UserContext = createContext(null);

export function useCart() {
    return useContext(UserContext);
}

export function UserProvider(props) {
    const [user, setUser] = useState({ name: "" });

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {props.children}
        </UserContext.Provider>
    );
}
