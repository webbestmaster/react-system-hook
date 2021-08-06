export declare enum ScreenWidthNameEnum {
    'desktop' = "desktop",
    'mobile' = "mobile",
    'tablet' = "tablet"
}
export declare type RectangleSizeType = Readonly<{
    height: number;
    width: number;
}>;
export declare type SystemScreenDataType = Readonly<{
    devicePixelRatio: number;
    isDesktop: boolean;
    isLandscape: boolean;
    isMobile: boolean;
    isPortrait: boolean;
    isTablet: boolean;
    name: ScreenWidthNameEnum;
}>;
export declare type SystemHookType = Readonly<{
    isBrowser: boolean;
    screenInfo: SystemScreenDataType;
}>;
