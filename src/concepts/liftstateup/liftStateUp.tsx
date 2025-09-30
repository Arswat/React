import { useState } from "react";

const liftStateUp = ({onSubmission} : {onSubmission:any}) => {

    const [name, setName] = useState("")

    const handleChange = (e:any)=> {
        setName(e.target.value)
    }

    const handleSubmit = (e:any)=> {
        e.preventDefault()
        onSubmission(name)
    }
    return <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={handleChange}></input>
            <button type="submit">Submit</button>
        </form>
    </div>
}

export default liftStateUp;
