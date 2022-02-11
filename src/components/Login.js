import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Mycontext } from '../context/Mycontext'
import './Login.css'

export const Login = () => {

    const [data, setdata] = useState({})
    const [error, seterror] = useState(false)

    const iscontext = useContext(Mycontext)
    const { islogin, setislogin } = iscontext

    let Navigate = useNavigate()

    const check = () => {
        // {
        //     "email":"eve.holt@reqres.in",
        //     "password":"asd"
        // }
        fetch("https://reqres.in/api/login", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }).then(res => {
            if (!res.ok) {
                seterror(true)
            }
            else {
                setislogin(true)
            }
        })
    }

    if (islogin) {
        setislogin(false)
        Navigate('UserList', { replace: true })

    }

    return (
        <div className='background'>
            <div className='center' >
                <div className="card text-dark bg-light mb-3 style" >
                    <div className="card-header head"><h1>Login</h1></div>
                    <div className="card-body">
                        <p className="card-text">
                            <label className='label email'>Email:</label>
                            <input type="email" placeholder='Enter the email...' onChange={e => setdata({ ...data, email: e.target.value })} />
                        </p>
                        <p className="card-text">
                            <label className='label'>Password:</label>
                            <input type="password" placeholder='Enter the Password...' onChange={e => setdata({ ...data, password: e.target.value })} />
                        </p>
                        <button className='btn btn-success  button' onClick={check} >Submit</button>
                        {
                            error ? <small className="card-text warning">check Email and Password...!</small> : ""
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}
