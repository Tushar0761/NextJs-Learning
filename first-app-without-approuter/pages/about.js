export default function About() {
    return (
        <h1>
            Welcome to About Page
            <button
                onClick={() => {
                    alert("hi");
                    console.log("hi");
                }}
            >
                Click me
            </button>
        </h1>
    );
}
