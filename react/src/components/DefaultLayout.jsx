import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider.jsx";

export default function DefaultLayout() {
  const {user, token} = useStateContext()
 
  if (!token) {
   return <Navigate to="/login" />
 
  }
 
  return (
    <div id="defaultLayout">
    <aside>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/users">Users</Link>
    </aside>
    <div>
    <header>
      <div>
      header
      
      </div>
    </header>
    </div>
    <Outlet />
    </div>
  )
}
