import { useActiveSectionContext } from "@/context/active-section-context";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

type KeySequence = string[];

export function useKonamiCode() {
  const [konamiActivated, setKonamiActivated] = useState(false);

  useEffect(() => {
    // The Konami Code sequence
    const konamiCode: KeySequence = [
      'ArrowUp',
      'ArrowUp',
      'ArrowDown',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
      'ArrowLeft',
      'ArrowRight',
      'b',
      'a'
    ];

    let keySequence: KeySequence = [];

    const keyHandler = (event: KeyboardEvent) => {
      // Get the key pressed
      const key = event.key;

      // Add the key to the sequence
      keySequence.push(key);

      // Only keep the last N keys where N is the length of the Konami code
      if (keySequence.length > konamiCode.length) {
        keySequence = keySequence.slice(-konamiCode.length);
      }

      // Check if the sequence matches the Konami code
      const isKonamiCode = JSON.stringify(keySequence) === JSON.stringify(konamiCode);

      if (isKonamiCode) {
        setKonamiActivated(true);
      }
    };

    window.addEventListener('keydown', keyHandler);

    return () => {
      window.removeEventListener('keydown', keyHandler);
    };
  }, []);

  const resetKonamiCode = () => {
    setKonamiActivated(false);
  };

  return { konamiActivated, resetKonamiCode };
}

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({ //set as active section when threshold% of the section is in the viewport if we haven't clicked a nav item on the header recently
    threshold,
  });
  const { setActiveSection, lastClickTime } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - lastClickTime > 1000) { //If we have clicked a nav item in the header in the last second dont set active section -- this prevents the animation from bouncing around when clicking across several sections
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, lastClickTime]);

  return {
    ref,
  }
}