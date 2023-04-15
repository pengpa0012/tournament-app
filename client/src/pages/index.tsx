import { Card } from "@/Components/Card"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { GiSwordsEmblem } from "react-icons/gi";
import { playerLeaderboards, tableHeader, tabs } from "@/Content";

export default function Home() {
  const [isLoggedin, setIsLoggedin] = useState(false)
  const router = useRouter()
  const [tab, setTab] = useState(0)

  // useEffect(() => {
  //   if(!isLoggedin) router.push("/login")
  // }, [])

  return (
    <main>
      <nav className="flex items-center justify-between">
        <h1 className="font-medium text-xl">Logo</h1>
        <div className="flex cursor-pointer" onClick={() => router.push("/profile")}>
          <img src="https://via.placeholder.com/50x50" className="mr-4 rounded-full"/>
          <div>
            <h3 className="text-md truncate">Godfrey</h3>
            <p className="text-sm">Participant</p>
          </div>
        </div>
      </nav>
      <div className="mt-20">
        {/* <h2 className="mb-10">Tournament List</h2>
        <div className="flex flex-wrap gap-6">
          {
            [1,2,3,4,5].map((item: any, i: number) => (
              <Card key={i} />
            ))
          }
        </div> */}
        <ul className="flex mb-4 gap-2 font-medium">
          {
            tabs().map((item, i) => (
              <li className={`${tab == i ? "bg-blue-500 text-white" : "hover:bg-gray-100"} p-2 cursor-pointer rounded-md flex`} onClick={() => setTab(i)}>
                {item.icon}
                <span>
                  {item.title}
                </span>
              </li>
            ))
          }
        </ul>
        {
          tab == 0 &&
          <table className="w-full">
            <thead>
              <tr className="flex bg-blue-600 text-white py-4 rounded-tl-lg rounded-tr-lg">  
                {
                  tableHeader().map((item, i) => (
                  <th className="flex-1">
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
        }
        {
          tab == 1 && 
          playerLeaderboards.map((item, i) => (
            <div className="border-2 border-r-0 border-t-0 border-l-0 p-4 flex items-center justify-between hover:bg-gray-200 cursor-pointer"  onClick={() => router.push(`/profile?id=${item.name}`)}>
              <div className="flex items-center">
                <h1 className="text-4xl font-bold min-w-[70px]">{item.rank}</h1>
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
        {
          tab == 2 && <h1>Organizers</h1>
        }
      </div>
    </main>
  )
}
