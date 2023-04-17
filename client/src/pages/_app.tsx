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
        <nav className="flex items-center justify-between text-white text-gray-300">
          <h1 className="font-medium text-xl" onClick={() => router.push("/")}>Logo</h1>
          <div className="flex ">
            <button className="bg-[#31AC47] hover:bg-[#2da142] px-[15px] text-white font-medium rounded-full mr-2 flex items-center" onClick={() => router.push("/create")}><AiOutlinePlus size={20} style={{ marginLeft: 2, fontWeight: "medium" }}/></button>
            <div className="flex cursor-pointer relative group" onClick={() => router.push("/profile")}>
              <img src="https://via.placeholder.com/50x50" className="mr-2 rounded-full"/>
              <div className="absolute bg-gray-700 text-gray-200 px-3 py-2 rounded-md -bottom-[120%] left-[50%] transform -translate-x-[50%] hidden group-hover:block">
                <h3 className="text-md truncate">Godfrey</h3>
                <p className="text-xs">Participant</p>
              </div>
            </div>
          </div>
        </nav>
       {router.pathname !== "/profile" && router.pathname !== "/tournament" && router.pathname !== "/create" &&
        <ul className="mt-20 flex mb-4 gap-2 font-medium">
          {
            tabs().map((item, i) => (
              <li key={i} className={`${router.pathname == item.route ? "bg-[#31AC47] text-white" : "text-gray-300 hover:bg-white/5"} p-2 cursor-pointer rounded-md flex`} onClick={() => router.push(item.route)}>
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
