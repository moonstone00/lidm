import {Home, Key, FindInPage} from '@mui/icons-material';
import React from 'react'

export default function Sidebar() {
    return (
        <div className="flex-1 flex flex-wrap min-h-screen">
            <div className="p-2 bg-[#111827] w-full md:w-60 flex-col lg:flex hidden" id="sideNav">
                <nav>
                    <a className="flex items-center text-white py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white" href="#">
                        <Home className="mr-2"></Home>Dashboard
                    </a>
                    <a className="flex items-center text-white py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white" href="#">
                        <Key className="mr-2"></Key>Biodata
                    </a>
                    <a className="flex items-center text-white py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white" href="#">
                        <FindInPage className="mr-2"></FindInPage>Change Password
                    </a>
                </nav>
            </div>
        </div>
    )
}
