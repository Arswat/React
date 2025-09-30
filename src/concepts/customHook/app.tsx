import useFetch from "./useFetach"

function UserList() {

    const {data, loading, error, empty} = useFetch("https://jsonplaceholder.typicode.com/users")

    if(loading) return <p>Loading....</p>
    if(empty) return <p>No users found</p>
    if(error) return <p>Something went wrong: {error}</p>

    return <ul>
        {data.map((user:any)=>(
            <li key={user.id}>{user.name}</li>
        ))}
    </ul>
}

export default UserList