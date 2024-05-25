import Age from "@/components/Age";
import Card from "@/components/Card";
import Input from "@/components/Input";
import { useCart } from "@/context/UserContext";
import { useState } from "react";

export default function Home() {
    const [userInput, setUserInput] = useState("");

    const UserState = useCart();
    console.log(UserState);
    const onchangeHandler = (e) => {
        UserState.setUser((prevState) => {
            return { ...prevState.user, name: userInput };
        });

        setUserInput(e.target.value);
    };
    const changesUsername = () => {
        UserState.setUser({ ...UserState.user, name: userInput });
    };
    return (
        <>
            <Input
                attr={{
                    type: "text",
                    placeholder: "New Name",
                    className: "border p-1 m-1 bg-slate-400 ",
                    onChange: onchangeHandler,
                }}
            />
            <Input
                attr={{
                    type: "button",
                    value: "Click",
                    className: "rounded px-3 bg-yellow-400 text-white shadow ",
                    onClick: changesUsername,
                }}
            />
            <Age />
            <h1>
                Hello All
                <Card></Card>
                <Card></Card>
                <Card>
                    <Card></Card>
                    <Card></Card>
                </Card>
            </h1>
        </>
    );
}
