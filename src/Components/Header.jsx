import React from 'react'
import { Link } from 'react-router'
import { useState } from 'react'
import { useNavigate } from "react-router";

function Header() {
    let navigate = useNavigate();
    const categories=['sports','health','technology','business','entertainment']

    const [query,setQuery]=useState("")
    const handleSubmit= (e)=>{
      e.preventDefault();
        navigate("/search/"+query);
    }
 
  return (
<>
    <nav className="navbar navbar-expand-lg bg-success navbar-dark">
    <div className="container-fluid">
    <Link className="navbar-brand" to="/">News</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

    {
    categories.map((c,i)=>{
    return (
    <li className="nav-item" key={i}>
    <Link className="nav-link text-capitalize" to={"/news/"+c}>{c}</Link>
    </li>    )
    })
    }

    </ul>
    <form className="d-flex" role="search" onSubmit={(e)=>handleSubmit(e)}>
    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"
    value={query} onChange={(e)=>{setQuery(e.target.value)}}/>
    <button className="btn btn-outline-light" type="submit" >Search</button>
    </form>
    </div>
    </div>
    </nav>

 </>
  )
}

export default Header