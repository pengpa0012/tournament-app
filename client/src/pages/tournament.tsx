import React from 'react'

const tournament = () => {
  return (
    <div className="mt-20">
      <div className="flex justify-between items-center border-2 border-r-0 border-l-0 border-t-0 py-6">
        <div>
          <h1 className="text-5xl font-bold mb-2">Title</h1>
          <p className="text-xl">Organizer Name</p>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 rounded-full py-2 px-6 text-white text-xl">Join</button>
      </div>
      <div className="flex justify-between items-center py-2">
        <div className="flex gap-2">
          <h1>Prize Pool</h1>
          <h1>Type</h1>
          <h1>Date</h1>
        </div>
        <div>
          <h1>Participant counter</h1>
        </div>
      </div>
    </div>
  )
}

export default tournament