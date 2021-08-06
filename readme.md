# react-system-hook

Several hooks\helper to work with device's screen.

## How to use
```typescript jsx
import {useSystem, useScreenHeight, useScreenWidth, useScreenSize} from 'react-system-hook';

export function ExampleComponent(): JSX.Element {
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

    return <div />;
}
```
