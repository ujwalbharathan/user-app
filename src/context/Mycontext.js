import React, { useState } from 'react'

export const Mycontext = React.createContext()

export const Myprovider = (props) => {

    const [islogin, setislogin] = useState(false)

    return (
        <Mycontext.Provider value={{ islogin, setislogin }}>
            {props.children}
        </Mycontext.Provider>
    )
}
