import { tabs } from '@/Content'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { AiOutlinePlus } from "react-icons/ai";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  console.log(router.pathname)
  return  <>
    {router.pathname != "/login" && 
      <>
        <nav className="flex items-center justify-between">
          <h1 className="font-medium text-xl" onClick={() => router.push("/")}>Logo</h1>
          <div className="flex ">
            <button className="bg-blue-500 hover:bg-blue-600 px-[15px] text-white font-medium rounded-full mr-4 flex items-center"><AiOutlinePlus size={20} style={{ marginLeft: 2, fontWeight: "medium" }} /></button>
            <div className="flex cursor-pointer" onClick={() => router.push("/profile")}>
              <img src="https://via.placeholder.com/50x50" className="mr-2 rounded-full"/>
              <div>
                <h3 className="text-md truncate">Godfrey</h3>
                <p className="text-sm">Participant</p>
              </div>
            </div>
          </div>
        </nav>
       {router.pathname !== "/profile" && router.pathname !== "/tournament" &&
        <ul className="mt-20 flex mb-4 gap-2 font-medium">
          {
            tabs().map((item, i) => (
              <li key={i} className={`${router.pathname == item.route ? "bg-blue-500 text-white" : "hover:bg-gray-100"} p-2 cursor-pointer rounded-md flex`} onClick={() => router.push(item.route)}>
                {item.icon}
                <span>
                  {item.title}
                </span>
              </li>
            ))
          }
        </ul>}
      </>
    }
    <Component {...pageProps} />
  </>
}
