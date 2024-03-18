import React from 'react'

export default function Tables() {
    return (
        <>
            <div className="mt-8 bg-white p-4 shadow rounded-lg">
                <h2 className="text-gray-500 text-lg font-semibold pb-4">Profile Siswa</h2>
                <div className="my-1"></div> 
                <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div> 
                <table className="w-full text-sm table-fixed">
                    <thead>
                        <tr className="text-sm ">
                            <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Nama</th>
                            <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Kelas</th>
                            <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Angkatan</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        <tr className="hover:bg-grey-lighter">
                            <td className="py-2 px-4 border-b border-grey-light">Gerrard</td>
                            <td className="py-2 px-4 border-b border-grey-light">2IA04</td>
                            <td className="py-2 px-4 border-b border-grey-light">2022</td>
                        </tr>
                        <tr className="hover:bg-grey-lighter">
                            <td className="py-2 px-4 border-b border-grey-light">Gerrard</td>
                            <td className="py-2 px-4 border-b border-grey-light">2IA04</td>
                            <td className="py-2 px-4 border-b border-grey-light">2022</td>
                        </tr>
                        <tr className="hover:bg-grey-lighter">
                            <td className="py-2 px-4 border-b border-grey-light">Gerrard</td>
                            <td className="py-2 px-4 border-b border-grey-light">2IA04</td>
                            <td className="py-2 px-4 border-b border-grey-light">2022</td>
                        </tr>
                        <tr className="hover:bg-grey-lighter">
                            <td className="py-2 px-4 border-b border-grey-light">Gerrard</td>
                            <td className="py-2 px-4 border-b border-grey-light">2IA04</td>
                            <td className="py-2 px-4 border-b border-grey-light">2022</td>
                        </tr>
                        <tr className="hover:bg-grey-lighter">
                            <td className="py-2 px-4 border-b border-grey-light">Gerrard</td>
                            <td className="py-2 px-4 border-b border-grey-light">2IA04</td>
                            <td className="py-2 px-4 border-b border-grey-light">2022</td>
                        </tr>
                        <tr className="hover:bg-grey-lighter">
                            <td className="py-2 px-4 border-b border-grey-light">Gerrard</td>
                            <td className="py-2 px-4 border-b border-grey-light">2IA04</td>
                            <td className="py-2 px-4 border-b border-grey-light">2022</td>
                        </tr>
                        
                    </tbody>
                </table>
                <div className="text-right mt-4">
                    <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded">
                        Next
                    </button>
                </div>
            </div>
        </>
    )
}
