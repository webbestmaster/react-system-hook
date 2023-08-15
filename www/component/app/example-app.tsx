/* eslint-disable multiline-comment-style, capitalized-comments, line-comment-position, multiline-comment-style */
/* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars */

import {
    useSystem,
    useScreenHeight,
    useScreenWidth,
    useScreenSize,
    useDocumentVisibility,
    ScreenWidthNameEnum,
    screenMinWidth, // object: Record<ScreenWidthNameEnum, number>
    getScreenName, // (screenWidth: number) => ScreenWidthNameEnum
} from '../../library/library';

export function ExampleApp(): JSX.Element {
    const {
        screenInfo,
        isBrowser, // true if running in browser, false for SSR
    } = useSystem();

    const {
        devicePixelRatio, // number, default: 2, usually is 2 for smartphones
        isLandscape, // true if width > height
        isMobile, // screen width < 768
        isPortrait, // opposite for isLandscape
        name, // ScreenWidthNameEnum, relative from screen width: 'desktop', 'mobile' or 'tablet'
        isTablet, // screen width < 980 and >= 768
        isDesktop, // screen width >= 980
    } = screenInfo;

    const {
        height, // number, default: 768
        width, // number, default: 980
    } = useScreenSize();

    const screenWidth = useScreenWidth(); // number, default: 980
    const screenHeight = useScreenHeight(); // number, default: 768

    const isDocumentVisible = useDocumentVisibility(); // true or false

    return (
        <div>
            <pre>screenInfo = {JSON.stringify(screenInfo, null, 4)}</pre>
            <pre>
                useScreenSize = width: {height}, height: {width}
            </pre>
            <pre>useScreenWidth = width: {screenWidth}</pre>
            <pre>useScreenHeight = height: {screenHeight}</pre>
            <pre>useDocumentVisibility, is document visible: {isDocumentVisible ? 'yes' : 'no'}</pre>
        </div>
    );
}
