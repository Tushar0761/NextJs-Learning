import Link from "next/link";

export default function Page() {
    const arr = Array(10)
        .fill()
        .map((_, i) => {
            return i + 1;
        });
    console.log(arr);
    console.log(arr[1]);
    return (
        <div>
            <div className="flex gap-3 px-3 py-1 bg-slate-600 text-white *:rounded *:px-3 *:bg-blue-500">
                <Link href={"/"}>Home</Link>
                <Link href={"/about"}>About</Link>
                <Link href={"/users"}>All users </Link>
            </div>
            <hr />
            <h1>Go to Products</h1>
            <br />
            <div className="flex *:px-1 gap-3 *:rounded *:bg-red-300">
                {arr.map((v) => (
                    <Link href={`/products/${v}`}>{v}</Link>
                ))}
            </div>
        </div>
    );
}
