import { Link, navigate, routes } from '@redwoodjs/router'
import {
  Form,
  Label,
  TextField,
  PasswordField,
  Submit,
  FieldError,
} from '@redwoodjs/forms'
import { useAuth } from '@redwoodjs/auth'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'
import { useState, useEffect, useRef } from 'react'

const LoginPage = () => {
  const { isAuthenticated, logIn } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.calc())
    }
  }, [isAuthenticated])

  const usernameRef = useRef()
  useEffect(() => {
    usernameRef.current.focus()
  }, [])

  const onSubmit = async (data) => {
    const response = await logIn({ ...data })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      toast.success('Welcome back!')
    }
  }

  return (
    <>
      <MetaTags title="Login" />
      <main className="rw-main">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <div class="login-page">
          <div class="form">
            <h3 className='mb-1'>Akun Login</h3>
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
                  required: {
                    value: true,
                    message: 'Username is required',
                  },
                }}
              />

              <Label
                name="password"
                errorClassName="rw-label rw-label-error"
              >
                Password
              </Label>
              <FieldError name="password" className="field-error" />
              <PasswordField
                name="password"
                className="rw-input"
                errorClassName="rw-input rw-input-error"
                autoComplete="current-password"
                validation={{
                  required: {
                    value: true,
                    message: 'Password is required',
                  },
                }}
              />

              <Submit className="button-74">Login</Submit>
          
              <p class="message">
                <Link
                  to={routes.forgotPassword()}
                  className="rw-forgot-link"
                >
                  Lupa password?
                </Link>
              </p>
              <p class="message">Belum terdaftar? <Link to={routes.signup()}>Daftar</Link></p>
            </Form>
          </div>
        </div>
      </main>
    </>
  )
}

export default LoginPage
