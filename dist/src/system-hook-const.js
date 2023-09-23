import { ScreenWidthNameEnum } from "./system-hook-type";
export const screenMinWidth = {
    [ScreenWidthNameEnum.desktop]: 1024,
    [ScreenWidthNameEnum.mobile]: 320,
    [ScreenWidthNameEnum.tablet]: 768,
};
export const defaultScreenSize = {
    height: screenMinWidth.tablet,
    width: screenMinWidth.desktop,
};
//# sourceMappingURL=system-hook-const.js.map