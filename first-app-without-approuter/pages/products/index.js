import Link from "next/link";

export default function Page({ result }) {
    return (
        <div>
            <h1>Welcome to products</h1>
            <p>here are products are static for default api call </p>
            <div className="flex gap-3 *:rounded *:border *:shadow *:p-1 ">
                {result.map((product) => (
                    <div>
                        {product.title}- {product.price} ₹
                        <Link
                            className="bg-black text-white rounded p-1"
                            href={"/products/" + product.id}
                        >
                            View Product
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export async function getStaticProps() {
    const URL = "https://fakestoreapi.com/products";
    let res = await fetch(URL);
    let products = res.json();

    return { props: { result: products } };
}
