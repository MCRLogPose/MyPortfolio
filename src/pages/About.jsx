import BaseLayout from "@/layouts/BaseLayout"
import MeetObjectivePhoto from "/meetObjectivePhoto.png"
import VerticalTimeline from "@/components/utils/VerticalTimeline"

const AboutPage = () => {
    return (
        <BaseLayout>
                <div className='flex flex-col items-center justify-center gap-20 py-20 px-4 sm:px-6 lg:px-8'>
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-20 px-4 sm:px-6 py-10">
                        <div className="text-white text-center p-6 sm:p-10 w-full max-w-[1200px] mx-auto bg-gray-950/75 rounded-lg shadow-lg">
                            <h1 className="text-2xl sm:text-4xl font-bold mb-4">More of me</h1>
                            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                                My interest in programming was born in my teens,
                                driven by my great passion for video games. I was fascinated
                                by the idea that behind every virtual world, every character, and every
                                interaction, there was code that made it possible. Over time,
                                my curiosity led me to discover that programming goes far beyond
                                entertainment. I learned that the applications we use every day, from social networks to business tools, are
                                built with code.
                            </p>
                            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                                My first formal introduction to programming was through Visual Basic in
                                Excel macros. Although it was a simple language, seeing how it could automate
                                tasks and optimize processes in a real-world work environment was a revelation.
                                That experience not only showed me the practical power of programming but also sparked
                                a desire to delve deeper. It was this tangible impact that motivated me to pursue a
                                technical degree in Software Engineering, convinced that programming is the key to creating
                                innovative solutions that transform the real world.
                            </p>
                        </div>
                    </div>

                    <div className="w-full max-w-[1200px] mx-auto p-6 sm:p-10">
                        <VerticalTimeline />
                    </div>

                    <div className="flex items-center justify-center">
                        <img
                            src={MeetObjectivePhoto}
                            alt="My Photo"
                            className="object-cover object-center w-full h-auto max-w-sm"
                        />
                    </div>
                </div>
        </BaseLayout >

    )
}

export default AboutPage;