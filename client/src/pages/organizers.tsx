import { useRouter } from 'next/router'
import React from 'react'

const organizers = () => {
  const router = useRouter()
  return (
    <table className="w-full">
      <thead>
        <tr className="flex bg-blue-600 text-white py-4 rounded-tl-lg rounded-tr-lg">  
          <th className="flex-1">Name</th>
          <th className="flex-1">Total Tournaments Managed</th>
        </tr>
      </thead>
      <tbody>
        {
          [1,2,3,4,5].map((item, any) => (
            <tr className="bg-white rounded-md my-2 flex text-center p-2 font-medium cursor-pointer" onClick={() => router.push(`/profile`)}>
              <td className="flex-1 text-xl">Tito Valdez</td>
              <td className="flex-1 text-xl">233</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default organizers