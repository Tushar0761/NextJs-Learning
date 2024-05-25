import { useRouter } from "next/router";

import { useEffect, useState } from "react";

export default function Page() {
    const router = useRouter();
    useEffect(() => {
        if (router.isReady) {
            let currentCategories = router.query;
            console.log(currentCategories);
        }
        console.log("ok");
    }, [router.isReady, router.query]);
    const [categories, setCategories] = useState([]);

    return (
        <>
            <div>This is default : {"no category"}</div>
            <div>
                rest :{" "}
                {categories.map((c) => (
                    <span>{c} | </span>
                ))}
            </div>
        </>
    );
}
