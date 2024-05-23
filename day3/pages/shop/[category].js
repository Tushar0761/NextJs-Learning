export default function Page({ params, categories }) {
    return (
        <>
            <div>This is default : {params.category}</div>
            <div>
                rest :{" "}
                {categories.map((c) => (
                    <span>{c} | </span>
                ))}
            </div>
        </>
    );
}
export async function getStaticPath() {
    return {
        paths: [
            { params: { path: "electronics " } },
            { params: { path: "jewelery" } },
        ],
        fallback: true,
    };
}
export async function getStaticProps({ params }) {
    const res = await fetch("https://fakestoreapi.com/products/categories");
    const categories = await res.json();

    console.log(categories);

    return { props: { categories, params } };
}
