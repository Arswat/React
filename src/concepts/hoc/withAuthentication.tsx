
const isAuthenticated = true

export default function withAuthentication (Component:any) {
   return function(props: any) {
      if(!isAuthenticated)
        return <div>User not Authenticated</div>

     return <Component userId="123" {...props}/>
   }
}