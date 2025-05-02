import React from 'react'

function Button({text,onClick}) {
  return (
    <button onClick={onClick} className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 font-semibold rounded-lg flex items-center gap-2 transition mt-4">
        {text}
    </button>
  )
}

export default Button