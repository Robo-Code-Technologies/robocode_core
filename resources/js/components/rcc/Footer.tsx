import { motion } from 'framer-motion';

import Logo from '../../assets/rcc_logo.svg';

export function Footer() {
    return (
        <motion.div className="bg-white">
            <div className="h-[1px] w-full bg-gray-200"></div>
            <div className="px-4 py-6 sm:px-8 md:px-16 lg:px-24 xl:px-32">
                {/* Top section: Logo and Contact Info */}
                <motion.div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:gap-0">
                    <motion.img
                        className="hidden w-12 sm:block sm:w-14 md:w-16"
                        src={Logo}
                        alt="Robocode Club Logo"
                    />
                    <div className="flex-1"></div>

                    {/* Contact info - stacked on mobile, inline on desktop */}
                    <div className="flex flex-col items-center gap-1 text-center sm:flex-row sm:gap-0 sm:text-left">
                        <motion.a
                            className="text-xs text-gray-600 transition-colors hover:text-gray-900 sm:text-sm"
                            href="mailto:contact@robocodeclub.com"
                        >
                            contact@robocodeclub.com
                        </motion.a>
                        <motion.p className="hidden text-gray-400 sm:mx-2 sm:block">
                            |
                        </motion.p>
                        <motion.p className="text-xs text-gray-600 sm:text-sm">
                            Panay, Capiz, Philippines 5800
                        </motion.p>
                    </div>
                </motion.div>

                <hr className="my-3 h-[1px] border-none bg-gray-200 sm:my-4" />

                {/* Bottom section: Copyright and Links */}
                <motion.div className="flex flex-col items-center gap-2 text-center sm:flex-row sm:text-left">
                    <motion.p className="text-xs text-gray-500 sm:text-sm">
                        Copyright @2025 Robo Code Technologies. All Rights Reserved.
                    </motion.p>

                    <div className="flex-1"></div>

                    {/* Legal links */}
                    <div className="flex items-center gap-2">
                        <motion.a
                            className="cursor-pointer text-xs text-gray-600 transition-colors hover:text-gray-900 sm:text-sm"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Terms & Conditions
                        </motion.a>
                        <motion.p className="text-xs text-gray-400 sm:text-sm">
                            -
                        </motion.p>
                        <motion.a
                            className="cursor-pointer text-xs text-gray-600 transition-colors hover:text-gray-900 sm:text-sm"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Privacy Policy
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}
