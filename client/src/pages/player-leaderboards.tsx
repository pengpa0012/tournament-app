import { playerLeaderboardsContent } from '@/Content'
import React from 'react'
import { useEffect, useState } from "react"
import { GiSwordsEmblem, GiTrophyCup } from "react-icons/gi";
import { BiMedal } from "react-icons/bi";
import { useRouter } from 'next/router';

const playerLeaderboards = () => {
  const router = useRouter()
  return <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
    {
      playerLeaderboardsContent.map((item, i) => (
        <div key={i} className="bg-[#1E1E1E] hover:bg-[#1a1a1a] rounded-md p-6 flex flex-col items-center cursor-pointer text-gray-300 text-center" onClick={() => router.push(`/profile?id=${item.name}`)}>
          <div>
            {/* <h1 className={`text-2xl text-gray-300 font-bold min-w-[70px] flex flex-col items-center ${i == 0 && "text-5xl !text-yellow-500"}`}>
              {i == 0 && <GiTrophyCup />}
              {i == 1 || i == 2 ? <BiMedal /> : ""}
              {item.rank}
            </h1> */}
            <img src="https://via.placeholder.com/120x120" className="rounded-full"/>
            <h1 className="text-2xl mt-2 mb-4">{item.name}</h1>
          </div>
          <ul className="flex items-center gap-2 justify-center">
            <li className="flex items-center border border-gray-500 text-gray-300 rounded-full px-2 py-1"><GiTrophyCup style={{ marginRight: 5 }} /> {item.rank}</li>
            <li className="flex items-center border border-gray-500 text-gray-300 rounded-full px-2 py-1"><GiSwordsEmblem style={{ marginRight: 5 }}/> {item.victories}</li>
          </ul>
          {/* <h1 className="text-2xl flex items-center">
            <GiSwordsEmblem size={24} style={{ marginRight: 10}} />
            <span>{item.victories} Victories</span>
          </h1> */}
        </div>
      ))
    }
  </div>
  
}

export default playerLeaderboards