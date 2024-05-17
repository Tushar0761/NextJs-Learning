import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <div className="text-center p-3 bg-gray-100 h-screen">Hello World</div>
    );
}
