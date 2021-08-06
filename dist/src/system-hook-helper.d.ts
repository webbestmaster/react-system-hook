import { RectangleSizeType, SystemScreenDataType } from './system-hook-type';
export declare function getScreenSize(): RectangleSizeType;
export declare function getDevicePixelRatio(): number;
export declare function getScreenState(width: number, height: number): SystemScreenDataType;
