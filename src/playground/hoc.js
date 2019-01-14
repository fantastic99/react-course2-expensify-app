 import React from 'react'
 import ReactDOM from 'react-dom'
const Info = (props) =>(
    <div>
    <h1>Info</h1>
    <p>The info is:{props.info}</p>
    </div>

)

const requiredAuthentication = (WrappedComponent) =>{
    return (props) =>(
        <div>
        {props.isAuthenticated ?<WrappedComponent {...props} /> : <p>Please login to view the info</p> }
        
        </div>
    )
}

const AuthInfo= requiredAuthentication(Info)

ReactDOM.render(<AuthInfo isAuthenticated={false} info='These are the details' />,document.getElementById('app'))