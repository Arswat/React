import withAuthentication from "./withAuthentication"

const Dashboard = ({name, userId}: {name:string, userId: string})=> {
    return <div>
        <h4>Dashboard for {name}</h4>
        <p>UserId: {userId}</p>
    </div>
}

export default withAuthentication(Dashboard) 