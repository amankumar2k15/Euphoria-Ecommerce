import React from 'react'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import CheckEmail from '../pages/auth/CheckEmail'
import ResetPassword from '../pages/auth/ResetPassword'
import Verification from '../pages/auth/Verification'
import CreateNewPassword from '../pages/auth/CreateNewPassword'
import { Route, Routes } from 'react-router-dom'
import LoginNavbar from '../components/LoginNavbar'

const LoginWrapper = () => {
    return (
        <>
            <LoginNavbar />
            <Routes >
                <Route path="/login" element={<Login title="Sign In Page" subtitle="Sign Up" />} />
                <Route path="/register" element={<Register title="Sign Up" subtitle="Log In" />} />
                <Route path="/check-email" element={<CheckEmail />}></Route>
                <Route path="/reset-password" element={<ResetPassword />}></Route>
                <Route path="/verification" element={<Verification />}></Route>
                <Route path="/create-password" element={<CreateNewPassword />}></Route>
            </Routes>
        </>
    )
}

export default LoginWrapper