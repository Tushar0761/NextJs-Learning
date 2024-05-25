export default function (props) {
    return (
        <div className="bg-white m-1 p-1 shadow rounded-6 border d-flex flex-wrap w-fit">
            {props.children}
        </div>
    );
}
