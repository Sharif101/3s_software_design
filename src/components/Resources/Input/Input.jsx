import React from 'react'

export default function Input({ label, type, placeholder, value, setValue }) {
    return (
        <div className="flex flex-col w-full">
            <label htmlFor="">{label}</label>
            <input
                type={type}
                className="border-[1px] border-[#DBDBDB] rounded p-1 pl-3 focus:outline-none placeholder:text-[12px]"
                placeholder={placeholder}
            />
        </div>
    )
}
