import { Card } from "@/Components/Card"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { GiSwordsEmblem, GiTrophyCup } from "react-icons/gi";
import { BiMedal } from "react-icons/bi";
import { tableHeader, tabs } from "@/Content";

export default function Home() {
  const [isLoggedin, setIsLoggedin] = useState(false)
  const router = useRouter()
  const [tab, setTab] = useState(0)

  // useEffect(() => {
  //   if(!isLoggedin) router.push("/login")
  // }, [])

  return (
    <main>
      <table className="w-full">
        <thead>
          <tr className="flex bg-[#2E426E] text-white py-4 rounded-tl-lg rounded-tr-lg text-gray-300">  
            {
              tableHeader().map((item, i) => (
              <th className="flex-1" key={i}>
                <div className="flex justify-center">
                  {item.icon}
                  <span>
                    {item.title}
                  </span>
                </div>
              </th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            [1,2,3,4,5].map((item: any, i: number) => (
              <tr className="text-center flex items-center bg-[#1E1E1E] hover:bg-[#1a1a1a] rounded-md my-2 cursor-pointer text-gray-300" key={i} onClick={() => router.push("/tournament")}>
                <td className="p-2 flex flex-1">
                  <img src="https://via.placeholder.com/400x200" className="w-full max-w-[150px] rounded-md"/>
                  <div className="text-left ml-4">
                    <h4 className="text-lg font-medium">Title</h4>
                    <p className="text-sm">Lorem ipsum dolor sit amet</p>
                  </div>
                </td>
                <td className="p-1 flex-1">Tito Valdez</td>
                <td className="p-1 flex-1">12/20</td>
                <td className="p-1 flex-1">20,000</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </main>
  )
}
