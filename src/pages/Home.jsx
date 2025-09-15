import { Download } from 'lucide-react'
import BaseLayout from "@/layouts/BaseLayout"
import MyPhoto from "/myPhoto.jpeg"
import VantaBackground from "@/components/animation/VantaBackground"
import About from "@/components/info/About"
import Contact from "@/components/info/Contact"
import Projects from "@/components/info/Projects"

const HomePage = () => {
  return (
    <BaseLayout>
      <VantaBackground className="w-full min-h-screen h-auto">
        <div>
          <div className="text-white text-center p-10">
            <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
            <p className="text-xl">Explore my projects, learn about me, and get in touch!</p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 px-6 py-10">
            <div className="bg-gray-900 rounded-full bg-opacity-80 shadow-lg max-w-[400px] w-full flex items-center justify-center">
              <img
                src={MyPhoto}
                alt="My Photo"
                className="object-cover object-top rounded-full border border-blue-500"
              />
            </div>

            <div className="p-6 max-w-3xl w-full flex flex-col justify-center bg-gray-950/75 rounded-lg shadow-lg">
              <div>
                <h2 className="text-8xl bg-linear-to-r from-yellow-600 to-lime-500 bg-clip-text font-extrabold text-transparent mb-6">
                  SOFTWARE ENGINEERING
                </h2>

                <h2 className="text-4xl bg-linear-to-r from-orange-600 to-pink-800 bg-clip-text font-extrabold text-transparent mb-6">
                  CRUZ RIVERA EDWIN MANUEL
                </h2>
              </div>
              <div>
                <button className="mt-6 inline-flex items-center gap-2 bg-linear-65 from-blue-500 to-gray-800 text-white font-semibold py-3 px-6 rounded-lg cursor-pointer hover:scale-105 transition-transform">
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
      </VantaBackground>
    </BaseLayout>
  );
};

export default HomePage;
