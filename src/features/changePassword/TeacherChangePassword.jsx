import { Formik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import React from 'react'
import useLogin from '../login/useLogin';

export default function TeacherChangePassword() {
    const changePasswordValues = {
        oldPassword: '',
        newPassword: '',
        confirmNewPassword: ''
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
        <div className='w-full min-h-screen bg-[#1f2937]'>
            <div className='flex flex-col justify-center items-center min-h-screen'>
                <Formik 
                initialValues={changePasswordValues}
                onSubmit={handleSubmit}
                >
                    <Form className='bg-[#ebf2f0] w-72 p-4 rounded-xl border-2 border-[#1f2937] bg-[rgba(235,242,240,0.2)] sm:w-96'>
                        <div className='flex flex-col justify-center items-center mb-5 pt-2 sm:pt-8'>
                            <p className='text-[32px] text-[#2563eb] font-medium'>Ganti Password</p>  
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <Field 
                            type="password" 
                            name='oldPassword'
                            id='oldPassword'
                            className='w-full py-1.5 px-2 border-[2px] border-slate-500 outline-[#1a4ce3] rounded-md bg-[#d9d9d9]' placeholder='Password Lama' required/>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <Field 
                            type="password"
                            name='newPassword'
                            id='newPassword'
                            className="w-full py-1.5 px-2 border-[2px] border-slate-500 outline-[#1a4ce3] rounded-md bg-[#d9d9d9]" 
                            placeholder="Password Baru"
                            required />
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <Field 
                            type="password"
                            name='confirmNewPassword'
                            id='confirmNewPassword'
                            className="w-full py-1.5 px-2 border-[2px] border-slate-500 outline-[#1a4ce3] rounded-md bg-[#d9d9d9]" 
                            placeholder="Konfirmasi Password Baru"
                            required />
                        </div>
                        <div className='flex items-end justify-between pb-2 sm:pb-8'>
                            <p className='text-sm text-[#2563eb] font-medium cursor-default'>No account? <span className='text-[#fff] cursor-pointer'><Link to='/registration'>Sign Up</Link></span></p>
                            <button type="submit" className="text-white bg-[#2563eb] font-medium text-sm w-24 px-5 py-2.5 text-center block sm:w-28"  disabled={isLoading}>Log In</button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}
