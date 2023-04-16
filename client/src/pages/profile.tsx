import React from 'react'
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { TbTournament } from "react-icons/tb";
import { CgCalendarDates } from "react-icons/cg";
import { HiUsers } from "react-icons/hi";

const profile = () => {
  return (
    <div className="mt-20 text-white">
      <div className="flex flex-col items-center justify-center text-center font-medium">
        <img src="https://via.placeholder.com/200x200" className="rounded-full mb-4"/>
        <div>
          <h1 className="text-2xl mb-4">Peng-</h1>
          <ul className="flex items-center gap-2 py-4">
            <li className="border p-4 rounded-full flex items-center text-sm font-medium min-w-[100px] flex justify-center" title="Total Earnings">
              <FaRegMoneyBillAlt style={{ marginRight: 5 }} />
              120,000
            </li>
            <li className="border p-4 rounded-full flex items-center text-sm font-medium min-w-[100px] flex justify-center" title="Total Tournaments">
              <TbTournament style={{ marginRight: 5 }} />
              12
            </li>
            <li className="border p-4 rounded-full flex items-center text-sm font-medium min-w-[100px] flex justify-center" title="Date joined">
              <CgCalendarDates style={{ marginRight: 5 }} />
              Oct 20, 2023
            </li>
          </ul>
        </div>
      </div>
      <div className="my-12">
        <h2 className="font-medium text-2xl mb-4">Tournaments Joined</h2>
        <div className="flex flex-wrap gap-4">
          {
            [1,2,3,4,5,6,7].map((item, i) => (
              <img src="https://via.placeholder.com/268x200" className="rounded-md" key={i}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default profile