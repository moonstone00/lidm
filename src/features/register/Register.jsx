import { Formik, Form, Field } from 'formik';
import { BiChevronDown } from 'react-icons/bi'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from 'react'
import useRegister from './useRegister';
import imageBook from '../../assets/images/book.png';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
export default function Register() {

    const [selected, setSelected] = useState("")
    const [open, setOpen] = useState(false)
    const [startDate, setStartDate] = useState("");

    const registerValues = {
        username: '',
        nama: '',
        nip: '',
        telpon: '',
        alamat: '',
        tanggal_lahir: '',
        token: '',
        password: '',
        role: '',
        jenis_kelamin: ''
    }


    const { mutate } = useRegister({
        onSuccess: (data) => {
        console.log("Register berhasil", data)
        },
        onError: (error) => {
        console.error("Register gagal", error)
        }
    })

    const back = () => {
        window.location.replace('/')
    }

    const handleSelect = (event) => {
        setSelected(event)
    }


    const handleSubmit = (values) => {
        mutate(values)
    }


    return (
        <div className='w-full min-h-screen p-4' style={{backgroundImage: 'linear-gradient(to right top, #dca88b, #ccb184, #b7ba89, #9fc198, #8ac6ad, #7ac5ba, #6fc2c7, #6cbed2, #69b4d4, #6eaad4, #799ed0, #8692c8)'}}>
            <div className='flex flex-col justify-center items-center min-h-screen'>
                <Formik 
                initialValues={registerValues}
                onSubmit={handleSubmit}
                >
                    <Form className='bg-[#e4e8fb] w-72 p-4 rounded-xl border-2 border-[#8692C8] bg-[rgba(235,242,240,0.2)] sm:w-[450px]'>
                        <div className='flex gap-1 text-[#8d8886] cursor-pointer' onClick={() => back()}>
                            <KeyboardBackspaceIcon/>
                            <p>Back</p>
                        </div>
                        <div className='flex flex-col justify-center items-center mb-5 pt-2 sm:pt-8'>
                            <div className='w-20 h-20 mb-3'>
                                <img src={imageBook} alt="image book" />
                            </div>
                            <p className='text-[32px] text-[#8692C8] font-medium'>Sign up</p>  
                            <p className='text-[20px] text-[#847878]'>Create your account</p>
                        </div>
                        <div className='flex gap-2'>
                            <div className="relative z-0 w-full mb-5 group">
                                <Field 
                                type="text"
                                name='username'
                                id='username'
                                className="w-full py-1.5 px-2 border-[2px] border-[#BCC6F6] outline-[#8692C8] rounded-md bg-[#d9d9d9]" 
                                placeholder="Nama Lengkap"
                                required />
                            </div>

                            <div className="relative z-0 w-full mb-5 group">
                                <Field 
                                type="text"
                                name='nama'
                                id='nama'
                                className="w-full py-1.5 px-2 border-[2px] border-[#BCC6F6] outline-[#8692C8] rounded-md bg-[#d9d9d9]" 
                                placeholder="Nama"
                                required />
                            </div>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <Field 
                            type="text" 
                            name='nip'
                            id='nip'
                            className='w-full py-1.5 px-2 border-[2px] border-[#BCC6F6] outline-[#8692C8] rounded-md bg-[#d9d9d9]' placeholder='NIP' required/>
                        </div>
                        <div className='flex gap-3'>
                            <div className="relative z-20 w-full mb-5 group">
                                <Field
                                    type="date"
                                    name='tanggal_lahir'
                                    id='tanggal_lahir'
                                    className='w-full py-1.5 px-2 border-[2px] border-[#BCC6F6] outline-[#8692C8] rounded-md bg-[#d9d9d9]' placeholder='Tanggal Lahir' required
                                />
                                {/* <DatePicker className='w-full py-1.5 px-2 border-[2px] border-[#BCC6F6] outline-[#8692C8] rounded-md bg-[#d9d9d9]' placeholderText='Tanggal Lahir' selected={startDate} onChange={(date) => setStartDate(date)} required /> */}
                            </div>
                            
                            <div className="relative z-0 w-full mb-5 group">
                                <Field 
                                type="text"
                                name='telpon'
                                id='telpon'
                                className="w-full py-1.5 px-2 border-[2px] border-[#BCC6F6] outline-[#8692C8] rounded-md bg-[#d9d9d9]" 
                                placeholder="No Telepon"
                                required />
                            </div>
                        </div>
                        
                        
                        <div className="z-0 w-full mb-5 group">
                            <Field 
                            type="text"
                            name='alamat'
                            id='alamat'
                            className="w-full py-1.5 px-2 border-[2px] border-[#BCC6F6] outline-[#8692C8] rounded-md bg-[#d9d9d9] text-[#bcb0b3] focus:text-black" 
                            placeholder='Alamat'
                            required />
                        </div>

                        <div className='flex gap-3'>
                            <div className="relative z-0 w-full mb-5">
                                <Field 
                                type="text"
                                name='token'
                                id='token'
                                className="w-full py-1.5 px-2 border-[2px] border-[#BCC6F6] outline-[#8692C8] rounded-md bg-[#d9d9d9]" 
                                placeholder="Token"
                                required />
                            </div>

                            <div className="z-0 w-full mb-5">
                                <Field 
                                type="password"
                                name='password'
                                id='password'
                                className="w-full py-1.5 px-2 border-[2px] border-[#BCC6F6] outline-[#8692C8] rounded-md bg-[#d9d9d9]" 
                                placeholder="Password"
                                required />
                            </div>
                        </div>

                        <div className='relative z-10 mb-8'>
                            <div onClick={() => setOpen(!open)} className={`w-full p-[7px] flex items-center justify-between rounded-md border-2 border-[#BCC6F6] bg-[#d9d9d9] cursor-pointer ${selected ? 'text-black' : 'text-[#a5a8b1]'}`}>
                                {selected ? selected : 'Role'}
                                <BiChevronDown size={20} color='' />
                            </div>
                            <ul className={`absolute w-full z-10 border-2 border-[#BCC6F6] bg-[#d9d9d9] mt-2 rounded-md ${open ? 'block ease-out delay-200 duration-200' : 'hidden delay-200 duration-200 ease-in -top-4'}`}>
                                <li onClick={() => setOpen(!open)} className='flex items-center gap-1 p-2 text-sm hover:bg-[#847878] hover:rounded-t-md hover:text-white'>
                                    <Field className='cursor-pointer' name='role' value='admin' onClick={(event) => handleSelect(event.target.value)} type="radio" />
                                    <label>Admin</label>
                                </li>
                                <li onClick={() => setOpen(!open)} className='flex items-center gap-1 p-2 text-sm hover:bg-[#847878] hover:text-white'>
                                    <Field className='cursor-pointer' name='role' value='guru' onClick={(event) => handleSelect(event.target.value)} type='radio' />
                                    <label>Guru</label>
                                </li>
                                <li onClick={() => setOpen(!open)} className='flex items-center gap-1 p-2 text-sm hover:bg-[#847878] hover:rounded-b-md hover:text-white'>
                                    <Field className='cursor-pointer' name='role' value='murid' onClick={(event) => handleSelect(event.target.value)} type='radio' />
                                    <label>Murid</label>
                                </li>
                            </ul>
                        </div>

                        <div className='flex justify-between items-center gap-3 sm:pb-8'>

                            <div className='flex items-center gap-1 text-[#847878]' role="group" aria-labelledby="my-radio-group">
                                <div className='sm:mr-4'>Picked:</div>
                                <div className='flex gap-2 sm:gap-12'>
                                    <label className='flex gap-1 text-sm'>
                                    <Field type="radio" name="jenis_kelamin" value="pria" required />
                                    Pria
                                    </label>
                                
                                    <label className='flex gap-1 text-sm'>
                                    <Field type="radio" name="jenis_kelamin" value="wanita" required />
                                    Wanita
                                    </label>
                                </div>
                            </div>
                        
                            <button type="submit" className="text-[#332D2D] bg-[#BCC6F6] font-medium text-sm w-24 px-5 py-2.5 text-center block sm:w-36 sm:py-3" >Sign up</button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}
