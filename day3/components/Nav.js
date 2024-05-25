import { useCart } from "@/context/UserContext";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function Comp() {
    const UserState = useCart();

    const age = useSelector((state) => state);

    return (
        <>
            <div className="flex gap-4 *:rounded *:p-2 *:bg-slate-300 py-2 border-b-2 border-b-black px-4">
                <Link href="/">Home</Link>
                <Link href="/shop/all">All</Link>
                <div class="justify-end bg-yellow p-1 ">
                    {UserState.user.name || "no user"}
                </div>
                <div class="justify-end bg-yellow p-1 ">{age || "no user"}</div>
            </div>
        </>
    );
}
