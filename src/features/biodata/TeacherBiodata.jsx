import React from 'react'
import { Home, Key, FindInPage} from '@mui/icons-material';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/navbar/Sidebar';
export default function TeacherBiodata() {
    return (
        <div>
            <Navbar/>
            <div className='flex w-full'>
                <Sidebar className='hidden lg:block' />
                <div className='p-4 w-full min-h-screen'>
                    <div className=' p-3 lg:w-3/4 '>
                        <div className='border-t-2 border-l-2 border-r-2 rounded-t-lg p-3 bg-[#374151] uppercase'>
                            <h1>Biodata</h1>
                        </div>

                        <form className='flex flex-col gap-8 border-2 rounded-b-lg p-3'>
                            <div className='flex gap-7 text-sm font-medium max-md:flex-col max-md:gap-4'>
                                <label className='text-end w-[274px] max-md:text-start'>NIP</label>
                                <p className='cursor-default'>51422061</p>
                            </div>

                            <div className='flex gap-5 items-center max-md:grid max-md:gap-2'>
                                <label className='text-sm text-end font-medium w-[274px] max-md:w-12 max-md:text-start'>Nama</label>
                                <input className='w-full h-10 text-sm px-2 py-1.5 border rounded-sm  cursor-not-allowed sm:w-96 max-md:w-ful' type="text" placeholder='Muhammad Ghifani Ikhsan' disabled />
                            </div>
                        
                            <div className='flex gap-5 items-center max-md:grid max-md:gap-2'>
                                <label className='text-sm text-end font-medium w-[274px] max-md:text-start'>Alamat</label>
                                <input className='w-full h-10 text-sm px-2 py-1.5 border outline-blue-400 text-slate-300 focus:text-black focus:ring-offset-2 focus:ring-blue-500 focus:ring rounded-sm sm:w-96 max-md:w-full' type="text" defaultValue='Griya alam sentosa blok T4 no11' />
                            </div>
                        
                            <div className='flex gap-5 items-center max-md:grid max-md:gap-2'>
                                <label className='text-sm text-end font-medium w-[274px] max-md:text-start'>Nomor KTP</label>
                                <input className='w-full h-10 text-sm px-2 py-1.5 border outline-blue-400 text-slate-300 focus:text-black focus:ring-offset-2 focus:ring-blue-500 focus:ring rounded-sm sm:w-96 max-md:w-full' type="text" defaultValue='4590250924' />
                            </div>
                        
                            <div className='flex gap-5 items-center max-md:grid max-md:gap-2'>
                                <label className='text-sm text-end font-medium w-[274px] max-md:text-start'>Nomor HP</label>
                                <input className='w-full h-10 text-sm px-2 py-1.5 border outline-blue-400 text-slate-300 focus:text-black focus:ring-offset-2 focus:ring-blue-500 focus:ring rounded-sm sm:w-96 max-md:w-full' type="text" defaultValue='087880875820' />
                            </div>
                        
                            <div className='flex gap-5 items-center max-md:grid max-md:gap-2'>
                                <label className='text-sm text-end font-medium w-[274px] max-md:text-start'>Email</label>
                                <input className='w-full h-10 text-sm px-2 py-1.5 border outline-blue-400 text-slate-300 focus:text-black focus:ring-offset-2 focus:ring-blue-500 focus:ring rounded-sm sm:w-96 max-md:w-full' type="text" defaultValue='ghifani03@gmail.com' />
                            </div>
                        
                            <div className='flex flex-col w-[274px] max-md:text-start'>
                                <label className='text-sm text-end font-medium'>Foto (JPG)</label>
                                <label className='text-sm text-end font-medium'>Ukurang maksimum 500 kb , format JPG.</label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
