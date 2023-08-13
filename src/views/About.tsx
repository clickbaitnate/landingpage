import React from 'react'
import Header from '../components/Header'

const About = () => {
  return (
    <React.Fragment>
      <Header title="About" />
      <main className="p-4 md:p-8">
        <div className="bg-gray-100 rounded-lg h-auto p-4 md:p-8 shadow-lg max-w-5xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-semibold mb-4">Hometown Austinite Adapting to New Austin</h1>
          
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex-1">
              <p className="text-lg md:text-xl leading-relaxed">
                I am currently seeking a job that utilizes my obsession with technology and allows me to constantly learn and be challenged by people who are smarter than me.
                I have been working somewhat tech adjacent helpdesk and sales jobs for the past few years while I taught myself how to code and maintain a homelab in my free time.
              </p>
              <p className="text-lg md:text-xl leading-relaxed">
                Some of the accomplishments I am proud of are earning two Certificate of Leadership awards from two separate Austin Mayors for mutual aid projects I coordinated. I'm also an Eagle Scout.
                There is a lot of adversity that I have needed to overcome in my life, such as having tourettes and growing up as an at-risk student. This just motivates me even more to achieve my goals, just to prove that it's possible and bring hope to anyone who feels left behind or that they aren't smart enough to do the things their heart desires.
              </p>
            </div>

            <img src="src/assets/me.jpg" alt="Cartoon of Me" className="w-64 h-64 md:w-80 md:h-80 rounded-full shadow-md" />
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default About
