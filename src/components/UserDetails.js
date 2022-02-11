import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './UserDetails.css'

export const UserDetails = () => {

  const [userData, setuserData] = useState()

  const Navigate = useNavigate()
  const Params = useParams()
  const id = Params.id

  const returns = () => {
    Navigate("/UserList")
  }

  useEffect(() => {
    axios.get("https://reqres.in/api/users/" + id)
      .then(res => {
        setuserData(res.data.data)

      })
  }, []);


  return (
    <>
      {
        userData && <div><div className="card mb-3 person details" >
          <div className="row g-0">
            <div className="col-md-4">
              <img src={userData.avatar} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">First name: {userData.first_name}</h5>
                <h5 className="card-title">Last name: {userData.last_name}</h5>

                <p className="card-text"><small className="text-muted">Email: {userData.email}</small></p>

              </div>
            </div>
          </div>
        </div>
          <button type='button' className="btn btn-dark center" onClick={returns}>User Details</button>
        </div>
      }
    </>
  )
}
