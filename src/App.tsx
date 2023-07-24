import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <header className="text-gray-700 border-b border-gray-200">
        <div className='container flex mx-auto p-5 flex-col md:flex-row items-center '>
          <a href='#' className='font-medium text-gray-900 mb-4 md:mb-0'>
            <span className='text-xl ml-1'>Takuya Kasagawa</span>
          </a>
          <nav className='md:ml-auto text-base'>
            <a href='#home' className='mr-5 hover:text-blue-400 duration-300'>Home</a>
            <a href='#about' className='mr-5 hover:text-blue-400 duration-300'>About</a>
            <a href='#skills' className='mr-5 hover:text-blue-400 duration-300'>Skills</a>
            <a href='#blog' className='mr-5 hover:text-blue-400 duration-300'>Blog</a>
          </nav>
        </div>
      </header>
      <section className='text-gray-700' id="home">
        <div className='flex container mx-auto py-20 px-5 flex-col md:flex-row items-center justify-center'>
          <div className='md:w-1/2 flex-grow mb-16 lg:pr-24 mg:pr-16 text-center md:text-left'>
            <h1 className='text-3xl sm:text-6xl text-gray-900 font-medium mb-4'>Hi!
            <br/>
            I'm Takuya Kasagawa
            </h1>
            <p className='mb-8 leading-relaxed'>
              フロントエンドエンジニアを目指す笠川拓也です。
              <br/>学習言語はHTML・CSS・Git・React・TypeScript
              <br/>趣味はギター、バンド活動、旅行、サッカー観戦
            </p>
            <button className='text-white bg-green-500 py-2 px-6 border-0 rounded text-lg hover:bg-green-600 duration-300'>Contact</button>
          </div>
          <div className='md:w-1/2 lg:max-w-lg w-1/2' >
          <img src='./img/icon.jpeg' alt=''/>
          </div>
        </div>

      </section>
    </>
  )
}

export default App
