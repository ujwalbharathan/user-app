import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { useNavigate } from 'react-router-dom'
import './UserList.css'



export const UserList = () => {

  const [userData, setuserData] = useState()
  const [Data, setData] = useState()
  const TotalPages = Math.ceil(Data && Data.total_pages)

  const Navigate = useNavigate()
  const UserDetails = (id) => {
    Navigate("/UserDetails/" + id)
  }

  const displayUser = userData && userData.map(
    (user) => {
      return (

        <div className="card mb-3 person" >
          <div className="row g-0">
            <div className="col-md-4">
              <img src={user.avatar} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">First name: {user.first_name}</h5>
                <h5 className="card-title">Last name: {user.last_name}</h5>

                <p className="card-text"><small className="text-muted">Email: {user.email}</small></p>
                <button className='btn btn-light' onClick={(e) => UserDetails(user.id)}>User details</button>
              </div>
            </div>
          </div>
        </div>

      )
    }
  )

  useEffect(() => {
    axios.get("https://reqres.in/api/users?page=1")
      .then(res => {
        setuserData(res.data.data)
        setData(res.data)
      })
  }, [])


  const changePage = ({ selected }) => {
    const pages = parseInt(selected + 1)
    axios.get("https://reqres.in/api/users?page=" + pages)
      .then(res => {
        setuserData(res.data.data)
        setData(res.data)
      })
  }

  return (
    <div>{displayUser}

      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"Next"}
        pageCount={TotalPages}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        activeClassName={"paginationActive"}
      />
    </div>

  )
}
