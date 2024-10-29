import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

type useSectionInViewProps = {
    sectionName: SectionName;
};

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
    const {ref, inView} = useInView({ //set as active section when threshold% of the section is in the viewport if we haven't clicked a nav item on the header recently
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