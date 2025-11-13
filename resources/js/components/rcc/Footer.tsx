import { motion } from 'framer-motion';

import Logo from '../../assets/rcc_logo.svg';

export function Footer() {
    return (
        <motion.div className="bg-[#192f66]">
            <div className="h-[1px] w-full bg-white opacity-30"></div>
            <div className="px-32 py-16">
            <motion.div className="flex items-end">
                <motion.img
                    className="w-24"
                    src={Logo}
                    alt="Robocode Club Logo"
                />
                <div className="flex-1"></div>
                <motion.a
                    className="text-white opacity-70"
                    href="mailto:contact@robocodeclub.com"
                >
                    contact@robocodeclub.com
                </motion.a>
                <motion.p className="mx-2 text-lg text-white opacity-70">|</motion.p>
                <motion.p className="text-white opacity-70">
                    Panay, Capiz, Philippines 5800
                </motion.p>
            </motion.div>
            <hr className="my-3 h-[1px] border-none bg-white opacity-30" />
            <motion.div className="flex">
                <motion.p className="text-white opacity-70">
                    Copyright @2025 Robo Code Technologies. All Rights Reserved.
                </motion.p>

                <div className="flex-1"></div>

                <motion.a className="text-white opacity-70">
                    Terms & Conditions
                </motion.a>
                <motion.p className="text-white opacity-70 mx-2">-</motion.p>
                <motion.a className="text-white opacity-70">
                    Privacy Policy
                </motion.a>
            </motion.div>
            </div>
        </motion.div>
    );
}
