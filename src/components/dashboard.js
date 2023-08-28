import React from 'react'
import './dashboard.css'
import { Link } from "react-router-dom";
const Dashboard = () => {
  return (
    <div className="gradient-background">
     <button className='button'><Link to="/home" style={{textDecoration:"none"}}>click to start</Link></button>
    </div>
  )
}

export default Dashboard