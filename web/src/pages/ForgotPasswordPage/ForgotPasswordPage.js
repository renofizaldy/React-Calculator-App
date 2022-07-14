import { useEffect, useRef } from 'react'
import { useAuth } from '@redwoodjs/auth'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'
import { Form, Label, TextField, Submit, FieldError } from '@redwoodjs/forms'

const ForgotPasswordPage = () => {
  const { isAuthenticated, forgotPassword } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  const usernameRef = useRef()
  useEffect(() => {
    usernameRef.current.focus()
  }, [])

  const onSubmit = async (data) => {
    const response = await forgotPassword(data.username)

    if (response.error) {
      toast.error(response.error)
    } else {
      // The function `forgotPassword.handler` in api/src/functions/auth.js has
      // been invoked, let the user know how to get the link to reset their
      // password (sent in email, perhaps?)
      toast.success(
        'A link to reset your password was sent to ' + response.email
      )
      navigate(routes.login())
    }
  }

  return (
    <>
      <MetaTags title="Forgot Password" />

      <main className="rw-main">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <div className="login-page">
          <div className="form">
            <h3 className='mb-1'>Lupa Password</h3>
            <Form onSubmit={onSubmit} className="login-form">
              <Label
                name="username"
                errorClassName="rw-label rw-label-error"
              >
                Username
              </Label>
              <FieldError name="username" className="field-error" />
              <TextField
                name="username"
                className="rw-input"
                errorClassName="rw-input rw-input-error"
                ref={usernameRef}
                validation={{
                  required: true,
                }}
              />

              <Submit className="button-74">Kirim</Submit>
          
              <p className="message"><Link to={routes.login()} className="rw-link">Login</Link></p>
            </Form>
          </div>
        </div>
      </main>
    </>
  )
}

export default ForgotPasswordPage
