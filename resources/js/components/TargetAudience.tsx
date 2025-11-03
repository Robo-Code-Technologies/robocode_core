import { motion } from 'framer-motion';

import Founders from '../assets/founders.png';
import AIShift from '../assets/ai_shift.png';
import Mission from '../assets/our_mission.png';

import Parents from '../assets/parents.svg';
import School from '../assets/school.svg';
import TutorCenter from '../assets/tutor_center.svg';

export function TargetAudience() {
    return (
        <motion.div className="flex flex-col items-center bg-white pt-16 sm:pt-24 md:pt-32">
            <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-950 text-center px-4"
                style={{ fontFamily: 'Fredoka' }}
            >
                For educators and parents
            </motion.h1>
            <motion.p className="mt-4 max-w-[600px] text-center text-base sm:text-lg text-gray-500 px-4 sm:px-0">
                We partner with schools, tutor centers, and families to make
                robotics education simple, engaging, and future-ready.
            </motion.p>

            <motion.div className="mt-12 sm:mt-16 flex flex-col sm:flex-col lg:flex-row w-full gap-6 sm:gap-8 lg:gap-12 xl:gap-20 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
                <motion.div className="flex aspect-[4/3] sm:aspect-[3/4] w-full flex-col items-center rounded-lg border border-blue-950/20 p-6 sm:p-8">
                    <motion.img className="h-20 sm:h-24 md:h-32" src={School} />
                    <motion.p className="text-xl sm:text-2xl font-semibold text-blue-950 text-center">
                        Schools
                    </motion.p>
                    <motion.p className="mt-3 sm:mt-4 text-center text-sm sm:text-base text-gray-500">
                        Empower classrooms with structured robotics and coding
                        programs aligned with STEM goals.
                    </motion.p>
                </motion.div>
                <motion.div className="flex aspect-[4/3] sm:aspect-[3/4] w-full flex-col items-center rounded-lg border border-blue-950/20 p-6 sm:p-8">
                    <motion.img className="h-20 sm:h-24 md:h-32" src={TutorCenter} />
                    <motion.p className="text-xl sm:text-2xl font-semibold text-blue-950 text-center">
                        Tutor Center
                    </motion.p>
                    <motion.p className="mt-3 sm:mt-4 text-center text-sm sm:text-base text-gray-500">
                        Enhance your learning programs with robotics kits and
                        guided lessons that is exciting for every student.
                    </motion.p>
                </motion.div>
                <motion.div className="flex aspect-[4/3] sm:aspect-[3/4] w-full flex-col items-center rounded-lg border border-blue-950/20 p-6 sm:p-8">
                    <motion.img className="h-20 sm:h-24 md:h-32" src={Parents} />
                    <motion.p className="text-xl sm:text-2xl font-semibold text-blue-950 text-center">
                        Parents
                    </motion.p>
                    <motion.p className="mt-3 sm:mt-4 text-center text-sm sm:text-base text-gray-500">
                        Bring robotics home with kits and lessons designed to
                        help kids learn, build, and create at their own pace.
                    </motion.p>
                </motion.div>
            </motion.div>

            <div className="mx-6 sm:mx-12 md:mx-24 my-16 sm:my-20 md:my-24 w-full border border-b-0 border-gray-300"></div>

            <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-950 text-center px-4"
                style={{ fontFamily: 'Fredoka' }}
            >
                Our Team & Our Story
            </motion.h1>

            <motion.p className="mt-3 text-base sm:text-lg text-gray-400 text-center px-4">
                Our vision, our mission & our motivation!
            </motion.p>

                        <motion.div className="mt-16 sm:mt-20 md:mt-24 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
                {/* Founders */}
                <motion.div className="flex flex-col lg:flex-row w-full gap-6 sm:gap-8 lg:gap-12">
                    <motion.div className="flex-1 lg:flex-[3] order-2 lg:order-1">
                        <motion.h1
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-950 text-center lg:text-left"
                            style={{ fontFamily: 'Fredoka' }}
                        >
                            Where It All Began
                        </motion.h1>

                        <motion.p className="my-4 sm:my-6 text-base sm:text-lg text-blue-950 text-center lg:text-left">
                            Robo Code Club was founded by passionate software
                            engineers — Kyle, Kent, and Chan — who saw firsthand
                            how fast and disruptive AI is changing the world. We
                            realized that while technology is evolving at an
                            incredible pace, education isn't keeping up — and
                            kids risk being left behind if we don't act now.
                        </motion.p>
                    </motion.div>
                    <motion.div className="flex flex-1 lg:flex-[2] justify-center lg:justify-end order-1 lg:order-2">
                        <motion.img
                            className="rounded-xl shadow-lg w-full max-w-sm lg:max-w-none"
                            src={Founders}
                        />
                    </motion.div>
                </motion.div>

                {/* The AI Shift */}
                <motion.div className="mt-16 sm:mt-20 md:mt-24 flex flex-col lg:flex-row w-full gap-6 sm:gap-8 lg:gap-12">
                    <motion.div className="flex flex-1 lg:flex-[2] justify-center lg:justify-start order-1">
                        <motion.img
                            className="rounded-xl shadow-lg w-full max-w-sm lg:max-w-none"
                            src={AIShift}
                        />
                    </motion.div>
                    <motion.div className="flex-1 lg:flex-[3] order-2">
                        <motion.h1
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-950 text-center lg:text-left"
                            style={{ fontFamily: 'Fredoka' }}
                        >
                            The AI Shift
                        </motion.h1>

                        <motion.p className="my-4 sm:my-6 text-base sm:text-lg text-blue-950 text-center lg:text-left">
                            AI is transforming every field — from art and
                            medicine to business and engineering. Whatever path
                            kids choose, they'll work alongside technology. We
                            believe understanding it early gives them the power
                            to adapt, create, and thrive in the future. CHange
                            the title of this to shorter
                        </motion.p>
                    </motion.div>
                </motion.div>

                {/* Our Mission */}
                <motion.div className="mt-16 sm:mt-20 md:mt-24 flex flex-col lg:flex-row w-full gap-6 sm:gap-8 lg:gap-12">
                    <motion.div className="flex-1 lg:flex-[3] order-2 lg:order-1">
                        <motion.h1
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-950 text-center lg:text-left"
                            style={{ fontFamily: 'Fredoka' }}
                        >
                            Our Mission
                        </motion.h1>

                        <motion.p className="my-4 sm:my-6 text-base sm:text-lg text-blue-950 text-center lg:text-left">
                            We're here to equip the next generation with
                            real-world tech skills through fun, hands-on
                            robotics and coding education. By learning through
                            play, every child gains the confidence to navigate —
                            and build — the world of tomorrow.
                        </motion.p>
                    </motion.div>
                    <motion.div className="flex flex-1 lg:flex-[2] justify-center lg:justify-end order-1 lg:order-2">
                        <motion.img
                            className="rounded-xl shadow-lg w-full max-w-sm lg:max-w-none"
                            src={Mission}
                        />
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
