import Link from "next/link";

export default function Page({ result }) {
    console.log("result-------------->", result);

    return (
        <>
            <div>
                <Link href="/shop/clothing">Cloths</Link>
            </div>
            <div className="flex flex-wrap gap-3 *:border *:rounded *:p-2 ">
                {result.map((product) => (
                    <div key={product.id}>
                        <p>{product.title}</p>
                        <p>{product.price}</p>
                        <p className="bg-slate-600 text-white">
                            {product.category}
                        </p>
                    </div>
                ))}
            </div>
        </>
    );
}
export async function getStaticProps() {
    let res = await fetch("https://fakestoreapi.com/products");
    let data = await res.json();
    return { props: { result: data } };
}
