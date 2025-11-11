import { motion } from 'framer-motion';

import Blob1 from '../../assets/blob_1.svg';
import Blob2 from '../../assets/blob_2.svg';
import Blob4 from '../../assets/blob_4.svg';
import EcosysBg from '../../assets/ecosys_bg_2.svg';
import TopBlob from '../../assets/ecosys_top_blob.svg';
import EmailIcon from '../../assets/email.png';
import FacebookIcon from '../../assets/facebook.png';
import LinkedinIcon from '../../assets/linkedin.png';
import Mascot2 from '../../assets/mascot_2.png';
import PhoneIcon from '../../assets/phone.png';

export function EcosystemBanner() {
    return (
        <motion.div className="relative w-full bg-white">
            <motion.div className="relative z-0 w-full bg-white">
                <motion.img
                    className="absolute -top-4 z-0 w-full object-cover"
                    src={TopBlob}
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
                <motion.img
                    className="relative z-10 w-full object-cover"
                    src={EcosysBg}
                />
            </motion.div>

            {/* Contact Form - Left side (from red guide to center) */}
            <div className="absolute top-[calc(50%+50px)] right-24 left-24 z-20 flex -translate-y-1/2 lg:right-60 lg:left-60">
                {/* Left half */}
                <div className="w-1/2">
                    <h1
                        className="text-5xl font-bold text-white"
                        style={{ fontFamily: 'Fredoka' }}
                    >
                        Contact Us
                    </h1>
                    <p className="mt-4 text-xl text-white">
                        Join us in building curiosity that builds the future!
                    </p>

                    <form className="mt-8 space-y-6">
                        {/* Name Field */}
                        <div>
                            <label
                                htmlFor="name"
                                className="mb-2 block text-lg font-semibold text-white"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter Your Name Here"
                                className="w-full rounded-full border-none bg-white px-6 py-4 text-gray-700 placeholder-gray-400 shadow-md outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        {/* Email Field */}
                        <div>
                            <label
                                htmlFor="email"
                                className="mb-2 block text-lg font-semibold text-white"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter Your Email Address Here"
                                className="w-full rounded-full border-none bg-white px-6 py-4 text-gray-700 placeholder-gray-400 shadow-md outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        {/* Message Field */}
                        <div>
                            <label
                                htmlFor="message"
                                className="mb-2 block text-lg font-semibold text-white"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={6}
                                placeholder="Enter Your Message Here"
                                className="w-full resize-none rounded-3xl border-none bg-white px-6 py-4 text-gray-700 placeholder-gray-400 shadow-md outline-none focus:ring-2 focus:ring-blue-400"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                className="rounded-full bg-gradient-to-r from-pink-500 to-red-500 px-12 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:from-pink-600 hover:to-red-600 hover:shadow-xl"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>

                {/* Right half */}
                <div className="flex w-1/2 flex-col">
                    {/* Upper section */}
                    <div className="relative h-1/2 overflow-hidden">
                        {/* Mascot - center */}
                        <motion.img
                            src={Mascot2}
                            alt="Mascot"
                            className="absolute top-1/2 left-1/2 w-64 -translate-x-1/2 -translate-y-1/2"
                            animate={{
                                y: [0, -15, 0],
                                rotate: [-5, 5, -5],
                            }}
                            transition={{
                                duration: 12,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        />

                        {/* Blob 1 - top left */}
                        <motion.img
                            src={Blob1}
                            alt="Blob"
                            className="absolute top-4 left-4 w-12"
                            animate={{
                                y: [0, -10, 0],
                                x: [0, 5, 0],
                            }}
                            transition={{
                                y: {
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                },
                                x: {
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                },
                            }}
                        />

                        {/* Blob 4 - top right */}
                        <motion.img
                            src={Blob4}
                            alt="Blob"
                            className="absolute top-8 right-8 w-10"
                            animate={{
                                y: [0, 10, 0],
                                x: [0, -5, 0],
                                rotate: [0, 0, 0, 360],
                            }}
                            transition={{
                                y: {
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                    delay: 0.5,
                                },
                                x: {
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                    delay: 0.5,
                                },
                                rotate: {
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                },
                            }}
                        />

                        {/* Blob 2 - bottom right */}
                        <motion.img
                            src={Blob2}
                            alt="Blob"
                            className="absolute right-12 bottom-6 w-14"
                            animate={{
                                y: [0, -12, 0],
                                x: [0, 8, 0],
                            }}
                            transition={{
                                y: {
                                    duration: 7,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                    delay: 1,
                                },
                                x: {
                                    duration: 7,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                    delay: 1,
                                },
                            }}
                        />
                    </div>

                    {/* Lower section */}
                    <div className="flex h-1/2 flex-col justify-start space-y-4 pt-6 pl-16">
                        {/* Divider line */}
                        <div className="h-px w-full bg-white opacity-30"></div>

                        {/* LinkedIn */}
                        <motion.a
                            href="https://www.linkedin.com/company/robo-code-club"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                        >
                            <img
                                src={LinkedinIcon}
                                alt="LinkedIn"
                                className="h-12 w-12"
                            />
                            <span className="text-lg text-white">
                                linkedin.com/company/robo-code-club
                            </span>
                        </motion.a>

                        {/* Facebook */}
                        <motion.a
                            href="https://www.facebook.com/robocodeclubph"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                        >
                            <img
                                src={FacebookIcon}
                                alt="Facebook"
                                className="h-12 w-12"
                            />
                            <span className="text-lg text-white">
                                facebook.com/robocodeclubph
                            </span>
                        </motion.a>

                        {/* Phone */}
                        <motion.a
                            href="tel:+639980471693"
                            className="flex items-center gap-4"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                        >
                            <img
                                src={PhoneIcon}
                                alt="Phone"
                                className="h-12 w-12"
                            />
                            <span className="text-lg text-white">
                                +63 998 047 1693
                            </span>
                        </motion.a>

                        {/* Email */}
                        <motion.a
                            href="mailto:contact@robocodeclub.com"
                            className="flex items-center gap-4"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                        >
                            <img
                                src={EmailIcon}
                                alt="Email"
                                className="h-12 w-12"
                            />
                            <span className="text-lg text-white">
                                contact@robocodeclub.com
                            </span>
                        </motion.a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
