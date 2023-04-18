import React from 'react'
import { GiSwordsEmblem, GiTrophyCup } from "react-icons/gi";

export const PlayerCard = ({profile, onClick}: any) => {
  return (
    <div className="bg-[#1E1E1E] hover:bg-[#1a1a1a] rounded-md p-6 flex flex-col items-center cursor-pointer text-gray-300 text-center" onClick={onClick}>
      <div>
        <img src="https://via.placeholder.com/120x120" className="rounded-full"/>
        <h1 className="text-lg font-medium mt-2 mb-4">{profile.name}</h1>
      </div>
      <ul className="flex items-center gap-2 justify-center font-medium">
        <li className={`flex items-center bg-gray-600 text-gray-300 rounded-full px-3 py-1 text-xs`}><GiTrophyCup style={{ marginRight: 5 }} /> {profile.rank}</li>
        <li className="flex items-center bg-gray-600 text-gray-300 rounded-full px-3 py-1 text-xs"><GiSwordsEmblem style={{ marginRight: 5 }}/> {profile.victories}</li>
      </ul>
    </div>
  )
}
