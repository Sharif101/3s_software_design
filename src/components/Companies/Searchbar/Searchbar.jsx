import React from 'react'
import Input from '../../Resources/Input/Input'
import { IoSearchSharp } from 'react-icons/io5'
import { RiDeleteBin6Line } from 'react-icons/ri'

export default function Searchbar() {
    return (
        <div className="border-[1px] border-[#DBDBDB] rounded p-5 mb-5">
            <div className="flex justify-between gap-5">
                <Input label="Company Name" type="text" placeholder="company name" />
                <Input label="Company Name" type="text" placeholder="company name" />
                <Input label="Company Name" type="text" placeholder="company name" />
                <Input label="Company Name" type="text" placeholder="company name" />
            </div>
            <div className="flex justify-center gap-3 mt-4">
                <button className="bg-[#3872FA] text-[14px] text-white px-2 py-1 rounded flex items-center gap-1">
                    <IoSearchSharp /> Search
                </button>
                <button className="bg-[#EAEAEA] text-[14px] text-slate-400 px-2 py-1 rounded flex items-center gap-1">
                    <RiDeleteBin6Line />
                    Clear
                </button>
            </div>
        </div>
    )
}
