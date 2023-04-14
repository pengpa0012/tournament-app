import { Card } from "@/Components/Card"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { GiCrossedSwords, GiOrganigram, GiMoneyStack } from "react-icons/gi";
import { BsPeopleFill } from "react-icons/bs";

export default function Home() {
  const [isLoggedin, setIsLoggedin] = useState(false)
  const router = useRouter()

  // useEffect(() => {
  //   if(!isLoggedin) router.push("/login")
  // }, [])

  return (
    <main>
      <nav className="flex justify-between">
        <h1>Logo</h1>
        <h1>Profile</h1>
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
        <table className="w-full">
          <thead>
            <tr className="flex bg-blue-500 text-white">
              <th className="p-2 flex-1">
                <div className="flex justify-center">
                  <GiCrossedSwords size={24} style={{ marginRight: 10 }} />
                  <span>
                    Tournament
                  </span>
                </div>
              </th>
              <th className="p-2 flex-1">
                <div className="flex justify-center">
                  <GiOrganigram size={24} style={{ marginRight: 10 }} />
                  <span>
                    Organizer
                  </span>
                </div>
              </th>
              <th className="p-2 flex-1">
                <div className="flex justify-center">
                  <BsPeopleFill size={24} style={{ marginRight: 10 }} />
                  <span>
                    Participants
                  </span>
                </div>
              </th>
              <th className="p-2 flex-1">
                <div className="flex justify-center">
                  <GiMoneyStack size={24} style={{ marginRight: 10}} />
                  <span>
                    Prize Pool
                  </span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {
              [1,2,3,4,5].map((item: any, i: number) => (
                <tr className="text-center flex items-center border-2 border-r-0 border-l-0 border-t-0 even:bg-black/5" key={i}>
                  <td className="p-1 flex flex-1">
                    <img src="https://via.placeholder.com/400x200" className="mx-auto w-full max-w-[150px]"/>
                    <p className="text-left ml-2">Lorem ipsum dolor sit amet</p>
                  </td>
                  <td className="p-1 flex-1">Name</td>
                  <td className="p-1 flex-1">Name</td>
                  <td className="p-1 flex-1">Name</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </main>
  )
}
