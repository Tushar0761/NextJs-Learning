import Link from "next/link";

export default function Home() {
    return (
        <h1>
            Welcome to about page
            <hr />
            <Link href="/">Go back to home</Link>
        </h1>
    );
}
