import Link from "next/link";

export default function Page({ params }) {
    console.log("params");
    console.log(params);
    return (
        <div>
            <div className="flex gap-3 px-3 py-1 bg-slate-600 text-white *:rounded *:px-3 *:bg-blue-500">
                <Link href={"/"}>Home</Link>
                <Link href={"/about"}>About</Link>
                <Link href={"/users"}>All users </Link>
                <Link href={"/products"}>All products </Link>
            </div>
            <hr />
            <h1>Products , {params.id}</h1>
        </div>
    );
}
