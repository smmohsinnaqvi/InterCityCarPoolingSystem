import { useDispatch } from "react-redux";
import {logout} from './slice'
import { useNavigate } from "react-router-dom";

export default function Logout  () {
    const navigate = useNavigate();
    let dispatch = useDispatch();
    localStorage.clear()
    dispatch(logout())
    navigate("/")

}


// return (
//     <div>
//         <button onClick={()=> {dispatch(logout())}}>Logout</button>
//     </div>
// );