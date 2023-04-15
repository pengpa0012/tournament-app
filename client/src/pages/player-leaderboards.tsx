import { playerLeaderboardsContent } from '@/Content'
import React from 'react'
import { useEffect, useState } from "react"
import { GiSwordsEmblem, GiTrophyCup } from "react-icons/gi";
import { BiMedal } from "react-icons/bi";
import { useRouter } from 'next/router';

const playerLeaderboards = () => {
  const router = useRouter()
  return <>
    {
      playerLeaderboardsContent.map((item, i) => (
        <div key={i} className="border-2 border-r-0 border-t-0 border-l-0 p-4 flex items-center justify-between hover:bg-gray-100 cursor-pointer" onClick={() => router.push(`/profile?id=${item.name}`)}>
          <div className="flex items-center">
            <h1 className={`text-2xl text-gray-500 font-bold min-w-[70px] flex flex-col items-center ${i == 0 && "text-5xl !text-yellow-500"} ${i == 1 && "text-3xl !text-slate-500"} ${i == 2 && "text-3xl !text-amber-800"}`}>
              {i == 0 && <GiTrophyCup />}
              {i == 1 || i == 2 ? <BiMedal /> : ""}
              {item.rank}
            </h1>
            <img src="https://via.placeholder.com/120x120" className="rounded-full ml-4 mr-8"/>
            <h1 className="text-2xl">{item.name}</h1>
          </div>
          <h1 className="text-2xl flex items-center">
            <GiSwordsEmblem size={24} style={{ marginRight: 10}} />
            <span>{item.victories} Victories</span>
          </h1>
        </div>
      ))
    }
  </>
  
}

export default playerLeaderboards