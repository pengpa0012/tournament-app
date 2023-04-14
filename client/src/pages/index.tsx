import { Card } from "@/Components/Card"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

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
        <h2 className="mb-10">Tournament List</h2>
        <div className="flex flex-wrap gap-6">
          {
            [1,2,3,4,5].map((item: any, i: number) => (
              <Card key={i} />
            ))
          }
        </div>
      </div>
    </main>
  )
}
