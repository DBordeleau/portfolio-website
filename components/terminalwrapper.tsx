"use client";

import { useState, useEffect, useRef } from "react";
import { useKonamiCode } from "@/lib/hooks";
import Terminal from "./terminal";

export default function KonamiTerminalWrapper() {
    const { konamiActivated, resetKonamiCode } = useKonamiCode();
    const [showTerminal, setShowTerminal] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        audioRef.current = new Audio('/secret_jingle.mp3');
        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);

    useEffect(() => {
        if (konamiActivated) {
            setShowTerminal(true);
            resetKonamiCode();

            if (audioRef.current) {
                audioRef.current.currentTime = 0;

                audioRef.current.play().catch(error => {
                    console.log("Audio playback failed:", error);
                });
            }
        }
    }, [konamiActivated, resetKonamiCode]);

    return (
        <Terminal
            isVisible={showTerminal}
            onCloseAction={() => setShowTerminal(false)}
        />
    );
}