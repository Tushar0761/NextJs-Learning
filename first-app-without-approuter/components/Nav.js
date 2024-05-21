import Link from "next/link";
export default function Nav() {
    return (
        <div className="flex gap-2 px-3 *:m-1 py-2 bg-gray-900 text-white hover:*:text-black hover:*:px-4 *:transition-all hover:*:bg-gray-500     ">
            <Link href="/">Home</Link>
            <Link href="/users">users</Link>
            <Link href="/about">about</Link>
            <Link href="/products">products</Link>
        </div>
    );
}
