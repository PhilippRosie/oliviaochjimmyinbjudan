'use client';

import {motion} from 'framer-motion';
import {ReactNode} from 'react';

interface PageTurnTransitionProps {
    children: ReactNode;
    previousPage?: ReactNode;
}

export default function PageTurnTransition({children, previousPage}: PageTurnTransitionProps) {
    return (
        <div style={{ position: 'relative', minHeight: '100vh' }}>
            {/* Statisk container för nästa sida */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                minHeight: '100vh',
                zIndex: 1
            }}>
                {children}
            </div>

            {/* Animerad container för nuvarande sida */}
            <motion.div
                initial={{ 
                    rotateY: 0,
                    rotateZ: 0,
                    rotateX: 0,
                    skewY: 0,
                    perspective: 2500,
                    scale: 1,
                    x: 0,
                    y: 0
                }}
                animate={{ 
                    rotateY: 85,
                    rotateZ: -80,
                    rotateX: 60,
                    skewY: -45,
                    perspective: 2500,
                    scale: 0.85,
                    x: -300,
                    y: 0
                }}
                exit={{ 
                    rotateY: 0,
                    rotateZ: 0,
                    rotateX: 0,
                    skewY: 0,
                    perspective: 2500,
                    scale: 1,
                    x: 0,
                    y: 0
                }}
                transition={{ 
                    duration: 1.8,
                    ease: [0.4, 0, 0.2, 1],
                    type: "spring",
                    stiffness: 30,
                    damping: 15
                }}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    minHeight: '100vh',
                    transformStyle: "preserve-3d",
                    transformOrigin: "bottom left",
                    backgroundColor: "#fff",
                    boxShadow: "3px 3px 35px rgba(0,0,0,0.4)",
                    zIndex: 2,
                    borderRadius: "0 0 15px 0"
                }}
            >
                {previousPage}
            </motion.div>
        </div>
    )
}