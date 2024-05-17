"use client";

import Link from "next/link";

export default function Home() {
    return (
        <h1>
            Hello World
            <hr />
            <Link href="/about">Go to About</Link>
            <hr />
        </h1>
    );
}
