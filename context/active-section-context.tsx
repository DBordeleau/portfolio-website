"use client";

import React, { useContext, useState } from 'react'
import type { SectionName } from '@/lib/types';

type ActiveSectionContextProviderProps = {
    children: React.ReactNode;
}

type ActiveSectionContextType = { //this is what is accessed when consuming state in other components
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    lastClickTime: number;
    setLastClickTime: React.Dispatch<React.SetStateAction<number>>;
}

export const ActiveSectionContext = React.createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({children, }: 
    ActiveSectionContextProviderProps) {
    const [activeSection, setActiveSection] = useState<SectionName>('Home');
    const [lastClickTime, setLastClickTime] = useState(0);
    return (
    <ActiveSectionContext.Provider value={{
        activeSection,
        setActiveSection,
        lastClickTime,
        setLastClickTime,
    }}
    >
        {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
    const contextObj = useContext(ActiveSectionContext);

    if (contextObj === null) { //this hopefully will never happen
        throw new Error("useActiveSectionContext must be within an ActiveSectionContextProvider");
    }
    return contextObj;
}