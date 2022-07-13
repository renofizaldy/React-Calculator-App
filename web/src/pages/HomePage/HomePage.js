import { Link, navigate, routes } from '@redwoodjs/router'
import { useEffect } from 'react'
import { useAuth } from '@redwoodjs/auth'

const HomePage = () => {

  const { isAuthenticated } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.calc())
    }
  }, [isAuthenticated])

  return (
    <>
      <div className='main-home'>
        <h1 className='mb-1'>Simple Calculator App</h1>
        <p className='mb-1'>Untuk mengakses halaman kalkulator silahkan</p>
        <p className='mb-1'><Link to={routes.login()} className="button-74">Login</Link></p>
        <Link to={routes.signup()}>Daftar Akun</Link>
      </div>
    </>
  )
}

export default HomePage
