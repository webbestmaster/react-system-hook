import {RectangleSizeType, ScreenWidthNameEnum} from "./system-hook-type";

export const screenMinWidth: Record<ScreenWidthNameEnum, number> = {
    [ScreenWidthNameEnum.desktop]: 1024,
    [ScreenWidthNameEnum.mobile]: 320,
    [ScreenWidthNameEnum.tablet]: 768,
};

export const defaultScreenSize: RectangleSizeType = {
    height: screenMinWidth.tablet,
    width: screenMinWidth.desktop,
};
