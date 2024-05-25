import { useState } from "react";
import Input from "./Input";
import { useDispatch } from "react-redux";

export default function () {
    const [age, setAge] = useState(0);
    const dispatch = useDispatch();

    function changeAge() {
        dispatch({ type: "change", value: Number(age) });
    }
    function changeHandler(e) {
        setAge(e.target.value);
    }

    function sum(type) {
        dispatch({ type });
    }

    return (
        <>
            <Input
                attr={{
                    type: "text",
                    onChange: changeHandler,
                    placeholder: "Enter Age",
                    className: "border rounded-2 m-1 p-1 bg-slate-200 ",
                }}
            />
            <button
                className="bg-yellow-500 text-white px-3 rounded "
                onClick={changeAge}
            >
                Click
            </button>

            <button
                className="bg-yellow-500 text-white px-3 rounded "
                onClick={() => sum("inc")}
            >
                +
            </button>
            <button
                className="bg-yellow-500 text-white px-3 rounded "
                onClick={() => sum("dec")}
            >
                -
            </button>
        </>
    );
}
