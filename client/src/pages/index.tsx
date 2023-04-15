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
          <tr className="flex bg-blue-600 text-white py-4 rounded-tl-lg rounded-tr-lg">  
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
              <tr className="text-center flex items-center border-2 border-r-0 border-l-0 border-t-0 even:bg-gray-100 hover:bg-gray-200 cursor-pointer" key={i} onClick={() => router.push("/tournament")}>
                <td className="p-1 flex flex-1">
                  <img src="https://via.placeholder.com/400x200" className="mx-auto w-full max-w-[150px]"/>
                  <div className="text-left ml-2">
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
