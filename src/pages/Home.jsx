import { Download } from 'lucide-react'
import BaseLayout from "@/layouts/BaseLayout"
import MyPhoto from "/myPhoto.jpeg"
import VantaRings from "@/components/animation/VantaRings"
import About from "@/components/info/About"
import Contact from "@/components/info/Contact"
import Projects from "@/components/info/Projects"
import { getFeaturedProjects } from "@/data/projectsData"

const HomePage = () => {
  
  return (
    <BaseLayout>
      <VantaRings className="w-full min-h-screen h-auto">
        <div className='flex flex-col items-center justify-center gap-20 py-20 px-4 sm:px-6 lg:px-8'>
          <div className="text-white text-center p-6 sm:p-10 w-full max-w-[1200px] mx-auto bg-gray-950/75 rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
            <p className="text-xl">Explore my projects, learn about me, and get in touch!</p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-20 px-4 sm:px-6 py-10">
          
            <div className="bg-gray-900 rounded-full bg-opacity-80 shadow-lg w-48 sm:w-64 md:w-80 flex items-center justify-center">
              <img
                src={MyPhoto}
                alt="My Photo"
                className="object-cover object-top rounded-full border border-blue-500 w-full h-auto"
              />
            </div>

            <div className="p-4 sm:p-6 max-w-2xl w-full flex flex-col justify-center bg-gray-950/75 rounded-lg shadow-lg">
              <div>
                <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-yellow-600 to-lime-500 bg-clip-text font-extrabold text-transparent mb-4 sm:mb-6">
                  SOFTWARE ENGINEERING
                </h2>

                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-orange-600 to-pink-800 bg-clip-text font-extrabold text-transparent mb-4 sm:mb-6">
                  CRUZ RIVERA EDWIN MANUEL
                </h2>
              </div>

              <div>
                <button className="mt-4 sm:mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-gray-800 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg cursor-pointer hover:scale-105 transition-transform text-sm sm:text-base">
                  Download CV <Download />
                </button>
              </div>
            </div>
          </div>

          <div className='flex flex-col items-center justify-center gap-20 py-20'>
            <About />
            <Projects />
            <Contact />
          </div>
        </div>
      </VantaRings>
    </BaseLayout>
  );
};

export default HomePage;
