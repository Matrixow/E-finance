export default function UserInfo(props){
    return (
        <div className="Uinfo">
            <h1>{props.name}</h1>
            <p>{props.username}</p>
        </div>
    )
}