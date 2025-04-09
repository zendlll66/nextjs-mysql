import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className="container mx-auto p-4 mt-8">
      <Link
        href="/attractions"
        className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center justify-center hover:bg-blue-600 transition duration-300 ease-in-out"  
      >
        Go to Attraction 1
      </Link>
    </div>
  )
}

export default page