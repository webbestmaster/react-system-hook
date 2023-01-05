# React System Hook

[![GitHub license](https://img.shields.io/npm/l/react-system-hook)](https://github.com/webbestmaster/react-system-hook/blob/master/license)
[![codecov](https://codecov.io/gh/webbestmaster/react-system-hook/branch/master/graph/badge.svg)](https://codecov.io/gh/webbestmaster/react-system-hook)
[![npm version](https://img.shields.io/npm/v/react-system-hook.svg)](https://www.npmjs.com/package/react-system-hook)
[![Known Vulnerabilities](https://snyk.io/test/github/webbestmaster/react-system-hook/badge.svg)](https://snyk.io/test/github/webbestmaster/react-system-hook)
[![Dependency count](https://badgen.net/bundlephobia/dependency-count/react-system-hook)](https://libraries.io/npm/react-system-hook)
[![Libraries.io dependency status for GitHub repo](https://img.shields.io/librariesio/github/webbestmaster/react-system-hook)](https://libraries.io/npm/react-system-hook)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-system-hook)](https://bundlephobia.com/package/react-system-hook)
[![nodejs version](https://img.shields.io/node/v/react-system-hook)](https://nodejs.org/en/docs)
[![Github CI](https://github.com/webbestmaster/react-system-hook/actions/workflows/github-ci.yml/badge.svg)](https://github.com/webbestmaster/react-system-hook/actions/workflows/github-ci.yml)
[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/webbestmaster/react-system-hook/github-ci.yml)](https://github.com/webbestmaster/react-system-hook/actions/workflows/github-ci.yml)
[![Type definitions](https://img.shields.io/npm/types/react-system-hook)](https://www.typescriptlang.org)
[![Website](https://img.shields.io/website?url=https://github.com/webbestmaster/react-system-hook)](https://github.com/webbestmaster/react-system-hook)
[![CodeFactor](https://www.codefactor.io/repository/github/webbestmaster/react-system-hook/badge)](https://www.codefactor.io/repository/github/webbestmaster/react-system-hook)
[![Package Quality](https://packagequality.com/shield/react-system-hook.svg)](https://packagequality.com/#?package=react-system-hook)
[![GitHub stars](https://img.shields.io/github/stars/webbestmaster/react-system-hook?style=social)](https://github.com/webbestmaster/react-system-hook)


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
    ScreenWidthNameEnum,
    screenMinWidth, // object: Record<ScreenWidthNameEnum, number>
    getScreenName, // (screenWidth: number) => ScreenWidthNameEnum
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
        isTablet, // screen width < 1024 and width >= 768
        isDesktop, // screen width >= 1024
    } = screenInfo;

    const {
        height, // number, default: 768
        width, // number, default: 1024
    } = useScreenSize();

    const screenWidth = useScreenWidth(); // number, default: 1024
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

## License

See [license](license).
