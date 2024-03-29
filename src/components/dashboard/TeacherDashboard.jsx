import React from 'react'
import Tables from '../tables/Tables'
import {Search} from '@mui/icons-material';
import Navbar from '../navbar/Navbar';
import Sidebar from '../navbar/Sidebar';
import DynamicCircular from '../../features/dynamicCircular/DynamicCircular';

export default function TeacherDashboard() {
    return (
        <>
            <Navbar/>
            <div className='flex'>
                <Sidebar/>
                <div className="p-4 w-full">
                    <div className="relative max-w-md w-full">
                        <div className="absolute top-0 left-1 inline-flex items-center p-2">
                            <Search/>
                        </div>
                        <input className="w-full h-10 pl-10 pr-4 py-1 text-base placeholder-gray-500 border rounded-full focus:shadow-outline" type="search" placeholder="Search..."/>
                    </div>

                    <div className="mt-8 flex flex-wrap space-x-0 space-y-2 md:space-x-4 md:space-y-0">
                        <div className="flex-1 bg-white p-4 shadow rounded-lg md:w-1/2">
                            <h2 className="text-gray-500 text-lg font-semibold pb-1">????</h2>
                            <div className="my-1"></div> 
                            <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div> 
                            <div> 
                                <DynamicCircular/>
                            </div>
                        </div>

                        <div className="flex-1 bg-white p-4 shadow rounded-lg md:w-1/2">
                            <h2 className="text-gray-500 text-lg font-semibold pb-1">????</h2>
                            <div className="my-1"></div> 
                            <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
                            <div>
                                <DynamicCircular/>
                            </div>
                        </div>
                    </div>
                    <Tables/>
                </div>
            </div>
        </>
        
    )
}
