import React, { useEffect, useState } from 'react'

export const Login = () => {
  useEffect(() => {
    /* Global Code */
    google.accounts.id.initialize({
      client_id: "131185773345-hsr2aadv09lh7k0gmgnhskk6uspruevr.apps.googleusercontent.com",
      callback: (res) => console.log(res)
    })
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

  return (
    <div className="min-h-screen grid place-items-center">
      <div>
        <h2 className="text-center text-4xl">Welcome!</h2>
        <div id="signInBtn" className="my-4 flex justify-center"></div>
        <form className="flex gap-4 flex-col my-4 w-[300px] sm:w-[500px]">
          <div>
            <label>Email</label>
            <input type="text" className="border rounded-md p-2 tex-xl w-full" placeholder="Enter your email" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" className="border rounded-md p-2 tex-xl w-full" placeholder="Enter yout password" />
          </div>
          <button type="submit" className="w-full bg-red-400 p-2 rounded-md">Login/Signup</button>
        </form>
      </div>
    </div>
  )
}
