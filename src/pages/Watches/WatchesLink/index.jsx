import React from 'react'
import './style.scss'
import { NavLink } from 'react-router-dom'
function WatchesLinks() {
    return (
        <div className="container">
     <ul className="watches__links">
        <li className="watches__link"><NavLink to="/home">Home /</NavLink></li>     
        <li className="watches__link"><NavLink to="/product">Product /</NavLink></li>     
        <li className="watches__link"><NavLink to="/watches">Watches /</NavLink></li>     
        <li className="watches__link"><NavLink to="/Way Kambas Mini Ebony">Way Kambas Mini Ebony /</NavLink></li>     
     </ul>
     </div>
    )
}

export default WatchesLinks
