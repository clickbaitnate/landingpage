import React from 'react';
import Header from '../components/Header';

const Projects = () => {
  return (
    <React.Fragment>
      <Header title="Selected Projects" />
      <main className="container my-4 mx-auto px-2 md:px-4 lg:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">

          {/* First Card */}
          <div className="my-2 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2">
            <article className="overflow-hidden rounded-lg shadow-lg">
              <img src="/assets/tarot.png" alt="ai tarot cards" className="block h-auto w-full max-w-md mx-auto"></img>
              <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-lg md:text-xl">
                  Psychic GPT
                </h1>
              </header>
              <footer className="flex flex-col md:flex-row items-start md:items-center justify-between p-2 md:p-4">
                <p className="mb-2 md:mb-0">A wrapper that gives GPT the ability to be a psychic. Have your tarot cards read to you by GPT!</p>
                <div className="flex flex-col space-y-2 mt-2 md:mt-0">
                  <button onClick={() => window.location.href='https://github.com/clickbaitnate/PsychicGPT'} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">GitHub</button>
                  <button onClick={() => window.location.href='https://psychic-gpt.vercel.app/'} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">View Project</button>
                </div>
              </footer>
            </article>
          </div>

          {/* Second Card */}
          <div className="my-2 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2">
            <article className="overflow-hidden rounded-lg shadow-lg">
              <img src="/assets/astrology.png" alt="ai astrology wheel" className="block h-auto w-full max-w-md mx-auto"></img>
              <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-lg md:text-xl">
                  AI-Strology
                </h1>
              </header>
              <footer className="flex flex-col md:flex-row items-start md:items-center justify-between p-2 md:p-4">
                <p className="mb-2 md:mb-0">A tool to generate an astrology chart and use GPT to give a summary of the significance of each planet, sign and aspect in the chart.</p>
                <div className="flex flex-col space-y-2 mt-2 md:mt-0">
                  <button onClick={() => window.location.href='https://github.com/clickbaitnate/AIstrology'} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">GitHub</button>
                  <button onClick={() => window.location.href='https://aistrology.us/'} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">View Project</button>
                </div>
                
              </footer>
            </article>
          </div>
          <div className="w-full flex justify-center mt-8">
            <div className="relative" style={{ width: '100%', paddingBottom: '56.25%' }}>
              <iframe 
                className="absolute top-0 left-0 w-full h-full"
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/_YP2h2AlsY0" 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen>
              </iframe>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Projects;
