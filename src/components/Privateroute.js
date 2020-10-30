import React from 'react'
import { Redirect } from 'react-router-dom'

const PrivateRoute = ({component: Component, isAuth, ...props}) => {
    if (!isAuth){
        return <Redirect to ='/'/>
    }
    return (
        <div>
            <Component {...props}/>
        </div>
    )
}

export default PrivateRoute
