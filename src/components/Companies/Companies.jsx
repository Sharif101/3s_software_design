import React from 'react'
import Searchbar from './Searchbar/Searchbar'

export default function Companies() {
    return (
        <div className="container mx-auto p-6">
            <div className="flex justify-between mb-5">
                <p className="text-[20px] text-black font-semibold">List of Companines</p>
                <button className="bg-[#3872FA] text-[14px] text-white px-2 py-1 rounded">+ Add new</button>
            </div>
            <div>
                <Searchbar />
            </div>
            <h1 className="text-3xl font-bold underline">companies</h1>
        </div>
    )
}
