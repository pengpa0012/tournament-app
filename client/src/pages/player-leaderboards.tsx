import { playerLeaderboardsContent } from '@/Content'
import React from 'react'
import { useEffect, useState } from "react"
import { GiSwordsEmblem, GiTrophyCup } from "react-icons/gi";
import { BiMedal } from "react-icons/bi";
import { useRouter } from 'next/router';
import { PlayerCard } from '@/Components/PlayerCard';

const playerLeaderboards = () => {
  const router = useRouter()
  return <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
    {
      playerLeaderboardsContent.map((item, i) => (
        <PlayerCard key={i} profile={item} onClick={() => router.push(`/profile?id=${item.name}`)}/>
      ))
    }
    {/* <div key={i} className="bg-[#1E1E1E] hover:bg-[#1a1a1a] rounded-md p-6 flex flex-col items-center cursor-pointer text-gray-300 text-center" onClick={() => router.push(`/profile?id=${item.name}`)}>
          <div>
            <img src="https://via.placeholder.com/120x120" className="rounded-full"/>
            <h1 className="text-lg font-medium mt-2 mb-4">{item.name}</h1>
          </div>
          <ul className="flex items-center gap-2 justify-center font-medium">
            <li className={`flex items-center ${i == 0 ? "bg-yellow-600 text-white" : "bg-gray-600 text-gray-300"} rounded-full px-3 py-1 text-xs`}><GiTrophyCup style={{ marginRight: 5 }} /> {item.rank}</li>
            <li className="flex items-center bg-gray-600 text-gray-300 rounded-full px-3 py-1 text-xs"><GiSwordsEmblem style={{ marginRight: 5 }}/> {item.victories}</li>
          </ul>
        </div> */}
  </div>
  
}

export default playerLeaderboards