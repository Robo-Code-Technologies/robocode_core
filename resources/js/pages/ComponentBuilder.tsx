import { useEffect, useRef, useState } from 'react';

import { DocumentHead } from '../components/rcc/DocumentHead';

export default function ComponentBuilder() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const leftEyeRef = useRef<HTMLDivElement>(null);
    const rightEyeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const calculateEyePosition = (eyeRef: React.RefObject<HTMLDivElement>) => {
        if (!eyeRef.current) return { x: 0, y: 0 };

        const eyeBox = eyeRef.current.getBoundingClientRect();
        const eyeCenterX = eyeBox.left + eyeBox.width / 2;
        const eyeCenterY = eyeBox.top + eyeBox.height / 2;

        const angle = Math.atan2(mousePos.y - eyeCenterY, mousePos.x - eyeCenterX);
        const distance = Math.min(
            eyeBox.width / 4, // Max distance the pupil can move (25% of box size)
            Math.hypot(mousePos.x - eyeCenterX, mousePos.y - eyeCenterY) / 10
        );

        return {
            x: Math.cos(angle) * distance,
            y: Math.sin(angle) * distance,
        };
    };

    const leftEyePos = calculateEyePosition(leftEyeRef);
    const rightEyePos = calculateEyePosition(rightEyeRef);

    return (
        <>
            <DocumentHead />
            <div
                className="min-h-screen w-full"
                style={{ backgroundColor: '#1e3a5f' }}
            >
                <div className="container mx-auto px-4 py-16">
                    <h1 className="mb-8 text-center text-4xl font-bold text-white">
                        Component Builder
                    </h1>

                    {/* Your component will go here */}
                    <div className="flex items-center justify-center rounded-lg bg-white/10 p-8">
                        <div className="relative max-w-md">
                            <img
                                src="/mascot.png"
                                alt="Mascot"
                                className="w-full rounded-lg"
                            />

                            {/* Left Eye */}
                            <div
                                ref={leftEyeRef}
                                className="absolute flex items-center justify-center"
                                style={{
                                    width: '10%',
                                    aspectRatio: '1',
                                    top: '27%',
                                    left: '40%',
                                }}
                            >
                                <div
                                    className="w-1/2 h-1/2 rounded-full bg-white transition-transform duration-100"
                                    style={{
                                        transform: `translate(${leftEyePos.x}px, ${leftEyePos.y}px)`,
                                    }}
                                />
                            </div>

                            {/* Right Eye */}
                            <div
                                ref={rightEyeRef}
                                className="absolute flex items-center justify-center"
                                style={{
                                    width: '10%',
                                    aspectRatio: '1',
                                    top: '27%',
                                    right: '38%',
                                }}
                            >
                                <div
                                    className="w-1/2 h-1/2 rounded-full bg-white transition-transform duration-100"
                                    style={{
                                        transform: `translate(${rightEyePos.x}px, ${rightEyePos.y}px)`,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
