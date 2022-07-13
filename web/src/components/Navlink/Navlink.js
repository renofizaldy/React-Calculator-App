import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from "@redwoodjs/router" 

const Navlink = () => {

  const { isAuthenticated, currentUser, logOut } = useAuth()

  return (
    <div>
      <ul className="navlink">
        <li>{isAuthenticated ? (<a href="#" onClick={logOut}>{'Logout'}</a>) : (<Link to={routes.login()}>{'Login'}</Link>)}</li>
      </ul>
    </div>
  )
}

export default Navlink
