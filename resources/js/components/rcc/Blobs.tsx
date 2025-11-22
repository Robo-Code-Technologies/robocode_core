import { motion } from 'framer-motion';

import Blob1 from '../../assets/blob_1.svg';
import Blob3 from '../../assets/blob_3.svg';
import Blob4 from '../../assets/blob_4.svg';
import LeftBackgroundBlob from '../../assets/left_blob_bg.svg';
import LeftForegroundBlob from '../../assets/left_blog_fg.svg';
import RightBackgroundBlob from '../../assets/right_blob_bg.svg';
import RightForegroundBlob from '../../assets/right_blob_fg.svg';

const floatingAnimation = {
    repeat: Infinity,
    repeatType: 'mirror' as const,
    ease: 'easeInOut' as const
};

const rotatingAnimation = {
    repeat: Infinity,
    ease: 'easeInOut' as const
};

export function Blobs() {
    return (
        <>
            {/* Large Background Blobs - Hidden on mobile, visible from md: up */}
            {/* Constrained to stay within 12% margin area */}
            <motion.img
                src={LeftForegroundBlob}
                alt="RoboCode Foreground Blob"
                className="pointer-events-none absolute left-0 z-1 hidden h-full max-w-[12%] select-none md:block"
                animate={{
                    y: [0, -10, 0],
                    x: [0, -15, 0],
                }}
                transition={{
                    duration: 5,
                    ...floatingAnimation
                }}
            />
            <motion.img
                src={LeftBackgroundBlob}
                alt="RoboCode Background Blob"
                className="pointer-events-none absolute left-0 z-0 hidden h-full max-w-[12%] select-none md:block"
                animate={{
                    y: [0, -15, 0],
                    x: [0, -10, 0],
                }}
                transition={{
                    duration: 6,
                    delay: 0.5,
                    ...floatingAnimation
                }}
            />
            <motion.img
                src={RightBackgroundBlob}
                alt="RoboCode Background Blob"
                className="pointer-events-none absolute right-0 z-0 hidden h-full max-w-[12%] select-none md:block"
                animate={{
                    y: [0, -12, 0],
                    x: [0, 10, 0],
                }}
                transition={{
                    duration: 7,
                    delay: 0.2,
                    ...floatingAnimation
                }}
            />
            <motion.img
                src={RightForegroundBlob}
                alt="RoboCode Foreground Blob"
                className="pointer-events-none absolute right-0 z-1 hidden h-full max-w-[12%] select-none md:block"
                animate={{
                    y: [0, 18, 0],
                    x: [0, 15, 0],
                }}
                transition={{
                    duration: 4.5,
                    delay: 0.8,
                    ...floatingAnimation
                }}
            />

            {/* Small Decorative Blobs - Responsive positioning and sizing */}
            <motion.img
                src={Blob4}
                className="absolute bottom-12 left-4 w-6 sm:bottom-16 sm:left-12 sm:w-10 md:left-24 md:w-12 lg:bottom-16 lg:left-96 lg:w-16"
                animate={{
                    rotate: [0, 0, 0, 0, 0, 0, 0, 0, 360, 180],
                    x: [0, 3, -2, 4, 0, 2, -1, 3, -2, 0],
                    y: [0, -2, 3, -1, 0, 2, -3, 1, -1, 0],
                }}
                transition={{
                    duration: 10,
                    ...rotatingAnimation
                }}
            />
            <motion.img
                src={Blob3}
                className="absolute top-24 right-0 max-w-[12%] sm:top-36 md:top-48 lg:top-64"
                style={{ 
                    width: 'clamp(1.25rem, 0.8vw, 3rem)',
                    marginRight: '2%'
                }}
                animate={{
                    rotate: [0, 0, 0, 0, 0, 0, 0, 180, 360, 180],
                    x: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    y: [0, 4, -3, 2, 0, -2, 3, -2, 1, 0],
                }}
                transition={{
                    duration: 10,
                    delay: 2.5,
                    ...rotatingAnimation
                }}
            />
            <motion.img
                src={Blob1}
                className="absolute bottom-20 right-4 w-5 sm:bottom-24 sm:right-10 sm:w-8 md:bottom-36 md:right-20 md:w-10 lg:bottom-48 lg:right-48 lg:w-12"
                animate={{
                    rotate: [0, 0, 0, 0, 0, 0, 0, 360, 180, 720],
                    x: [0, -5, 3, -2, 0, 3, -4, 2, -2, 0],
                    y: [0, 3, -4, 2, 0, -3, 4, -1, 2, 0],
                }}
                transition={{
                    duration: 10,
                    delay: 7.5,
                    ...rotatingAnimation
                }}
            />
        </>
    );
}