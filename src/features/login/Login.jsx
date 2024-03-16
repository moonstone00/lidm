import { Formik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import React from 'react'
import imageBook from '../../assets/images/book.png';
import useLogin from './useLogin'

export default function Login() {

    const loginValues = {
        username: '',
        password: ''
    }

    const { mutate, isLoading } = useLogin({
        onSuccess: (data) => {
        console.log("Login berhasil", data)
        },
        onError: (error) => {
        console.error("Login gagal", error)
        }
    })

    const handleSubmit = (values) => {
        mutate(values)
    }

    return (
        <div className='w-full min-h-screen' style={{backgroundImage: 'linear-gradient(to right top, #dca88b, #ccb184, #b7ba89, #9fc198, #8ac6ad, #7ac5ba, #6fc2c7, #6cbed2, #69b4d4, #6eaad4, #799ed0, #8692c8)'}}>
            <div className='flex flex-col justify-center items-center min-h-screen'>
                <Formik 
                initialValues={loginValues}
                onSubmit={handleSubmit}
                >
                    <Form className='bg-[#ebf2f0] w-72 p-4 rounded-xl border-2 border-[#8692C8] bg-[rgba(235,242,240,0.2)] sm:w-96'>
                        <div className='flex flex-col justify-center items-center mb-5 pt-2 sm:pt-8'>
                            <div className='w-20 h-20 mb-3'>
                                <img src={imageBook} alt="image book" />
                            </div>
                            <p className='text-[32px] text-[#8692C8] font-medium'>Log in</p>  
                            <p className='text-[20px] text-[#847878]'>Welcome Back!</p>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <Field 
                            type="text" 
                            name='username'
                            id='username'
                            className='w-full py-1.5 px-2 border-[2px] border-[#BCC6F6] outline-[#8692C8] rounded-md bg-[#d9d9d9]' placeholder='Username' required/>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <Field 
                            type="password"
                            name='password'
                            id='password'
                            className="w-full py-1.5 px-2 border-[2px] border-[#BCC6F6] outline-[#8692C8] rounded-md bg-[#d9d9d9]" 
                            placeholder="Password"
                            required />
                        </div>
                        <div className='flex justify-between mb-5'>
                            <div className='flex items-center'>
                                <Field 
                                type="checkbox" 
                                name='rememberMe'
                                id='rememberMe'
                                className='bg-[#d9d9d9] border-[2px] border-[#BCC6F6] mr-1'/>
                                <p className='text-sm text-[#847878] font-medium cursor-default' style={{textShadow: "0px 1.5px 2px silver"}}>Remember me</p>
                            </div>
                            <Link className='text-sm text-[#847878] font-medium' style={{textShadow: "0px 1.5px 2px silver"}}>Reset Password</Link>
                        </div>
                        <div className='flex items-end justify-between pb-2 sm:pb-8'>
                            <p className='text-sm text-[#847878] font-medium cursor-default' style={{textShadow: "0px 1.5px 2px silver"}}>No account? <span className='text-[#8692C8] cursor-pointer'><Link to='/registration'>Sign Up</Link></span></p>
                            <button type="submit" className="text-[#332D2D] bg-[#BCC6F6] font-medium text-sm w-24 px-5 py-2.5 text-center block sm:w-28"  disabled={isLoading}>Log In</button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}
