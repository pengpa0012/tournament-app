import React from 'react'
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { TbTournament } from "react-icons/tb";
import { CgCalendarDates } from "react-icons/cg";
import { HiUsers } from "react-icons/hi";
import { playerLeaderboardsContent } from '@/Content';
import { PlayerCard } from '@/Components/PlayerCard';
import { useRouter } from 'next/router';

const tournament = () => {
  const router = useRouter()
  return (
    <div className="mt-20 text-white">
      <div className="flex justify-between items-center border-2 border-r-0 border-l-0 border-t-0 py-6">
        <div>
          <h1 className="text-5xl font-bold mb-2">Title</h1>
          <p className="text-xl">Organizer Name</p>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 rounded-full py-2 px-6 text-white text-xl">Join</button>
      </div>
      <ul className="flex items-center gap-2 py-4">
        <li className="border p-4 rounded-full flex items-center text-sm font-medium">
          <FaRegMoneyBillAlt style={{ marginRight: 5 }} />
          10,000
        </li>
        <li className="border p-4 rounded-full flex items-center text-sm font-medium">
          <TbTournament style={{ marginRight: 5 }} />
          Single Elimination
        </li>
        <li className="border p-4 rounded-full flex items-center text-sm font-medium">
          <CgCalendarDates style={{ marginRight: 5 }} />
          Oct 20, 2023
        </li>
        <li className="border p-4 rounded-full flex items-center text-sm font-medium">
          <HiUsers style={{ marginRight: 5 }} />
            1/10
        </li>
      </ul>
      <div className="my-12">
        <h2 className="font-medium text-2xl mb-4">Rules</h2>
        <ul className="list-disc ml-5">
          <li>Rules 1</li>
          <li>Rules 2</li>
          <li>Rules 3</li>
          <li>Rules 4</li>
          <li>Rules 5</li>
        </ul>
      </div>
      <div className="my-12">
        <h2 className="font-medium text-2xl mb-4">Brackets</h2>
        <img src="https://via.placeholder.com/1280x520" className="w-full rounded-md"/>
      </div>
      <div className="my-12">
        <h2 className="font-medium text-2xl mb-4">Participants</h2>
        <div className="flex flex-wrap gap-4">
          {
            playerLeaderboardsContent.map((item, i) => (
              <PlayerCard key={i} profile={item} onClick={() => router.push(`/profile?id=${item.name}`)}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default tournament