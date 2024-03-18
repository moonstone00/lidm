import React from 'react'
export default function Navbar() {
  return (
    <>
        <div className="bg-[#374151] text-white shadow w-full p-2 flex items-center justify-between">
                <div className="flex items-center">
                    <div className="flex items-center"> 
                        {/* <img src="https://www.emprenderconactitud.com/img/POC%20WCS%20(1).png" alt="Logo" className="w-28 h-18 mr-2"/> */}
                        <h2 className="font-bold text-xl">Application</h2>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button id="menuBtn">
                            <i className="fas fa-bars text-gray-500 text-lg"></i>
                        </button>
                    </div>
                </div>
                <div className="space-x-5">
                    <button>
                        <i className="fas fa-bell text-gray-500 text-lg"></i>
                    </button>
                    <button>
                        <i className="fas fa-user text-gray-500 text-lg"></i>
                    </button>
                </div>
            </div>
    </>
  )
}
