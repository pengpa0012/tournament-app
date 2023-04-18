import React from 'react'
import { TbUpload } from "react-icons/tb";

const create = () => {
  
  const onCreate = (e: any) => {
    e.preventDefault()
  }

  return (
    <div className="mt-20">
      <h2 className="text-2xl text-gray-300 mb-6">Create Tournament</h2>
      <div className="flex gap-4">
        <div className="flex-1">
          <label htmlFor="file">
            <div className="w-full min-h-full rounded-md bg-[#1E1E1E] grid place-items-center text-gray-300 text-center cursor-pointer">
              <div>
                <TbUpload size={30} style={{ marginInline: "auto" }} />
                <p className="text-xl mt-4">Upload Banner</p>
              </div>
            </div>
          </label>
          <input type="file" id='file' className="hidden"/>
        </div>
        <form className="flex flex-col items-stretch flex-1 text-gray-300 text-xl" onSubmit={onCreate}>
          <div className="flex gap-4">
            <input type="text" className="bg-[#1E1E1E] border border-[#323437] rounded-md flex-1 p-4 focus:outline-none" placeholder="Enter Title" />
            <input type="text" className="bg-[#1E1E1E] border border-[#323437] rounded-md flex-1 p-4 focus:outline-none" placeholder="Enter Prize Pool"  />
          </div>
          <div className="flex gap-4 my-4">
            <input type="text" className="bg-[#1E1E1E] border border-[#323437] rounded-md flex-1 p-4 focus:outline-none" placeholder="Enter Type"  />
            <select className="bg-[#1E1E1E] border border-[#323437] rounded-md flex-1 p-4 focus:outline-none">
              <option value={0}>No. of Participants</option>
              {
                [2,4,8].map((item, i) => (
                  <option value={item} key={i}>{item}</option>
                ))
              }
            </select>
          </div>
          <textarea className="min-h-[210px] p-4 bg-[#1E1E1E] w-full border border-[#323437] rounded-md focus:outline-none resize-none" placeholder="Enter Rules"></textarea>
        </form>
      </div>
      <div className="flex gap-4 justify-center mt-12 text-white text-xl">
        <button className="bg-gray-500 hover:bg-gray-600 py-2 px-6 rounded-md">Cancel</button>
        <button className="bg-[#31AC47] hover:bg-[#2da142] py-2 px-6 rounded-md">Create</button>
      </div>
    </div>
  )
}

export default create