import React from 'react'
import imageAdmin from '../../assets/images/admin.png'
import imageParent from '../../assets/images/parent.png'
import imageTeacher from '../../assets/images/teacher.png'
import checked from '../../assets/images/check.png'

export default function Home() {

  const goLoginAdmin = () => {

  }

  return (
    <div className='flex items-center justify-center w-full min-h-screen' style={{backgroundImage: 'linear-gradient(to right top, #dca88b, #ccb184, #b7ba89, #9fc198, #8ac6ad, #7ac5ba, #6fc2c7, #6cbed2, #69b4d4, #6eaad4, #799ed0, #8692c8)'}}>
      <div className='bg-[#ebf2f0] w-72 p-4 rounded-xl border-2 border-[#8692C8] bg-[rgba(235,242,240,0.2)] sm:w-96'>
        <div>Choose Account Type</div>
        <div className='flex gap-4'>
          <div onClick={() => goLoginAdmin()} className='group relative h-28 rounded-md border-2 border-[#ccd8ed] hover:border-[#bcc6f6] cursor-pointer'>
            <div className='h-full flex flex-col items-center justify-center'>
              <img src={imageAdmin} alt="image admin" />
              <div className='text-sm font-medium'>Admin</div>
            </div>
            <img className=' absolute -right-3 -bottom-3 h-8 w-8 hidden group-hover:block' src={checked} alt="checked" />
          </div>
          <div className='relative flex items-center h-28 rounded-md border-2 border-red-600'>
            <img src={imageParent} alt="image parent" />
          </div>
          <div className='relative flex items-center h-28 rounded-md border-2 border-red-600'>
            <img src={imageTeacher} alt="image teacher" />
          </div>
        </div>
      </div>
    </div>
  )
}
