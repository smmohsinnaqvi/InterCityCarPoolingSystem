import{Link} from 'react-router-dom'
export default function AdminHome(){

return(
    <div>
        <nav className="navbar navbar-expand-sm-light mb-3">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to ="approveUser" className="nav-link px-3"> Approve User</Link>
                    </li>
                    <li className="nav-item">
                        <Link to ="viewUsers" className="nav-link px-3"> view User</Link>
                    </li>
                    <li className="nav-item">
                        <Link to ="viewVehicles" className="nav-link px-3"> view Vehicles</Link>
                    </li>
                    <li className="nav-item">
                        <Link to ="viewRides" className="nav-link px-3"> view Rides</Link>
                    </li>
                    <li className="nav-item">
                        <Link to ="/logout" className="nav-link px-3"> Logout</Link>
                    </li>

                </ul>
                <h3>Welcome Admin</h3>
             </div>
        </nav>

</div>

            
)

}