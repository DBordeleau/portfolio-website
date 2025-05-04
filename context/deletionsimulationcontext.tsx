"use client";

import React, { createContext, useContext, useState } from 'react';

type DeletionEffectContextType = {
    isDeletionActive: boolean;
    setDeletionActive: React.Dispatch<React.SetStateAction<boolean>>;
};

const DeletionEffectContext = createContext<DeletionEffectContextType | null>(null);

export function DeletionEffectProvider({ children }: { children: React.ReactNode }) {
    const [isDeletionActive, setDeletionActive] = useState(false);

    return (
        <DeletionEffectContext.Provider value={{ isDeletionActive, setDeletionActive }}>
            {children}
        </DeletionEffectContext.Provider>
    );
}

export function useDeletionEffect() {
    const context = useContext(DeletionEffectContext);

    if (context === null) {
        throw new Error("useDeletionEffect must be used within a DeletionEffectProvider");
    }

    return context;
}