import React from 'react'

export default function Hero() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-sky-950 to-sky-900 flex flex-col justify-center items-center py-20">

            <div className='text-7xl m-17'>
                <h1 className='text-white'>Alex</h1>
                <h1 className='text-blue-600'>Mihov</h1>
            </div>
            <h3 className='text-5xl text-white'>Junior Front-End Developer </h3>
            <span className='text-white text-xl m-8'>Trasformo idee in interfacce moderne e intuitive, con particolare attenzione alla semplicità, alla funzionalità e all’esperienza utente.</span>

            <a href="#about-me">
                <button
                    className="cursor-pointer flex items-center justify-between bg-gray-800 px-5 py-4 mt-40 rounded-full text-white text-xl tracking-wider shadow-xl hover:bg-gray-600 hover:scale-105 duration-500 hover:ring-1 font-mono w-[150px] "
                >
                    Esplora
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-5 h-5 animate-bounce"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                        ></path>
                    </svg>
                </button>
            </a>


        </div >
    )
}
