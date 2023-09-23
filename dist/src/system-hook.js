/* global window */
import { useCallback, useEffect, useMemo, useState } from "react";
import { debounce } from "./util/function";
import { getScreenSize, getScreenState } from "./system-hook-helper";
export function useSystem() {
    const isBrowser = typeof window !== "undefined";
    const { width: defaultWidth, height: defaultHeight } = getScreenSize();
    const { devicePixelRatio: defaultDevicePixelRatio, isDesktop: defaultIsDesktop, isLandscape: defaultIsLandscape, isMobile: defaultIsMobile, isPortrait: defaultIsPortrait, isTablet: defaultIsTablet, name: defaultName, } = getScreenState(defaultWidth, defaultHeight);
    const [devicePixelRatio, setDevicePixelRatio] = useState(defaultDevicePixelRatio);
    const [isDesktop, setIsDesktop] = useState(defaultIsDesktop);
    const [isLandscape, setIsLandscape] = useState(defaultIsLandscape);
    const [isMobile, setIsMobile] = useState(defaultIsMobile);
    const [isPortrait, setIsPortrait] = useState(defaultIsPortrait);
    const [isTablet, setIsTablet] = useState(defaultIsTablet);
    const [name, setName] = useState(defaultName);
    const handleResize = useCallback(() => {
        const { width: updatedWidth, height: updatedHeight } = getScreenSize();
        const { devicePixelRatio: updatedDevicePixelRatio, isDesktop: updatedIsDesktop, isLandscape: updatedIsLandscape, isMobile: updatedIsMobile, isPortrait: updatedIsPortrait, isTablet: updatedIsTablet, name: updatedName, } = getScreenState(updatedWidth, updatedHeight);
        setDevicePixelRatio(updatedDevicePixelRatio);
        setIsDesktop(updatedIsDesktop);
        setIsLandscape(updatedIsLandscape);
        setIsMobile(updatedIsMobile);
        setIsPortrait(updatedIsPortrait);
        setIsTablet(updatedIsTablet);
        setName(updatedName);
    }, []);
    useEffect(() => {
        const handleResizeDebounced = debounce(handleResize, 150);
        window.addEventListener("resize", handleResizeDebounced, { capture: false, passive: true });
        return () => {
            window.removeEventListener("resize", handleResizeDebounced, { capture: false });
        };
    }, [handleResize]);
    const screenInfo = useMemo(() => {
        return {
            devicePixelRatio,
            isDesktop,
            isLandscape,
            isMobile,
            isPortrait,
            isTablet,
            name,
        };
    }, [devicePixelRatio, isDesktop, isLandscape, isMobile, isPortrait, isTablet, name]);
    return useMemo(() => {
        return { isBrowser, screenInfo };
    }, [isBrowser, screenInfo]);
}
//# sourceMappingURL=system-hook.js.map