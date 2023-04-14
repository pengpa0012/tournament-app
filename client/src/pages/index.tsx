import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function Home() {
  const [isLoggedin, setIsLoggedin] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if(!isLoggedin) router.push("/login")
  }, [])

  return (
    <main>
      <h1>Homepage</h1>
    </main>
  )
}
