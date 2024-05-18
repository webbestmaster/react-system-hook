/* eslint-disable capitalized-comments */
/* global window, document */
import { ScreenWidthNameEnum } from "./system-hook-type";
import { defaultScreenSize, screenMinWidth } from "./system-hook-const";
export function getScreenName(screenWidth) {
    if (screenWidth >= screenMinWidth[ScreenWidthNameEnum.desktop]) {
        return ScreenWidthNameEnum.desktop;
    }
    if (screenWidth >= screenMinWidth[ScreenWidthNameEnum.tablet]) {
        return ScreenWidthNameEnum.tablet;
    }
    return ScreenWidthNameEnum.mobile;
}
export function getScreenSize() {
    if (typeof document === "undefined") {
        return defaultScreenSize;
    }
    const { documentElement } = document;
    const { clientWidth: width, clientHeight: height } = documentElement;
    return { height, width };
}
export function getDevicePixelRatio() {
    const defaultDevicePixelRatio = 2;
    if (typeof window === "undefined") {
        return defaultDevicePixelRatio;
    }
    const { devicePixelRatio } = window;
    if (devicePixelRatio <= defaultDevicePixelRatio) {
        return defaultDevicePixelRatio;
    }
    return devicePixelRatio;
}
export function getScreenState(width, height) {
    const isLandscape = width > height; // use >, do not use >=, if width === height it is portrait
    const screenName = getScreenName(width);
    return {
        devicePixelRatio: getDevicePixelRatio(),
        isDesktop: screenName === ScreenWidthNameEnum.desktop,
        isLandscape,
        isMobile: screenName === ScreenWidthNameEnum.mobile,
        isPortrait: !isLandscape,
        isTablet: screenName === ScreenWidthNameEnum.tablet,
        name: screenName,
    };
}
/*
export function getIsIOS(): boolean {
    if (typeof navigator === 'undefined') {
        return false;
    }

    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
}

export function getIsAndroid(): boolean {
    if (typeof navigator === 'undefined') {
        return false;
    }

    return /(android)/i.test(navigator.userAgent);
}
*/
//# sourceMappingURL=system-hook-helper.js.map