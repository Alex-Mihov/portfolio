import React from 'react'

export default function Hero() {
    return (
        <div className='min-h-[800px] bg-[#0f172a] flex flex-col justify-center items-center py-8'>

            <div className='text-7xl m-17'>
                <h1 className='text-white'>Alex</h1>
                <h1 className='text-blue-600'>Mihov</h1>
            </div>
            <h3 className='text-5xl text-white'>Junior Front-End Developer </h3>
            <span className='text-white text-xl m-8'>Trasformo idee in interfacce moderne e intuitive, con particolare attenzione alla semplicità, alla funzionalità e all’esperienza utente.</span>

            <button
                className="cursor-pointer flex items-center justify-between bg-gray-800 px-5 py-4 rounded-full text-white text-xl tracking-wider shadow-xl hover:bg-gray-600 hover:scale-105 duration-500 hover:ring-1 font-mono w-[150px]"
            >
                Esplora
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    class="w-5 h-5 animate-bounce"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                    ></path>
                </svg>
            </button>

        </div >
    )
}
