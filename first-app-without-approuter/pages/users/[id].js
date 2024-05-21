export async function getServerSideProps(query) {
    let id = Number(query.params.id);

    if (isNaN(id)) {
        return <div>Wrong Id</div>;
    }
    let res = await fetch("");

    let user = data.find((user) => user.id == id);
    return { props: { data: user } };
}

export default function Page(props) {
    console.clear();
    console.log("props are ", props);
    let user = props.data;
    console.log(user, "here");
    if (!user) return <h1>User not found</h1>;

    return (
        <div>
            Welcome User with id :
            <span className="bg-black text-white p-2 rounded border-white">
                welcome {user.name}, your id is
                {user.id}
            </span>
        </div>
    );
}
