import { motion } from 'framer-motion';

import EcosysBg from '../../assets/ecosys_bg.svg';
import BottomBlob from '../../assets/ecosys_bottom_blob.svg';
import TopBlob from '../../assets/ecosys_top_blob.svg';
import { VerticalCarousel } from './VerticalCarousel';

export function Ecosystem() {
    return (
        <motion.div className="relative aspect-[3/2] bg-white">
            <motion.div className="absolute z-0 w-full bg-white">
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
                <motion.img
                    className="absolute right-0 -bottom-10 z-0"
                    src={BottomBlob}
                    animate={{ y: [0, 10, 0] }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            </motion.div>

            <motion.div className="relative z-10 flex aspect-[3/2] w-full items-center px-24 sm:px-36 md:px-48 lg:px-60">
                <motion.div className="flex w-1/2 justify-center">
                    <VerticalCarousel />
                </motion.div>
                <motion.div className="w-1/2">
                    <motion.h1
                        id="product"
                        className="text-6xl font-bold tracking-wide"
                        style={{ fontFamily: 'Fredoka' }}
                    >
                        One ecosystem.
                        <br />
                        Endless way to build!
                    </motion.h1>
                    <motion.p className="mt-5 max-w-[560px] text-lg text-white">
                        We combined{' '}
                        <span
                            className="font-bold"
                            style={{ color: '#F4B860' }}
                        >
                            curriculum, software, and hardware
                        </span>{' '}
                        into one seamless system — making robotics education
                        easy, accessible, and replicable for everyone.
                    </motion.p>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
