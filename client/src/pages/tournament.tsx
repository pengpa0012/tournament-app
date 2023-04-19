import React, { useState } from 'react'
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { TbTournament } from "react-icons/tb";
import { CgCalendarDates } from "react-icons/cg";
import { HiUsers } from "react-icons/hi";
import { playerLeaderboardsContent, tournamentTabs } from '@/Content';
import { PlayerCard } from '@/Components/PlayerCard';
import { useRouter } from 'next/router';
import { halveArray } from '@/Utilities';

const tournament = () => {
  const router = useRouter()
  const [tab, setTab] = useState(0)
  const array = [1,2,3,4]
  const half = array.slice(0,Math.ceil(array.length/2))
  const halfHalf = array.slice(0,Math.ceil(half.length/2))

  return (
    <div className="mt-20 text-white">
      <div className="flex justify-between items-center border border-white/20 border-r-0 border-l-0 border-t-0 py-6">
        <div>
          <h1 className="text-5xl font-bold mb-2">Title</h1>
          <p className="text-xl">Organizer Name</p>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 rounded-full py-2 px-6 text-white text-xl">Join</button>
      </div>
      <ul className="flex items-center gap-2 py-4 text-gray-300">
        <li className="border border-white/50 p-4 rounded-full flex items-center text-sm font-medium">
          <FaRegMoneyBillAlt style={{ marginRight: 5 }} />
          10,000
        </li>
        <li className="border border-white/50 p-4 rounded-full flex items-center text-sm font-medium">
          <TbTournament style={{ marginRight: 5 }} />
          Single Elimination
        </li>
        <li className="border border-white/50 p-4 rounded-full flex items-center text-sm font-medium">
          <CgCalendarDates style={{ marginRight: 5 }} />
          Oct 20, 2023
        </li>
        <li className="border border-white/50 p-4 rounded-full flex items-center text-sm font-medium">
          <HiUsers style={{ marginRight: 5 }} />
            1/8
        </li>
      </ul>
      <div className="my-6">
      <ul className="flex mb-4 gap-2 font-medium">
        {
          tournamentTabs().map((item, i) => (
            <li key={i} className={`${tab ==  i ? "bg-[#31AC47] text-white" : "text-gray-300 hover:bg-white/5"} p-2 cursor-pointer rounded-md flex`} onClick={() => setTab(i)}>
              {item.icon}
              <span>
                {item.title}
              </span>
            </li>
          ))
        }
        </ul>
        { tab == 0 && 
          <div className="my-12">
            <div className="flex items-center gap-4">
              <div>
                <h3 className="text-center font-medium">Round 1</h3>
                {
                  array.map((item, i) => (
                    <div className="my-8" key={i}>
                      <div className="bg-gray-600 hover:bg-gray-700 w-[200px] h-[40px] rounded-md mb-2 p-2 flex justify-between">
                        <span>Player {item}</span>
                        <span>0</span>
                      </div>
                      <div className="bg-gray-600 hover:bg-gray-700 w-[200px] h-[40px] rounded-md p-2 flex justify-between">
                        <span>Player {item}</span>
                        <span>0</span>
                      </div>
                    </div>
                  ))
                } 
              </div>
              <div>
                {array.length != 1 && <h3 className="text-center font-medium">Round 2</h3>}
                {
                  array.length != 1 && half.map((item, i) => (
                    <div className="my-8" key={i}>
                      <div className="bg-gray-600 hover:bg-gray-700 w-[200px] h-[40px] rounded-md mb-2 p-2 flex justify-between">
                        <span>Winner of</span>
                        <span>0</span>
                      </div>
                      <div className="bg-gray-600 hover:bg-gray-700 w-[200px] h-[40px] rounded-md p-2 flex justify-between">
                        <span>Winner of</span>
                        <span>0</span>
                      </div>
                    </div>
                  ))
                }
              </div>
              <div>
                {halfHalf.length != 1 && <h3 className="text-center font-medium">Round 3</h3>}
                {
                  halfHalf.length != 1 && halfHalf.map((item, i) => (
                    <div className="my-8" key={i}>
                      <div className="bg-gray-600 hover:bg-gray-700 w-[200px] h-[40px] rounded-md mb-2 p-2 flex justify-between">
                        <span>Winner of</span>
                        <span>0</span>
                      </div>
                      <div className="bg-gray-600 hover:bg-gray-700 w-[200px] h-[40px] rounded-md p-2 flex justify-between">
                        <span>Winner of</span>
                        <span>0</span>
                      </div>
                    </div>
                  ))
                }
              </div>
              <div>
                {array.slice(0,Math.ceil(array.length/2)).length != 1 && <h3 className="text-center font-medium">{halfHalf.length == 1 ? "Round 3" : "Round 4"}</h3>}
                {
                  array.slice(0,Math.ceil(array.length/2)).length != 1 &&
                  <div className="my-8">
                    <div className="bg-gray-600 hover:bg-gray-700 w-[200px] h-[40px] rounded-md mb-2 p-2 flex justify-between">
                      <span>Winner of</span>
                      <span>0</span>
                    </div>
                    <div className="bg-gray-600 hover:bg-gray-700 w-[200px] h-[40px] rounded-md p-2 flex justify-between">
                      <span>Winner of</span>
                      <span>0</span>
                    </div>
                  </div>
                }
              </div>
              <div>
                <h3 className="text-center font-medium">Champion</h3>
                <div className="bg-gray-600 hover:bg-gray-700 w-[200px] h-[40px] rounded-md p-2 flex justify-between my-8">Name</div>
              </div>
            </div>
          </div>
        }
        { tab == 1 && 
        <>
          <p className="text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum veritatis culpa, soluta provident maxime perferendis odit minima ut velit quibusdam libero, rem voluptas eaque animi cumque praesentium. Facilis reiciendis sequi sunt! Adipisci!</p>
        </>
      }
      </div>
      { tab == 2 &&
        <div className="my-12">
          <div className="flex flex-wrap gap-4">
            {
              playerLeaderboardsContent.map((item, i) => (
                <PlayerCard key={i} profile={item} onClick={() => router.push(`/profile?id=${item.name}`)}/>
              ))
            }
          </div>
        </div>
      }
    </div>
  )
}

export default tournament