import React from 'react'
import Header from '../components/Header'


const Home = () => {
  return (
    <React.Fragment>
      <Header title="🌙 Nathan A.M. ☀️" />
      <main className="p-4 md:p-8">
        <div className="bg-gray-100 rounded-lg h-auto p-4 md:p-8 shadow-lg max-w-5xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-semibold mb-4">Welcome to my personal landing page!</h1>
          
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <img src="/assets/nateavi.png" alt="Cartoon of Me" className="w-64 h-64 md:w-80 md:h-80 rounded-full shadow-md" />

            <div className="flex-1">
              <p className="text-lg md:text-xl leading-relaxed">
                I've been programming and experimenting with technologies since 2017. It all started when I bought a ThinkPad, installed Linux, and picked up technology as a hobby. This hobby helped me cope during a challenging period in my life. I'm now striving to make this my career, vocation, and life's purpose because it's my favorite thing to do.     
              </p>
              <p className="text-lg md:text-xl leading-relaxed">
                The languages I use the most are Javascript and Python, but I've been learning Go and Rust lately as well.
                I am most interested in AI, VR, and Blockchain, but I really just like the flow state working with computers puts me in, so I'm happy to experiment and learn with whatever technologies emerge.
              </p>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Home
