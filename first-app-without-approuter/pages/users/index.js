import { useRouter } from "next/router";
import Link from "next/link";
import data from "./data";
import { Result } from "postcss";

export async function getStaticProps() {
    let res = data.map((d) => d.name);
    console.log("in server");
    return { props: { result: res } };
}

export default function Page(props) {
    return (
        <div>
            ALl the users
            <div className="flex gap-3">
                {props.result.map((item, index) => (
                    <Link
                        className="bg-black text-white p-2 rounded border-white"
                        href={"/users/" + (Number(index) + 1)}
                    >
                        {item}
                    </Link>
                ))}
            </div>
        </div>
    );
}
