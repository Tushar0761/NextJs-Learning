import Link from "next/link";

export default function Comp() {
    return (
        <>
            <div className="flex gap-4 *:rounded *:p-2 *:bg-slate-300 py-2 border-b-2 border-b-black px-4">
                <Link href="/">Home</Link>
                <Link href="/shop/all">All</Link>
            </div>
        </>
    );
}
