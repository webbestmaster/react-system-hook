# React System Hook

[![GitHub license](https://img.shields.io/npm/l/react-system-hook)](https://github.com/webbestmaster/react-system-hook/blob/master/license)
[![npm version](https://img.shields.io/npm/v/react-system-hook.svg?style=flat)](https://www.npmjs.com/package/react-system-hook)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-system-hook)
<!-- [![GitHub stars](https://img.shields.io/github/stars/webbestmaster/react-system-hook?style=social&maxAge=2592000)](https://github.com/webbestmaster/react-system-hook/) -->

Several hooks\helpers to work with device's screen.

## Install

```bash
npm i react-system-hook
```

## Usage
```typescript jsx
import {
    useSystem,
    useScreenHeight,
    useScreenWidth,
    useScreenSize,
    useDocumentVisibility,
} from 'react-system-hook';

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
```
