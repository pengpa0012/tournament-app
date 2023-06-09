import jwtDecode from 'jwt-decode'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false)
  const router = useRouter()
  const [input, setInput] = useState({
    email: "",
    password: "",
    repeatPassword: ""
  })
  useEffect(() => {
    // @ts-ignore
    google.accounts.id.initialize({
      client_id: "131185773345-hsr2aadv09lh7k0gmgnhskk6uspruevr.apps.googleusercontent.com",
      callback: (res: any) => console.log(jwtDecode(res.credential))
    })
    // @ts-ignore
    google.accounts.id.renderButton(
      document.getElementById("signInBtn"),
      {
        theme: "outline", 
        size: "large", 
        width: "100%",
        longtitle: true
      }
    )
  }, [])

  const onHandleSubmit = (e: any) => {
    e.preventDefault()
    if(isSignUp) setIsSignUp(false)
    else router.push("/")
  }

  return (
    <div className="min-h-screen grid place-items-center text-white">
      <div>
        <h2 className="text-center text-5xl font-bold">Welcome!</h2>
        <form className="flex gap-4 flex-col my-6 w-[300px] sm:w-[500px] font-medium" onSubmit={onHandleSubmit}>
          <div>
            <label>Email</label>
            <input type="text" className="border-2 border-black rounded-md p-2 tex-xl w-full text-black" placeholder="Enter your email" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" className="border-2 border-black rounded-md p-2 tex-xl w-full text-black" placeholder="Enter your password" />
          </div>
          {
            isSignUp ?
            <>
             <div>
                <label>Repeat Password</label>
                <input type="password" className="border-2 border-black rounded-md p-2 tex-xl w-full text-black" placeholder="Enter your password" />
              </div>
              <div>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-md mb-1">Sign Up</button>
                <p>Already have an account? click <span className="text-blue-600 underline cursor-pointer" onClick={() => setIsSignUp(false)}>here</span></p>
              </div>
            </>
            :
            <div>
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-md mb-1">Login</button>
              <p>Create an account <span className="text-blue-600 underline cursor-pointer" onClick={() => setIsSignUp(true)}>here</span></p>
            </div>
          }
        </form>
        <div className="text-center">
          <p className="font-medium inline relative z-20 px-2">Or, sign in with your Google Account</p>
        </div>
        <div id="signInBtn" className="my-4 flex justify-center"></div>
      </div>
    </div>
  )
}
