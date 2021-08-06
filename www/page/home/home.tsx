/* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars */

/* global setTimeout */

import {lazy, Suspense, useEffect, useState} from 'react';

import {Locale, useLocale} from '../../provider/locale/locale-context';
import {Spinner} from '../../layout/spinner/spinner';
import {ErrorData} from '../../layout/error-data/error-data';
import {useSystem, useScreenHeight, useScreenWidth, useScreenSize} from '../../library/library';
import {NavigationLink} from '../../hook/url-hook/navigation-link';
import {appRoute} from '../../component/app/app-route';
import {LocaleNameEnum} from '../../provider/locale/locale-context-type';
import {useFormat} from '../../hook/format-hook/format-hook';
import {getTestNodeData, getTestNodeId} from '../../util/auto-test';

import pngImageSrc from './image/marker-icon-2x.png';
import svgImageSrc, {ReactComponent as SvgAsReactComponent} from './image/questions-with-an-official-answer.svg';
import homeStyle from './home.scss';

console.log(ErrorData);

const LoadMeAsyncLazy = lazy(
    () =>
        import(
            /* webpackChunkName: 'load-me-async-lazy' */
            '../../component/load-me-async-lazy/load-me-async-lazy'
        )
);

export function Home(): JSX.Element {
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
