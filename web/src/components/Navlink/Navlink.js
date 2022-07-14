import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from "@redwoodjs/router" 
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'

const UPDATE_USERACT = gql`
  mutation updateUseractMutation($id: Int!, $input: UpdateUseractInput) {
    updateUseract(id: $id, input: $input) {
      lastLogout
    }
  }
`

const Navlink = () => {

  const { isAuthenticated, logOut } = useAuth()

  const [update] = useMutation(UPDATE_USERACT)

  const logoutMe = async() => {
    let upd = update({
      variables: {
        id: JSON.parse(localStorage.getItem('_sesstime')).id_sess,
        input: {
          lastLogout: new Date().toISOString()
        }
      }
    })
    
    upd.catch(() => {}).then(() => {
      logOut()
    })
  }

  return (
    <div>
      <ul className="navlink">
        <li>{isAuthenticated ? (<a href="#" onClick={logoutMe}>{'Logout'}</a>) : (<Link to={routes.login()}>{'Login'}</Link>)}</li>
      </ul>
    </div>
  )
}

export default Navlink
