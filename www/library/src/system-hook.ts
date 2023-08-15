/* global window */

import {useCallback, useEffect, useMemo, useState} from 'react';

import {debounce} from './util/function';

import {ScreenWidthNameEnum, SystemHookType, SystemScreenDataType} from './system-hook-type';
import {getScreenSize, getScreenState} from './system-hook-helper';

export function useSystem(): SystemHookType {
    const isBrowser = typeof window !== 'undefined';

    const {width: defaultWidth, height: defaultHeight} = getScreenSize();

    const {
        devicePixelRatio: defaultDevicePixelRatio,
        isDesktop: defaultIsDesktop,
        isLandscape: defaultIsLandscape,
        isMobile: defaultIsMobile,
        isPortrait: defaultIsPortrait,
        isTablet: defaultIsTablet,
        name: defaultName,
    } = getScreenState(defaultWidth, defaultHeight);

    const [devicePixelRatio, setDevicePixelRatio] = useState<number>(defaultDevicePixelRatio);
    const [isDesktop, setIsDesktop] = useState<boolean>(defaultIsDesktop);
    const [isLandscape, setIsLandscape] = useState<boolean>(defaultIsLandscape);
    const [isMobile, setIsMobile] = useState<boolean>(defaultIsMobile);
    const [isPortrait, setIsPortrait] = useState<boolean>(defaultIsPortrait);
    const [isTablet, setIsTablet] = useState<boolean>(defaultIsTablet);
    const [name, setName] = useState<ScreenWidthNameEnum>(defaultName);

    const handleResize = useCallback(() => {
        const {width: updatedWidth, height: updatedHeight} = getScreenSize();

        const {
            devicePixelRatio: updatedDevicePixelRatio,
            isDesktop: updatedIsDesktop,
            isLandscape: updatedIsLandscape,
            isMobile: updatedIsMobile,
            isPortrait: updatedIsPortrait,
            isTablet: updatedIsTablet,
            name: updatedName,
        } = getScreenState(updatedWidth, updatedHeight);

        setDevicePixelRatio(updatedDevicePixelRatio);
        setIsDesktop(updatedIsDesktop);
        setIsLandscape(updatedIsLandscape);
        setIsMobile(updatedIsMobile);
        setIsPortrait(updatedIsPortrait);
        setIsTablet(updatedIsTablet);
        setName(updatedName);
    }, []);

    useEffect(() => {
        const handleResizeDebounced = debounce<[]>(handleResize, 150);

        window.addEventListener('resize', handleResizeDebounced, {capture: false, passive: true});

        return () => {
            window.removeEventListener('resize', handleResizeDebounced, {capture: false});
        };
    }, [handleResize]);

    const screenInfo: SystemScreenDataType = useMemo((): SystemScreenDataType => {
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

    return useMemo((): SystemHookType => {
        return {isBrowser, screenInfo};
    }, [isBrowser, screenInfo]);
}
