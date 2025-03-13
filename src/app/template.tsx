'use client';

import {usePathname} from 'next/navigation';
import PageTurnTransition from './components/Pagetransition/PageTurnTransition';
import {AnimatePresence} from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

export default function Template({children} : {children: React.ReactNode}) {
    const pathname = usePathname();
    const [previousChildren, setPreviousChildren] = useState<React.ReactNode>(null);
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        setPreviousChildren(children);
    }, [pathname, children]);

    return (
        <div style={{ position: 'relative', minHeight: '100vh' }}>
            <AnimatePresence mode="wait">
                <PageTurnTransition 
                    key={pathname} 
                    previousPage={previousChildren}
                >
                    {children}
                </PageTurnTransition>
            </AnimatePresence>
        </div>
    )
}