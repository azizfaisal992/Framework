import React from 'react'

function Title1({text1}) {
  return (
    <div className='inline-flex gap-2 items-center mb-3'>
      <p className='text-black text-5xl font-semibold'>{text1}</p>
      {/* <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700'></p> */}
    </div>
  )
}

export default Title1
